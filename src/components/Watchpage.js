import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import {closeMenu } from '../utils/appSlice';
import { Link ,useSearchParams } from 'react-router-dom';
import {GOOGLE_API_KEY, YOUTUBE_VIDEOS_API} from '../utils/constants'
import VideoDatas from './VideoDatas';
import LiveChat from './LiveChat';
import '../utils/watchpage.css';


const Watchpage = () => {

    const [searchParams] = useSearchParams();
    const [videoData,setVideoData] = useState([]);
    const [relatedVideos,setRelatedVideos] = useState([]);
    const videoId = searchParams.get('v');

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(closeMenu());
        fetchdata();
        fetchrelativedata();
    },[]);


    const fetchdata = async () => {
        const data = await fetch(`https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&id=${videoId}&key=${GOOGLE_API_KEY}`);
        const json = await data.json();
        const videoDetails = json.items[0];
        setVideoData(videoDetails);
    }

    const fetchrelativedata = async ()=> {
      const data = await fetch(YOUTUBE_VIDEOS_API);
      const recVideoJson = await data.json();
      setRelatedVideos(recVideoJson.items);
    }


  return (
     <div className=' flex justify-between w-full watch'>
       <div className='px-5  py-2 flex flex-col w-4/6 watch-first'>
          <div className='watch-img'>
             <iframe className='rounded-xl w-full'  height="500" src={"https://www.youtube.com/embed/"+searchParams.get('v')}  title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        
          </div>
       <div className=''>
          <VideoDatas vdata={videoData} vId = {videoId}/>
       </div>
      </div>

      <div className='w-2/6 watch-second'>
      <div className='flex flex-col w-full'>
                    <div className='live  w-full '>
                        <LiveChat />
                    </div>
                    {relatedVideos?.slice(0,20)?.map(video =>
                        <Link key={video?.id} to={'/watch?v=' + video?.id} onClick={() => window.scroll(0,0)}>
                            <div className='px-3 m-2 mt-[20px] flex related-video'>
                                <img className='rounded-xl w-[168px] h-[94px] ' alt='thumbnail' src={video?.snippet?.thumbnails?.medium?.url} />
                                <ul className='flex flex-col justify-start ml-2 w-60'>
                                    <li className='r-title font-medium py-2 text-[14px] line-clamp-2 max-h-[50px] leading-5'>{video?.snippet?.title}</li>
                                    <li className='text-gray-500 text-[12px]'>{video?.snippet?.channelTitle}</li>
                                    <li className='text-gray-500 text-[12px]'>100 views  {(Math.abs(new Date(video?.snippet?.publishedAt) - new Date()) / (60 * 60 * 24 * 1000)).toFixed(1)} days ago</li>
                                </ul>
                            </div>
                        </Link>
                    )}
                </div>
      </div>
       
    </div>

  )
}

export default Watchpage;

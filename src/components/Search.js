import React,{useEffect, useState} from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { YOUTUBE_SEARCH_VIDEO_WITH_QUERY_API } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { openMenu } from '../utils/appSlice';
import '../utils/search.css';

const Search = () => {

  const [searchparams] = useSearchParams();
  const[videos,setVideos] = useState([]);

  let searchquery = searchparams.get('search_query');

  const dispatch = useDispatch();


  useEffect(()=>{
     dispatch(openMenu());
     getVideos();
  },[searchquery]);

  const getVideos = async ()=>{
        const res = await fetch(YOUTUBE_SEARCH_VIDEO_WITH_QUERY_API + searchquery);
        const json = await res.json();
        console.log(json?.items);
        setVideos(json?.items);
    }
  return (

         <div className='srch-h px-3 col-span-11 mt-10'>
            <div className='flex flex-col srch-sh px-3  items-center'>
                <div className='srch-head p-2 m-2'>
                    {videos?.map(video =>
                        <Link key={video?.id?.videoId || video?.etag} to={'/watch?v=' + video?.id?.videoId} >
                            <div className='px-3 m-6 flex srch'>
                                <img className='rounded-lg w-[400px] h-[210px] ' alt='thumbnail' src={video?.snippet?.thumbnails?.medium?.url} />
                                <ul className='flex flex-col justify-start ml-5 w-96'>
                                    <li className='s-title text-xl '>{video?.snippet?.title}</li>
                                    <li className='text-gray-500 text-[16px]'>{video?.snippet?.channelTitle}</li>
                                    <li className='text-gray-500 text-[16px]'>100 views  {(Math.abs(new Date(video?.snippet?.publishedAt) - new Date()) / (60 * 60 * 24 * 1000)).toFixed(1)} days ago</li>
                                    <li className='desc text-gray-500 mt-2 text-[15px]'>{video?.snippet?.description}</li>
                                </ul>
                            </div>
                        </Link>
                    )}
                </div>
            </div>
        </div>

  )
}

export default Search

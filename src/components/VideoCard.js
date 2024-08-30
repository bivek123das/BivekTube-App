import React from 'react';
import '../utils/videolist.css';

const VideoCard = ({videoInfo}) => {
    // console.log(videoInfo);

    const {snippet, statistics} = videoInfo;
    const {channelTitle, title, thumbnails} = snippet
  return (
    <div className='video-card p-2 m-2 w-72 shadow-lg rounded-xl box-border h-80'>
          <img className='rounded-xl ' alt="thumbnail" src={thumbnails.medium.url}/> 
          <ul>
             <li className='font-bold py-2'>{title}</li>
             <li>{channelTitle}</li>
             <li>{Math.floor(statistics.viewCount/100000)}k views</li>
          </ul>
    </div>
  )
}

export default VideoCard

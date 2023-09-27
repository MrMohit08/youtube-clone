import React, { useEffect, useState } from 'react'
import { YOUTUBE_VIDEO_LINK } from '../utils/constants'
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';
import { AdVideoCard } from './VideoCard';
const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEO_LINK);
    const json = await data?.json();
    setVideos(json?.items);
  };

  return (
    <div className='flex flex-wrap'>
     <AdVideoCard info={videos[0]}/>
    {videos?.map((video)=>(
      <Link id={video.id} to={"/watch?="+video.id}>
      <VideoCard info = {video} />
      </Link>
    ))}
    </div>
  )
}

export default VideoContainer
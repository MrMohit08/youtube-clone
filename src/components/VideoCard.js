import React from 'react'

const VideoCard = ({info}) => {
  console.log(info);
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;
  return (
    <div className='p-2 m-4 w-64 shadow-lg cursor-pointer'>
      <img className='rounded-lg' alt='thumbnail' src={thumbnails.high.url} />
      <ul>
        <li className='text-lg'>{title}</li>
        <li>{channelTitle}</li>
        <li>{statistics.viewCount} Views</li>
      </ul>
    </div>
  )
}

export default VideoCard;
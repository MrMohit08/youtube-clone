import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  if(!isMenuOpen) return null;
  return (
    <div className='p-5 shadow-lg w-48'>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>Shorts</li>
        <li>Subscriptions</li>
      </ul>
      <ul className='pt-5'>
        <li>Library</li>
        <li>History</li>
        <li>Your Videos</li>
        <li>Watch Later</li>
        <li>Liked Videos</li>
      </ul>
      <h1 className='font-bold pt-5'>Explore</h1>
      <ul>
        <li>Trending</li>
        <li>Shopping</li>
        <li>Music</li>
        <li>Movies & Shows</li>
        <li>Live</li>
        <li>Gaming</li>
        <li>News</li>
        <li>Sports</li>
        <li>Learning</li>
        <li>Fashion & Beauty</li>
      </ul>
    </div>
  )
}

export default Sidebar;
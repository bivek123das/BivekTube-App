import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import '../utils/sidebar.css';

const Sidebar = () => {

  const isMenuOpen = useSelector(store => store.app.isMenuOpen);


  // Early Return Pattern
  if(!isMenuOpen) return null ;


  return (
    <div className='sidebar z-20 w-[15%] md:w-[20%] shadow-xl px-4'>
          <div className='p-4 border-b-[1px] mb-1'>
               <ul>
                  <li><Link to="/">Home</Link></li>
                  <li>Shorts</li>
                  <li>Subscriptions</li>
               </ul>
          </div>
          <div className='p-4 border-b-[1px]  mb-1'>
              <h2 className='font-bold mb-2'>Subscriptions</h2>
               <ul>
                  <li>Music</li>
                  <li>Sports</li>
                  <li>Gaming</li>
                  <li>Movies</li>
               </ul>
          </div>
          <div className='p-4  border-b-[1px] mb-1'>
              <h2 className='font-bold mb-2'>Explore</h2>
               <ul>
                  <li>Trending</li>
                  <li>Shopping</li>
                  <li>Music</li>
                  <li>Movies</li>
                  <li>Live</li>
                  <li>Gaming</li>
                  <li>News</li>
                  <li>Sports</li>
                  <li>Courses</li>
                  <li>Fashion & Beauty</li>
                  <li>Podcasts</li>
               </ul>
          </div>
          <div className='p-4 border-b-[1px]  mb-1'>
              <h2 className='font-bold mb-2'>Subscriptions</h2>
               <ul>
                  <li>Music</li>
                  <li>Sports</li>
                  <li>Gaming</li>
                  <li>Movies</li>
               </ul>
          </div>
    </div>
  )
}

export default Sidebar

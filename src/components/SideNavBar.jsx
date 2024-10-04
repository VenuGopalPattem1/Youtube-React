import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector } from 'react-redux';

function SideNavBar() {
  const selector = useSelector((Store) => Store.nav.navTrigger);
  if (!selector) return null;

  return (
    <div className=' shadow' style={{ width: '150px', height: '100vh', backgroundColor: '#f8f9fa', top: 100, left: 0 }}>
      {/* Main Menu */}
      <div className='mb-4'>
        <ul className='list-unstyled text-center'>
          <li className='fw-bold fs-6 mb-3'>
            <a href='#' className='text-dark text-decoration-none d-block p-2 hover-effect'>Home</a>
          </li>
          <li className='fw-bold fs-6 mb-3'>
            <a href='#' className='text-dark text-decoration-none d-block p-2 hover-effect'>Shorts</a>
          </li>
          <li className='fw-bold fs-6 mb-3'>
            <a href='#' className='text-dark text-decoration-none d-block p-2 hover-effect'>Subscriptions</a>
          </li>
          <li className='fw-bold fs-6 mb-3'>
            <a href='#' className='text-dark text-decoration-none d-block p-2 hover-effect'>Premium</a>
          </li>
        </ul>
      </div>

      <hr />

      {/* Secondary Menu */}
      <div>
        <ul className='list-unstyled text-center'>
          <li className='fw-bold fs-6 mb-3'>
            <a href='#' className='text-dark text-decoration-none d-block p-2 hover-effect'>Your channel</a>
          </li>
          <li className='fw-bold fs-6 mb-3'>
            <a href='#' className='text-dark text-decoration-none d-block p-2 hover-effect'>History</a>
          </li>
          <li className='fw-bold fs-6 mb-3'>
            <a href='#' className='text-dark text-decoration-none d-block p-2 hover-effect'>Playlist</a>
          </li>
          <li className='fw-bold fs-6 mb-3'>
            <a href='#' className='text-dark text-decoration-none d-block p-2 hover-effect'>Your videos</a>
          </li>
          <li className='fw-bold fs-6 mb-3'>
            <a href='#' className='text-dark text-decoration-none d-block p-2 hover-effect'>Tour Courses</a>
          </li>
          <li className='fw-bold fs-6 mb-3'>
            <a href='#' className='text-dark text-decoration-none d-block p-2 hover-effect'>Watch later</a>
          </li>
          <li className='fw-bold fs-6 mb-3'>
            <a href='#' className='text-dark text-decoration-none d-block p-2 hover-effect'>Liked videos</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SideNavBar;

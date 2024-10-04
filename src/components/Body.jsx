import React from 'react'
import Header from './Header'
import SideNavBar from './SideNavBar'
import Content from './Content'
import VideoPlayer from './VideoPlayer'

function Body() {
  return (
    <div className=' container-fluid'>
      {/* <Header /> */}
      <div className=' mt-3 d-flex'>
      <SideNavBar />
      <Content />
      {/* <VideoPlayer /> */}
      </div>
      {/* <Content/> */}
      
    </div>
  )
}

export default Body
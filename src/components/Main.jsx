import React from 'react'
import Header from './Header'
import SideNavBar from './SideNavBar'
import Content from './Content'
import VideoPlayer from './VideoPlayer'
import CommentBox from './CommentBox'
import LiveChat from './LiveChat'

function Main() {
  return (
    <div className=' container-fluid'>  
       <div className='mt-3  d-flex '>
        <SideNavBar />
     <VideoPlayer />
      <LiveChat />
      </div>
      <div>
      <CommentBox />
      </div>
    </div>
  )
}

export default Main
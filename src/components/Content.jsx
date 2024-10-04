import React, { useEffect, useState } from 'react'
import { YOUTUBE_API } from './Constants'
import ContentButtons from './ContentButtons';
import VideosCard from './VideosCard';
import axios from 'axios';
import { Link, Route, Routes } from 'react-router-dom';
import VideoPlayer from './VideoPlayer';
import Body from './Body';
import ButtonsList from './ButtonsList';
import SideNavBar from './SideNavBar';

function Content() {
  const [yData,setYData] = useState([]);

  useEffect(() => {
    getVideos();
  }, [])

  // async function getData() {
  //   try {
  //     const response = await fetch(YOUTUBE_API);
  //     const data = await response.json();
  //     setYData(data.items); // Assuming setYData is a state setter function
  //   } catch (error) {
  //     console.error('Error fetching data:', error);
  //   }
  // }

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_API);
    const result = await data.json();

    setYData(result?.items);
  };
  
  
  return (
    
    
    <div className='container-fluid' >
     <ButtonsList/>

      {/* <Routes>
        <Route path='/' element={<Body />}></Route>
        <Route path='/watch/:id' element={<VideoPlayer />} />
      </Routes> */}
       {/* <div className=' mt-3 d-flex'>
      <SideNavBar />
      <VideoPlayer />
      </div> */}

      <div className="d-flex flex-wrap gap-3">
      {yData.map((res, index) => (
        <Link key={index} to={`watch/${res.id}`}>
          <VideosCard id={res.id} info={res} />
        </Link>
      ))}
    </div>
    <div>
   
    </div>

      {/* <div className="d-flex flex-wrap">
        <div>{yData && yData.length > 0 ? (
          yData.map((res,index) => (
            <VideosCard key={index} info={res} />
          ))
        ) : (
          <p>Loading...</p>
        )}</div>
      </div> */}
    </div>
  )
}

export default Content
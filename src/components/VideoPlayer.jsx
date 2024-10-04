import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { API_KEY } from './Constants';
import SideNavBar from './SideNavBar';
import { useDispatch } from 'react-redux';
import { stopeNav } from '../utils/navSlicer';

const VideoPlayer = () => {
  const param = useParams(); // Get the video ID from the URL
  const [videoData, setVideoData] = useState(null);
  const dispatch=useDispatch();
  // console.log(param.id);
  // console.log(videoData);

  function navFunction(){
    dispatch(stopeNav())
  }
  useEffect(() => {
    navFunction();
    fetchVideo();
  }, [param.id]);
  // console.log(videoData);
  
  const fetchVideo = async () => {
    const response = await axios.get(`https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&id=${param.id}&key=${API_KEY}
`);
    setVideoData(response.data.items[0]); // Set the video data
  };

  if (!videoData) return <div>Loading...</div>; // Loading state

  return (
    <div className=' container-fluid  '>
     
      <iframe
        className="container-fluid  "
        height="600"
        src={`https://www.youtube.com/embed/${param.id}?autoplay=1&mute=1`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
      <h4>{videoData.snippet.title}</h4>
    </div>
  );
};

export default VideoPlayer;

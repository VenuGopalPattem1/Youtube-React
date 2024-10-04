import React from 'react';

function VideosCard({ info }) {
const{snippet,statistics,contentDetails} = info
const{thumbnails,title} = snippet;

  return (
      <div className= ' container-fluid ms-2 shadow' style={{width:"320px"}}>
        <img src={thumbnails.medium.url} style={{cursor:"pointer"}} alt="Video" />
        <p className='p-2 fw-bold text-black'>{title}</p>
        <p>{contentDetails.id}</p>
      </div>
  );
}

export default VideosCard;

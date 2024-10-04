import React from 'react'

function Comment({ data }) {
  const { replies, img, name, msg } = data;
  return (
    <div className=' container-fluid'>
      <div className=' p-1 m-1 shadow-sm' style={{ height: '40px' }}>
        <img src={img} alt="user" className=' mt-2' style={{ height: '25px', cursor: 'pointer' }} />
        <h5 className=' d-inline me-3'>{name}</h5>
        <p className='d-inline fw-medium ms-5'>{msg}</p>
      </div>
    </div>
  )
}

export default Comment
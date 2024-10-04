import React from 'react'

function ContentButtons({name}) {
  return (
    <div className=' container-fluid' >
        <button className=' btn btn p-2 me-4 text-black fw-bold' style={{background:'#f5f5f5'}}>{name}</button>
    </div>
  )
}

export default ContentButtons
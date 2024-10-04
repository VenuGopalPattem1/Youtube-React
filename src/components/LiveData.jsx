import React from 'react'

function LiveData({info}) {
  return (
    <div className=' container-fluid'>
        <div>
            <h6 className=' d-inline'>{info.name}</h6>
            <p>{info.msg}</p>
        </div>
    </div>
  )
}

export default LiveData
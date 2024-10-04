import React, { useEffect, useState } from 'react'
import { getRandomInt, makeid } from '../utils/commentData';
import LiveData from './LiveData';
import { useDispatch, useSelector } from 'react-redux';
import { addChatData } from '../utils/chartSlice';

function LiveChat() {
  const[addMsg,setAddMsg] = useState("")
  const disaptch = useDispatch();
  const stateData = useSelector((store)=>store.chat.message)
  useEffect(()=>{
    const timer=setInterval(()=>{
      getData();
    },3000);
    return ()=> clearInterval(timer);
  },[disaptch])

  function getData(){
  const newMsg = {
      "id":getRandomInt(1,20),
      "name":'venu',
      "msg":makeid(20)
    }
  disaptch(addChatData(newMsg));
  }

console.log( stateData);

  

  return (
    <div className='container-fluid p-2 m-1 border-1 col-2 bg-secondary-subtle' style={{ height: '600px' }}>
      <h4>Live Chat</h4>

      {/* Chat Messages Area */}
      <div className='overflow-auto mb-2' style={{ height: '600px' }}>
        {
          stateData.map((res, index) => (
            <LiveData key={index} info={res} />
          ))
        }
      {/* Input and Submit Button at the Bottom */}
       
      </div>

      <div className='d-flex'>
        <form 
        onSubmit={(e)=>{
          e.preventDefault();
          const newMsg = {
            "id":getRandomInt(1,20),
            "name":'venu',
            "msg":addMsg
          }
        disaptch(addChatData(newMsg));
        }}
        >
          <input type="text" value={addMsg} onChange={(e)=>setAddMsg(e.target.value)} className='form-control me-2' />
        <input className=' btn btn-secondary' type="submit" />
        </form>
      </div>
    </div>

  )
}

export default LiveChat
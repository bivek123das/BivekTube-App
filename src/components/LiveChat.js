import React, { useEffect, useState } from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux'
import { addMessage } from '../utils/chatSlice';
import { generate, getrandommessage } from '../utils/helper';
import '../utils/watchpage.css';

const LiveChat = () => {

    const dispatch = useDispatch();

    const chatMessage = useSelector((store)=>store.chat.messages);
    const darkmode = useSelector((store)=>store.theme.darkMode);
    const [liveMessage,setLiveMessage] = useState('');


    useEffect(()=>{
        const i = setInterval(()=>{
            //  console.log('Api Polling');

            dispatch(addMessage({
                name: generate(),
                message : getrandommessage(20),
            }))
        },1500)

        return ()=> clearInterval(i);
    },[])
  return (

    <>
    <div className='w-full mt-2 p-2 h-[610px] border border-gray-500 rounded-xl bg-gray-100 overflow-y-scroll flex flex-col-reverse' style={{backgroundColor:darkmode?'#2a3541':'#ffffff', color: darkmode?'white':'black'}}>
          {
            chatMessage.map((c, i)=>{
                return  <ChatMessage key={i} name={c.name} message={c.message}/>
            })
          }
         
    </div>
    <form className='w-full rounded-xl p-2 border mt-1 border-black live-chat-form' onSubmit={
      (e)=> {
        e.preventDefault();
        console.log(liveMessage);
        dispatch(addMessage({
          name: "Bivek Das",
          message: liveMessage,
        })
      );
      setLiveMessage('')
    }}>
       <input style={{backgroundColor: darkmode ? '#2a3541':'#ffffff'}}  className='w-[23rem] outline-none px-2 border-b-2 border-gray-500' type="text" value={liveMessage} onChange={(e)=>{setLiveMessage(e.target.value)}}/> <button style={{color:darkmode?'black':'gray'}} className='rounded-lg bg-green-100 px-3 mx-2' >Send</button>
    </form>
    </>
  )
}

export default LiveChat;

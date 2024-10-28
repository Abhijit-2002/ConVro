import React from 'react'
import {useAuthContext} from '../../context/AuthContext.jsx'
import { extractTime } from "../../utils/extractTime";
import useConversation from "../../zustand/useConversation";



const MessageINOut = ({message}) => {
  const {authUser} =useAuthContext();
  const { selectedConversation } = useConversation();
	const fromMe = message.senderId === authUser._id;
	const formattedTime = extractTime(message.createdAt);
	const chatClassName = fromMe ? "chat-end" : "chat-start";
	const profilePic = fromMe ? authUser.profilepic : selectedConversation?.profilepic;
	const bubbleBgColor = fromMe ? "bg-blue-500" : "";


	const shakeClass = message.shouldShake ? "shake" : "";
  return (

    <div className={`chat ${chatClassName}`}>
        <div className='chat-image avatar'>
            <div className='w-10 rounded-full'>
                <img src={profilePic} alt="User avatar" />
            </div>
        </div>
        <div className={`chat-bubble tetx-white  ${bubbleBgColor} ${shakeClass} pb-2`}>{message.message}</div>
        <div className=' chat-footer opacity-50 text-xs flex gap-1 items-center '>{formattedTime}</div>
    </div>
   
    
  )
}

export default MessageINOut


// import React from 'react'

// const MessageINOut = () => {
//   return (

//     <div className='chat chat-end'>
//         <div className='chat-image avatar'>
//             <div className='w-10 rounded-full'>
//                 <img src="" alt="User avatar" />
//             </div>
//         </div>
//         <div className='chat-bubble tetx-white bg-blue-500'>Hi! Whats Up?</div>
//         <div className=' chat-footer opacity-50 text-xs flex gap-1 items-center '>12:42</div>
//     </div>
   
    
//   )
// }

// export default MessageINOut
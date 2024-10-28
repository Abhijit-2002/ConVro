import {useRef,useEffect} from "react";
import MessageINOut from "./MessageINOut.jsx";
import useGetMessage from "../../hooks/useGetMessage.js";
import MessageSkeleton from '../skeletons/MessageSkeleton.jsx'
import useListenMessages from "../../hooks/useListenMessages.js";

const Messages = () => {
  // const { messages, loading } = useGetMessage();
  // console.log(messages);
  const { messages, loading } = useGetMessage();
	useListenMessages();
	const lastMessageRef = useRef();

	useEffect(() => {
		setTimeout(() => {
			lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
		}, 100);
	}, [messages]);


  return (
    <div className="px-4 flex-1 overflow-auto">
      {!loading &&
        messages.length > 0 &&
        messages.map((message) => (
          <div key={message._id} ref={lastMessageRef}>
            <MessageINOut message={message} />
          </div>
        ))}{" "}
      {loading && [...Array(3)].map((_, idx) => <MessageSkeleton key={idx} />)}
      {!loading && messages.length === 0 && (
        <p className="text-center">Send a message to start the conversation</p>
      )}  
      {/* <MessageINOut /> 
      <MessageINOut />
      <MessageINOut /> */}
    </div>
  );
};

export default Messages;

// import React from 'react'
// import MessageINOut from './MessageINOut.jsx'
// const Messages = () => {
//   return (
//     <div className='px-4 flex-1 overflow-auto'>
//        <MessageINOut/>
//        <MessageINOut/>
//        <MessageINOut/>
//     </div>
//   )
// }

// export default Messages

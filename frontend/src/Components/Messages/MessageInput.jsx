import React, { useState } from "react";
import { BsSend } from "react-icons/bs";
import useSentMessage from "../../hooks/useSentMessage";

const MessageInput = () => {
  const [message, setMessage] = useState("");
  const { loading, SendMessage } = useSentMessage();

  const handleSubmit = async (e) => {
    e.preventDefault();
    //console.log('Form submitted')
    if (!message) return;
    await SendMessage(message);
    setMessage("");
  };
  return (
    <form action="" className="px-4 my-3" onSubmit={handleSubmit}>
      <div className="w-full relative">
        <input
          type="text"
          className=" border text-sm rounded-lg block w-full p-2.5 bg-gray-700 text-white"
          placeholder="Send a message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        <button
          type="submit"
          className=" absolute inset-y-0 end-0 flex items-center pe-3"
        >
          {loading ? (
            <div className=" loading loading-spinner"></div>
          ) : (
            <BsSend />
          )}
        </button>
      </div>
    </form>
  );
};

export default MessageInput;

// import React from 'react'

// const MessageInput = () => {
//   return (
//    <form action="" className='px-4 my-3'>
//         <div className='w-full relative'>
//             <input type="text" className=' border text-sm rounded-lg block w-full p-2.5 bg-gray-700 text-white'
//             placeholder='Send a message' />
//             <button type='submit' className=' absolute inset-y-0 end-0 flex items-center pe-3'>Send
//                 {/* <bsSend/> */}
//             </button>
//         </div>
//    </form>
//   )
// }

// export default MessageInput

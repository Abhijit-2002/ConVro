import React from 'react'
import Conversation from './Conversation'
import { getRandomEmoji } from '../../Utils/emoji';
import useGetConversations from '../../hooks/useGetConversations.js'


const Conversations = () => {
 const {loading,conversations}= useGetConversations();
//  console.log(conversations);
  return (
    <div className='py-2 flex flex-col overflow-auto'>
      {conversations && conversations.length>0 ? ( conversations.map((conversation,idx) => (
        <Conversation
        key={conversation._id}
        conversation={conversation}
        emoji={getRandomEmoji()}
        lastIdx = {idx === conversation.length-1}
        />
      ))
    ) : (
      <p>No conversations available</p> // Optional: message when no conversations are present
    )}

       {loading ? <span className='loading loading-spinner'></span> : null}
    </div>
  )
}

export default Conversations


// import React from 'react'
// import Conversation from './Conversation'

// const Conversations = () => {
//   return (
//     <div className='py-2 flex flex-col overflow-auto'>
//         <Conversation/>
//         <Conversation/>
//         <Conversation/>
//         <Conversation/>
//         <Conversation/>
//         <Conversation/>
//     </div>
//   )
// }

// export default Conversations
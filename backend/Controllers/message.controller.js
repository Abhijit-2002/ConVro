import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js";
import { getReceiverSocketId ,io} from "../socket/socket.js";
export const sendMessage = async (req, res) => {
  console.log("Message Sent", req.params.id);
  try {
    const { message } = req.body;
    const { id: receiverId } = req.params;
    const senderId = req.user._id;

    let conversation = await Conversation.findOne({
      participants: { $all: [senderId, receiverId] },
    });

    if (!conversation) {
      conversation = await Conversation.create({
        participants: [senderId, receiverId],
      });
    }

    const newMessage = new Message({
      senderId,
      receiverId,
      message,
    });
    if (newMessage) {
      conversation.messages.push(newMessage._id);
    }
    res.status(201).json(newMessage);

    await Promise.all([conversation.save(), newMessage.save()]);
    //socket io will go here

    const receiverSockedId = getReceiverSocketId(receiverId);
    if (receiverSockedId) {
      //
      io.to(receiverSockedId).emit("newMessage", newMessage);
    }

    // await conversation.save();
    // await newMessage.save();
  } catch (error) {
    console.log("Error in message Controller: ", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const getMessages = async (req, res) => {
  try {
    const { id: userToChatId } = req.params;
    //   const {id:userId}=req.user;
    const senderId = req.user._id;
    const conversation = await Conversation.findOne({
      participants: { $all: [senderId, userToChatId] },
    }).populate("messages");
    if (!conversation) {
      return res.status(404).json({ error: "Conversation not found" });
    }
    //   const messages = await Message.find({
    //     conversationId: conversation._id,
    //   });
    res.status(200).json(conversation.messages);
  } catch (error) {
    console.log("Error in getmessage Controller: ", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// export const sendMessage = async(req,res) => {
//   // console.log('messsage sent');
//   try {

//   } catch (error) {
//     console.log("Error in getmessage Controller: ", error.message);
//      res.status(500).json({ error: "Internal Server Error" });
//   }

// }

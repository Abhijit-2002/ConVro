import express from "express";
//import { SERVER_PORT } from '../global/environment';
//import { from '../controllers/message.controller';
import { sendMessage } from "../Controllers/message.controller.js";
import protectRoute from "../Middleware/protectRoute.js";
import { getMessages } from "../Controllers/message.controller.js";

const router = express.Router();

router.get("/:id", protectRoute, getMessages);
router.post("/send/:id", protectRoute, sendMessage);
export default router;


// import express from 'express'
// import { sendMessage } from "../Controllers/message.controller.js";
// const router = express.Router();
// router.post("/send/:id", sendMessage);
// export default router
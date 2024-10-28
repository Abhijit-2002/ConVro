import express from "express";
import protectRoute from "../Middleware/protectRoute.js";
import { getUserForSidebar } from "../Controllers/user.controller.js";

const router = express.Router();

router.get("/", protectRoute, getUserForSidebar);

export default router;

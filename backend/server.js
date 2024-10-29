import express from "express";
import dotenv from "dotenv";
import authRoutes from "./Routes/auth.routes.js";
import messageRoutes from "./Routes/message.routes.js";
import userRoutes from "./Routes/user.routes.js";
import cookieParser from "cookie-parser";
import connectToMongodb from "./db/connectToMogoDb.js";
import { app, server } from "./socket/socket.js";
import path from "path";

const __dirname = path.resolve();
dotenv.config();

const port = process.env.PORT || 5001;
app.use(express.json());
app.use(cookieParser());
app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);
app.use(express.static(path.join(__dirname, "/frontend/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
});

server.listen(port, () => {
  connectToMongodb();
  console.log(`Server is running on port ${port}`);
});

import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import path from "path";
import { connectDB } from "./lib/db.js";
import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";
import { app, server } from "./lib/socket.js";



dotenv.config();
app

// app.use(express.limit(100000000));
app.use(express.json({limit: '50mb'}));
// app.use(express.urlencoded({limit: '50mb'}));
app.use(cookieParser());
app.use(cors({
  origin: "http://localhost:5173",
  credentials: true

}
));


// DB Connection
connectDB();

const PORT = process.env.PORT

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

app.get("/", (req, res) => {
    return res.status(200).send("Welcome to Chatty.");
  });

server.listen(PORT, () => {
    console.log("server is running on PORT : " + PORT);
});


import env from "dotenv";
env.config();

import express from "express";
import { connectDB } from "./config/database";


const app = express();


// Mongodb connection
connectDB(); 



app.get("/", (req, res) => {
  return res.status(200).json({ message: "Hello World!!!!!" });
});

app.listen(process.env.PORT, () => {
  console.log("Server Listening at  :", `http://localhost:${process.env.PORT}`);
});

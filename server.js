import express from "express";
import dotenv from "dotenv";
dotenv.config();
import router from "./routes/router.js";
import mongoose from "mongoose";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api", router);

mongoose.connect(process.env.MONGO).then(
  app.listen(process.env.PORT, () => {
    console.log("server is runing on port", process.env.PORT);
  })
);

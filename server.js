import express from "express"
import dotenv from "dotenv"
dotenv.config()
import router from "./routes/router.js"

const app = express()
app.use("/api",router)

app.listen(process.env.PORT,()=>{
    console.log("server is runing on port",process.env.PORT)
})
import express from "express"
const authRoutes = express.Router()
import {login,register} from "../controllers/authController.js"


authRoutes.post("/login",login)
authRoutes.post("/register",register)


export default authRoutes
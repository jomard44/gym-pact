import express from "express"
const router = express.Router()
import authRoutes from "./authRoutes.js"
import pactRoutes from "./pactRoutes.js"

router.use("/auth",authRoutes)
router.use("/pacts",pactRoutes)
export default router
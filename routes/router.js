import express from "express"
const router = express.Router()
import authRoutes from "./authRoutes.js"
import pactRoutes from "./pactRoutes.js"

router.use("/auth",authRoutes)
router.use("/pact",pactRoutes)
export default router
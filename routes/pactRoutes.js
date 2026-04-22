import express from "express";
const pactRoutes = express();
import {
  getPacts,
  createPact,
  getPact,
  updatePact,
  deletePact,
} from "../controllers/pactController.js";

pactRoutes.get("/", getPacts);
pactRoutes.post("/", createPact);

pactRoutes.get("/:id", getPact);
pactRoutes.put("/:id", updatePact);
pactRoutes.delete("/:id", deletePact);

export default pactRoutes;

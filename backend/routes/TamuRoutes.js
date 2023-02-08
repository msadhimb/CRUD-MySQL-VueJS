import express from "express";
import {
  getTamu,
  geTamuById,
  createTamu,
  updateTamu,
  deleteTamu,
} from "../controllers/TamuControllers.js";

const router = express.Router();

router.get("/tamu", getTamu);
router.get("/tamu/:id", geTamuById);
router.post("/tamu/", createTamu);
router.put("/tamu/:id", updateTamu);
router.delete("/tamu/:id", deleteTamu);

export default router;

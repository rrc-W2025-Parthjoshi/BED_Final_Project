import express, { Router } from "express";
import { getAllTypes, getTypeById, createType, updateType, deleteType } from "../controllers/typeController";

const router: Router = express.Router();

router.get("/types", getAllTypes);
router.get("/types/:id", getTypeById);
router.post("/types", createType);
router.put("/types/:id", updateType);
router.delete("/types/:id", deleteType);

export default router;
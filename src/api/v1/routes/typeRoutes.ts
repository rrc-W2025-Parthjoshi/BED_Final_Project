import express, { Router } from "express";
import { validateRequest } from "../middleware/validate";
import * as typeController from "../controllers/typeController";
import { typeSchemas } from "../validation/typeSchemas";

const router: Router = express.Router();

router.get("/types", typeController.getAllTypes);
router.get("/types/:id", validateRequest(typeSchemas.getById), typeController.getTypeById);
router.post("/types", validateRequest(typeSchemas.create), typeController.createType);
router.put("/types/:id", validateRequest(typeSchemas.update), typeController.updateType);
router.delete("/types/:id", validateRequest(typeSchemas.delete), typeController.deleteType);

export default router;
import express, { Router } from "express";
import { validateRequest } from "../middleware/validate";
import * as teamController from "../controllers/teamController";
import { teamSchemas } from "../validation/teamSchemas";

const router: Router = express.Router();

router.get("/teams", teamController.getAllTeams);
router.get("/teams/:id", validateRequest(teamSchemas.getById), teamController.getTeamById);
router.post("/teams", validateRequest(teamSchemas.create), teamController.createTeam);
router.put("/teams/:id", validateRequest(teamSchemas.update), teamController.updateTeam);
router.delete("/teams/:id", validateRequest(teamSchemas.delete), teamController.deleteTeam);

export default router;
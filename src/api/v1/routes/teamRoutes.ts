import express, { Router } from "express";
import { validateRequest } from "../middleware/validate";
import * as teamController from "../controllers/teamController";
import { teamSchemas } from "../validation/teamSchemas";
import authenticate from "../middleware/authenticate";
import isAuthorized from "../middleware/authorize";

const router: Router = express.Router();

router.get("/teams", authenticate, isAuthorized({ hasRole: ["admin", "trainer"] }), teamController.getAllTeams);
router.get("/teams/:id", authenticate, isAuthorized({ hasRole: ["admin", "trainer"], allowSameUser: true }), validateRequest(teamSchemas.getById), teamController.getTeamById);
router.post("/teams", authenticate, isAuthorized({ hasRole: ["trainer"] }), validateRequest(teamSchemas.create), teamController.createTeam);
router.put("/teams/:id", authenticate, isAuthorized({ hasRole: ["trainer"], allowSameUser: true }), validateRequest(teamSchemas.update), teamController.updateTeam);
router.delete("/teams/:id", authenticate, isAuthorized({ hasRole: ["trainer"], allowSameUser: true }), validateRequest(teamSchemas.delete), teamController.deleteTeam);

export default router;
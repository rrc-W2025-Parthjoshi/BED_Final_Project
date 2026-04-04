import express, { Router } from "express";
import { getAllTeams, getTeamById, createTeam, updateTeam, deleteTeam} from "../controllers/teamController";

const router: Router = express.Router();

router.get("/teams", getAllTeams);
router.get("/teams/:id", getTeamById);
router.post("/teams", createTeam);
router.put("/teams/:id", updateTeam);
router.delete("/teams/:id", deleteTeam);

export default router;
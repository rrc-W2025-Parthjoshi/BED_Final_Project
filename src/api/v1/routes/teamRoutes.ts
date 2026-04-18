import express, { Router } from "express";
import { validateRequest } from "../middleware/validate";
import * as teamController from "../controllers/teamController";
import { teamSchemas } from "../validation/teamSchemas";
import authenticate from "../middleware/authenticate";
import isAuthorized from "../middleware/authorize";

const router: Router = express.Router();

/**
 * @openapi
 * /teams:
 *   get:
 *     summary: Get all teams
 *     tags: [Teams]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       '200':
 *         description: Successfully retrieved all teams
 *       '401':
 *         description: Unauthorized
 *       '403':
 *         description: Forbidden
 */
router.get("/teams", authenticate, isAuthorized({ hasRole: ["admin", "trainer"] }), teamController.getAllTeams);

/**
 * @openapi
 * /teams/{id}:
 *   get:
 *     summary: Get a team by ID
 *     tags: [Teams]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Successfully retrieved team
 *       '401':
 *         description: Unauthorized
 *       '403':
 *         description: Forbidden
 */
router.get("/teams/:id", authenticate, isAuthorized({ hasRole: ["admin", "trainer"], allowSameUser: true }), validateRequest(teamSchemas.getById), teamController.getTeamById);

/**
 * @openapi
 * /teams:
 *   post:
 *     summary: Create a new team
 *     tags: [Teams]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - pokemonIds
 *             properties:
 *               name:
 *                 type: string
 *               pokemonIds:
 *                 type: array
 *                 items:
 *                   type: string
 *     responses:
 *       '201':
 *         description: Team created successfully
 *       '401':
 *         description: Unauthorized
 *       '403':
 *         description: Forbidden
 */
router.post("/teams", authenticate, isAuthorized({ hasRole: ["trainer"] }), validateRequest(teamSchemas.create), teamController.createTeam);

/**
 * @openapi
 * /teams/{id}:
 *   put:
 *     summary: Update a team
 *     tags: [Teams]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               pokemonIds:
 *                 type: array
 *                 items:
 *                   type: string
 *     responses:
 *       '200':
 *         description: Team updated successfully
 *       '401':
 *         description: Unauthorized
 *       '403':
 *         description: Forbidden
 */
router.put("/teams/:id", authenticate, isAuthorized({ hasRole: ["trainer"], allowSameUser: true }), validateRequest(teamSchemas.update), teamController.updateTeam);

/**
 * @openapi
 * /teams/{id}:
 *   delete:
 *     summary: Delete a team
 *     tags: [Teams]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Team deleted successfully
 *       '401':
 *         description: Unauthorized
 *       '403':
 *         description: Forbidden
 */
router.delete("/teams/:id", authenticate, isAuthorized({ hasRole: ["trainer"], allowSameUser: true }), validateRequest(teamSchemas.delete), teamController.deleteTeam);

export default router;
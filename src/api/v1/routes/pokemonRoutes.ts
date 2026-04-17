import express, { Router } from "express";
import { validateRequest } from "../middleware/validate";
import * as pokemonController from "../controllers/pokemonController";
import { pokemonSchemas } from "../validation/pokemonSchemas";
import authenticate from "../middleware/authenticate";
import isAuthorized from "../middleware/authorize";

const router: Router = express.Router();

/**
 * @openapi
 * /pokemon:
 *   get:
 *     summary: Get all Pokemon
 *     tags: [Pokemon]
 *     responses:
 *       '200':
 *         description: Successfully retrieved all Pokemon
 */
router.get("/pokemon", pokemonController.getAllPokemon);

/**
 * @openapi
 * /pokemon/{id}:
 *   get:
 *     summary: Get a Pokemon by ID
 *     tags: [Pokemon]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Successfully retrieved Pokemon
 */
router.get("/pokemon/:id", validateRequest(pokemonSchemas.getById), pokemonController.getPokemonById);

/**
 * @openapi
 * /pokemon:
 *   post:
 *     summary: Create a new Pokemon
 *     tags: [Pokemon]
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
 *               - type
 *               - abilities
 *             properties:
 *               name:
 *                 type: string
 *               type:
 *                 type: string
 *               abilities:
 *                 type: array
 *                 items:
 *                   type: string
 *     responses:
 *       '201':
 *         description: Pokemon created successfully
 *       '401':
 *         description: Unauthorized
 *       '403':
 *         description: Forbidden
 */
router.post("/pokemon", authenticate, isAuthorized({ hasRole: ["admin"] }), validateRequest(pokemonSchemas.create), pokemonController.createPokemon);

/**
 * @openapi
 * /pokemon/{id}:
 *   put:
 *     summary: Update a Pokemon
 *     tags: [Pokemon]
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
 *               type:
 *                 type: string
 *               abilities:
 *                 type: array
 *                 items:
 *                   type: string
 *     responses:
 *       '200':
 *         description: Pokemon updated successfully
 *       '401':
 *         description: Unauthorized
 *       '403':
 *         description: Forbidden
 */
router.put("/pokemon/:id", authenticate, isAuthorized({ hasRole: ["admin"] }), validateRequest(pokemonSchemas.update), pokemonController.updatePokemon);

/**
 * @openapi
 * /pokemon/{id}:
 *   delete:
 *     summary: Delete a Pokemon
 *     tags: [Pokemon]
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
 *         description: Pokemon deleted successfully
 *       '401':
 *         description: Unauthorized
 *       '403':
 *         description: Forbidden
 */
router.delete("/pokemon/:id", authenticate, isAuthorized({ hasRole: ["admin"] }), validateRequest(pokemonSchemas.delete), pokemonController.deletePokemon);

export default router;
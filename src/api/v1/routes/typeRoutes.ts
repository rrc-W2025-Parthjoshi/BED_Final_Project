import express, { Router } from "express";
import { validateRequest } from "../middleware/validate";
import * as typeController from "../controllers/typeController";
import { typeSchemas } from "../validation/typeSchemas";
import authenticate from "../middleware/authenticate";
import isAuthorized from "../middleware/authorize";

const router: Router = express.Router();

/**
 * @openapi
 * /types:
 *   get:
 *     summary: Get all types
 *     tags: [Types]
 *     responses:
 *       '200':
 *         description: Successfully retrieved all types
 */
router.get("/types", typeController.getAllTypes);

/**
 * @openapi
 * /types/{id}:
 *   get:
 *     summary: Get a type by ID
 *     tags: [Types]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Successfully retrieved type
 */
router.get("/types/:id", validateRequest(typeSchemas.getById), typeController.getTypeById);

/**
 * @openapi
 * /types:
 *   post:
 *     summary: Create a new type
 *     tags: [Types]
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
 *             properties:
 *               name:
 *                 type: string
 *     responses:
 *       '201':
 *         description: Type created successfully
 *       '401':
 *         description: Unauthorized
 *       '403':
 *         description: Forbidden
 */
router.post("/types", authenticate, isAuthorized({ hasRole: ["admin"] }), validateRequest(typeSchemas.create), typeController.createType);

/**
 * @openapi
 * /types/{id}:
 *   put:
 *     summary: Update a type
 *     tags: [Types]
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
 *     responses:
 *       '200':
 *         description: Type updated successfully
 *       '401':
 *         description: Unauthorized
 *       '403':
 *         description: Forbidden
 */
router.put("/types/:id", authenticate, isAuthorized({ hasRole: ["admin"] }), validateRequest(typeSchemas.update), typeController.updateType);

/**
 * @openapi
 * /types/{id}:
 *   delete:
 *     summary: Delete a type
 *     tags: [Types]
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
 *         description: Type deleted successfully
 *       '401':
 *         description: Unauthorized
 *       '403':
 *         description: Forbidden
 */
router.delete("/types/:id", authenticate, isAuthorized({ hasRole: ["admin"] }), validateRequest(typeSchemas.delete), typeController.deleteType);

export default router;
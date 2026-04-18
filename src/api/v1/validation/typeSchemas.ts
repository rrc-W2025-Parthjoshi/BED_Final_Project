import Joi from "joi";

/**
 * @openapi
 * components:
 *   schemas:
 *     Type:
 *       type: object
 *       required:
 *         - name
 *       properties:
 *         id:
 *           type: string
 *           description: Unique identifier for the type
 *           example: "abc123"
 *         name:
 *           type: string
 *           description: Name of the type
 *           example: "Electric"
 */
export const typeSchemas = {
    // POST /types - Create new type
    create: {
        body: Joi.object({
            name: Joi.string().required().messages({
                "any.required": "Type name is required",
                "string.empty": "Type name cannot be empty",
            }),
        }),
    },
    // GET /types/:id - Get single type
    getById: {
        params: Joi.object({
            id: Joi.string().required().messages({
                "any.required": "Type ID is required",
                "string.empty": "Type ID cannot be empty",
            }),
        }),
    },
    // PUT /types/:id - Update type
    update: {
        params: Joi.object({
            id: Joi.string().required().messages({
                "any.required": "Type ID is required",
                "string.empty": "Type ID cannot be empty",
            }),
        }),
        body: Joi.object({
            name: Joi.string().optional().messages({
                "string.empty": "Type name cannot be empty",
            }),
        }),
    },
    // DELETE /types/:id - Delete type
    delete: {
        params: Joi.object({
            id: Joi.string().required().messages({
                "any.required": "Type ID is required",
                "string.empty": "Type ID cannot be empty",
            }),
        }),
    },
};
import Joi from "joi";

/**
 * @openapi
 * components:
 *   schemas:
 *     Pokemon:
 *       type: object
 *       required:
 *         - name
 *         - type
 *         - abilities
 *       properties:
 *         id:
 *           type: string
 *           description: Unique identifier for the Pokemon
 *           example: "abc123"
 *         name:
 *           type: string
 *           description: Name of the Pokemon
 *           example: "Pikachu"
 *         type:
 *           type: string
 *           description: Type of the Pokemon
 *           example: "Electric"
 *         abilities:
 *           type: array
 *           items:
 *             type: string
 *           description: List of abilities
 *           example: ["Static", "Lightning Rod"]
 */
export const pokemonSchemas = {
    // POST /pokemon - Create new pokemon
    create: {
        body: Joi.object({
            name: Joi.string().required().messages({
                "any.required": "Pokemon name is required",
                "string.empty": "Pokemon name cannot be empty",
            }),
            type: Joi.string().required().messages({
                "any.required": "Pokemon type is required",
                "string.empty": "Pokemon type cannot be empty",
            }),
            abilities: Joi.array().items(Joi.string()).required().messages({
                "any.required": "Pokemon abilities are required",
            }),
        }),
    },
    // GET /pokemon/:id - Get single pokemon
    getById: {
        params: Joi.object({
            id: Joi.string().required().messages({
                "any.required": "Pokemon ID is required",
                "string.empty": "Pokemon ID cannot be empty",
            }),
        }),
    },
    // PUT /pokemon/:id - Update pokemon
    update: {
        params: Joi.object({
            id: Joi.string().required().messages({
                "any.required": "Pokemon ID is required",
                "string.empty": "Pokemon ID cannot be empty",
            }),
        }),
        body: Joi.object({
            name: Joi.string().optional().messages({
                "string.empty": "Pokemon name cannot be empty",
            }),
            type: Joi.string().optional().messages({
                "string.empty": "Pokemon type cannot be empty",
            }),
            abilities: Joi.array().items(Joi.string()).optional(),
        }),
    },
    // DELETE /pokemon/:id - Delete pokemon
    delete: {
        params: Joi.object({
            id: Joi.string().required().messages({
                "any.required": "Pokemon ID is required",
                "string.empty": "Pokemon ID cannot be empty",
            }),
        }),
    },
};
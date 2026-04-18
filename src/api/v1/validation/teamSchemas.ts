import Joi from "joi";

/**
 * @openapi
 * components:
 *   schemas:
 *     Team:
 *       type: object
 *       required:
 *         - name
 *         - pokemonIds
 *       properties:
 *         id:
 *           type: string
 *           description: Unique identifier for the team
 *           example: "abc123"
 *         name:
 *           type: string
 *           description: Name of the team
 *           example: "Dream Team"
 *         pokemonIds:
 *           type: array
 *           items:
 *             type: string
 *           description: List of Pokemon IDs in the team
 *           example: ["abc123", "def456"]
 */
export const teamSchemas = {
    // POST /teams - Create new team
    create: {
        body: Joi.object({
            name: Joi.string().required().messages({
                "any.required": "Team name is required",
                "string.empty": "Team name cannot be empty",
            }),
            pokemonIds: Joi.array().items(Joi.string()).required().messages({
                "any.required": "Pokemon IDs are required",
            }),
        }),
    },
    // GET /teams/:id - Get single team
    getById: {
        params: Joi.object({
            id: Joi.string().required().messages({
                "any.required": "Team ID is required",
                "string.empty": "Team ID cannot be empty",
            }),
        }),
    },
    // PUT /teams/:id - Update team
    update: {
        params: Joi.object({
            id: Joi.string().required().messages({
                "any.required": "Team ID is required",
                "string.empty": "Team ID cannot be empty",
            }),
        }),
        body: Joi.object({
            name: Joi.string().optional().messages({
                "string.empty": "Team name cannot be empty",
            }),
            pokemonIds: Joi.array().items(Joi.string()).optional(),
        }),
    },
    // DELETE /teams/:id - Delete team
    delete: {
        params: Joi.object({
            id: Joi.string().required().messages({
                "any.required": "Team ID is required",
                "string.empty": "Team ID cannot be empty",
            }),
        }),
    },
};
import Joi from "joi";

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
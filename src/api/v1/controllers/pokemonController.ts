import { Request, Response, NextFunction } from "express";
import * as pokemonService from "../services/pokemonService";
import { successResponse } from "../models/responseModel";
import { HTTP_STATUS } from "../../../constants/httpsConstants";

/**
 * Get all Pokemon
 * @param req - Express request object
 * @param res - Express response object
 * @param next - Express next function
 */
export const getAllPokemon = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const pokemon = await pokemonService.getAllPokemon();
        res.status(HTTP_STATUS.OK).json(successResponse(pokemon, "Get all pokemon"));
    } catch (error: unknown) {
        next(error);
    }
};

/**
 * Get a single Pokemon by ID
 * @param req - Express request object
 * @param res - Express response object
 * @param next - Express next function
 */
export const getPokemonById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const { id } = req.params;
        const pokemon = await pokemonService.getPokemonById(id);
        res.status(HTTP_STATUS.OK).json(successResponse(pokemon, "Get pokemon"));
    } catch (error: unknown) {
        next(error);
    }
};

/**
 * Create a new Pokemon
 * @param req - Express request object
 * @param res - Express response object
 * @param next - Express next function
 */
export const createPokemon = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const pokemonId = await pokemonService.createPokemon(req.body);
        res.status(HTTP_STATUS.CREATED).json(successResponse({ id: pokemonId }, "Pokemon created"));
    } catch (error: unknown) {
        next(error);
    }
};

/**
 * Update a Pokemon
 * @param req - Express request object
 * @param res - Express response object
 * @param next - Express next function
 */
export const updatePokemon = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const { id } = req.params;
        await pokemonService.updatePokemon(id, req.body);
        res.status(HTTP_STATUS.OK).json(successResponse({}, "Pokemon updated"));
    } catch (error: unknown) {
        next(error);
    }
};

/**
 * Delete a Pokemon
 * @param req - Express request object
 * @param res - Express response object
 * @param next - Express next function
 */
export const deletePokemon = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const { id } = req.params;
        await pokemonService.deletePokemon(id);
        res.status(HTTP_STATUS.OK).json(successResponse({}, "Pokemon deleted"));
    } catch (error: unknown) {
        next(error);
    }
};
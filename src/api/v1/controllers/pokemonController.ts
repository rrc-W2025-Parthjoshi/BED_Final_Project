import { Request, Response } from "express";
import * as pokemonService from "../services/pokemonService";

/**
 * Get all Pokemon
 * @param req - Express request object
 * @param res - Express response object
 */
export const getAllPokemon = (req: Request, res: Response): void => {
    const pokemon = pokemonService.getAllPokemon();
    res.status(200).json({ message: "Get all pokemon", data: pokemon });
};

/**
 * Get a single Pokemon by ID
 * @param req - Express request object
 * @param res - Express response object
 */
export const getPokemonById = (req: Request, res: Response): void => {
    const { id } = req.params;
    const pokemon = pokemonService.getPokemonById(id);
    res.status(200).json({ message: "Get pokemon", data: pokemon });
};

/**
 * Create a new Pokemon
 * @param req - Express request object
 * @param res - Express response object
 */
export const createPokemon = (req: Request, res: Response): void => {
    const newPokemon = pokemonService.createPokemon(req.body);
    res.status(201).json({ message: "Pokemon created", data: newPokemon });
};

/**
 * Update a Pokemon
 * @param req - Express request object
 * @param res - Express response object
 */
export const updatePokemon = (req: Request, res: Response): void => {
    const { id } = req.params;
    const updatedPokemon = pokemonService.updatePokemon(id, req.body);
    res.status(200).json({ message: "Pokemon updated", data: updatedPokemon });
};

/**
 * Delete a Pokemon
 * @param req - Express request object
 * @param res - Express response object
 */
export const deletePokemon = (req: Request, res: Response): void => {
    const { id } = req.params;
    pokemonService.deletePokemon(id);
    res.status(200).json({ message: "Pokemon deleted" });
};
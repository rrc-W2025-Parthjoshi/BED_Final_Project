import { Pokemon } from "../models/pokemonModel";
import * as firestoreRepository from "../repositories/firestoreRepository";

const POKEMON_COLLECTION = "pokemon";

/**
 * Retrieves all Pokemon
 * @returns Array of all Pokemon
 */
export const getAllPokemon = async (): Promise<Pokemon[]> => {
    try {
        const snapshot = await firestoreRepository.getDocuments(POKEMON_COLLECTION);
        return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() } as Pokemon));
    } catch (error: unknown) {
        const errorMessage = error instanceof Error ? error.message : "Unknown error";
        throw new Error(`Failed to get pokemon: ${errorMessage}`);
    }
};

/**
 * Retrieves a single Pokemon by ID
 * @param id - The ID of the Pokemon
 * @returns The Pokemon or null
 */
export const getPokemonById = async (id: string): Promise<Pokemon | null> => {
    try {
        const doc = await firestoreRepository.getDocumentById(POKEMON_COLLECTION, id);
        if (!doc) return null;
        return { id: doc.id, ...doc.data() } as Pokemon;
    } catch (error: unknown) {
        const errorMessage = error instanceof Error ? error.message : "Unknown error";
        throw new Error(`Failed to get pokemon ${id}: ${errorMessage}`);
    }
};

/**
 * Creates a new Pokemon
 * @param pokemonData - The data for the new Pokemon
 * @returns The ID of the created Pokemon
 */
export const createPokemon = async (pokemonData: Partial<Pokemon>): Promise<string> => {
    try {
        return await firestoreRepository.createDocument<Pokemon>(POKEMON_COLLECTION, pokemonData);
    } catch (error: unknown) {
        const errorMessage = error instanceof Error ? error.message : "Unknown error";
        throw new Error(`Failed to create pokemon: ${errorMessage}`);
    }
};

/**
 * Updates an existing Pokemon
 * @param id - The ID of the Pokemon to update
 * @param pokemonData - The fields to update
 */
export const updatePokemon = async (id: string, pokemonData: Partial<Pokemon>): Promise<void> => {
    try {
        await firestoreRepository.updateDocument<Pokemon>(POKEMON_COLLECTION, id, pokemonData);
    } catch (error: unknown) {
        const errorMessage = error instanceof Error ? error.message : "Unknown error";
        throw new Error(`Failed to update pokemon ${id}: ${errorMessage}`);
    }
};

/**
 * Deletes a Pokemon
 * @param id - The ID of the Pokemon to delete
 */
export const deletePokemon = async (id: string): Promise<void> => {
    try {
        await firestoreRepository.deleteDocument(POKEMON_COLLECTION, id);
    } catch (error: unknown) {
        const errorMessage = error instanceof Error ? error.message : "Unknown error";
        throw new Error(`Failed to delete pokemon ${id}: ${errorMessage}`);
    }
};
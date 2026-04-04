import { PokemonType } from "../models/typeModel";
import * as firestoreRepository from "../repositories/firestoreRepository";

const TYPES_COLLECTION = "types";

/**
 * Retrieves all types
 * @returns Array of all types
 */
export const getAllTypes = async (): Promise<PokemonType[]> => {
    try {
        const snapshot = await firestoreRepository.getDocuments(TYPES_COLLECTION);
        return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() } as PokemonType));
    } catch (error: unknown) {
        const errorMessage = error instanceof Error ? error.message : "Unknown error";
        throw new Error(`Failed to get types: ${errorMessage}`);
    }
};

/**
 * Retrieves a single type by ID
 * @param id - The ID of the type
 * @returns The type or null
 */
export const getTypeById = async (id: string): Promise<PokemonType | null> => {
    try {
        const doc = await firestoreRepository.getDocumentById(TYPES_COLLECTION, id);
        if (!doc) return null;
        return { id: doc.id, ...doc.data() } as PokemonType;
    } catch (error: unknown) {
        const errorMessage = error instanceof Error ? error.message : "Unknown error";
        throw new Error(`Failed to get type ${id}: ${errorMessage}`);
    }
};

/**
 * Creates a new type
 * @param typeData - The data for the new type
 * @returns The ID of the created type
 */
export const createType = async (typeData: Partial<PokemonType>): Promise<string> => {
    try {
        return await firestoreRepository.createDocument<PokemonType>(TYPES_COLLECTION, typeData);
    } catch (error: unknown) {
        const errorMessage = error instanceof Error ? error.message : "Unknown error";
        throw new Error(`Failed to create type: ${errorMessage}`);
    }
};

/**
 * Updates an existing type
 * @param id - The ID of the type to update
 * @param typeData - The fields to update
 */
export const updateType = async (id: string, typeData: Partial<PokemonType>): Promise<void> => {
    try {
        await firestoreRepository.updateDocument<PokemonType>(TYPES_COLLECTION, id, typeData);
    } catch (error: unknown) {
        const errorMessage = error instanceof Error ? error.message : "Unknown error";
        throw new Error(`Failed to update type ${id}: ${errorMessage}`);
    }
};

/**
 * Deletes a type
 * @param id - The ID of the type to delete
 */
export const deleteType = async (id: string): Promise<void> => {
    try {
        await firestoreRepository.deleteDocument(TYPES_COLLECTION, id);
    } catch (error: unknown) {
        const errorMessage = error instanceof Error ? error.message : "Unknown error";
        throw new Error(`Failed to delete type ${id}: ${errorMessage}`);
    }
};
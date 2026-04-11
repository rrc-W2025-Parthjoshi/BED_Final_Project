import { Team } from "../models/teamModel";
import * as firestoreRepository from "../repositories/firestoreRepository";

const TEAMS_COLLECTION = "teams";

/**
 * Retrieves all teams
 * @returns Array of all teams
 */
export const getAllTeams = async (): Promise<Team[]> => {
    try {
        const snapshot = await firestoreRepository.getDocuments(TEAMS_COLLECTION);
        return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() } as Team));
    } catch (error: unknown) {
        const errorMessage = error instanceof Error ? error.message : "Unknown error";
        throw new Error(`Failed to get teams: ${errorMessage}`);
    }
};

/**
 * Retrieves a single team by ID
 * @param id - The ID of the team
 * @returns The team or null
 */
export const getTeamById = async (id: string): Promise<Team | null> => {
    try {
        const doc = await firestoreRepository.getDocumentById(TEAMS_COLLECTION, id);
        if (!doc) return null;
        return { id: doc.id, ...doc.data() } as Team;
    } catch (error: unknown) {
        const errorMessage = error instanceof Error ? error.message : "Unknown error";
        throw new Error(`Failed to get team ${id}: ${errorMessage}`);
    }
};

/**
 * Creates a new team
 * @param teamData - The data for the new team
 * @returns The ID of the created team
 */
export const createTeam = async (teamData: Partial<Team>): Promise<string> => {
    try {
        return await firestoreRepository.createDocument<Team>(TEAMS_COLLECTION, teamData);
    } catch (error: unknown) {
        const errorMessage = error instanceof Error ? error.message : "Unknown error";
        throw new Error(`Failed to create team: ${errorMessage}`);
    }
};

/**
 * Updates an existing team
 * @param id - The ID of the team to update
 * @param teamData - The fields to update
 */
export const updateTeam = async (id: string, teamData: Partial<Team>): Promise<void> => {
    try {
        await firestoreRepository.updateDocument<Team>(TEAMS_COLLECTION, id, teamData);
    } catch (error: unknown) {
        const errorMessage = error instanceof Error ? error.message : "Unknown error";
        throw new Error(`Failed to update team ${id}: ${errorMessage}`);
    }
};

/**
 * Deletes a team
 * @param id - The ID of the team to delete
 */
export const deleteTeam = async (id: string): Promise<void> => {
    try {
        await firestoreRepository.deleteDocument(TEAMS_COLLECTION, id);
    } catch (error: unknown) {
        const errorMessage = error instanceof Error ? error.message : "Unknown error";
        throw new Error(`Failed to delete team ${id}: ${errorMessage}`);
    }
};
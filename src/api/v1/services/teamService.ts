/**
 * Represents a Team in the system
 */
interface Team {
    id: string;
    name: string;
    pokemonIds: string[];
}

const teams: Team[] = [];

/**
 * Retrieves all teams
 * @returns Array of all teams
 */
export const getAllTeams = (): Team[] => {
    return teams;
};

/**
 * Retrieves a single team by ID
 * @param id - The ID of the team
 * @returns The team or undefined
 */
export const getTeamById = (id: string): Team | undefined => {
    return teams.find((t: Team) => t.id === id);
};

/**
 * Creates a new team
 * @param teamData - The data for the new team
 * @returns The created team
 */
export const createTeam = (teamData: { name: string; pokemonIds: string[] }): Team => {
    const newTeam: Team = {
        id: Date.now().toString(),
        name: teamData.name,
        pokemonIds: teamData.pokemonIds,
    };
    teams.push(newTeam);
    return newTeam;
};

/**
 * Updates an existing team
 * @param id - The ID of the team to update
 * @param teamData - The fields to update
 * @returns The updated team
 */
export const updateTeam = (id: string, teamData: Partial<Team>): Team => {
    const index: number = teams.findIndex((t: Team) => t.id === id);
    if (index === -1) {
        throw new Error(`Team with ID ${id} not found`);
    }
    teams[index] = { ...teams[index], ...teamData };
    return teams[index];
};

/**
 * Deletes a team
 * @param id - The ID of the team to delete
 */
export const deleteTeam = (id: string): void => {
    const index: number = teams.findIndex((t: Team) => t.id === id);
    if (index === -1) {
        throw new Error(`Team with ID ${id} not found`);
    }
    teams.splice(index, 1);
};
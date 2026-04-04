/**
 * Represents a Pokemon Type in the system
 */
interface PokemonType {
    id: string;
    name: string;
}

const types: PokemonType[] = [];

/**
 * Retrieves all types
 * @returns Array of all types
 */
export const getAllTypes = (): PokemonType[] => {
    return types;
};

/**
 * Retrieves a single type by ID
 * @param id - The ID of the type
 * @returns The type or undefined
 */
export const getTypeById = (id: string): PokemonType | undefined => {
    return types.find((t: PokemonType) => t.id === id);
};

/**
 * Creates a new type
 * @param typeData - The data for the new type
 * @returns The created type
 */
export const createType = (typeData: { name: string }): PokemonType => {
    const newType: PokemonType = {
        id: Date.now().toString(),
        name: typeData.name,
    };
    types.push(newType);
    return newType;
};

/**
 * Updates an existing type
 * @param id - The ID of the type to update
 * @param typeData - The fields to update
 * @returns The updated type
 */
export const updateType = (id: string, typeData: Partial<PokemonType>): PokemonType => {
    const index: number = types.findIndex((t: PokemonType) => t.id === id);
    if (index === -1) {
        throw new Error(`Type with ID ${id} not found`);
    }
    types[index] = { ...types[index], ...typeData };
    return types[index];
};

/**
 * Deletes a type
 * @param id - The ID of the type to delete
 */
export const deleteType = (id: string): void => {
    const index: number = types.findIndex((t: PokemonType) => t.id === id);
    if (index === -1) {
        throw new Error(`Type with ID ${id} not found`);
    }
    types.splice(index, 1);
};
/**
 * Represents a Pokemon in the system
 */
interface Pokemon {
  id: string;
  name: string;
  type: string;
  abilities: string[];
}

const pokemon: Pokemon[] = [];

/**
 * Retrieves all Pokemon
 * @returns Array of all Pokemon
 */
export const getAllPokemon = (): Pokemon[] => {
  return pokemon;
};

/**
 * Retrieves a single Pokemon by ID
 * @param id - The ID of the Pokemon
 * @returns The Pokemon or undefined
 */
export const getPokemonById = (id: string): Pokemon | undefined => {
  return pokemon.find((p: Pokemon) => p.id === id);
};

/**
 * Creates a new Pokemon
 * @param pokemonData - The data for the new Pokemon
 * @returns The created Pokemon
 */
export const createPokemon = (pokemonData: { name: string; type: string; abilities: string[] }): Pokemon => {
  const newPokemon: Pokemon = {
    id: Date.now().toString(),
    name: pokemonData.name,
    type: pokemonData.type,
    abilities: pokemonData.abilities,
  };
  pokemon.push(newPokemon);
  return newPokemon;
};

/**
 * Updates an existing Pokemon
 * @param id - The ID of the Pokemon to update
 * @param pokemonData - The fields to update
 * @returns The updated Pokemon
 */
export const updatePokemon = (id: string, pokemonData: Partial<Pokemon>): Pokemon => {
  const index: number = pokemon.findIndex((p: Pokemon) => p.id === id);
  if (index === -1) {
    throw new Error(`Pokemon with ID ${id} not found`);
  }
  pokemon[index] = { ...pokemon[index], ...pokemonData };
  return pokemon[index];
};

/**
 * Deletes a Pokemon
 * @param id - The ID of the Pokemon to delete
 */
export const deletePokemon = (id: string): void => {
  const index: number = pokemon.findIndex((p: Pokemon) => p.id === id);
  if (index === -1) {
    throw new Error(`Pokemon with ID ${id} not found`);
  }
  pokemon.splice(index, 1);
};
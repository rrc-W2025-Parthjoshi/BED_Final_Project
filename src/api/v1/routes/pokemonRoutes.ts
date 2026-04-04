import express, { Router } from "express";
import {
    getAllPokemon,
    getPokemonById,
    createPokemon,
    updatePokemon,
    deletePokemon,
} from "../controllers/pokemonController";

const router: Router = express.Router();

router.get("/pokemon", getAllPokemon);
router.get("/pokemon/:id", getPokemonById);
router.post("/pokemon", createPokemon);
router.put("/pokemon/:id", updatePokemon);
router.delete("/pokemon/:id", deletePokemon);

export default router;
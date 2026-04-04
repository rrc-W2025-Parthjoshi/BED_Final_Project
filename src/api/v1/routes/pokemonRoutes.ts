import express, { Router } from "express";
import { validateRequest } from "../middleware/validate";
import * as pokemonController from "../controllers/pokemonController";
import { pokemonSchemas } from "../validation/pokemonSchemas";

const router: Router = express.Router();

router.get("/pokemon", pokemonController.getAllPokemon);
router.get("/pokemon/:id", validateRequest(pokemonSchemas.getById), pokemonController.getPokemonById);
router.post("/pokemon", validateRequest(pokemonSchemas.create), pokemonController.createPokemon);
router.put("/pokemon/:id", validateRequest(pokemonSchemas.update), pokemonController.updatePokemon);
router.delete("/pokemon/:id", validateRequest(pokemonSchemas.delete), pokemonController.deletePokemon);

export default router;
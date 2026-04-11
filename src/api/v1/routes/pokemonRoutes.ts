import express, { Router } from "express";
import { validateRequest } from "../middleware/validate";
import * as pokemonController from "../controllers/pokemonController";
import { pokemonSchemas } from "../validation/pokemonSchemas";
import authenticate from "../middleware/authenticate";
import isAuthorized from "../middleware/authorize";

const router: Router = express.Router();

router.get("/pokemon", pokemonController.getAllPokemon);
router.get("/pokemon/:id", validateRequest(pokemonSchemas.getById), pokemonController.getPokemonById);
router.post("/pokemon", authenticate, isAuthorized({ hasRole: ["admin"] }), validateRequest(pokemonSchemas.create), pokemonController.createPokemon);
router.put("/pokemon/:id", authenticate, isAuthorized({ hasRole: ["admin"] }), validateRequest(pokemonSchemas.update), pokemonController.updatePokemon);
router.delete("/pokemon/:id", authenticate, isAuthorized({ hasRole: ["admin"] }), validateRequest(pokemonSchemas.delete), pokemonController.deletePokemon);

export default router;
import express, { Express } from "express";
import healthRoutes from "./api/v1/routes/healthRoutes";
import pokemonRoutes from "./api/v1/routes/pokemonRoutes";
import typeRoutes from "./api/v1/routes/typeRoutes";
import teamRoutes from "./api/v1/routes/teamRoutes";

// Initialize Express application
const app: Express = express();

app.use(express.json());

// Routes
app.use("/api/v1", healthRoutes);
app.use("/api/v1", pokemonRoutes);
app.use("/api/v1", typeRoutes);
app.use("/api/v1", teamRoutes);

export default app;
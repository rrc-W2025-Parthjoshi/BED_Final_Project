import express, { Express } from "express";
import morgan from "morgan";
import rateLimit from "express-rate-limit";
import healthRoutes from "./api/v1/routes/healthRoutes";
import pokemonRoutes from "./api/v1/routes/pokemonRoutes";
import typeRoutes from "./api/v1/routes/typeRoutes";
import teamRoutes from "./api/v1/routes/teamRoutes";

// Initialize Express application
const app: Express = express();

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100,
    message: "Too many requests, please try again later.",
});

app.use(limiter);
app.use(morgan("combined"));
app.use(express.json());

// Routes
app.use("/api/v1", healthRoutes);
app.use("/api/v1", pokemonRoutes);
app.use("/api/v1", typeRoutes);
app.use("/api/v1", teamRoutes);

export default app;
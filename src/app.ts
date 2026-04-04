import express, { Express } from "express";
import healthRoutes from "./api/v1/routes/healthroutes";

// Initialize Express application
const app: Express = express();

app.use(express.json());

// Routes
app.use("/api/v1", healthRoutes);

export default app;
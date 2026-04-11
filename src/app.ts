import express, { Express } from "express";
import morgan from "morgan";
import rateLimit from "express-rate-limit";
import { accessLogger, errorLogger, consoleLogger } from "./api/v1/middleware/logger";
import errorHandler from "./api/v1/middleware/errorHandler";
import healthRoutes from "./api/v1/routes/healthRoutes";
import pokemonRoutes from "./api/v1/routes/pokemonRoutes";
import typeRoutes from "./api/v1/routes/typeRoutes";
import teamRoutes from "./api/v1/routes/teamRoutes";
import adminRoutes from "./api/v1/routes/adminRoutes";
import userRoutes from "./api/v1/routes/userRoutes";

// Initialize Express application
const app: Express = express();

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100,
    message: "Too many requests, please try again later.",
});

app.use(limiter);

// Logging middleware (should be applied early in the middleware stack)
if (process.env.NODE_ENV === "production") {
    // In production, log to files
    app.use(accessLogger);
    app.use(errorLogger);
} else {
    // In development, log to console for immediate feedback
    app.use(consoleLogger);
}

// Body parsing middleware
app.use(express.json());

// Routes
app.use("/api/v1", healthRoutes);
app.use("/api/v1", pokemonRoutes);
app.use("/api/v1", typeRoutes);
app.use("/api/v1", teamRoutes);
app.use("/api/v1/admin", adminRoutes);
app.use("/api/v1/users", userRoutes);

// Global error handling middleware (MUST be applied last)
app.use(errorHandler);

export default app;
import { Request, Response, NextFunction } from "express";
import * as teamService from "../services/teamService";
import { successResponse } from "../models/responseModel";
import { HTTP_STATUS } from "../../../constants/httpConstants";

/**
 * Get all teams
 * @param req - Express request object
 * @param res - Express response object
 * @param next - Express next function
 */
export const getAllTeams = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const teams = await teamService.getAllTeams();
        res.status(HTTP_STATUS.OK).json(successResponse(teams, "Get all teams"));
    } catch (error: unknown) {
        next(error);
    }
};

/**
 * Get a single team by ID
 * @param req - Express request object
 * @param res - Express response object
 * @param next - Express next function
 */
export const getTeamById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const { id } = req.params;
        const team = await teamService.getTeamById(id);
        res.status(HTTP_STATUS.OK).json(successResponse(team, "Get team"));
    } catch (error: unknown) {
        next(error);
    }
};

/**
 * Create a new team
 * @param req - Express request object
 * @param res - Express response object
 * @param next - Express next function
 */
export const createTeam = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const teamId = await teamService.createTeam(req.body);
        res.status(HTTP_STATUS.CREATED).json(successResponse({ id: teamId }, "Team created"));
    } catch (error: unknown) {
        next(error);
    }
};

/**
 * Update a team
 * @param req - Express request object
 * @param res - Express response object
 * @param next - Express next function
 */
export const updateTeam = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const { id } = req.params;
        await teamService.updateTeam(id, req.body);
        res.status(HTTP_STATUS.OK).json(successResponse({}, "Team updated"));
    } catch (error: unknown) {
        next(error);
    }
};

/**
 * Delete a team
 * @param req - Express request object
 * @param res - Express response object
 * @param next - Express next function
 */
export const deleteTeam = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const { id } = req.params;
        await teamService.deleteTeam(id);
        res.status(HTTP_STATUS.OK).json(successResponse({}, "Team deleted"));
    } catch (error: unknown) {
        next(error);
    }
};
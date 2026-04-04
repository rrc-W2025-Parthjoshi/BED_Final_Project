import { Request, Response } from "express";
import { HTTP_STATUS } from "../../../constants/httpsConstants";
import * as teamService from "../services/teamService";

/**
 * Get all teams
 * @param req - Express request object
 * @param res - Express response object
 */
export const getAllTeams = (req: Request, res: Response): void => {
    const teams = teamService.getAllTeams();
    res.status(HTTP_STATUS.OK).json({ message: "Get all teams", data: teams });
};

/**
 * Get a single team by ID
 * @param req - Express request object
 * @param res - Express response object
 */
export const getTeamById = (req: Request, res: Response): void => {
    const { id } = req.params;
    const team = teamService.getTeamById(id);
    res.status(HTTP_STATUS.OK).json({ message: "Get team", data: team });
};

/**
 * Create a new team
 * @param req - Express request object
 * @param res - Express response object
 */
export const createTeam = (req: Request, res: Response): void => {
    const newTeam = teamService.createTeam(req.body);
    res.status(HTTP_STATUS.CREATED).json({ message: "Team created", data: newTeam });
};

/**
 * Update a team
 * @param req - Express request object
 * @param res - Express response object
 */
export const updateTeam = (req: Request, res: Response): void => {
    const { id } = req.params;
    const updatedTeam = teamService.updateTeam(id, req.body);
    res.status(HTTP_STATUS.OK).json({ message: "Team updated", data: updatedTeam });
};

/**
 * Delete a team
 * @param req - Express request object
 * @param res - Express response object
 */
export const deleteTeam = (req: Request, res: Response): void => {
    const { id } = req.params;
    teamService.deleteTeam(id);
    res.status(HTTP_STATUS.OK).json({ message: "Team deleted" });
};
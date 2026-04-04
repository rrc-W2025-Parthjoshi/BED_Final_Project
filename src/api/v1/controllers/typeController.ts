import { Request, Response, NextFunction } from "express";
import * as typeService from "../services/typeService";
import { successResponse } from "../models/responseModel";
import { HTTP_STATUS } from "../../../constants/httpsConstants";

/**
 * Get all types
 * @param req - Express request object
 * @param res - Express response object
 * @param next - Express next function
 */
export const getAllTypes = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const types = await typeService.getAllTypes();
        res.status(HTTP_STATUS.OK).json(successResponse(types, "Get all types"));
    } catch (error: unknown) {
        next(error);
    }
};

/**
 * Get a single type by ID
 * @param req - Express request object
 * @param res - Express response object
 * @param next - Express next function
 */
export const getTypeById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const { id } = req.params;
        const type = await typeService.getTypeById(id);
        res.status(HTTP_STATUS.OK).json(successResponse(type, "Get type"));
    } catch (error: unknown) {
        next(error);
    }
};

/**
 * Create a new type
 * @param req - Express request object
 * @param res - Express response object
 * @param next - Express next function
 */
export const createType = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const typeId = await typeService.createType(req.body);
        res.status(HTTP_STATUS.CREATED).json(successResponse({ id: typeId }, "Type created"));
    } catch (error: unknown) {
        next(error);
    }
};

/**
 * Update a type
 * @param req - Express request object
 * @param res - Express response object
 * @param next - Express next function
 */
export const updateType = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const { id } = req.params;
        await typeService.updateType(id, req.body);
        res.status(HTTP_STATUS.OK).json(successResponse({}, "Type updated"));
    } catch (error: unknown) {
        next(error);
    }
};

/**
 * Delete a type
 * @param req - Express request object
 * @param res - Express response object
 * @param next - Express next function
 */
export const deleteType = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const { id } = req.params;
        await typeService.deleteType(id);
        res.status(HTTP_STATUS.OK).json(successResponse({}, "Type deleted"));
    } catch (error: unknown) {
        next(error);
    }
};
import { Request, Response } from "express";
import * as typeService from "../services/typeService";

/**
 * Get all types
 * @param req - Express request object
 * @param res - Express response object
 */
export const getAllTypes = (req: Request, res: Response): void => {
    const types = typeService.getAllTypes();
    res.status(200).json({ message: "Get all types", data: types });
};

/**
 * Get a single type by ID
 * @param req - Express request object
 * @param res - Express response object
 */
export const getTypeById = (req: Request, res: Response): void => {
    const { id } = req.params;
    const type = typeService.getTypeById(id);
    res.status(200).json({ message: "Get type", data: type });
};

/**
 * Create a new type
 * @param req - Express request object
 * @param res - Express response object
 */
export const createType = (req: Request, res: Response): void => {
    const newType = typeService.createType(req.body);
    res.status(201).json({ message: "Type created", data: newType });
};

/**
 * Update a type
 * @param req - Express request object
 * @param res - Express response object
 */
export const updateType = (req: Request, res: Response): void => {
    const { id } = req.params;
    const updatedType = typeService.updateType(id, req.body);
    res.status(200).json({ message: "Type updated", data: updatedType });
};

/**
 * Delete a type
 * @param req - Express request object
 * @param res - Express response object
 */
export const deleteType = (req: Request, res: Response): void => {
    const { id } = req.params;
    typeService.deleteType(id);
    res.status(200).json({ message: "Type deleted" });
};
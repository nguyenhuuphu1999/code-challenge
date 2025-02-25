import { Request, Response } from "express";
import * as resourceService from "../services/resource.service";

export const createResource = async (req: Request, res: Response) => {
    try {
        const resource = await resourceService.createResource(req.body);
        res.status(201).json(resource);
    } catch (error) {
        res.status(500).json({ error: "Error creating resource" });
    }
};

export const getAllResources = async (req: Request, res: Response) => {
    try {
        const resources = await resourceService.getAllResources();
        res.json(resources);
    } catch (error) {
        res.status(500).json({ error: "Error fetching resources" });
    }
};

export const getResourceById = async (req: Request, res: Response) => {
    try {
        const resource = await resourceService.getResourceById(Number(req.params.id));
        if (!resource) {
            return res.status(404).json({ error: "Resource not found" });
        }
        res.json(resource);
    } catch (error) {
        res.status(500).json({ error: "Error fetching resource" });
    }
};


export const updateResource = async (req: Request, res: Response) => {
    try {
        const resource = await resourceService.updateResource(Number(req.params.id), req.body);
        res.json(resource);
    } catch (error) {
        res.status(500).json({ error: "Error updating resource" });
    }
};

export const deleteResource = async (req: Request, res: Response) => {
    try {
        await resourceService.deleteResource(Number(req.params.id));
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: "Error deleting resource" });
    }
};

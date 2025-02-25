import { AppDataSource } from "../../ormconfig";
import { Resource } from "../entities/resource.entity";

const resourceRepository = AppDataSource.getRepository(Resource);

export const createResource = async (data: { name: string; description?: string }) => {
    const resource = resourceRepository.create(data);
    return resourceRepository.save(resource);
};

export const getAllResources = async () => {
    return resourceRepository.find();
};

export const getResourceById = async (id: number) => {
    return resourceRepository.findOneBy({ id });
};

export const updateResource = async (id: number, data: Partial<Resource>) => {
    await resourceRepository.update(id, data);
    return resourceRepository.findOneBy({ id });
};

export const deleteResource = async (id: number) => {
    await resourceRepository.delete(id);
};

import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
    type: "sqlite",
    database: "database.sqlite",
    synchronize: true, // Chỉ dùng trong môi trường dev
    logging: false,
    entities: ["src/entities/*.ts"],
});

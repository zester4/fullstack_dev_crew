import "reflect-metadata";
import { DataSource } from "typeorm";
import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.resolve(__dirname, '../../../.env') });

// Assuming .env is at the root of the monorepo or backend directory
// Adjust path if necessary based on actual directory structure

const AppDataSource = new DataSource({
    type: process.env.DB_TYPE as any, // 'postgres'
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT || '5432', 10),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    synchronize: process.env.DB_SYNCHRONIZE === 'true', // Use ONLY for development/testing, NOT in production
    logging: process.env.DB_LOGGING === 'true',
    entities: [
        path.join(__dirname, "./entities/**/*.ts") // Location of your TypeORM entities
    ],
    migrations: [
        path.join(__dirname, "./migrations/**/*.ts") // Location of your TypeORM migrations
    ],
    subscribers: [],
});

export default AppDataSource;

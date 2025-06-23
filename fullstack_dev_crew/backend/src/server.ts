import 'reflect-metadata'; // Required by TypeORM
import fastify from 'fastify';
import dotenv from 'dotenv';
import path from 'path';
import cors from '@fastify/cors';
import AppDataSource from './db/data-source';
import { setupRoutes } from './api/routes'; // We will create this file next
import { errorHandler } from './middleware/errorHandler';
import { setupMiddleware } from './middleware'; // We will create this file

dotenv.config({ path: path.resolve(__dirname, '../../.env') });

const server = fastify({
  logger: { level: process.env.NODE_ENV === 'development' ? 'info' : 'warn' }
});

// Register CORS
server.register(cors, {
  origin: process.env.CORS_ORIGIN || '*',
  credentials: true // Allow cookies, if used (e.g., for refresh tokens)
});

// Register middleware (e.g., body parsing is built-in with Fastify)
// We'll add custom middleware setup here later
setupMiddleware(server);

// Register routes
setupRoutes(server);

// Register error handler
server.setErrorHandler(errorHandler);

const start = async () => {
  try {
    // Database Connection
    await AppDataSource.initialize();
    server.log.info("Database connection established");

    const port = parseInt(process.env.PORT || '5000', 10);
    await server.listen({ port, host: '0.0.0.0' }); // Listen on 0.0.0.0 for Docker compatibility

    server.log.info(`Server listening on http://localhost:${port}`);
    server.log.info(`For health check, visit: http://localhost:${port}/health`);

  } catch (err) {
    server.log.error(err);
    process.exit(1);
  }
};

process.on('SIGINT', async () => {
  server.log.info('Shutting down gracefully...');
  await server.close();
  await AppDataSource.destroy();
  server.log.info('Database connection closed.');
  process.exit(0);
});

process.on('SIGTERM', async () => {
  server.log.info('Shutting down gracefully...');
  await server.close();
  await AppDataSource.destroy();
  server.log.info('Database connection closed.');
  process.exit(0);
});

// Health check endpoint
server.get('/health', async (request, reply) => {
  try {
    await AppDataSource.query('SELECT 1'); // Simple DB check
    reply.send({ status: 'ok', database: 'connected' });
  } catch (error) {
    reply.status(500).send({ status: 'error', database: 'disconnected' });
  }
});

start();

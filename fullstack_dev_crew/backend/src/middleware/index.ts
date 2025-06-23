import { FastifyInstance } from 'fastify';
// Import specific middleware here as they are created
// import { authMiddleware } from './auth';
// import { rateLimitMiddleware } from './rateLimiter';

export const setupMiddleware = (server: FastifyInstance) => {
  // Register global or common middleware here
  // Example:
  // server.use(someExpressMiddleware); // If using express compatibility layer

  // For Fastify, middleware are often registered as plugins or hooks
  // Example: Authentication middleware can be a hook or a plugin applied to specific routes/plugins
  // server.addHook('preHandler', authMiddleware);

  // Rate limiting would typically be a plugin
  // server.register(rateLimitPlugin, { /* options */ });

  // For this example, we'll register specific auth middleware on routes later
  // and rely on Fastify's built-in features or dedicated plugins for others.

  // This file serves as a central point to manage middleware registration.
};

// Export specific middleware for route-level application if needed
// export * from './auth';
// export * from './rateLimiter';
// export * from './validation'; // Validation will likely be per-route or handled by Zod in handlers
export * from './errorHandler';

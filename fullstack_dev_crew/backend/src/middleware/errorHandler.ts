import { FastifyReply, FastifyRequest } from 'fastify';
import { ZodError } from 'zod';
import { CustomError } from '../utils/errors'; // We will create this utility

export const errorHandler = (error: any, request: FastifyRequest, reply: FastifyReply) => {
  request.log.error(`Error ${error.statusCode || 500}: ${error.message}`);

  if (error instanceof ZodError) {
    // Handle validation errors from Zod
    reply.status(400).send({
      message: 'Validation Error',
      errors: error.errors.map(e => ({ path: e.path, message: e.message }))
    });
    return;
  }

  if (error instanceof CustomError) {
    // Handle known custom errors (e.g., NotFoundError, UnauthorizedError)
    reply.status(error.statusCode).send({
      message: error.message,
      code: error.statusCode
    });
    return;
  }

  // Handle JWT authentication errors
  // Fastify doesn't have built-in JWT middleware in core, often added via plugin
  // If using a plugin like fastify-jwt, its errors might need specific handling here
  // For now, assume generic 401 for auth failures not caught by custom auth middleware
  if (error.code === 'FST_JWT_AUTHORIZATION_TOKEN_INVALID' || error.code === 'FST_JWT_AUTHORIZATION_TOKEN_EXPIRED') {
     reply.status(401).send({ message: 'Unauthorized: Invalid or expired token', code: 401 });
     return;
  }


  // Generic error handling for unhandled errors
  const statusCode = error.statusCode || 500;
  const message = statusCode >= 500 ? 'Internal Server Error' : error.message || 'An error occurred';

  reply.status(statusCode).send({
    message: message,
    code: statusCode
  });
};

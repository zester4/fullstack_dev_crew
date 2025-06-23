import { FastifyInstance } from 'fastify';
import { authRoutes } from './authRoutes'; // We will create this file next
// Import other route modules here
// import { userRoutes } from './userRoutes';
// import { teamRoutes } from './teamRoutes';
// import { projectRoutes } from './projectRoutes';
// import { taskRoutes } from './taskRoutes';
// import { commentRoutes } from './commentRoutes';
// import { attachmentRoutes } from './attachmentRoutes';
// import { timeEntryRoutes } from './timeEntryRoutes';
// import { reportRoutes } from './reportRoutes';
// import { notificationRoutes } from './notificationRoutes';
// import { searchRoutes } from './searchRoutes';

export const setupRoutes = (server: FastifyInstance) => {
  // Register route modules
  server.register(authRoutes, { prefix: '/v1/auth' });
  // server.register(userRoutes, { prefix: '/v1/users' });
  // server.register(teamRoutes, { prefix: '/v1/teams' });
  // server.register(projectRoutes, { prefix: '/v1/projects' });
  // server.register(taskRoutes, { prefix: '/v1/tasks' });
  // server.register(commentRoutes, { prefix: '/v1/comments' });
  // server.register(attachmentRoutes, { prefix: '/v1/attachments' });
  // server.register(timeEntryRoutes, { prefix: '/v1/time-entries' });
  // server.register(reportRoutes, { prefix: '/v1/reports' });
  // server.register(notificationRoutes, { prefix: '/v1/notifications' });
  // server.register(searchRoutes, { prefix: '/v1/search' });

  // Add other route registrations here
};

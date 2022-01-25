const http = require('http');
const app = require('./server/app');
const mongoo = require('./helper/mongo');
const logger = require('./util/logger');
const { appPort, appHost } = require('./config/global');
const project = require('../package.json');

const server = http.createServer(app);
server.listen(appPort, appHost, () => {
  const ctx = 'index.js-createServer';
  logger.info(ctx, `Starting ${project.name}-server at http://localhost:${appPort}`);
  mongoo.init();
});

// ---- Graceful Shutdown
process.on('SIGTERM', () => {
  const ctx = 'index.js-gracefullShutdown';
  logger.warn(ctx, 'SIGTERM signal received: closing HTTP server');
  server.close(() => {
    logger.warn(ctx, 'HTTP server closed');
  });
});
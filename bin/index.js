const http = require('http');
const app = require('./server/app');
const mongoo = require('./helper/mongo');
const logger = require('./util/logger');
const { appPort } = require('./config/global');

const server = http.createServer(app);
server.listen(appPort, () => {
  const ctx = 'index.js-createServer';
  logger.info(ctx, `Starting at http://localhost:${appPort}`);
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
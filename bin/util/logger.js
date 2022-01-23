const Logger = require('pretty-logger');
// configure level one time, it will be set to every instance of the logger
// Logger.setLevel('warning'); // only warnings and errors will be shown
// Logger.setLevel('warning', true); // only warnings and errors will be shown and no message about the level change will be printed

const customConfig = {
  showMillis: true,
  showTimestamp: true,
  info: 'gray',
  error: ['bgRed', 'bold'],
  debug: 'rainbow'
};

const log = new Logger(customConfig);

const info = (ctx, message) => {
  log.info(ctx, message);
};

const warn = (ctx, message) => {
  log.warn(ctx, message);
};

const error  = (ctx, message, err='') => {
  log.error(ctx, message, err ); // will be red
};

module.exports = {
  error,
  warn,
  info,
};
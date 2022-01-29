const response = require('../../util/response');
const commandSchema = require('./command/schema');
const commandDomain = require('./command/domain');

const addEmailSubscribe = (req, res) => {
  return response.send({
    req, res,
    schema: commandSchema.subscribeEmail,
    domain: commandDomain.subscribeEmail,
  });
};

module.exports = {
  addEmailSubscribe,
};
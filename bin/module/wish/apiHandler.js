const response = require('../../util/response');

const commandSchema = require('./command/schema');
const commandDomain = require('./command/domain');
const querySchema = require('./query/schema');
const queryDomain = require('./query/domain');

const postWish = (req, res) => {
  return response.send({
    req, res,
    schema: commandSchema.postWish,
    domain: commandDomain.postWish,
  });
};

const listWishes = (req, res) => {
  return response.send({
    req, res,
    schema: querySchema.listWishes,
    domain: queryDomain.listWishes,
  });
};

module.exports = {
  postWish,
  listWishes,
};
const response = require('../../util/response');

const schema = require('./command/schema');
const domain = require('./command/domain');

const postWish = (req, res) => {
  return response.send({
    req, res,
    schema: schema.postWish,
    domain: domain.postWish,
  });
};

module.exports = {
  postWish,
};
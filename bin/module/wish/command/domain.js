const { ok } = require('../../../util/response');

const postWish = (payload) => {
  return ok({ data: payload, message: 'success to create a wish, thankyou' });
};

module.exports = {
  postWish,
};
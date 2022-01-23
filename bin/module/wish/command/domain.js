const { v4: uuid } = require('uuid');

const { ok, err } = require('../../../util/response');
const Model = require('../entity');

const postWish = async ({ author, attendace, wish }) => {
  const data = await new Model({
    wishId: uuid(),
    author,
    attendace,
    wish,
  }).save();

  if(!data){
    return err({ message: 'failed to create a wish' });
  }
  return ok({ data, message: 'success to create a wish, thankyou' });
};

module.exports = {
  postWish,
};
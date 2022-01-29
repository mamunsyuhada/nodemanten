const { v4: uuid } = require('uuid');

const { ok, err } = require('../../../util/response');
const Model = require('../entity');

const subscribeEmail = async (payload) => {
  const data = await new Model({
    subcribeId: uuid(),
    ...payload
  }).save();

  if(!data){
    return err({ message: 'failed to create a wish' });
  }
  const { email } = data;
  return ok({
    data,
    message: `success to create a subcribe notification ${email}, thankyou`
  });
};

module.exports = {
  subscribeEmail,
};
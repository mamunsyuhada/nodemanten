const { v4: uuid } = require('uuid');

const { ok, err, ErrorResponsesCode } = require('../../../util/response');
const Model = require('../entity');
const telegram = require('../../../helper/telegram');
const { appDomain } = require('../../../config/global');

const postWish = async (payload) => {
  const { author, wish, attendace } = payload;
  const checkWish = await Model.findOne({ isDeleted: false, author, wish, attendace });
  if (checkWish) {
    return err({ code: ErrorResponsesCode.Conflict, message: 'buat varian pesan lainnya' });
  }
  const wishId = uuid();
  const data = await new Model({
    wishId,
    ...payload
  }).save();

  if (!data) {
    return err({ message: 'failed to create a wish' });
  }
  telegram.sendMessage({message: `delete link: https:${appDomain}/delete/${wishId}`});
  return ok({
    data: { author, attendace, wish },
    message: 'success to create a wish, thankyou'
  });
};

const deleteWish = async ({ wishId }) => {
  const data = await Model.findOneAndUpdate( { wishId }, { isDeleted: true } );
  if (!data) {
    return err({ message: 'failed to create a wish' });
  }
  return ok({ data, message: 'success to create a wish, thankyou' });
};

module.exports = {
  postWish,
  deleteWish,
};
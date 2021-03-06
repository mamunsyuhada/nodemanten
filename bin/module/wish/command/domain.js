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
    ...payload,
  }).save();

  if (!data) {
    return err({ message: 'failed to create a wish' });
  }

  let message = `- author: ${author}\n`;
  message += `- wish: ${wish}\n`;
  message += `- delete link: https:${appDomain}/wish/delete/${wishId}\n`;
  message += `- undelete link: https:${appDomain}/wish/undelete/${wishId}\n`;
  message += `- raw ${data}`;
  telegram.sendMessage({ message });

  return ok({
    data,
    message: 'success to create a wish, thankyou'
  });
};

const deleteWish = async ({ wishId }) => {
  const data = await Model.findOneAndUpdate( { wishId }, { isDeleted: true } );
  if (!data) {
    return err({ message: 'failed to delete a wish' });
  }
  // return ok({ data, message: 'success to delete a wish, thankyou' });
  return ok({ redirect: 'https://heningimam.com' });
};

const undeleteWish = async ({ wishId }) => {
  const data = await Model.findOneAndUpdate( { wishId }, { isDeleted: false } );
  if (!data) {
    return err({ message: 'failed to undelete a wish' });
  }
  // return ok({ data, message: 'success to undelete a wish, thankyou' });
  return ok({ redirect: 'https://heningimam.com' });
};

module.exports = {
  postWish,
  deleteWish,
  undeleteWish,
};

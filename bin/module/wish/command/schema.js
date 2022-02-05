const joi = require('joi');

const postWish =  joi.object({
  author: joi.string().min(1).max(64).required(),
  attendace: joi.string().valid('hadir', 'tidak hadir', 'mungkin hadir').required(),
  wish: joi.string().min(1).max(256).required(),
  isDeleted: joi.boolean().forbidden().default(false),
  userAgent: joi.string().optional(),
});

const deleteWish = joi.object({
  wishId: joi.string().guid().required(),
  userAgent: joi.string().optional(),
});

module.exports = {
  postWish,
  deleteWish,
};
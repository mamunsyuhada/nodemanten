const joi = require('joi');

const listWishes =  joi.object({
  sort: joi.object().unknown().optional().default({ createdAt: -1 }),
  page: joi.number().optional().default(1),
  size: joi.number().optional().default(5),
  userAgent: joi.string().optional(),
});

module.exports = {
  listWishes,
};
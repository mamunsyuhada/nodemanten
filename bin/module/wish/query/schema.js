const joi = require('joi');

const listWishes =  joi.object({
  sort: joi.object().unknown().optional().default({ _id: -1 }),
  page: joi.number().optional().default(1),
  size: joi.number().optional().default(10),
});

module.exports = {
  listWishes,
};
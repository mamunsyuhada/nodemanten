const { pagination, err, ErrorResponsesCode } = require('../../../util/response');
const Model = require('../entity');

const listWishes = async ({ q={}, sort, size, page, }) => {
  q = { ...q, isDeleted: false };
  const data = await Model.aggregate([
    { $match: q },
    { $sort: sort },
    { $skip: size * (page - 1) },
    { $limit: size },
    {
      $project: { _id: 0, wish: 1, author: 1, attendace: 1, createdAt: 1 }
    }
  ]);
  if(!data){
    return err({ message: 'error to list wish, thankyou', code: ErrorResponsesCode.Conflict });
  }
  const countData = (await Model.find(q)).length;
  const meta = {
    size,
    page,
    dataLength: data.length,
    MaxData: countData || 0,
    MaxPage: Math.ceil(countData/size)
  };

  return pagination({ meta, data, message: 'success to list wish, thankyou' });
};

module.exports = {
  listWishes,
};
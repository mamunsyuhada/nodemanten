const ErrorResponsesCode = {
  BadRequest: 400,
  Unauthorized: 401,
  Forbidden: 403,
  NotFound: 404,
  NotAllowed: 405,
  Conflict: 409
};

const OkResponsesCode = {
  Ok: 200,
  Created: 201,
  Deleted: 202,
  NoContent: 204,
};

const err = ({ code = ErrorResponsesCode.BadRequest, message = 'somethings get error' }) => {
  return { error: true, data: null, code, message };
};

const ok = ({ data = '', code = OkResponsesCode.Ok, message = 'your request is success', redirect=false }) => {
  return { error: null, data, code, message, redirect};
};

const pagination = ({
  meta,
  data = '',
  code = OkResponsesCode.Ok,
  message = 'pagination request is success'
}) => {
  return {
    error: null,
    meta,
    data,
    code,
    message,
  };
};

const wrapper = (res, payload) => {
  const { redirect } = payload;
  if(redirect){
    return res.redirect(redirect);
  }
  return res.status(payload.code).send(payload);
};

const send = async ({ req, res, domain, schema = {} }) => {
  if(req.query.q){
    req.query.q = JSON.parse(req.query.q);
  }
  if(req.query.sort){
    req.query.sort = JSON.parse(req.query.sort);
  }
  if(req.query.size){
    req.query.size = JSON.parse(req.query.size);
  }
  if(req.query.page){
    req.query.page = JSON.parse(req.query.page);
  }

  req.payload = { ...req.body, ...req.query, ...req.params, userAgent: req.get('User-Agent') };
  const { error, value } = schema.validate(req.payload);
  if (error) {
    const message = error.details[0].message.replace(/"/g, '');
    return wrapper(res, err({ message }));
  }
  const data = await domain(value);
  return wrapper(res, data);
};

module.exports = {
  ok,
  pagination,
  err,
  send,
  ErrorResponsesCode,
  OkResponsesCode,
  wrapper,
};
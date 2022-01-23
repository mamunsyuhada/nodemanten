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
  return { err: true, data: null, code, message };
};

const ok = ({ data = '', code = OkResponsesCode.Ok, message = 'your request is success' }) => {
  return { err: null, data, code, message, };
};

const wrapper = (res, payload, code = OkResponsesCode.Ok) => {
  return res.status(code).send(payload);
};

const send = async ({ req, res, domain, schema = {} }) => {
  req.payload = { ...req.body, ...req.query, ...req.params };
  const { error, value } = schema.validate(req.payload);
  if (error) {
    const message = error.details[0].message.replace(/"/g, '');
    return wrapper(res, err({ message }), ErrorResponsesCode.BadRequest);
  }
  const data = await domain(value);
  return wrapper(res, data, data.code);
};

module.exports = {
  ok,
  err,
  send,
  ErrorResponsesCode,
  OkResponsesCode,
  wrapper,
};
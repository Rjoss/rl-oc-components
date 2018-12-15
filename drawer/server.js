export const data = (context, callback) => {
  const model = Object.assign({}, context.params);
  return callback(null, model);
};

export const data = (context, callback) => {
  // we can assign any data here but its not usable in the query string
  const localParams = {
    color: 'red'
  };

  const model = Object.assign({}, context.params, {local: localParams});

  // we should explicitly return the params here instead of the whole context params.
  return callback(null, model);
};

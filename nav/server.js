export const data = (context, callback) => {
  // translate params to obj for readability
  let drawers = {
    primary: {
      title: context.params.primary_title,
      visible: context.params.primary_visible
    },
    secondary: {
      title: context.params.secondary_title,
      visible: context.params.secondary_visible
    },
    tertiary: {
      title: context.params.tertiary_title,
      visible: context.params.tertiary_visible
    }
  };

  const model = Object.assign({}, context.params, {
    baseUrl: context.baseUrl,
    staticPath: context.staticPath,
    drawers: drawers
  });

  callback(null, model);
};

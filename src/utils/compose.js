export const compose =
  (...funcs) =>
  param =>
    funcs.reduceRight((y, f) => f(y), param);

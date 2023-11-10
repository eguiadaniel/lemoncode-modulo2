export const concat = (...args: any[]) => {
  let [...arr] = args;
  let flat = arr.flat(1);
  return flat;
};

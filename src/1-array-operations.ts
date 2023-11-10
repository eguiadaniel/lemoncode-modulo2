export const head = (list: any[]): any[] => {
  let [first] = list;
  return first;
};

export const tail = (list: any[]): any[] => {
  let [first, ...rest] = list;
  return rest;
};

export const init = (list: any[]): any[] => {
  let copy = list.slice();
  copy.pop();
  return copy;
};
export const last = (list: any[]): any[] => {
  let copy = list.slice();
  return copy.pop();
};

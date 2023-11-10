import { User } from './ejercicios';

export const clone = (a: User): User => {
  let { name, surname, country } = a;
  let newObj = { name, surname, country };
  console.log(a === newObj);
  return newObj;
};

interface Merge {}
export const merge = (a: User, b: User): User => {
  let merge = { ...b, ...a };
  console.log(merge);
  return merge;
};

import { head, tail, init, last } from './1-array-operations';
import { concat } from './2-concat';
import { clone, merge } from './3-clone-merge';
import { isBookRead } from './4-read-books';
import { SlotMachine } from './5-slot-machine';

document.write('Resultados de los ejercicios en la consola.');

const array1 = [1, 2, 3, 4, 5, 6, 7];
const array2 = ['a', 'b', 'c', 'd'];
const array3 = ['daniel', 'jon', 'isaac', 'pablo'];

export interface User {
  name: string;
  surname?: string;
  country?: string;
  age?: number;
  married?: boolean;
}

export interface Book {
  title: string;
  isRead: boolean;
}

const objA: User = {
  name: 'Maria',
  surname: 'Ibañez',
  country: 'SPA',
  age: 311
};

const objB: User = { name: 'Luisa', age: 31, married: true };

const books: Book[] = [
  { title: 'Harry Potter y la piedra filosofal', isRead: true },
  { title: 'Canción de hielo y fuego', isRead: false },
  { title: 'Devastación', isRead: true }
];

// 1-array-operations.ts
console.log(head, head(array1));
console.log(tail, tail(array1));
console.log(init, init(array1));
console.log(last, last(array1));

// 2-concat.ts
console.log(concat, concat(array1, array2, array3));

// 3-clone-merge.ts
console.log(clone, clone(objA));
console.log(merge, merge(objA, objB));

// 4-read-books.ts
console.log(isBookRead(books, 'Devastación')); // true
console.log(isBookRead(books, 'Canción de hielo y fuego')); // false
console.log(isBookRead(books, 'Los Pilares de la Tierra')); // false

// 5-slot-machine.ts
const machine1 = new SlotMachine();
machine1.play(); // "Good luck next time!!"
machine1.play(); // "Good luck next time!!"
machine1.play(); // "Congratulations!!!. You won 3 coins!!"
machine1.play(); // "Good luck next time!!"
machine1.play(); // "Congratulations!!!. You won 2 coins!!"

// *** Randomness test
// Tenía dudas acerca de lo aleatorio del método, y he probado este test :)

let trueCount = 0;
let falseCount = 0;
const trials = 1000;

for (let i = 0; i < trials; i++) {
  const result = Math.random() >= 0.5;
  if (result) {
    trueCount++;
  } else {
    falseCount++;
  }
}
console.log(
  `Randomness test --> Trials: ${trials}, True: ${trueCount}, False: ${falseCount}`
);

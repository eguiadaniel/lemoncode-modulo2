import { Book } from './ejercicios';

export const isBookRead = (
  books: Book[],
  titleToSearch: string
): boolean | string => {
  const book = books.find((book) => book.title === titleToSearch);
  if (book) {
    return book.isRead;
  } else {
    return 'This book is not in our database';
  }
};

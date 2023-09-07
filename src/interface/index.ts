export type Book = {
  id: number;
  bookTitle: string;
  coverPage: string;
};

export type Books = {
  category: string;
  categoryTitle: string;
  id: number;
  description: string;
  books?: Array<Book>;
};

export type MenuList = {
  src: string;
  sx: object;
};

import React, { useContext } from 'react';
import BookCard from './BookCard';
import BookContext from '../../context/books/booksContext';

const SectionBooks = () => {
  const booksContext = useContext(BookContext);

  const { books } = booksContext;

  console.log(books);
  return (
    <div className="SectionBooks">
      {books.map((book, index) => (
        <BookCard book={book} key={index} />
      ))}
    </div>
  );
};

export default SectionBooks;

import React from 'react';
import { BOOKS } from '../../constants/data';
import BookCard from './BookCard';

const SectionBooks = () => {
  console.log(BOOKS);
  return (
    <div className="SectionBooks">
      {BOOKS.map((book, index) => (
        <BookCard book={book} key={index} />
      ))}
    </div>
  );
};

export default SectionBooks;

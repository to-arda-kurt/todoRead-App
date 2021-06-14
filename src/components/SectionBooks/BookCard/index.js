import React from 'react';
import BookCardImage from './BookCardImage';
import BookCardInfo from './BookCardInfo';
import BookCardInfoExtra from './BookCardInfoExtra';

const BookCard = ({ book }) => {
  const { name } = book;
  return (
    <div className="BookCard">
      <BookCardImage />
      <BookCardInfo book />
      <BookCardInfoExtra />
    </div>
  );
};

export default BookCard;

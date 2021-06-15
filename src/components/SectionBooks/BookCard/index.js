import React from 'react';
import BookCardImage from './BookCardImage';
import BookCardInfo from './BookCardInfo';
import BookCardInfoExtra from './BookCardInfoExtra';

const BookCard = ({ book }) => {
  const { name, author, publisher, page, language, cover } = book;
  return (
    <div className="BookCard">
      <BookCardImage cover={cover} name={name} />
      <BookCardInfo name={name} author={author} />
      <BookCardInfoExtra
        publisher={publisher}
        page={page}
        language={language}
      />
    </div>
  );
};

export default BookCard;

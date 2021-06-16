import React from 'react';
import BookCardImage from './BookCardImage';
import BookCardInfo from './BookCardInfo';
import BookCardInfoExtra from './BookCardInfoExtra';
import { Link } from 'react-router-dom';

const BookCard = ({ book }) => {
  console.log(book);
  const { name, author, publisher, page, language, cover, seoUrl } = book;
  return (
    <div className="BookCard">
      <div className="BookCard-Wrapper">
        <BookCardImage cover={cover} name={name} />
        <BookCardInfo name={name} author={author} />
        <BookCardInfoExtra
          publisher={publisher}
          page={page}
          language={language}
        />
        <Link to={`/book/${seoUrl}`} className="Book-Button">
          Book Page
        </Link>
      </div>
    </div>
  );
};

export default BookCard;

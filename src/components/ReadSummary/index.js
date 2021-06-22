import React, { useContext } from 'react';
import BookContext from '../../context/books/booksContext';
import bookicon from './open-book.png';

const ReadSummary = () => {
  const bookContext = useContext(BookContext);

  const { books } = bookContext;
  const hasReadBooks = books.filter((book) => book.isRead && book);
  const totalPage = hasReadBooks.reduce((total, book) => {
    return total + Number(book.page);
  }, 0);

  return (
    <div className="read-summary">
      <div className="read-summary-img">
        <img src={bookicon} alt="" style={{ height: '10rem' }} />
      </div>
      <div className="read-summary-texts">
        <h3>You've already read {totalPage} pages.</h3>
        <h3>You've read {hasReadBooks.length} books</h3>
        <h3>
          You've {books.length - hasReadBooks.length} to read in your library.
        </h3>
      </div>
    </div>
  );
};

export default ReadSummary;

import React, { useContext, useState, useEffect } from 'react';
import Alert from '../../components/Alert';
import SectionHeader from '../../components/SectionHeader';
import BookContext from '../../context/books/booksContext';

const Book = ({ match }) => {
  const booksContext = useContext(BookContext);
  const { book, getBook } = booksContext;

  const [selectedBook, setSelectedBook] = useState({});

  useEffect(() => {
    if (match.params.seoUrl) {
      getBook(match.params.seoUrl);
      setSelectedBook(book);
    }
  }, [book]);

  const {
    name,
    author,
    publisher,
    page,
    language,
    cover,
    isRead,
    isReading,
    notes,
  } = selectedBook;
  return (
    <>
      {' '}
      {!isReading ? (
        isRead ? (
          <Alert message="You read this book." show />
        ) : (
          <Alert message="You haven't read this book." show />
        )
      ) : null}
      {isReading ? (
        <Alert message={`You are reading this book now...`} show />
      ) : null}
      <SectionHeader header={`${name}`} />
      <section className="book-page-section">
        <div className="book-container">
          <div className="book-page-left-wrapper">
            <div className="book-page-left">
              <div className="book-page-cover">
                <img src={cover} alt={`${name}`} />
              </div>
              <div className="book-page-extra-info t1 my1">
                <h3>
                  <span className="text-italic">Publisher:</span> {publisher}
                </h3>
                <p>{page} Pages</p>
                <p>{language}</p>
              </div>
            </div>
          </div>
          <div className="book-page-right">
            <div className="book-page-right-wrapper">
              <h2 className="text-italic t2">by {author}</h2>
              <p className="t2 my1">{notes}</p>
            </div>
            <div className="book-page-actions">
              <div className="mx1">
                <button className="Book-Button ">
                  {isReading ? `Mark as read` : `Mark as unread`}
                </button>
              </div>
              <div className="mx1">
                <button className="Book-Button ">Edit</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Book;

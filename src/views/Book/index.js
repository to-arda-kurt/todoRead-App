import React, { useContext, useState, useEffect } from 'react';
import Alert from '../../components/Alert';
import SectionHeader from '../../components/SectionHeader';
import BookContext from '../../context/books/booksContext';
import { UPDATE_BOOK } from '../../context/types';

const Book = ({ match }) => {
  const booksContext = useContext(BookContext);

  const { getBook, activeBook, updateBook, updateBooks } = booksContext;
  const [selectedBook, setSelectedBook] = useState(activeBook);

  useEffect(() => {
    getBook(match.params.seoUrl);
    setSelectedBook(activeBook);
  });

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
  } = activeBook;

  const updateHandler = () => {
    const holderBook = { ...activeBook, isRead: !isRead };
    updateBook(holderBook);
    updateBooks(holderBook);
  };

  return (
    <>
      {isRead ? (
        <Alert message="You read this book." show />
      ) : (
        <Alert message="You haven't read this book. Start Reading now." show />
      )}
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
                <button className="Book-Button" onClick={updateHandler}>
                  {!isRead ? `Mark as read` : `Mark as unread`}
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

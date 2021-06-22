import React, { useContext, useState, useEffect } from 'react';
import BookCard from './BookCard';
import BookContext from '../../context/books/booksContext';
import SectionHeader from '../../components/SectionHeader';

const SectionBooks = () => {
  const booksContext = useContext(BookContext);

  const { books } = booksContext;

  const [readingList, setReadingList] = useState(books);

  useEffect(() => {
    setReadingList(books);
  }, [books]);

  console.log(setReadingList);
  return (
    <>
      <SectionHeader header="The Books you’re reading now..." />

      <div className="SectionBooks">
        {readingList.map(
          (book, index) =>
            book.isReading && <BookCard book={book} key={index} />
        )}
      </div>
      <SectionHeader header="All Books" />

      <div className="SectionBooks">
        {readingList.map((book, index) => (
          <BookCard book={book} key={index} />
        ))}
      </div>

      <SectionHeader header="The Books have already read..." />

      <div className="SectionBooks">
        {readingList.map(
          (book, index) => book.isRead && <BookCard book={book} key={index} />
        )}
      </div>
    </>
  );
};

export default SectionBooks;

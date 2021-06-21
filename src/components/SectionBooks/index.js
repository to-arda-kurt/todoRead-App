import React, { useContext, useState, useEffect } from 'react';
import BookCard from './BookCard';
import BookContext from '../../context/books/booksContext';

const SectionBooks = () => {
  const booksContext = useContext(BookContext);

  const { books } = booksContext;

  const [readingList, setReadingList] = useState(books);

  useEffect(() => {
    setReadingList(books);
  }, [books]);

  console.log(setReadingList);
  return (
    <div className="SectionBooks">
      {readingList.map((book, index) => (
        <BookCard book={book} key={index} />
      ))}
    </div>
  );
};

export default SectionBooks;

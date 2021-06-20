import { useReducer } from 'react';
import BooksContext from './booksContext';
import bookReducer from './bookReducer';
import { ADD_BOOK, GET_BOOK } from '../types';
import { v4 as uuidv4 } from 'uuid';
import { paramCase } from 'param-case';

const BooksState = (props) => {
  const initialState = {
    books: [
      {
        _id: '10006546',
        name: 'Book Name 1',
        author: 'Author',
        publisher: 'Publisher',
        language: 'English',
        page: '224',
        date: '',
        notes: 'Note area',
        isRead: false,
        isReading: true,
        cover:
          'https://images-eu.ssl-images-amazon.com/images/I/41n3hGOYYUL._SY291_BO1,204,203,200_QL40_ML2_.jpg',
        seoUrl: 'book-name-1',
      },
      {
        _id: '123145512',
        name: 'Book Name 2',
        author: 'Author',
        publisher: 'Publisher',
        language: 'English',
        page: '224',
        date: '',
        notes: 'Note area',
        isRead: false,
        isReading: true,
        cover:
          'https://images-eu.ssl-images-amazon.com/images/I/41n3hGOYYUL._SY291_BO1,204,203,200_QL40_ML2_.jpg',
        seoUrl: 'book-name-2',
      },
      {
        _id: '4152112213',
        name: 'Book Name 3',
        author: 'Author',
        publisher: 'Publisher',
        language: 'English',
        page: '224',
        date: '',
        notes: 'Note area',
        isRead: false,
        isReading: true,
        cover:
          'https://images-eu.ssl-images-amazon.com/images/I/41n3hGOYYUL._SY291_BO1,204,203,200_QL40_ML2_.jpg',
        seoUrl: 'book-name-3',
      },
      {
        _id: '5123112321',
        name: 'Book Name 4',
        author: 'Author',
        publisher: 'Publisher',
        language: 'English',
        page: '224',
        date: '',
        notes: 'Note area',
        isRead: false,
        isReading: true,
        cover:
          'https://images-eu.ssl-images-amazon.com/images/I/41n3hGOYYUL._SY291_BO1,204,203,200_QL40_ML2_.jpg',
        seoUrl: 'book-name-4',
      },
      {
        _id: '10006546',
        name: 'Book Name 1',
        author: 'Author',
        publisher: 'Publisher',
        language: 'English',
        page: '224',
        date: '',
        notes: 'Note area',
        isRead: false,
        isReading: true,
        cover:
          'https://images-eu.ssl-images-amazon.com/images/I/41n3hGOYYUL._SY291_BO1,204,203,200_QL40_ML2_.jpg',
        seoUrl: 'book-name-1',
      },
      {
        _id: '123145512',
        name: 'Book Name 2',
        author: 'Author',
        publisher: 'Publisher',
        language: 'English',
        page: '224',
        date: '',
        notes: 'Note area',
        isRead: false,
        isReading: true,
        cover:
          'https://images-eu.ssl-images-amazon.com/images/I/41n3hGOYYUL._SY291_BO1,204,203,200_QL40_ML2_.jpg',
        seoUrl: 'book-name-2',
      },
      {
        _id: '4152112213',
        name: 'Book Name 3',
        author: 'Author',
        publisher: 'Publisher',
        language: 'English',
        page: '224',
        date: '',
        notes: 'Note area',
        isRead: false,
        isReading: true,
        cover:
          'https://images-eu.ssl-images-amazon.com/images/I/41n3hGOYYUL._SY291_BO1,204,203,200_QL40_ML2_.jpg',
        seoUrl: 'book-name-3',
      },
      {
        _id: '5123112321',
        name: 'Book Name 4',
        author: 'Author',
        publisher: 'Publisher',
        language: 'English',
        page: '224',
        date: '',
        notes: 'Note area',
        isRead: false,
        isReading: true,
        cover:
          'https://images-eu.ssl-images-amazon.com/images/I/41n3hGOYYUL._SY291_BO1,204,203,200_QL40_ML2_.jpg',
        seoUrl: 'book-name-4',
      },
    ],
    book: {},
  };

  const [state, dispatch] = useReducer(bookReducer, initialState);

  //Functions Will Be Here
  const getBook = (seoUrl) => {
    let selectiveBook = state.books.find((book) => book.seoUrl === seoUrl);

    dispatch({
      type: GET_BOOK,
      payload: selectiveBook,
    });
  };

  const addBook = (book) => {
    let _id = uuidv4();
    let seoUrl = paramCase(book.name);
    let newBook = { ...book, _id, seoUrl };
    console.log(newBook);

    dispatch({
      type: ADD_BOOK,
      payload: newBook,
    });
  };

  return (
    <BooksContext.Provider
      value={{ books: state.books, book: state.book, getBook, addBook }}
    >
      {props.children}
    </BooksContext.Provider>
  );
};

export default BooksState;

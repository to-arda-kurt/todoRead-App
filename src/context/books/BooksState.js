import { useReducer } from 'react';
import BooksContext from './booksContext';
import bookReducer from './bookReducer';
import { ADD_BOOK, GET_BOOK, UPDATE_BOOK, UPDATE_BOOKS } from '../types';
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
        seoUrl: 'book-name-1251',
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
        seoUrl: 'book-name-1512',
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
        seoUrl: 'book-name-15123',
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
        seoUrl: 'book-name-125',
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
        seoUrl: 'book-name-1151',
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
        seoUrl: 'book-name-12',
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
        seoUrl: 'book-name-111245',
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
        seoUrl: 'book-name-315t2',
      },
    ],
    activeBook: {
      _id: '',
      name: '',
      author: '',
      publisher: '',
      language: '',
      page: '',
      date: '',
      notes: '',
      isRead: null,
      isReading: null,
      cover: 'null',
      seoUrl: '',
    },
  };

  const [state, dispatch] = useReducer(bookReducer, initialState);

  const getBook = (seoUrl) => {
    let selectedBook = state.books.find((book) => book.seoUrl === seoUrl);

    dispatch({
      type: GET_BOOK,
      payload: selectedBook,
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

  const updateBook = (book) => {
    dispatch({ type: UPDATE_BOOK, payload: book });
  };

  const updateBooks = (book) => {
    dispatch({ type: UPDATE_BOOKS, payload: book });
  };

  return (
    <BooksContext.Provider
      value={{
        books: state.books,
        activeBook: state.activeBook,
        getBook,
        addBook,
        updateBook,
        updateBooks,
      }}
    >
      {props.children}
    </BooksContext.Provider>
  );
};

export default BooksState;

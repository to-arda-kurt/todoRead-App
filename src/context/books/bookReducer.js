import { ADD_BOOK, GET_BOOK, UPDATE_BOOK, UPDATE_BOOKS } from '../types';

// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
  switch (action.type) {
    case GET_BOOK:
      return {
        ...state,
        activeBook: action.payload,
      };

    case ADD_BOOK:
      return {
        ...state,
        books: [...state.books, action.payload],
      };

    case UPDATE_BOOK:
      return {
        ...state,
        activeBook: action.payload,
      };
    case UPDATE_BOOKS:
      return {
        ...state,
        books: state.books.map((book) =>
          book._id === action.payload._id ? action.payload : book
        ),
      };
    default:
      return state;
  }
};

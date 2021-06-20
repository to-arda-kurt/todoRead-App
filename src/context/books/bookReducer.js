import { ADD_BOOK, GET_BOOK } from '../types';

// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
  switch (action.type) {
    case GET_BOOK:
      return {
        ...state,
        book: action.payload,
      };
    case ADD_BOOK:
      return {
        ...state,
        books: [...state.books, action.payload],
      };
    default:
      return state;
  }
};

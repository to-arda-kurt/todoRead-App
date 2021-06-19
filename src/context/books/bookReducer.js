import { GET_BOOK } from '../types';

// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
  switch (action.type) {
    case GET_BOOK:
      return {
        ...state,
        book: action.payload,
      };
    default:
      return state;
  }
};

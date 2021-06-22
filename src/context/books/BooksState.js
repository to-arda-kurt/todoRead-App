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
        _id: '9781492032632',
        name: 'Hands-On Machine Learning',
        author: 'Aurélien Géron',
        publisher: "O'Reilly Media, Inc.",
        language: 'English',
        page: '1281',
        date: '',
        notes:
          'Hands-On Machine Learning with Scikit-Learn, Keras, and TensorFlow, 2nd Edition',
        isRead: true,
        isReading: false,
        cover: 'https://learning.oreilly.com/library/cover/9781492032632/',
        seoUrl: 'Hands-On-Machine-Learning',
      },
      {
        _id: '9781491903063',
        name: 'Designing Data-Intensive Applications',
        author: 'Martin Kleppmann',
        publisher: "O'Reilly Media, Inc.",
        language: 'English',
        page: '1032',
        date: '',
        notes: 'Designing Data-Intensive Applications',
        isRead: false,
        isReading: true,
        cover: 'https://learning.oreilly.com/library/cover/9781491903063/',
        seoUrl: 'Designing-Data-Intensive-Applications',
      },
      {
        _id: '9780135917411',
        name: 'Python Fundamentals & Video Content',
        author: 'Paul J. Deitel',
        publisher: "O'Reilly Media, Inc.",
        language: 'English',
        page: '1910',
        date: '',
        notes: '51+ hours of video instruction',
        isRead: false,
        isReading: false,
        cover: 'https://learning.oreilly.com/library/cover/9780135917411/',
        seoUrl: 'Python-Fundamentals',
      },
      {
        _id: '9781492056348',
        name: 'Fluent Python, 2nd Edition',
        author: 'Luciano Ramalho',
        publisher: "O'Reilly Media, Inc.",
        language: 'English',
        page: '1156',
        date: '',
        notes:
          'Python’s simplicity lets you become productive quickly, but often this means you aren’t using everything it has to offer. With the updated edition of this hands-on guide, you’ll learn how to write effective, modern Python 3 code by leveraging its best ideas.',
        isRead: false,
        isReading: true,
        cover: 'https://learning.oreilly.com/library/cover/9781492056348/',
        seoUrl: 'Fluent-Python-2nd-Edition',
      },
      {
        _id: '0241988268',
        name: 'The Thursday Murder Club',
        author: 'Richard Osman',
        publisher: 'Penguin',
        language: 'English',
        page: '400',
        date: '',
        notes:
          'THE FIRST BOOK IN THE #1 BESTSELLING THURSDAY MURDER CLUB SERIES BY TV PRESENTER RICHARD OSMAN ',
        isRead: false,
        isReading: false,
        cover:
          'https://images-na.ssl-images-amazon.com/images/I/51B1gVTuEdS._SX324_BO1,204,203,200_.jpg',
        seoUrl: 'The-Thursday-Murder-Club',
      },
      {
        _id: '1529105102',
        name: 'The Boy, The Mole, The Fox and The Horse',
        author: 'Charlie Mackesy',
        publisher: 'Ebury Press',
        language: 'English',
        page: '128',
        date: '',
        notes:
          "'A wonderful work of art and a wonderful window into the human heart' Richard Curtis ",
        isRead: false,
        isReading: true,
        cover:
          'https://m.media-amazon.com/images/P/B07WFWXFP8.01._SCLZZZZZZZ_SX500_.jpg',
        seoUrl: 'The-Boy-The-Mole-The-Fox-and-The-Horse',
      },
      {
        _id: '4152112213',
        name: 'Poems of Nazim Hikmet (Karen and Michael Braziller Books)',
        author: 'Nazim Hikmet',
        publisher: 'W. W. Norton & Company',
        language: 'English',
        page: '224',
        date: '',
        notes:
          "This exciting new edition of the poems of Nazim Hikmet adds more than twenty poems never before available in English. The Blasing/Konuk translations, already acclaimed for the past quarter-century for their accuracy and grace, convey Hikmet's compassionate, accessible voice with the subtle music innovative form, and emotional directness of the originals.",
        isRead: false,
        isReading: true,
        cover:
          'https://images-na.ssl-images-amazon.com/images/I/41IPHylCe0L._SX324_BO1,204,203,200_.jpg',
        seoUrl: 'Poems-of-Nazim-Hikmet',
      },
      {
        _id: 'B011T6O6Z8',
        name: 'The City & City',
        author: 'China Miéville',
        publisher: 'Audible Studios',
        language: 'English',
        page: '346',
        date: '',
        notes:
          "Borl must travel from the decaying Beszel to the only metropolis on Earth as strange as his own. This is a border crossing like no other, a journey as psychic as it is physical, a shift in perception, a seeing of the unseen. His destination is Beszel's equal, rival, and intimate neighbor, the rich and vibrant city of Ul Qoma. With Ul Qoman detective Qussim Dhatt, and struggling with his own transition, Borl is enmeshed in a sordid underworld of rabid nationalists intent on destroying their neighbouring city, and unificationists who dream of dissolving the two into one. As the detectives uncover the dead woman's secrets, they begin to suspect a truth that could cost them and those they care about more than their lives.        ",
        isRead: true,
        isReading: false,
        cover:
          'https://images-eu.ssl-images-amazon.com/images/I/51lmKxPUEIL._SY291_BO1,204,203,200_QL40_ML2_.jpg',
        seoUrl: 'the-city-city',
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

  const getBookbyId = (id) => {
    let bookById = state.books.find((book) => book._id === id);
    console.log(bookById);
    dispatch({
      type: GET_BOOK,
      payload: bookById,
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
        getBookbyId,
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

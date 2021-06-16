import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './layouts/Header';
import Alert from './components/Alert';
import Footer from './layouts/Footer';
import ReadList from './views/ReadList';
import Book from './views/Book';
import AddBook from './views/AddBook';

import BooksState from './context/books/BooksState';

function App() {
  return (
    <BooksState>
      <Router>
        <Header />
        <Alert message={`Alert Messages`} />
        <Switch>
          <Route path="/book/:seoUrl" component={Book} />
          <Route exact path="/add-book" component={AddBook} />
          <Route path="/" component={ReadList} />
        </Switch>
        {/* <Footer /> */}
      </Router>
    </BooksState>
  );
}

export default App;

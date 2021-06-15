import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './layouts/Header';
import Alert from './components/Alert';
import Footer from './layouts/Footer';
import ReadList from './views/ReadList';
import AddBook from './views/AddBook';

function App() {
  return (
    <Router>
      <Header />
      <Alert message={`Alert Messages`} />
      <Switch>
        <Route exact path="/add-book" component={AddBook} />
        <Route path="/" component={ReadList} />
      </Switch>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;

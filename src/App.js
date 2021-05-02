import logo from './logo.svg';
import './App.css';
import firebase from 'firebase';
import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom';

import Form from './components/Form/Form';
import About from './components/About/About';
import Impressum from './components/Impressum/Impressum';
import Data from './components/Data/Data';
import Footer from './components/Footer/Footer';

function App() {
  const firebaseApp = firebase.apps[0];

  return (
    <div className='App'>
      <BrowserRouter>
        <Switch>
          <Route exact path='/'>
            <div className='section-hero'>
              <Form />
              <Footer />
            </div>
          </Route>
          <Route path='/about'>
            <About />
          </Route>
          <Route path='/impressum'>
            <Impressum />
          </Route>
          <Route path='/data'>
            <Data />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

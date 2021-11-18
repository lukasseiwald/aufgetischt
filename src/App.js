// import logo from './logo.svg';
import './App.css';
// import {
//   BrowserRouter,
//   Switch,
//   Route,
// } from 'react-router-dom';

// import Form from './components/Form/Form';
// import Gallery from './components/Gallery/Gallery';
// import TriggerWarning from './components/TriggerWarning/TriggerWarning';
// import About from './components/About/About';
// import Impressum from './components/Impressum/Impressum';
// import Data from './components/Data/Data';
// import Footer from './components/Footer/Footer';
// import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import GoodBye from './components/GoodBye/GoodBye';


function App() {
  // const firebaseApp = firebase.apps[0];

  return (
    <div className='App'>
      <GoodBye />
      {/* <BrowserRouter>
        <ScrollToTop />
        <Switch>
          <Route exact path='/'>
            <div className='app-container'>
              <div className='section-form' id='form'>
                <Form />
              </div>
              <div className='section-gallery'>
                <Gallery />
              </div>
              <Footer />
              <TriggerWarning />
            </div>
          </Route>
          <Route path='/about'>
            <About />
            <div className='footer-sub-container'>
              <Footer />
            </div>
          </Route>
          <Route path='/impressum'>
            <Impressum />
            <div className='footer-sub-container'>
              <Footer />
            </div>
          </Route>
          <Route path='/data'>
            <Data />
            <div className='footer-sub-container'>
              <Footer />
            </div>
          </Route>
        </Switch>
      </BrowserRouter> */}
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import firebase from 'firebase';

import Form from './components/Form/Form';

function App() {
  const firebaseApp = firebase.apps[0];

  return (
    <div className="App">
      <div className="section-hero">
        <Form />
      </div>
    </div>
  );
}

export default App;

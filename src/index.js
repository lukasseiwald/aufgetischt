import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from 'firebase/app';
import './fonts/Roboto-Regular.ttf'; 

firebase.initializeApp({
  apiKey: 'AIzaSyBOoRF94KTVva5_tvyHh5wN--fYvgBOEuw',
  authDomain: 'aufgetischt-a8cc6.firebaseapp.com',
  projectId: 'aufgetischt-a8cc6',
  databaseURL: 'https://aufgetischt-a8cc6-default-rtdb.europe-west1.firebasedatabase.app',
  storageBucket: 'aufgetischt-a8cc6.appspot.com',
  messagingSenderId: '978121975652',
  appId: '1:978121975652:web:66a46c1a2adede6d91fc71'
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

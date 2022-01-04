import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import * as firebase from 'firebase';
import firebase from "firebase/app";
import "firebase/firestore";

// const firebaseConfig = {
//   apiKey: "AIzaSyCPTsEij8GACXzV2bQlKwvOnNk6C5jRZUQ",
//   authDomain: "cart-33153.firebaseapp.com",
//   projectId: "cart-33153",
//   storageBucket: "cart-33153.appspot.com",
//   messagingSenderId: "823207385955",
//   appId: "1:823207385955:web:837bc7fc4a540dca651156"
// };
const firebaseConfig = {
  apiKey: "AIzaSyCPTsEij8GACXzV2bQlKwvOnNk6C5jRZUQ",
  authDomain: "cart-33153.firebaseapp.com",
  projectId: "cart-33153",
  storageBucket: "cart-33153.appspot.com",
  messagingSenderId: "823207385955",
  appId: "1:823207385955:web:837bc7fc4a540dca651156"
}; 

//initialize firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  // <React.StrictMode>
    <App />,
  // </React.StrictMode>,
  document.getElementById('root')
);



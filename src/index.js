import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals'; 
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBfzhXtCij85qArFvnYsPgOExLeQh83oP0",
  authDomain: "chit-chat-app-b185c.firebaseapp.com",
  databaseURL: "https://chit-chat-app-b185c-default-rtdb.firebaseio.com",
  projectId: "chit-chat-app-b185c",
  storageBucket: "chit-chat-app-b185c.appspot.com",
  messagingSenderId: "526099840051",
  appId: "1:526099840051:web:bcec6a4b131bcfdb53b746",
  measurementId: "G-9QYC9BC2WL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import express from 'express';
import bodyParser from 'body-parser';

const app = express();

const port = process.env.PORT || 3010;

app.listen(port, (req, res) => {
  console.log(`Server is running on port ${port}`)
})

app.use(bodyParser.json());

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

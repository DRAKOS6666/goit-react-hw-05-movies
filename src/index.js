import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import { BrowserRouter } from 'react-router-dom';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './index.module.css';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App className="App" />
    </BrowserRouter>
    <ToastContainer
      position="bottom-center"
      autoClose={4000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
    />
  </React.StrictMode>,
  document.getElementById('root'),
);

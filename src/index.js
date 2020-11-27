import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from "react-redux";
import { SnackbarProvider } from 'notistack';
import store from "./redux/store";
require('dotenv').config()

ReactDOM.render(
  <Provider store={store}>
    <SnackbarProvider maxSnack={5} anchorOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}>
      <App />
    </SnackbarProvider>
  </Provider>,
  document.getElementById('root')
);
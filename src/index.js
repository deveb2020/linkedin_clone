import React from 'react';
import ReactDOM from 'react-dom';
import './Style/index.css';
import App from './Components/App';
import { createStore } from "redux"
import rootReducers from './Redux/rootReducer'
import { Provider } from 'react-redux'


const store = createStore( rootReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() )


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


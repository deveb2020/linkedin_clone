import React from 'react';
import ReactDOM from 'react-dom';
import './Style/index.css';
import App from './Components/App';
import { createStore } from "redux"
import rootReducers from './Redux/rootReducer'
import { Provider } from 'react-redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import { PersistGate } from 'redux-persist/integration/react'

//Redux Persist
const persistConfig = {
  key: 'rootReducers',
  storage,
  whitelist: ['logInStatus', 'name', 'email', 'userProfilPhoto', 'posts'] // all the selected states will be preserved
}

const persistedReducer = persistReducer( persistConfig, rootReducers)

const store = createStore( persistedReducer , window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() )

const persistor = persistStore(store)



ReactDOM.render(
  <React.StrictMode>

    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>  
    </Provider>

  </React.StrictMode>,
  document.getElementById('root')
);


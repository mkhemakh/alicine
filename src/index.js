import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { applyMiddleware, compose, createStore } from 'redux';
import App from './App';
import rootReducer from './reducer/reducer'
import "./style/pages/index.scss"
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { PersistGate } from 'redux-persist/integration/react'

const persistConfig = {
  key: 'main-root',
  storage
};

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = createStore(
  persistedReducer );
  
let persistor = persistStore(store)

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(

    <BrowserRouter>
    <Provider store={store} >
      <PersistGate loading={null} persistor={persistor}>
      <App />
      </PersistGate>
    </Provider>

    </BrowserRouter>
  
);


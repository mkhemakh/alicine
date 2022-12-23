import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import "./style/pages/index.scss"
import { PersistGate } from 'redux-persist/integration/react'
import {store, persistedStore} from './store';



const root = ReactDOM.createRoot(document.getElementById('root'));


root.render( 
    <Provider store={store} >
      <PersistGate loading={null} persistor={persistedStore}>
      <App  />
      </PersistGate>
    </Provider> 
);


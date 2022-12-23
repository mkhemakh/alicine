import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import rootReducer from './reducer/reducer'
import { configureStore } from '@reduxjs/toolkit';
import autoMergeLevel2 from 'redux-persist/es/stateReconciler/autoMergeLevel2';

const persistConfig = {
    key: 'root',
    storage,  
  }; 
  const persistedReducer = persistReducer(persistConfig, rootReducer)
  const middleware = applyMiddleware(thunk);

 export const store = configureStore({
    reducer: persistedReducer,
    stateReconciler: autoMergeLevel2,
    middleware: [thunk]
 });

 export const persistedStore =  persistStore(store);
    
    


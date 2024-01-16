// storeFront.js
import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import rootReducerFront from '../Reducer/rootReducerFront';

const persistConfigFront = {
  key: 'rootFront',
  storage: storage,
};

const persistedReducerFront = persistReducer(persistConfigFront, rootReducerFront);

const storeFront = createStore(persistedReducerFront);
const persistorFront = persistStore(storeFront);

export { storeFront, persistorFront };
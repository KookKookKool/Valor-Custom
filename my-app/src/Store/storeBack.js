// storeBack.js
import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import rootReducerBack from '../Reducer/rootReducerBack';

const persistConfigBack = {
  key: 'rootBack',
  storage: storage,
};

const persistedReducerBack = persistReducer(persistConfigBack, rootReducerBack);

const storeBack = createStore(persistedReducerBack);
const persistorBack = persistStore(storeBack);

export { storeBack, persistorBack };


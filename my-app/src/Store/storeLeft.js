// storeRight.js
import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import rootReducerLeft from '../Reducer/rootReducerLeft';

const persistConfigLeft = {
  key: 'rootLeft',
  storage: storage,
};

const persistedReducerLeft = persistReducer(persistConfigLeft, rootReducerLeft);

const storeLeft = createStore(persistedReducerLeft);
const persistorLeft = persistStore(storeLeft);

export { storeLeft, persistorLeft };

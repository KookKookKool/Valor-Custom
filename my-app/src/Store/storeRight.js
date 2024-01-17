// storeRight.js
import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import rootReducerRight from '../Reducer/rootReducerRight';

const persistConfigRight = {
  key: 'rootRight',
  storage: storage,
};

const persistedReducerRight = persistReducer(persistConfigRight, rootReducerRight);

const storeRight = createStore(persistedReducerRight);
const persistorRight = persistStore(storeRight);

export { storeRight, persistorRight };

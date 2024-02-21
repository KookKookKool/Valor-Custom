// storePatch.js
import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import rootReducerPatch from '../Reducer/rootReducerPatch';

const persistConfigPatch = {
  key: 'rootPatch',
  storage: storage,
};

const persistedReducerPatch = persistReducer(persistConfigPatch, rootReducerPatch);

const storePatch = createStore(persistedReducerPatch);
const persistorPatch = persistStore(storePatch);

export { storePatch, persistorPatch };

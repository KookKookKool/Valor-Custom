// store.js
import { createStore, combineReducers } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import { whiteFrontReducer } from './Actions/whiteFrontReducer'; // Import the correct reducers
import { whiteBackReducer } from './Actions/whiteBackReducer'; 

const persistConfig = {
  key: 'root',
  storage,
};

const rootReducer = combineReducers({
  whiteFront: whiteFrontReducer,
  whiteBack: whiteBackReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer);
const persistor = persistStore(store);

export { store, persistor };

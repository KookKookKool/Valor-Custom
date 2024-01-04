// store.js
import { createStore, combineReducers } from 'redux';
import imagesReducer from './Actions/reducer'; 

const rootReducer = combineReducers({
  images: imagesReducer,
});

const store = createStore(rootReducer);  

export default store;

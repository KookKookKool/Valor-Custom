// store.js
import { createStore } from 'redux';
import imageReducer from './Actions/reducer';

const store = createStore(imageReducer);

export default store;

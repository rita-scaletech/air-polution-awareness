import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk'; // Example middleware, you can add more if needed
import rootReducer from 'store/reducer';

// Combine all your reducers into a single root reducer
const combinedReducers = combineReducers(rootReducer);

// Create the store with the combined reducer and apply middleware
const store = createStore(combinedReducers, applyMiddleware(thunk));

export default store;

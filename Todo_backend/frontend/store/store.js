import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/root_reducer';
import myThunk from '../middleware/thunk';
import logger from 'redux-logger'

const configureStore = (preloadedState = {}) => {
  const store = createStore(rootReducer, preloadedState, applyMiddleware(myThunk, logger));

  store.subscribe(() => {
    localStorage.state = JSON.stringify(store.getState());
  });

// store.dispatch((dispatch) => {
//   console.log('If this prints out, the thunk middleware is working!')
// });
  return store;

}

export default configureStore;

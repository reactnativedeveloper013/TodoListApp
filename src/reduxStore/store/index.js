import {applyMiddleware, createStore} from 'redux';
import promise from 'redux-promise-middleware';
import thunk from 'redux-thunk';
import {rootReducer} from '../reducers';

function getMiddlewares() {
  const middlewares = [thunk, promise];
  return middlewares;
}

export const configureStore = initialState => {
  const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(...getMiddlewares()),
  );

  return store;
};

export const store = configureStore();

//compose creates a bunch of functions to be call when you want to the store
import {compose, createStore, applyMiddleware} from 'redux';
import thunk from 'react-thunk';
import logger from 'react-logger';

import reduces from './reducers';

const middlewares = applyMiddleware(thunk, logger);

const store = createStore(reducers, compose(
  middleware,
  window.devToolsExtension ? window.devToolsExtension() : f => f
));

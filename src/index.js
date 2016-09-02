import React from 'react';
import { render } from 'react-dom';

import App from './components/App'
import {Provider} from 'react-redux';
import store from './store'
render(
  <Provide store={store}>
    <App/> 
  </Provide>
  document.getElementById('root')
);

import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import {reducers} from '../reducers';

const store = createStore(
  reducers,
  // window[__REDUX_DEVTOOLS_EXTENSION__ ]&& window.__REDUX_DEVTOOLS_EXTENSION__()

  composeWithDevTools(applyMiddleware(thunk))
);

store.subscribe(() => {
  console.log(store);
});

export default store;

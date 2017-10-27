import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import rootReducer from '../reducers/root';
import { composeWithDevTools } from 'redux-devtools-extension';

export const history = createHistory();

const middleware = routerMiddleware(history);

const store = createStore(
  rootReducer, composeWithDevTools(applyMiddleware(thunk, middleware)));

export default store;
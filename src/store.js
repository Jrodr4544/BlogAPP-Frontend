import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './reducers/index'
import thunk from 'redux-thunk'

// composing all enhancers below into one
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// composing middleware below
const enhancer = composeEnhancers(
  applyMiddleware(thunk),
  // add other store enhancers if any
);

export function configureStore(){
  return createStore(rootReducer, enhancer)
}

const store = configureStore()

export default store
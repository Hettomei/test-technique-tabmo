import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk";

import { pokeapi } from "./reducers/pokeapi";
import { cart } from "./reducers/cart";

// TODO : remove when goes in production, improve with process.env.NODE_ENV === 'production'
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export function buildStore() {
  const reducer = combineReducers({
    pokeapi,
    cart
  });

  return createStore(reducer, composeEnhancers(applyMiddleware(thunk)));
}

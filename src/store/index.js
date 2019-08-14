import { createStore, compose, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

// CONFIG
import reducers from "./ducks";
import sagas from "./sagas";

// prettier-ignore
const SAGA_MONITOR = process.env.NODE_ENV === "development" ? console.tron.createSagaMonitor(): null;
const SAGA_MIDDLEWARE = createSagaMiddleware({ SAGA_MONITOR });

const MIDDLEWARES = [];
MIDDLEWARES.push(SAGA_MIDDLEWARE);

const COMPOSER =
  process.env.NODE_ENV === "development"
    ? compose(
        applyMiddleware(...MIDDLEWARES),
        console.tron.createEnhancer()
      )
    : applyMiddleware(...MIDDLEWARES);

// prettier-ignore
const store = createStore(reducers, COMPOSER);

SAGA_MIDDLEWARE.run(sagas);

export default store;

import { createStore, applyMiddleware } from 'redux';
import getRootReducer  from './reducers';
import createSagaMiddleware from 'redux-saga';
import { createReactNavigationReduxMiddleware, createReduxBoundAddListener } from 'react-navigation-redux-helpers';
import logger from 'redux-logger';
import authSaga from './sagas/auth';
import userSaga from './sagas/user';
import marketSaga from './sagas/market';

//create middleware
const sagaMiddleware = createSagaMiddleware();
const navMiddleware = createReactNavigationReduxMiddleware(
    "root",
    state => state.nav
);

export const addListener = createReduxBoundAddListener("root");

export default function getStore(){
    const store = createStore(
        getRootReducer(),
        {},
        applyMiddleware(navMiddleware,sagaMiddleware,logger)
    );

    sagaMiddleware.run(authSaga);
    sagaMiddleware.run(userSaga);
    sagaMiddleware.run(marketSaga);
    return store;
}




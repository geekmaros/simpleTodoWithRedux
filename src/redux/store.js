import {createStore, applyMiddleware, compose} from 'redux'
import logger from 'redux-logger'
import {persistStore} from "redux-persist";
import rootReducer from './root-reducer'
//redux

const middleware = [logger]
const composeEnhaccer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(rootReducer,composeEnhaccer(applyMiddleware(...middleware)))
export const  persitor = persistStore(store)

export default {store, persitor}

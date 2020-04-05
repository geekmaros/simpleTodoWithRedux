import {createStore, applyMiddleware, compose} from 'redux'
import logger from 'redux-logger'
import rootReducer from './root-reducer'
//redux

const middleware = [logger]
const composeEnhaccer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer,composeEnhaccer(applyMiddleware(...middleware)))

export default store

import { combineReducers, createStore, applyMiddleware } from "redux"

import {repos} from "../_reducers/repos"
import {promise, logger} from "./middleware"

const rootReducers = combineReducers({
    repos   
})


const store = createStore(rootReducers, applyMiddleware(promise,logger))

export default store;
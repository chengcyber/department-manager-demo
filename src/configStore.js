// import React from 'react'
import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import createDebounce from 'redux-debounced';
import reducers from './reducer'

const loggerMiddleware = createLogger({
})

const debounceMiddleware = createDebounce()

const initialStore = {
}

const middlewares = [
  thunkMiddleware, // lets us dispatch() functions
  debounceMiddleware, // debounce action
  loggerMiddleware, // neat middleware that logs actions
]

const composeEnhance = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

// Add the reducer to your store on the `routing` key
const configStore = () =>
  createStore(
    reducers,
    initialStore,
    composeEnhance(
      applyMiddleware(
        ...middlewares
      )
    ),
  )

export default configStore

import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

// Custom components & helpers
import reducer from './reducer'

// Redux middlewares
const middlewares = applyMiddleware(thunk)

// Enable redux devtools extention for non-prod environments
const composeEnhancer =
  process.env === 'production' ? middlewares : composeWithDevTools(middlewares)

const store = createStore(reducer, composeEnhancer)

export default store

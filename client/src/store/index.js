import {composeWithDevTools} from 'react-devtools-extension'
import {applyMiddleware, createStore} from 'redux'
import thunk from 'redux-thunk'
import rootReducer from from
'../reducers'

export default store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))
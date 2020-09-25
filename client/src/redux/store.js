import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import volunteerReducer from './volunteer/volunteerReduer'

const rootReducer = combineReducers({
    volunteer : volunteerReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store
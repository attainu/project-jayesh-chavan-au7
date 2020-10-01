import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import volunteerReducer from './volunteer/volunteerReduer'
import bloodBankReducer from './bloodBank/bloodBankReducer'

const rootReducer = combineReducers({
    volunteer : volunteerReducer,
    bloodBank : bloodBankReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store
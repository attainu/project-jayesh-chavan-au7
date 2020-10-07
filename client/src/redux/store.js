import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import volunteerReducer from './volunteer/volunteerReduer'
import bloodBankReducer from './bloodBank/bloodBankReducer'
import bloodBankSearchReducer from './bloodBankSearch/bloodBankSearchReducer'
import volunteerSearchReducer from './volunteerSearch/volunteerSearchReducer'
import organiseStateReducer from './organiserState/organiseStateReducer'

const rootReducer = combineReducers({
    volunteer : volunteerReducer,
    bloodBank : bloodBankReducer,
    allBloodBanks : bloodBankSearchReducer,
    allVolunteers : volunteerSearchReducer,
    organisedCamp : organiseStateReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store
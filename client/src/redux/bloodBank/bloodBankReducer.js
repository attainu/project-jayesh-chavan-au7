import { FETCH_BLOOD_BANK_REQUEST, FETCH_BLOOD_BANK_SUCCESS, FETCH_BLOOD_BANK_FAILURE } from './bloodBankType'

const initialState = {
    loading : false,
    bloodBank : {},
    error : ''
}

const bloodBankReducer = (state = initialState, action) => {

    switch (action.type) {
        case FETCH_BLOOD_BANK_REQUEST:
            return{
                ...state,
                loading : true
            }
        case FETCH_BLOOD_BANK_SUCCESS:
            return{
                ...state,
                loading : false,
                bloodBank : {...action.payload}
            }
        case FETCH_BLOOD_BANK_FAILURE:
            return{
                ...state,
                loading : false,
                error : action.payload
            }
        default:
            return state;
    }
}

export default bloodBankReducer
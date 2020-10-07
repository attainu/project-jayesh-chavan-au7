import { FETCH_BLOOD_BANK_SEARCH_REQUEST, FETCH_BLOOD_BANK_SEARCH_SUCCESS, FETCH_BLOOD_BANK_SEARCH_FAILURE } from './bloodBankSearchType'

const initialState = {
    loading : false,
    AllBloodBank : {},
    error : ''
}

const bloodBankSearchReducer = (state = initialState, action) => {

    switch (action.type) {
        case FETCH_BLOOD_BANK_SEARCH_REQUEST:
            return{
                ...state,
                loading : true
            }
        case FETCH_BLOOD_BANK_SEARCH_SUCCESS:
            return{
                ...state,
                loading : false,
                AllBloodBank : {...action.payload}
            }
        case FETCH_BLOOD_BANK_SEARCH_FAILURE:
            return{
                ...state,
                loading : false,
                error : action.payload
            }
        default:
            return state;
    }
}

export default bloodBankSearchReducer
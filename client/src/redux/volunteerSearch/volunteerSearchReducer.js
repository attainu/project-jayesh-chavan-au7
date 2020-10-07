import { FETCH_VOLUNTEER_SEARCH_REQUEST, FETCH_VOLUNTEER_SEARCH_SUCCESS, FETCH_VOLUNTEER_SEARCH_FAILURE } from './volunteerSearchType'

const initialState = {
    loading : false,
    AllVolunteer : {},
    error : ''
}

const volunteerSearchReducer = (state = initialState, action) => {

    switch (action.type) {
        case FETCH_VOLUNTEER_SEARCH_REQUEST:
            return{
                ...state,
                loading : true
            }
        case FETCH_VOLUNTEER_SEARCH_SUCCESS:
            return{
                ...state,
                loading : false,
                AllVolunteer : {...action.payload}
            }
        case FETCH_VOLUNTEER_SEARCH_FAILURE:
            return{
                ...state,
                loading : false,
                error : action.payload
            }
        default:
            return state;
    }
}

export default volunteerSearchReducer
import { FETCH_VOLUNTEER_REQUEST, FETCH_VOLUNTEER_SUCCESS, FETCH_VOLUNTEER_FAILURE } from './volunteerType'

const initialState = {
    loading : false,
    profile : {},
    error : ''
}

const volunteerReducer = (state = initialState, action) => {

    switch (action.type) {
        case FETCH_VOLUNTEER_REQUEST:
            return{
                ...state,
                loading : true
            }
        case FETCH_VOLUNTEER_SUCCESS:
            return{
                ...state,
                loading : false,
                profile : {...action.payload}
            }
        case FETCH_VOLUNTEER_FAILURE:
            return{
                ...state,
                loading: false,
                error : action.payload
            }
        default:
            return state;
    }
}

export default volunteerReducer
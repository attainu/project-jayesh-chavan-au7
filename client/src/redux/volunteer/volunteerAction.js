import { httpRequest } from '../../httpRequest'
import { FETCH_VOLUNTEER_REQUEST, FETCH_VOLUNTEER_SUCCESS, FETCH_VOLUNTEER_FAILURE } from './volunteerType'

export const fetchVolunteerRequest = () => {
    return {
        type : FETCH_VOLUNTEER_REQUEST
    }
}

export const fetchVolunteerSuccess = profileData => {
    return {
        type : FETCH_VOLUNTEER_SUCCESS,
        payload : profileData
    }
}

export const fetchVolunteerFailure = error => {
    return {
        type : FETCH_VOLUNTEER_FAILURE,
        payload : error
    }
}

export const getVolunteer = () => {

    return dispatch => {
        dispatch(fetchVolunteerRequest())
        httpRequest.get('/volunteer/get-user')
            .then(responce => {
                const profileData = responce.data
                dispatch(fetchVolunteerSuccess(profileData))
            })
            .catch(error => {
                const errorMsg = error.meassage
                dispatch(fetchVolunteerFailure(errorMsg))
            })
    }
}

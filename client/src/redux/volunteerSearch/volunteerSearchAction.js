import { httpRequest } from '../../httpRequest'
import { FETCH_VOLUNTEER_SEARCH_REQUEST, FETCH_VOLUNTEER_SEARCH_SUCCESS, FETCH_VOLUNTEER_SEARCH_FAILURE } from './volunteerSearchType'

export const fetchVolunteerSearchRequest = () => {
    return {
        type : FETCH_VOLUNTEER_SEARCH_REQUEST
    }
}

export const fetchVolunteerSearchSuccess = ALLVolunteerData => {
    return {
        type : FETCH_VOLUNTEER_SEARCH_SUCCESS,
        payload : ALLVolunteerData
    }
}

export const fetchVolunteerSearchFailure = error => {
    return {
        type : FETCH_VOLUNTEER_SEARCH_FAILURE,
        payload : error
    }
}

export const getAllVolunteer = (page,city) => {

    return dispatch => {
        dispatch(fetchVolunteerSearchRequest())
        httpRequest.get(`/volunteer/findall?page=${page}&city=${city}`)
            .then(responce => {
                const ALLVolunteerData = responce.data
                dispatch(fetchVolunteerSearchSuccess(ALLVolunteerData))
            })
            .catch(error => {
                const errorMsg = error.meassage
                dispatch(fetchVolunteerSearchFailure(errorMsg))
            })
    }
}
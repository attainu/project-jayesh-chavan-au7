import { httpRequest } from '../../httpRequest'
import { FETCH_BLOOD_BANK_SEARCH_REQUEST, FETCH_BLOOD_BANK_SEARCH_SUCCESS, FETCH_BLOOD_BANK_SEARCH_FAILURE } from './bloodBankSearchType'

export const fetchBloodBankSearchRequest = () => {
    return {
        type : FETCH_BLOOD_BANK_SEARCH_REQUEST
    }
}

export const fetchBloodBankSearchSuccess = ALLBloodBankData => {
    return {
        type : FETCH_BLOOD_BANK_SEARCH_SUCCESS,
        payload : ALLBloodBankData
    }
}

export const fetchBloodBankSearchFailure = error => {
    return {
        type : FETCH_BLOOD_BANK_SEARCH_FAILURE,
        payload : error
    }
}

export const getAllBloodBank = (page,city) => {

    return dispatch => {
        dispatch(fetchBloodBankSearchRequest())
        httpRequest.get(`/bloodbank/findall?page=${page}&city=${city}`)
            .then(responce => {
                const ALLBloodBankData = responce.data
                dispatch(fetchBloodBankSearchSuccess(ALLBloodBankData))
            })
            .catch(error => {
                const errorMsg = error.meassage
                dispatch(fetchBloodBankSearchFailure(errorMsg))
            })
    }
}
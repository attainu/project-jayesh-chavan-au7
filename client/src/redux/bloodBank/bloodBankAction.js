import { httpRequest } from '../../httpRequest'
import { FETCH_BLOOD_BANK_REQUEST, FETCH_BLOOD_BANK_SUCCESS, FETCH_BLOOD_BANK_FAILURE } from './bloodBankType'

export const fetchBloodBankRequest = () => {
    return {
        type : FETCH_BLOOD_BANK_REQUEST
    }
}

export const fetchBloodBankSuccess = bloodbankData => {
    return {
        type : FETCH_BLOOD_BANK_SUCCESS,
        payload : bloodbankData
    }
}

export const fetchBloodBankFailure = error => {
    return {
        type : FETCH_BLOOD_BANK_FAILURE,
        payload : error
    }
}

export const getBloodBank = () => {

    return dispatch => {
        dispatch(fetchBloodBankRequest())
        httpRequest.get('/bloodbank/get-bank')
            .then(responce => {
                const bloodbankData = responce.data
                dispatch(fetchBloodBankSuccess(bloodbankData))
            })
            .catch(error => {
                const errorMsg = error.meassage
                dispatch(fetchBloodBankFailure(errorMsg))
            })
    }
}
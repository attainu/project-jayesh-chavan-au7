import { httpRequest } from '../../httpRequest'
import {
    FETCH_BLOOD_BANK_CAMP_REQUEST,
    FETCH_BLOOD_BANK_CAMP_SUCCESS,
    FETCH_ALL_BLOOD_BANK_CAMP_SUCCESS,
    FETCH_BLOOD_BANK_CAMP_FAILURE,
} from "./organiseStateType";

export const fetchBloodBankCampRequest = () => {
    return {
        type : FETCH_BLOOD_BANK_CAMP_REQUEST
    }
}

export const fetchBloodBankCampSuccess = BloodBankCampData => {
    return {
        type : FETCH_BLOOD_BANK_CAMP_SUCCESS,
        payload : BloodBankCampData
    }
}

export const fetchAllBloodBankCampSuccess = AllBloodBankCampData => {
    return {
        type : FETCH_ALL_BLOOD_BANK_CAMP_SUCCESS,
        payload : AllBloodBankCampData 
    }
}

export const fetchBloodBankCampFailure = error => {
    return {
        type : FETCH_BLOOD_BANK_CAMP_FAILURE,
        payload : error
    }
}

export const getBloodBankCamp = (formData) => {

    return dispatch => {
        dispatch(fetchBloodBankCampRequest())
        httpRequest.post('/organise/create', formData)
            .then(responce => {
                const BloodBankCampData = responce.data
                dispatch(fetchBloodBankCampSuccess(BloodBankCampData))
            })
            .catch(error => {
                const errorMsg = error.meassage
                dispatch(fetchBloodBankCampFailure(errorMsg))
            })
    }
}

export const getAllBloodBankCamp = () => {

    return dispatch => {
        dispatch(fetchBloodBankCampRequest())
        httpRequest.get('/organise/camps')
            .then(responce => {
                const AllBloodBankCampData = responce.data
                dispatch(fetchAllBloodBankCampSuccess(AllBloodBankCampData))
            })
            .catch(error => {
                const errorMsg = error.meassage
                dispatch(fetchBloodBankCampFailure(errorMsg))
            })
    }
}
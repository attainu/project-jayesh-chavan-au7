import {
    FETCH_BLOOD_BANK_CAMP_REQUEST,
    FETCH_BLOOD_BANK_CAMP_SUCCESS,
    FETCH_ALL_BLOOD_BANK_CAMP_SUCCESS,
    FETCH_BLOOD_BANK_CAMP_FAILURE,
} from "./organiseStateType";

const initialState = {
    loading: false,
    bloodBankCamp: {},
    allEvents: [],
    error: "",
};

const organiseStateReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_BLOOD_BANK_CAMP_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case FETCH_BLOOD_BANK_CAMP_SUCCESS:
            return {
                ...state,
                loading: false,
                bloodBankCamp: { ...action.payload },
            };
        case FETCH_ALL_BLOOD_BANK_CAMP_SUCCESS:
            return{
                ...state,
                loading: false,
                allEvents : action.payload
            };
        case FETCH_BLOOD_BANK_CAMP_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};

export default organiseStateReducer;

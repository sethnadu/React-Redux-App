import {
    FETCH_RANDOM_QUOTE_START,
    FETCH_RANDOM_QUOTE_SUCCESS,
    FETCH_RANDOM_QUOTE_FAILURE
} from "../Actions"


const initialState = {
    randomquote: [],
    isLoading: false,
    error: "",
    noStateApi: true
};

export const randomQuote = ( state = initialState, action) => {
    switch(action.type) {
        case FETCH_RANDOM_QUOTE_START:
            return {
                ...state,
                isLoading: true,
                error: "",
                noStateApi: true,
            };
        case FETCH_RANDOM_QUOTE_SUCCESS:
            return {
                ...state,
                isLoading: false,
                randomquote: action.payload,
                error: "",
                noStateApi: false
            };
        case FETCH_RANDOM_QUOTE_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload,
                noStateApi: false
            };
        default:
            return state
    }
};
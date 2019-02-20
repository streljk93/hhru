// libraries
import axios from 'axios';
import { startCommonLoader, stopCommonLoader } from "./ui";

function requestCity() {
    return {
        type: 'REQUEST_CITY',
    };
}

function responseCity() {
    return {
        type: 'RESPONSE_CITY',
    };
}

function saveCityList(cityList) {
    return {
        type: 'SAVE_CITY_LIST',
        payload: cityList,
    };
}

export function remoteFetchCityList() {
    return dispatch => {

        dispatch(requestCity());
        dispatch(startCommonLoader());

        return axios.get('/areas').then(response => {
            dispatch(responseCity());
            dispatch(stopCommonLoader());

            if (response.data.length) {
                dispatch(saveCityList(response.data));

                return true;
            }

            return false;
        }).catch(error => {
            dispatch(responseCity());
            dispatch(stopCommonLoader());

            return false;
        })

    };
}

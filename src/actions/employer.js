// libraries
import axios from 'axios';

function requestEmployer() {
    return {
        type: 'REQUEST_EMPLOYER',
    };
}

function responseEmployer() {
    return {
        type: 'RESPONSE_EMPLOYER',
    };
}

function saveSelectedEmployer(employer) {
    return {
        type: 'SAVE_SELECTED_EMPLOYER',
        payload: employer,
    };
}

function saveEmployerMeta() {
    return {
        type: 'SAVE_EMPLOYER_META',
    };
}

export function remoteFetchEmployer(id) {
    return dispatch => {

        dispatch(requestEmployer());
        return axios.get(`/emploers/${id}`).then(response => {
            dispatch(responseEmployer());

            if (response.data.found) {
                dispatch(saveSelectedEmployer(response.data));
                dispatch(saveEmployerMeta(response.data));
                return true;
            }

            return false;
        }).catch(error => {
            dispatch(responseEmployer());

            return false;
        })

    };
}
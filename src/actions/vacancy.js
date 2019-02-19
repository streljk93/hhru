// libraries
import axios from 'axios';

function requestVacancy() {
    return {
        type: 'REQUEST_VACANCY',
    };
}

function responseVacancy() {
    return {
        type: 'RESPONSE_VACANCY',
    };
}

function saveVacancyList(vacancyList) {
    return {
        type: 'SAVE_VACANCY_LIST',
        payload: vacancyList,
    };
}

function saveVacancyMeta({ found, pages, per_page, page }) {
    return {
        type: 'SAVE_VACANCY_META',
        payload: { found, pages, per_page, page },
    };
}

export function remoteFetchVacancyList() {
    return dispatch => {

        dispatch(requestVacancy());
        return axios.get('/vacancies').then(response => {
            dispatch(responseVacancy());

            if (response.data.found) {
                dispatch(saveVacancyList(response.data.items));
                dispatch(saveVacancyMeta(response.data));
                return true;
            }

            return false;
        }).catch(error => {
            dispatch(responseVacancy());

            return false;
        })

    };
}
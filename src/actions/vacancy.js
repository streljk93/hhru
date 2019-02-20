// libraries
import axios from 'axios';
import { startCommonLoader, stopCommonLoader } from "./ui";
import { objectToParams } from '../libraries/helpers';

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

function saveVacancyFilterList(filterList) {
    return {
        type: 'SAVE_VACANCY_FILTER_LIST',
        payload: filterList,
    };
}

function saveVacancySelected(vacancy) {
    return {
        type: 'SAVE_VACANCY_SELECTED',
        payload: vacancy,
    };
}

export function remoteFetchVacancyList(filterList = null) {
    return (dispatch, getState) => {
        let query = '';

        if (filterList) {

            // save filter list
            dispatch(saveVacancyFilterList(filterList));
            query = `?${objectToParams(getState().vacancy.meta.filter)}`;
        }

        dispatch(requestVacancy());
        dispatch(startCommonLoader());

        return axios.get(`/vacancies${query}`).then(response => {
            dispatch(responseVacancy());
            dispatch(stopCommonLoader());

            if (response.data.found) {
                dispatch(saveVacancyList(response.data.items));
                dispatch(saveVacancyMeta(response.data));
                return true;
            }

            return false;
        }).catch(error => {
            dispatch(responseVacancy());
            dispatch(stopCommonLoader());

            return false;
        })

    };
}

export function remoteFetchVacancy(id) {
    return dispatch => {

        dispatch(requestVacancy());
        dispatch(startCommonLoader());

        axios.get(`/vacancies/${id}`).then(response => {
            dispatch(responseVacancy());
            dispatch(stopCommonLoader());

            if (response.data.id) {
                dispatch(saveVacancySelected(response.data));

                return true;
            }

            return false;
        }).catch(error => {
            dispatch(responseVacancy());
            dispatch(stopCommonLoader());

            return false;
        });

    }
}

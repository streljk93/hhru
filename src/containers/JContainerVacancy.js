// libraries
import { connect } from 'react-redux';

// actions
import { remoteFetchVacancyList } from "../actions/vacancy";

// own components
import JScreenVacancy from '../screen/JScreenVacancy';

export default connect(
    state => ({
        vacancyList: state.vacancy.data,
        vacancyMeta: state.vacancy.meta,
    }),
    dispatch => ({
        onRemoteFetchVacancyList: (filterList) => dispatch(remoteFetchVacancyList(filterList)),
    })
)(JScreenVacancy);


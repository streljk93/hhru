// libraries
import { connect } from 'react-redux';

// actions
import { remoteFetchVacancy } from "../actions/vacancy";

// own components
import JScreenVacancyOpening from '../screen/JScreenVacancyOpening';

export default connect(
    state => ({
        vacancy: state.vacancy.selected,
        vacancyMeta: state.vacancy.meta,
    }),
    dispatch => ({
        onRemoteFetchVacancy: (id) => dispatch(remoteFetchVacancy(id)),
    })
)(JScreenVacancyOpening);


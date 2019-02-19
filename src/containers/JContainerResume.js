// libraries
import { connect } from 'react-redux';

// actions
import { remoteFetchVacancyList } from "../actions/vacancy";

// own components
import JScreenResume from '../screen/JScreenResume';

export default connect(
    state => ({
        vacancy: state.vacancy.data,
        vacancyMeta: state.vacancy.meta,
    }),
    dispatch => ({
        onRemoteFetchVacancyList: () => dispatch(remoteFetchVacancyList()),
    })
)(JScreenResume);


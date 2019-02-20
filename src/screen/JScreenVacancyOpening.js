// libraries
import React from 'react';
import { Paper, Typography } from '@material-ui/core';

class JScreenVacancyOpening extends React.Component {

    componentDidMount() {
        this.props.onRemoteFetchVacancy(this.props.match.params.id);
    }

    render() {
        const { vacancy: { name, salary, employer, description }} = this.props;

        return (
            <Paper style={{ padding: 25 }}>
                <Typography variant="h4" component="div">
                    {name}
                </Typography>
                <Typography variant="subtitle1" component="p" style={{ color: 'silver' }}>
                    З/П {salary ? `${salary.from} - ${salary.to} ${salary.currency}` : 'не укзано'}
                </Typography>
                <br />
                <Typography variant="body1" component="p">
                    {employer ? employer.name : ''}
                </Typography>
                <br />
                <div dangerouslySetInnerHTML={{__html: description}}></div>
            </Paper>
        );
    }

}

export default JScreenVacancyOpening;
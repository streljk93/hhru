// libraries
import React from 'react';
import { Grid } from '@material-ui/core';

// own components
import JVacancyList from '../components/JVacancyList';
import JMenu from '../components/JMenu';
import JButtonExperience from '../components/JButtonExperience';
import JButtonCity from '../components/JButtonCity';
import JInputSearch from '../components/JInputSearch';

class JScreenVacancy extends React.Component {

    componentDidMount() {
        this.props.onRemoteFetchVacancyList();
    }

    render() {
        return (
            <div>
                <JMenu>
                    <Grid container>
                        <Grid item xs={12} md={6} style={{ display: 'flex', marginBottom: 10, alignItems: 'center' }}>
                            <JButtonCity
                                variant="outlined"
                                color="primary"
                                size="medium"
                                onChange={this.props.onRemoteFetchVacancyList}
                                style={{ marginRight: 10 }}
                            />
                            <JButtonExperience
                                onChange={this.props.onRemoteFetchVacancyList}
                                variant="outlined"
                                color="primary"
                                size="medium"
                            />
                        </Grid>
                        <Grid item xs={12} md={6} style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: 10 }}>
                            <JInputSearch onSearch={this.props.onRemoteFetchVacancyList} />
                        </Grid>
                    </Grid>

                </JMenu>
                <JVacancyList items={this.props.vacancyList}/>
            </div>
        );
    }

}

export default JScreenVacancy;
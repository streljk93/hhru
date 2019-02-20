// libraries
import React from 'react';
import { Button } from '@material-ui/core';

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
                    <JMenu.Item>
                        {/*<Button variant="outlined" color="primary" size="medium">Город</Button>*/}
                        <JButtonCity
                            variant="outlined"
                            color="primary"
                            size="medium"
                            onChange={this.props.onRemoteFetchVacancyList}
                        />
                    </JMenu.Item>
                    <JMenu.Item>
                        <JButtonExperience
                            onChange={this.props.onRemoteFetchVacancyList}
                            variant="outlined"
                            color="primary"
                            size="medium"
                        />
                    </JMenu.Item>
                    <JMenu.Item right full>
                        <JInputSearch onSearch={this.props.onRemoteFetchVacancyList} />
                    </JMenu.Item>
                </JMenu>
                <JVacancyList items={this.props.vacancyList}/>
            </div>
        );
    }

}

export default JScreenVacancy;
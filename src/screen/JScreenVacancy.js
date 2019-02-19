// libraries
import React from 'react';
import { Button } from '@material-ui/core';

// own components
import JVacancyList from '../components/JVacancyList';
import JMenu from '../components/JMenu';

class JScreenVacancy extends React.Component {

    componentDidMount() {
        this.props.onRemoteFetchVacancyList();
    }

    render() {
        return (
            <div>
                <JMenu>
                    <JMenu.Item>
                        <Button variant="outlined" color="primary">Город</Button>
                    </JMenu.Item>
                    <JMenu.Item>
                        <Button variant="outlined" color="primary">Ключевые слова</Button>
                    </JMenu.Item>
                    <JMenu.Item>
                        <Button variant="outlined" color="primary">Опыт работы</Button>
                    </JMenu.Item>
                </JMenu>
                <JVacancyList items={this.props.vacancyList}/>
            </div>
        );
    }

}

export default JScreenVacancy;
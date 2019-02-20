import React from 'react';
import { Route } from 'react-router-dom';
import { withStyles } from '@material-ui/core';

// own components
import JHeader from './JHeader';
import JDrawer from './JDrawer';
import JAlert from '../containers/JAlert';
// import JScreenResume from '../containers/JContainerResume';
import JScreenVacancy from '../containers/JContainerVacancy';
import JScreenVacancyOpening from '../containers/JContainerVacancyOpening';
import styles from '../styles/AppStyles';

const menu = [[{
    icon: 'CreditCard',
    title: 'Вакансии',
    href: '/vacancy',
}]];

class App extends React.Component {

    render() {
        const { classes } = this.props;
        // console.log(this.props.theme);
        return (
            <div className={classes.root}>
                <JHeader
                    title='HHru API'
                    onAction={this.props.onToggleDrawer}
                    iconAction='Menu'
                    iconMenu='Face'
                    isLoading={this.props.isLoading}
                />
                <JDrawer
                    drawerIsOpen={this.props.drawerIsOpen}
                    onToggleDrawer={this.props.onToggleDrawer}
                    menu={menu}
                />
                <JAlert />
                <main className={classes.main}>
                    <div className={classes.toolbar} />
                    <div className={classes.content}>

                        {/*<Route exact path='/' component={JScreenResume} />*/}
                        {/*<Route exact path='/resume' component={JScreenResume} />*/}
                        <Route exact path='/' component={JScreenVacancy} />
                        <Route exact path='/vacancy' component={JScreenVacancy} />
                        <Route exact path='/vacancy/:id' component={JScreenVacancyOpening} />

                    </div>
                </main>
            </div>
        );
    }

};

export default withStyles(styles, { withTheme: true })(App);
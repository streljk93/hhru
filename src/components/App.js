import React from 'react';
import { Route } from 'react-router-dom';
import { withStyles } from '@material-ui/core';

// own components
import JHeader from './JHeader';
import JDrawer from './JDrawer';
import JAlert from '../containers/JAlert';
import JScreenResume from '../containers/JContainerResume';
import JScreenVacancy from '../containers/JContainerVacancy';
import styles from '../styles/AppStyles';

const menu = [[{
    icon: 'Face',
    title: 'Резюме',
    href: '/resume',
}, {
    icon: 'CreditCard',
    title: 'Вакансии',
    href: '/vacancy',
}]];

class App extends React.Component {

    render() {
        const { classes } = this.props;
        console.log(this.props.theme);
        return (
            <div className={classes.root}>
                <JHeader
                    title='JK Card'
                    onAction={this.props.onToggleDrawer}
                    iconAction='Menu'
                    iconMenu='CardGiftcard'
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

                        <Route exact path='/' component={JScreenResume} />
                        <Route exact path='/resume' component={JScreenResume} />
                        <Route exact path='/vacancy' component={JScreenVacancy} />

                    </div>
                </main>
            </div>
        );
    }

};

export default withStyles(styles, { withTheme: true })(App);
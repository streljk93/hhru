import React from 'react';
import {
    AppBar,
    Toolbar,
    LinearProgress,
    IconButton,
    Typography,
    Hidden,
    withStyles,
} from '@material-ui/core';
import * as Icons from '@material-ui/icons';
import styles from '../styles/JHeaderStyles';

class JHeader extends React.Component {

    render() {
        const { classes, title, isLoading, onAction, iconAction, iconMenu, onlyMobile } = this.props;
        const IconAction = Icons[iconAction];
        const IconMenu = Icons[iconMenu];
        const titleElem = title.split(' ');
        return (
            <div>
                <AppBar className={classes.appBar}>
                    {isLoading && (
                        <LinearProgress color='primary' style={{
                            position: 'absolute',
                            bottom: 0,
                            width: '100%',
                        }} />
                    )}
                    <Toolbar>
                        <IconButton
                            color='inherit'
                            aria-label='open drawer'
                            onClick={onAction}
                            className={onlyMobile ? null : classes.navIconHide}>
                            <IconAction />
                        </IconButton>
                        <Typography
                            className={classes.navTitle}
                            variant='h6'
                            color='inherit'
                            noWrap>
                            {titleElem[0] || ''}
                            {!onlyMobile && (
                                <Hidden smDown>
                                    <IconMenu style={{
                                        paddingRight: '10px',
                                        paddingLeft: '10px',
                                    }} />
                                </Hidden>
                            )}
                            {titleElem[1] || ''}
                        </Typography>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }

}

export default withStyles(styles, { withTheme: true })(JHeader);
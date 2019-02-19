// libraries
import React from 'react';
import {
    Typography,
    Hidden,
    Drawer,
    Divider,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    withStyles,
} from '@material-ui/core';
import * as Icons from '@material-ui/icons';
import { Link } from 'react-router-dom';

// own components
import styles from '../styles/JDrawerStyles';

class JDrawer extends React.Component {

    render() {
        const { classes, theme } = this.props;
        const drawer = (
            <div style={{ height: '100vh' }}>
                <div className={classes.toolbar} style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: theme.palette.primary.main,
                    color: theme.palette.primary.light,
                }}>
                    <Typography
                        className={classes.navTitle}
                        variant='h6'
                        color='inherit'
                        noWrap>
                        JK 
                        <Hidden>
                            <Icons.CardGiftcard style={{
                                paddingRight: '10px',
                                paddingLeft: '10px',
                            }} />
                        </Hidden>
                        Card
                    </Typography>
                </div>
                {this.props.menu.map((items, i1) => {
                    let blockMenu = [];
                    items.forEach((item, i2) => {

                        const IconList = Icons[item.icon];
                        blockMenu.push(
                            <Link key={i1 + '' + i2} to={item.href || '/'}>
                                <ListItem button onClick={this.props.onToggleDrawer}>
                                    <ListItemIcon>
                                        <IconList />
                                    </ListItemIcon>
                                    <ListItemText inset primary={item.title} />
                                </ListItem>
                            </Link>
                        );

                    });

                    return (
                        <div key={i1}>
                            <Divider />
                            <List>
                                {blockMenu}
                            </List>
                        </div>
                    );
                })}
            </div>
        );
        return (
            <div>
                <Hidden lgUp>
                    <Drawer
                        variant='temporary'
                        open={this.props.drawerIsOpen}
                        onClose={this.props.onToggleDrawer}
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        ModalProps={{
                            keepMounted: true,
                        }}>
                        {drawer}
                    </Drawer>
                </Hidden>
                <Hidden mdDown implementation='css'>
                    <Drawer
                        variant='permanent'
                        open
                        classes={{
                            paper: classes.drawerPaper,
                        }}>
                        {drawer}
                    </Drawer>
                </Hidden>
            </div>
        );
    }

}

export default withStyles(styles, { withTheme: true })(JDrawer);
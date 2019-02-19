// libraries
import React from 'react';
import { withStyles } from "@material-ui/core";

// own components
import Item from './Item';

// styles
import styles from '../../styles/JMenuStyles';

class JMenu extends React.Component {

    render() {
        const { classes } = this.props;

        return (
            <div className={classes.menuRoot}>
                {this.props.children}
            </div>
        );
    }

}

JMenu.Item = Item;

JMenu = withStyles(styles)(JMenu);

export default JMenu;
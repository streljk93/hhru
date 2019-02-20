// libraries
import React from 'react';
import { withStyles } from "@material-ui/core";

// styles
import styles from '../../styles/JMenuStyles';

class Item extends React.Component {

    render() {
        const { classes, full, right } = this.props;

        return (
            <div className={classes.item} style={{
                flex: full ? 1 : 'unset',
                display: right ? 'flex' : 'unset',
                justifyContent: right ? 'flex-end' : 'unset',
            }}>
                {this.props.children}
            </div>
        );
    }

}

Item = withStyles(styles)(Item);

export default Item;
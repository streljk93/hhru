// libraries
import React from 'react';
import { Button } from '@material-ui/core';

// own components
import JDialogCity from '../containers/JDialogCity';

class JButtonCity extends React.Component {

    state = {
        open: false,
    };

    onToggle = event => {
        this.setState({ open: !this.state.open });
    };

    onClose() {
        this.setState({ open: false });
    }

    render() {
        const { variant, color, size, style } = this.props;

        return (
            <div style={style}>
                <Button
                    variant={variant}
                    color={color}
                    size={size}
                    onClick={this.onToggle}
                >
                    Город
                </Button>
                <JDialogCity
                    open={this.state.open}
                    onChange={this.props.onChange}
                    onClose={this.onClose.bind(this)}
                />
            </div>
        );
    }

}

export default JButtonCity;
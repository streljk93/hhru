// libraries
import React from 'react';
import { Button, Menu, MenuItem } from '@material-ui/core';

// own components

class JButtonExperience extends React.Component {

    state = {
        anchorEl: null,
    };

    onClick = event => {
        this.setState({ anchorEl: event.currentTarget });
    };

    onClose = () => {
        this.setState({ anchorEl: null });
    };

    onSelectItem(experience) {
        this.props.onChange({ experience });
        this.onClose();
    }

    render() {
        const { anchorEl } = this.state;
        const { variant, color, size } = this.props;

        return (
            <div>
                <Button
                    variant={variant}
                    color={color}
                    size={size}
                    aria-owns={anchorEl ? 'simple-menu' : undefined}
                    aria-haspopup="true"
                    onClick={this.onClick}
                >
                    Опыт работы
                </Button>
                <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={this.onClose}
                >
                    <MenuItem
                        onClick={() => this.onSelectItem(JButtonExperience.EXPERIENCE_NULL)}>
                        Нет опыта
                    </MenuItem>
                    <MenuItem
                        onClick={() => this.onSelectItem(JButtonExperience.EXPERIENCE_1_TO_3)}>
                        От 1 года до 3 лет
                    </MenuItem>
                    <MenuItem
                        onClick={() => this.onSelectItem(JButtonExperience.EXPERIENCE_3_TO_6)}>
                        От 3 до 6 лет
                    </MenuItem>
                    <MenuItem
                        onClick={() => this.onSelectItem(JButtonExperience.EXPERIENCE_6_TO_MORE)}>
                        Более 6 лет
                    </MenuItem>
                </Menu>
            </div>
        );
    }

}

// constant
JButtonExperience.EXPERIENCE_NULL = 'noExperience';
JButtonExperience.EXPERIENCE_1_TO_3 = 'between1And3';
JButtonExperience.EXPERIENCE_3_TO_6 = 'between3And6';
JButtonExperience.EXPERIENCE_6_TO_MORE = 'moreThan6';

export default JButtonExperience;
// libraries
import React from 'react';
import { withStyles, Paper, InputBase, IconButton } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

// styles
import styles from '../styles/JInputSearchStyles';

class JInputSearch extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            text: '',
        };
    }

    onChangeText({ target: { value }}) {
        this.setState({ text: value });
    }

    render() {
        const { classes } = this.props;

        return (
            <Paper className={classes.root} elevation={1}>
                <InputBase
                    value={this.state.text}
                    onKeyPress={event => {
                        if (event.key === 'Enter') {
                            this.props.onSearch({ text: this.state.text });
                        }
                    }}
                    onChange={this.onChangeText.bind(this)}
                    className={classes.input}
                    placeholder="Поиск по ключевым словам"
                />
                <IconButton
                    onClick={() => this.props.onSearch({ text: this.state.text })}
                    className={classes.iconButton}
                    aria-label="Search">
                    <SearchIcon />
                </IconButton>
            </Paper>
        );
    }

}

JInputSearch = withStyles(styles)(JInputSearch);

export default JInputSearch;
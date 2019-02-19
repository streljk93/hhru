// libraries
import React from 'react';
import { connect } from 'react-redux';
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogContentText,
    DialogActions,
    Button,
} from '@material-ui/core';

// actions
import { closeAlert } from "../actions/ui";

class JAlert extends React.Component {

    onPerform() {
        this.props.alert.callback();
        this.props.onCloseAlert();
    }

    render() {
        return (
            <div>
                <Dialog
                    open={this.props.alert.open}
                    onClose={this.props.onCloseAlert}>
                    <DialogTitle>{this.props.alert.title}</DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            {this.props.alert.content}
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.props.onCloseAlert} color="primary">
                            Отмена
                        </Button>
                        <Button onClick={this.onPerform.bind(this)} color="primary" autoFocus>
                            Выполнить
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }

}

JAlert = connect(
    state => ({
        alert: state.ui.alert,
    }),
    dispatch => ({
        onCloseAlert: () => dispatch(closeAlert()),
    })
)(JAlert);

export default JAlert;
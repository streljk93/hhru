// libraries
import React from 'react';
import { connect } from "react-redux";
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Slide,
    IconButton,
    Checkbox,
} from '@material-ui/core';
import * as Icons from '@material-ui/icons';

// actions
import { remoteFetchCityList } from "../actions/city";

// own components
function Transition(props) {
    return <Slide direction="down" {...props} />;
}

class JDialogCity extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            city: {},
        };
    }

    componentDidMount() {
        this.props.onRemoteFetchCityList();
    }

    onSave() {
        let city = this.state.city,
            area = [],
            index;

        if (Object.keys(city).length > 0) {

            for (index in city) {
                if (city.hasOwnProperty(index)) {
                    if (city[index]) {
                        area.push(index);
                    }
                }
            }
            this.props.onChange({ area });
        }

        this.props.onClose();
    }

    onOpenTree(id) {
        this.setState({ [id]: !this.state[id] });
    }

    addCity(id, checked) {
        this.setState(function (state) {
            state.city[id] = checked;

            return state;
        });
    }

    isChecked(id) {
        let city = this.state.city,
            index;

        for (index in city) {
            if (index === id) {
                if (city[index] === true) return true;
            }
        }

        return false;
    }

    render() {
        return (
            <Dialog
                open={this.props.open}
                TransitionComponent={Transition}
                keepMounted
                onClose={this.props.onClose}
                aria-labelledby="alert-dialog-slide-title"
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle id="alert-dialog-slide-title">
                    Фильтр ваканский по Городу
                </DialogTitle>
                <DialogContent>
                    {this.props.areas.map((country, index) =>
                        <div key={index}>
                            <IconButton onClick={() => this.onOpenTree(country.id)}>
                                <Icons.KeyboardArrowDown />
                            </IconButton>
                            {country.name}
                            {this.state[country.id] && (
                                country.areas.map((region, index) =>
                                    <div
                                        key={index}
                                        style={{ paddingLeft: 20 }}>
                                        <IconButton onClick={() => this.onOpenTree(region.id)}>
                                            <Icons.KeyboardArrowDown />
                                        </IconButton>
                                        {region.name}
                                        {this.state[region.id] && (
                                            region.areas && region.areas.map((city, index) =>
                                                <div key={index} style={{ marginLeft: 40 }}>
                                                    <Checkbox
                                                        checked={this.isChecked(city.id)}
                                                        onChange={event => this.addCity(city.id, event.target.checked)}
                                                    /> {city.name}
                                                </div>
                                            )
                                        )}
                                    </div>
                                )
                            )}
                        </div>
                    )}
                </DialogContent>
                <DialogActions>
                    <Button
                        onClick={this.onSave.bind(this)}
                        variant="contained"
                        color="primary">
                        Сохранить
                    </Button>
                </DialogActions>
            </Dialog>
        );
    }
}

JDialogCity = connect(
    state => ({
        areas: state.city.data,
    }),
    dispatch => ({
        onRemoteFetchCityList: () => dispatch(remoteFetchCityList()),
    })
)(JDialogCity);

export default JDialogCity;
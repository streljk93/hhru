// libraries
import React from 'react';
import { withStyles, Card, CardContent, Typography  } from "@material-ui/core";
import { withRouter } from "react-router-dom";
import moment from 'moment';

// styles
import styles from "../styles/JVacancyStyles";

class JVacancy extends React.Component {

    render() {
        const {
            classes,
            id,
            name,
            employer,
            responsibility,
            requirement,
            publishedDate,
            area
        } = this.props;

        return (
            <Card
                onClick={() => this.props.history.push(`/vacancy/${id}`)}
                className={classes.root}>
                <CardContent>
                    <div className={classes.wrap}>
                        <div className={classes.header}>
                            <Typography className={classes.subtitle} color="textSecondary">
                                {moment(publishedDate).format('DD.MM.YYYY')}
                            </Typography>
                            <Typography variant="h5" component="h2">
                                {name}
                            </Typography>
                            <Typography className={classes.subtitle} color="textSecondary">
                                {employer}
                            </Typography>
                            <Typography className={classes.subtitle} color="primary">
                                {area}
                            </Typography>
                        </div>
                        <div className={classes.content}>
                            <Typography component="p">
                                {requirement}
                                <br />
                                {responsibility}
                            </Typography>
                        </div>
                    </div>
                </CardContent>
            </Card>
        );
    }

}

JVacancy = withStyles(styles)(JVacancy);
JVacancy = withRouter(JVacancy);

export default JVacancy;
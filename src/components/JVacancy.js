// libraries
import React from 'react';
import { withStyles, Card, CardContent, Typography  } from "@material-ui/core";
import moment from 'moment';

// own components

// styles
import styles from "../styles/JVacancyStyles";

class JVacancy extends React.Component {

    render() {
        const { classes, name, employer, responsibility, requirement, publishedDate } = this.props;

        return (
            <Card className={classes.root}>
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

export default JVacancy;
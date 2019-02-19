// libraries
import React from 'react';
import { withStyles, Grid } from "@material-ui/core";

// own components
import JVacancy from './JVacancy';

// styles
import styles from "../styles/JVacancyListStyles";


class JVacancyList extends React.Component {

    render() {
        const { classes, items } = this.props;

        return (
            <Grid container className={classes.root}>

                {items.map((vacancy, index) =>
                    <Grid key={index} item sm={4} className={classes.vacancy}>
                        <JVacancy
                            name={vacancy.name}
                            employer={vacancy.employer.name}
                            responsibility={vacancy.snippet.responsibility}
                            requirement={vacancy.snippet.requirement}
                            publishedDate={vacancy.published_at}
                        />
                    </Grid>
                )}

            </Grid>
        );
    }

}

JVacancyList = withStyles(styles)(JVacancyList);

export default JVacancyList;
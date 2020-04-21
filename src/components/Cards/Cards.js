import React from 'react';
import CountUp from 'react-countup';
import './Cards.css';
import { Card, CardContent, Typography, Grid } from "@material-ui/core";

const Cards = (props) => {
    if (!props.data.confirmed) return <h1>Loading ...</h1>
    const { confirmed, recovered, deaths, lastUpdate } = props.data;
    const language = props.language;



    return (
        <div className="container">
            <Grid container spacing={3} justify="center">
                <Grid item component={Card} xs={12} md={3} className="card infected">
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>{language.infected}</Typography>
                        <Typography variant={'h5'}><CountUp start={0} end={confirmed.value} duration={2.5} separator="," /></Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">{language.infectedInfo}</Typography>
                    </CardContent>
                </Grid>

                <Grid item component={Card} xs={12} md={3} className="card recovered">
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>{language.recovered}</Typography>
                        <Typography variant={'h5'}><Typography variant="h5"><CountUp start={0} end={recovered.value} duration={2.5} separator="," /></Typography></Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">{language.recoveredInfo}</Typography>
                    </CardContent>
                </Grid>

                <Grid item component={Card} xs={12} md={3} className="card deaths">
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>{language.death}</Typography>
                        <Typography variant={'h5'}><Typography variant="h5"><CountUp start={0} end={deaths.value} duration={2.5} separator="," /></Typography></Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">{language.deathInfo}</Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    );
};

export default Cards;
import React from 'react';
import { Card, CardContent, Typography, Grid, StylesProvider } from '@material-ui/core';
import CountUp from 'react-countup';
import styles from './Cards.module.css';

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {

    if (!confirmed) {
        return 'Loading...';
    }
    return (
        <div className={StylesProvider.container}>
            <Grid container spacing={3} justify="center">
                <Grid item component={Card}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Infected</Typography>
                        <Typography variant="h5">
                            <CountUp 
                                start = {0}
                                end = {confirmed.value}
                                duration = {2.5}
                                separator = ","
                            />
                        </Typography>
                        <Typography color="textSecondary">Last Update</Typography>
                        <Typography variant="body2">Number of active cases of COVID-19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Recovered</Typography>
                        <Typography variant="h5">Real Data</Typography>
                        <Typography color="textSecondary">Last update</Typography>
                        <Typography variant="body2">Number of recovered cases of COVID-19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Deaths</Typography>
                        <Typography variant="h5">Real Data</Typography>
                        <Typography color="textSecondary">Last update</Typography>
                        <Typography variant="body2">Number of death cases of COVID-19</Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    );
};

export default Cards;
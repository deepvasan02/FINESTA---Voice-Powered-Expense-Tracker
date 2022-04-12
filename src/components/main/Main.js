import React, {useContext} from 'react';
import {Card, CardHeader, CardContent, Typography, Grid, Divider} from "@material-ui/core";
import { mergeClasses } from '@material-ui/styles';
import {ExpenseTrackerContext} from "../../context/Context";
import Form from './form/Form';
import List from "./list/List";
import useStyles from "./styles";
import InfoCard from '../InfoCard';

const Main = () => {
    const classes = useStyles();
    const {balance} = useContext(ExpenseTrackerContext);
    return (
      <Card className={classes.root}>
        <CardHeader title="Expense Tracker" subheader="Powered by Speechly" />
        <CardContent>
          <Typography align="center" variant="h5">Total Balance ${balance}</Typography>
          <Typography variant="subtitle1" style={{ lineHeight: '1.5em', marginTop: '20px' }}>
            <InfoCard />
          </Typography>
          <Divider />
          <Form />
        </CardContent>
        <CardContent className={classes.cartContent}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <List />
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    )
}

export default Main;

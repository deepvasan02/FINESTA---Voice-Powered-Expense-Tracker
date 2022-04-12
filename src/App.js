import React, {useRef, useEffect} from 'react';
import Details from './components/details/Details';
import Main from './components/main/Main';
import {PushToTalkButton, PushToTalkButtonContainer, ErrorPanel} from "@speechly/react-ui";
import { Grid, Hidden } from '@material-ui/core';
import {SpeechState, useSpeechContext} from "@speechly/react-client";
import useStyles from "./styles";

const App = () => {
    const classes = useStyles();
    const {speechState} = useSpeechContext();
    const main = useRef(null);
    const executeScroll = () => main.current.scrollIntoView();
    useEffect(() => {
        if(speechState === SpeechState.Recording){
            executeScroll();
        }
    },[SpeechState]);
    return (
        <div>
            <Grid className={classes.grid} container spacing={0} align="center" justify="center" style={{height:'100vh'}}>
                <Hidden xsDown >
                <Grid item xs={12} sm={4} classes={classes.mobile}>
                    <Details title='Income'/>
                </Grid>
                </Hidden>
                <Grid ref={main} item xs={12} sm={3} classes={classes.main}>
                    <Main />
                </Grid>
                <Hidden smUp >
                <Grid item xs={12} sm={4} classes={classes.desktop}>
                    <Details title='Income'/>
                </Grid>
                </Hidden>
                <Grid item xs={12} sm={4} classes={classes.last}>
                    <Details title='Expense'/>
                </Grid>
            </Grid>
            <PushToTalkButtonContainer>
                <PushToTalkButton />
                <ErrorPanel />
            </PushToTalkButtonContainer>
        </div>
    )
}

export default App;

import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../state/Context';
import { Priority, Message } from '../Api';
import * as Colors from '../utils/Colors';
import * as Strings from '../utils/Strings';
import PriorityContainer from './PriorityContainer';
import Grid from '@material-ui/core/Grid';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { AlertSeverityKeys as ASK } from '../utils/Severity';
import { StyledButton } from '../styles/StyledComponents';
import Box from '@material-ui/core/Box';
import { styles } from '../styles/InlineStyles';


export const Layout: React.FC = () => {
    const context = useContext(AppContext);
    const actions = context.Action;
    const state = context.State;
    const message = state.Message;
    const messageErrorObj = { message: "", priority: 1};
    const [messageError,setMessageError] = useState<Message>(messageErrorObj);
    const [open,setOpen] = useState(false);
    const { vertical, horizontal } = {
        vertical: 'top' as 'top',
        horizontal: 'center' as 'center',
    };

    //Handle snackbar close after timeout or click on close button (X)
    const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    useEffect(() => {
        //On error priority new message, show it
       if (message.priority === Priority.Error) {
           setOpen(true);
           setMessageError(message);
        }
    },[message])

    return (
            <Grid style={styles.root} container direction="column" spacing={2} justifyContent="center">
                <Grid container justifyContent="center">
                    <StyledButton aria-label="Stop" data-testid="OnStateBtn" onClick={() => { actions.onStop() }}>{state.CallApi ? "STOP" : "START"}</StyledButton>
                    <StyledButton aria-label="Clear" data-testid="OnClearBtn" onClick={() => { actions.onClearAll() }}>CLEAR</StyledButton>
                </Grid>
                <Grid item sm={6} xs={12}>
                    <Box m={2}>
                        <Snackbar style={styles.snackbar} open={open} anchorOrigin={{ vertical, horizontal }} autoHideDuration={2000} onClose={handleClose}>
                            <MuiAlert 
                            onClose={handleClose} 
                            severity={ASK[Priority.Error]} 
                            elevation={6} 
                            variant="filled">
                                {messageError.message}
                            </MuiAlert> 
                        </Snackbar>
                    </Box>
                </Grid>
                <Box m={4}>
                <Grid container spacing={2} justifyContent="center">
                    <Grid item sm={10} md={10} xs={10}>
                        <Grid container spacing={4}>
                            <Grid item sm={4} md={4} xs={12}>
                                <PriorityContainer Color={Colors.ERROR} Priority={Priority.Error} Title={Strings.ERROR}/>
                            </Grid>
                            <Grid item sm={4} md={4} xs={12}>
                                <PriorityContainer Color={Colors.WARNING} Priority={Priority.Warn} Title={Strings.WARNING}/>
                            </Grid>
                            <Grid item sm={4} md={4} xs={12}>
                                <PriorityContainer Color={Colors.INFO} Priority={Priority.Info} Title={Strings.INFO}/>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </Grid>
    )
}
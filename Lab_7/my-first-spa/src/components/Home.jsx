import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';


const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const Home = () => {
    const classes = useStyles();
    const [nameValue, setNameValue] = React.useState('');
    const [snackBarOpen, setSnackBarOpen] = React.useState(false);
    const [shouldShowSnackBar, setShouldShowSnackBar] = React.useState(false);

    const handleChange = (event) => {
        setNameValue(event.target.value);
        setShouldShowSnackBar(true);
    };

    const handleClickAway = () => {
        if (shouldShowSnackBar) {
            setSnackBarOpen(true);
        };
        setShouldShowSnackBar(false);

    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setSnackBarOpen(false);
    };

    return (
        <Box align="center">
            <Typography align="center" variant="h2">Home</Typography>
            <form className={classes.root} noValidate autoComplete="off">
                <ClickAwayListener onClickAway={handleClickAway}>
                    <TextField
                        id="name"
                        label="Imię"
                        variant="outlined"
                        placeholder="Podaj swoje imię"
                        autoFocus={true}
                        onChange={handleChange}
                    />
                </ClickAwayListener>
            </form>
            <Snackbar open={snackBarOpen} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="info">
                    Witaj {nameValue}!
                </Alert>
            </Snackbar>
        </Box>

    );
}

export default Home;
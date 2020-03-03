import React from 'react';
import './App.css';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Paper from '@material-ui/core/Paper';
import { createStyles, fade, Theme, makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';

document.body.style = 'background: rgb(245,245,245);';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        title: {
            flexGrow: 1,
            display: 'none',
            [theme.breakpoints.up('sm')]: {
                display: 'block',
            },
        },
        search: {
            position: 'relative',
            borderRadius: theme.shape.borderRadius,
            backgroundColor: fade(theme.palette.common.white, 0.15),
            '&:hover': {
                backgroundColor: fade(theme.palette.common.white, 0.25),
            },
            marginLeft: 0,
            width: '100%',
            [theme.breakpoints.up('sm')]: {
                marginLeft: theme.spacing(1),
                width: 'auto',
            },
        },
        searchIcon: {
            width: theme.spacing(7),
            height: '100%',
            position: 'absolute',
            pointerEvents: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        },
        inputRoot: {
            color: 'inherit',
        },
        inputInput: {
            padding: theme.spacing(1, 1, 1, 7),
            transition: theme.transitions.create('width'),
            width: '100%',
            [theme.breakpoints.up('sm')]: {
                width: 120,
                '&:focus': {
                    width: 200,
                },
            },
        },
        body: {
            width: '100%',
            height: '100%',
            justifyContent: 'center',
            display: 'flex',
        },
        cards: {
            maxWidth: '2000px',
            justifyContent: 'center',
            alignItems: 'center',
            display: 'flex',
            flexWrap: 'wrap',
            '& > *': {
                margin: theme.spacing(1),
                width: theme.spacing(16),
                height: theme.spacing(16),
            },
        }
    }),
);

function App() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <Typography className={classes.title} variant="h6" noWrap>
                        Performance Report
                    </Typography>
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <SearchIcon />
                        </div>
                        <InputBase
                            placeholder="Search…"
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </div>
                </Toolbar>
            </AppBar>
            <div className={classes.body}>
                <div className={classes.cards}>
                    <Paper elevation={3} style={{ width: '300px', height: '400px' }} />
                    <Paper elevation={3} style={{ width: '500px', height: '600px' }} />
                    <Paper elevation={3} style={{ width: '300px', height: '400px' }} />
                    <Paper elevation={3} style={{ width: '300px', height: '400px' }} />
                    <Paper elevation={3} style={{ width: '500px', height: '600px' }} />
                    <Paper elevation={3} style={{ width: '300px', height: '400px' }} />
                    <Paper elevation={3} style={{ width: '300px', height: '400px' }} />
                    <Paper elevation={3} style={{ width: '500px', height: '600px' }} />
                    <Paper elevation={3} style={{ width: '300px', height: '400px' }} />
                </div>
            </div>
        </div>

    );
}

export default App;

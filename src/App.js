import React from 'react';
import './App.css';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Paper from '@material-ui/core/Paper';
import { fade, makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import { parse } from './jsonParser'
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/core/styles';
import { blue, deepOrange } from '@material-ui/core/colors/';
import { FilePicker } from 'react-file-picker'
import { withStyles } from '@material-ui/core/styles';

document.body.style = 'background: rgb(245,245,245);';


const theme = createMuiTheme(
    {
        palette: {
            primary: blue,
            secondary: deepOrange,
        },

    });

const styles = theme => ({
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
});






class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { data: null };
    }

    render() {
        const { classes } = this.props;
        const figures = parse(this.state.data);
        return <ThemeProvider theme={theme}>
            <div className={classes.root}>
                <AppBar position="static">
                    <Toolbar>
                        <Typography className={classes.title} variant="h6" noWrap>
                            Performance Report
                    </Typography>
                        <input type="file" name="file" onChange={event => {
                            var reader = new FileReader();
                            reader.onload = (event) => {
                                this.setState((state, props) => {
                                            if (event.target != null) {
                                                return { data: JSON.parse(event.target.result) };
                                            }
                                        });
                            };
                            reader.readAsText(event.target.files[0]);
                        }} />

                    </Toolbar>
                </AppBar>
                <div className={classes.body}>
                    <div className={classes.cards}>
                        {figures.map((figure, i) =>
                            <Paper elevation={3} style={{
                                width: 'auto', height: 'auto', padding: '16px',
                                margin: '16px'
                            }} key={i}>
                                {figure}
                            </Paper>)}
                    </div>
                </div>
            </div>
        </ThemeProvider>

            ;
    }
}

App.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);

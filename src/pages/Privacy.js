import React from "react";
import "../App.css";
import {
  Grid, 
  Typography,
  Button, Paper
} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import { motion } from "framer-motion"
import logo from "../assets/logo.png"
//import theme from '../theme'

const Privacy = () => {



const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    margin: {
        marginTop: theme.spacing(10),
    }
  }));

const classes = useStyles();

return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
              <img src={logo} alt="Logo" height={70} wigth={70} className={classes.margin} />
          <Typography component="h1" variant="h5" style={{ marginTop: '.5rem' }}>
            Rekisteröidy
        </Typography></Paper>
          
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>xs=6</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>xs=6</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
          <motion.div
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 1.2 }}>
                  <Button variant="contained" color="primary" className={classes.margin}>
                    Palaa
                </Button>
                </motion.div>
        </Grid>
      </Grid>
    </div>
  );
};


export default Privacy;
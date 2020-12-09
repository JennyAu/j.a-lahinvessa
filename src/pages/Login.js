import React, { useState } from "react";
import "../App.css";
import { Grid } from "@material-ui/core";
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import { purple, deepPurple } from '@material-ui/core/colors';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { createMuiTheme, withStyles, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { motion } from "framer-motion"
import logo from "../assets/logo.png"

const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // email = muuttuja, johon tila tallennetaan
  // setEmail = functio, jolla tilaa muutetaan
  // setEmail('esimerkkiteksi') // nyt tila on seimerkkiteksti

  const handleEmail = (e) => {
    setEmail(e.target.value);
  }; /*emailin tila on nyt se mitä input kenttään syötetään*/

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const login = (e) => {
    e.preventDefault()
    /* kutsutaan serviceä */
  };

  const ColorButton = withStyles((theme) => ({
    root: {
      color: theme.palette.getContrastText(purple[400]),
      backgroundColor: purple[400],
      '&:hover': {
        backgroundColor: purple[800],
      },
    },
  }))(Button);

  const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
    },
    purple: {
      color: theme.palette.getContrastText(deepPurple[500]),
      backgroundColor: deepPurple[500],
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
    margin: {
      margin: theme.spacing(2),
    },
  }));

  const classes = useStyles();

  console.log(email, password);

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <motion.div className={classes.paper}
        animate={{ y: 70 }}
        transition={{ delay: 0.2 }}>
        {/* <div class="custom-shape-divider-top-1606840004">
      <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" class="shape-fill"></path>
      </svg>
    </div> */}
{/* 
        <Avatar className={classes.avatar} className={classes.purple}>
          <LockOutlinedIcon />
        </Avatar> */}
        <img src={logo} alt="Logo" height={60} wigth={60} className={classes.margin}/>

        <Typography component="h1" variant="h5">
          Kirjaudu sisään
    </Typography>

        <form onSubmit={login} className={classes.form} noValidate>
          <TextField variant="outlined" margin="normal" size="small" required fullWidth id="email" label="Sähköpostiosoite"
            name="email" /*autoComplete="email"*/ autoFocus value={email} onChange={(e) => handleEmail(e)}
          />
          <TextField variant="outlined" margin="normal" size="small" required fullWidth name="password" label="Salasana"
            type="password" id="password" /*autoComplete="current-password"*/ value={password} onChange={(e) =>
              handlePassword(e)}
          />
          <Grid container>
            <Grid item xs="6">
              <motion.div
                initial={{ x: '-100vw' }}
                animate={{ x: 0 }}
                transition={{ delay: 1.5, duration: 1.5 }}>
                <ColorButton variant="contained" color="primary" className={classes.margin}>
                  Kirjaudu
      </ColorButton>
              </motion.div>
            </Grid>
            <Grid item xs="6">
              <motion.div
                initial={{ x: '-150vw' }}
                animate={{ x: 0 }}
                transition={{ delay: 2.5, duration: 1.5 }}>
                <ColorButton variant="contained" color="primary" className={classes.margin}>
                  Peruuta
      </ColorButton>
              </motion.div>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2" color="inherit">
                Unohditko salasanasi?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2" color="inherit">
                {"Luo tunnukset täältä"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </motion.div>
    </Container>
  );
};
export default Login;
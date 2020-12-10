import React, { useState } from "react";
import "../App.css";
import {
  Grid, TextField,
  Typography, Container,
  CssBaseline, Button, Link,
  InputAdornment,
} from "@material-ui/core";
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import { motion } from "framer-motion"
import logo from "../assets/logo.png"
import theme from '../theme'
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import LockIcon from '@material-ui/icons/Lock';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const login = (e) => {
    e.preventDefault();
  };

  const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    form: {
      width: '100%',
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

  return (
    <Container component="main" maxWidth="xs">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <motion.div className={classes.paper} animate={{ y: 70 }} transition={{ delay: 0.2 }}>
          <img src={logo} alt="Logo" height={70} wigth={70} theme={theme.margin} />
          <Typography component="h1" variant="h5">
            Kirjaudu sisään
          </Typography>
          <form onSubmit={login} className={classes.form} noValidate>
            <TextField
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountBoxIcon style={{ color: '#717CB9' }} />
                  </InputAdornment>
                ),
              }}
              variant="outlined"
              margin="normal"
              size="small"
              required
              fullWidth
              id="email"
              label="Sähköpostiosoite"
              name="email"
              value={email}
              onChange={(e) => handleEmail(e)}
            />
            <TextField
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LockIcon style={{ color: '#717CB9' }} />
                  </InputAdornment>
                ),
              }}
              variant="outlined"
              margin="normal"
              size="small"
              required
              fullWidth
              name="password"
              label="Salasana"
              type="password"
              id="password"
              value={password}
              onChange={(e) => handlePassword(e)}
            />
            <Grid container>
              <Grid item xs="6">
                <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 1.2 }}>
                  <Button variant="contained" color="primary" className={classes.margin}>
                    Kirjaudu
                  </Button>
                </motion.div>
              </Grid>
              <Grid item xs="6">
                <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 1.2 }}>
                  <Button variant="contained" color="primary" className={classes.margin}>
                    Peruuta
                  </Button>
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
                  {'Luo tunnukset täältä'}
                </Link>
              </Grid>
            </Grid>
          </form>
        </motion.div>
      </ThemeProvider>
    </Container>
  );
};
export default Login;

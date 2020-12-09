import React, { useState } from "react";
import "../App.css";
import { Grid } from "@material-ui/core";
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import theme from '../theme'
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { motion } from "framer-motion"
import logo from "../assets/logo.png"

const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const login = (e) => {
    e.preventDefault()
  };

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
        <motion.div className={classes.paper}
          animate={{ y: 70 }}
          transition={{ delay: 0.2 }}>
          <img src={logo} alt="Logo" height={70} wigth={70} theme={theme.margin} />
          <Typography component="h1" variant="h5">
            Kirjaudu sisään
          </Typography>
          <form onSubmit={login} className={classes.form} noValidate>
            <TextField 
            variant="outlined" 
            margin="normal" 
            size="small" 
            required fullWidth 
            id="email" 
            label="Sähköpostiosoite"
            name="email"
            value={email} 
            onChange={(e) => handleEmail(e)}
            />
            <TextField 
            variant="outlined" 
            margin="normal" 
            size="small" 
            required fullWidth 
            name="password" 
            label="Salasana"
            type="password" 
            id="password"
            value={password} 
            onChange={(e) => handlePassword(e)}
            />
            <Grid container>
              <Grid item xs="6">
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 1.2 }}>
                  <Button 
                  variant="contained" 
                  color="primary" 
                  className={classes.margin}>
                    Kirjaudu
                  </Button>
                </motion.div>
              </Grid>
              <Grid item xs="6">
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 1.2 }}>
                  <Button 
                  variant="contained" 
                  color="primary" 
                  className={classes.margin}>
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
                  {"Luo tunnukset täältä"}
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
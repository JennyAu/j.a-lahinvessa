import React, { useState } from "react";
import "../App.css";
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const Register = () => {

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordAgain, setPasswordAgain] = useState("");
  /*kayttajatunnus = muuttuja, johon tila tallennetaan
    setKayttajatunnus = functio, jolla tilaa muutetaan
    setKayttajatunnus('esimerkkiteksi') // nyt tila on seimerkkiteksti*/

  const handleUsername = (e) => {
    setUsername(e.target.value);
  }; /*usernamen tila on nyt se mitä input kenttään syötetään*/


  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handlePasswordAgain = (e) => {
    setPasswordAgain(e.target.value);
  };

  const register = (e) => {
    e.preventDefault()
    /* kutsutaan serviceä */
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
      backgroundColor: theme.palette.primary.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));

  const classes = useStyles();

  console.log(username, email, password, passwordAgain);

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        {/* <div class="custom-shape-divider-top-1606840004">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" class="shape-fill"></path>
        </svg>
        </div> */}
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Rekisteröidy
        </Typography>
        <form onSubmit={register} className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Käyttäjätunnus"
            name="username"
            autoFocus
            value={username}
            onChange={(e) => handleUsername(e)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Sähköpostiosoite"
            name="email"
            autoFocus
            value={email}
            onChange={(e) => handleEmail(e)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Salasana"
            type="password"
            id="password"
            value={password}
            onChange={(e) => handlePassword(e)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Salasana uudelleen"
            type="passwor"
            id="passwordagain"
            value={passwordAgain}
            onChange={(e) => handlePasswordAgain(e)}
          />
          <Button
            type="submit"
            fullWidth
            variant="outlined"
            color="primary"
            className={classes.submit}
          >
            Rekisteröidy
          </Button>
        </form>
      </div>
    </Container>
  );
};

export default Register;
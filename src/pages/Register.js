import React, { useState } from "react";
import "../App.css";
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import { Grid } from "@material-ui/core";
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { purple, deepPurple} from '@material-ui/core/colors';
import { motion } from "framer-motion"


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
  }));

  const classes = useStyles();

  console.log(username, email, password, passwordAgain);

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar} className={classes.purple}>
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
          <Grid container spacing={10}>
            <Grid item xs="6">
             <motion.div
             whileHover={{ scale: 1.4 }}
             whileTap={{ scale: 1.2}}>
          <ColorButton variant="contained" color="primary" className={classes.margin}>
            Rekisteröidy
      </ColorButton>
      </motion.div>
      </Grid>
      <Grid item xs="6">
      <motion.div
             whileHover={{ scale: 1.4 }}
             whileTap={{ scale: 1.2}}> 
      <ColorButton variant="contained" color="primary" className={classes.margin}>
            Peruuta
      </ColorButton>
      </motion.div>
      </Grid>
      </Grid>
        </form>
      </div>
    </Container>
  );
};

export default Register;
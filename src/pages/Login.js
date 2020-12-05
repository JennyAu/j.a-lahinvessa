import React, { useState } from "react";
import "../App.css";
import { Grid } from "@material-ui/core";
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

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

const buttonStyles = makeStyles({
  contained: {
    backgroundColor: "red"
  }
});

/*const classes = buttonStyles();*/

const classes = useStyles();


console.log(email, password);

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
      Kirjaudu sisään
    </Typography>
    <form onSubmit={login} className={classes.form} noValidate>
      <TextField variant="outlined" margin="normal" required fullWidth id="email" label="Sähköpostiosoite"
        name="email" /*autoComplete="email"*/ autoFocus value={email} onChange={(e)=> handleEmail(e)}
        />
        <TextField variant="outlined" margin="normal" required fullWidth name="password" label="Salasana"
          type="password" id="password" /*autoComplete="current-password"*/ value={password} onChange={(e)=>
          handlePassword(e)}
          />

          <Button fullWidth variant="outlined" classes={{ contained: classes.contained }} type="submit" className={classes.submit}>
            Kirjaudu
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
              Unohditko salasanasi?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
              {"Luo tunnukset täältä"}
              </Link>
            </Grid>
          </Grid>
    </form>
  </div>
</Container>
);
};
export default Login;
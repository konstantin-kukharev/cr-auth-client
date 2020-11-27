import React, {useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Styles from "./styles/AuthForm";
import ForgotPassword from "../components/dynamic/ForgotPassword";
import {connect} from "react-redux";
import { useSnackbar } from 'notistack';
import axios from "axios";
import {authorize} from "../redux/actions";

const Auth = function({apiUrl, authorize}) {
  const classes = Styles();
  const [attempts, setAttempts] = useState(0);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [authDisabled, disableAuth] = useState(false);
  const [forgotFormDisplayed, showForgotForm] = useState(false);
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const handleSetEmail = (props) => {
    const newValue = props.target.value;
    setEmail(newValue);
  }

  const handleSetPassword = (props) => {
    const newValue = props.target.value;
    setPassword(newValue);
  }

  const handleAuth = () => {
    setAttempts(attempts+1)
    if(attempts >= 3) {
      setAttempts(0)
      displayForgotForm()
    } else {
      disableAuth(true)
      axios.post(`${apiUrl}/auth`, {
        email: email,
        pass: password
      }).then((resp) => {
        if (resp.data.error === null) {
          enqueueSnackbar('Вы успешно авторизованы', {
            variant: 'success',
            anchorOrigin: {
              vertical: 'top',
              horizontal: 'right',
            },
          });
          setAttempts(0)
          authorize({
            token: resp.data.token
          })
        } else {
          enqueueSnackbar(resp.data.error, {
            variant: 'error',
            anchorOrigin: {
              vertical: 'top',
              horizontal: 'right',
            },
          });
        }
        disableAuth(false)
      }).catch(() => {
        enqueueSnackbar('воникла непредвиденная ошибка', {
          variant: 'error',
          anchorOrigin: {
            vertical: 'top',
            horizontal: 'right',
          },
        });
      })
    }
  }

  const displayForgotForm = () => {
    disableAuth(true)
    closeSnackbar()
    showForgotForm(true)
  }

  const closeForgotForm = () => {
    disableAuth(false)
    showForgotForm(false)
  }

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline/>
      <Grid item xs={false} sm={4} md={7} className={classes.image}/>
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon/>
          </Avatar>
          <Typography component="h1" variant="h5">
            Авторизация
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="auth-email"
              label="Email"
              name="email"
              onChange={handleSetEmail}
              autoFocus
              disabled={authDisabled}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="auth-password"
              label="Пароль"
              type="password"
              id="password"
              onChange={handleSetPassword}
              autoComplete="current-password"
              disabled={authDisabled}
            />
            <Button
              type="button"
              fullWidth
              variant="contained"
              color="primary"
              onClick={handleAuth}
              className={classes.submit}
              disabled={authDisabled}
            >
              Войти
            </Button>
            <Grid container className={classes.more_info}>
              <Grid item xs>
                <Button size="small" color="primary" disabled={authDisabled} onClick={displayForgotForm}>Забыли пароль?</Button>
              </Grid>
            </Grid>
            <ForgotPassword open={forgotFormDisplayed} closeForm={closeForgotForm}/>
          </form>
        </div>
      </Grid>

    </Grid>
  );
}

const mapStateToProps = state => {
  const { apiUrl } = state.auth || {};

  return { apiUrl }
};

export default connect(mapStateToProps,{ authorize })(Auth);
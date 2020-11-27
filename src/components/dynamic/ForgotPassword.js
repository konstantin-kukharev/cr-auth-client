import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const FormDialog = (prop) => {
  let openForm = prop.open
  let delay = 10000
  const [alreadySent, setAlreadySent] = useState(false)
  const [email, setEmail] = useState('')
  const [emailValid, setEmailValid] = useState(email.length >= 6)

  const handleSetForgotEmail = (props) => {
    const newValue = props.target.value;
    setEmail(newValue);
    if(email.length >= 6) {
      setEmailValid(true)
    } else {
      setEmailValid(false)
    }
  }

  const handleClose = () => {
    prop.closeForm()
  };

  const handleSend = () => {
    setAlreadySent(true)
    setTimeout(function tick() {
      setAlreadySent(false)
    }, delay);
  }

  if(alreadySent === true) {
    return (
      <Dialog open={openForm} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Забыли пароль?</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Письмо с инструкциями для восстановления пароля было отправлено на ваш email <b>{email}</b>
            <br/>Повторный запрос можно будет отправить через {delay / 1000} секунд
          </DialogContentText>
          <DialogActions>
            <Button onClick={handleClose} fullWidth={true}>
              Закрыть
            </Button>
          </DialogActions>
        </DialogContent>
      </Dialog>
    )
  }

  return (
    <Dialog open={openForm} onClose={handleClose} aria-labelledby="form-dialog-title">
      <DialogTitle id="form-dialog-title">Забыли пароль?</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Укажите Email который вы использовали при регистрации,
          мы отправим на него письмо с инструкциями, которые помогут вам восстановить пароль
        </DialogContentText>
        <TextField
          autoFocus
          id="name"
          label="Email"
          type="email"
          placeholder="example@email.com"
          onChange={handleSetForgotEmail}
          defaultValue={email}
          fullWidth
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>
          Отменить
        </Button>
        <Button onClick={handleSend} variant="outlined" disabled={!emailValid} color="primary">
          Отправить
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default FormDialog;
import {makeStyles} from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  menu: {
    width: '100vh',
    height: 'calc(100vh - 50px)',
    maxWidth: 240,
    backgroundColor: theme.palette.background.paper,
  },
  menu_nested: {
    paddingLeft: theme.spacing(4),
  }
}));
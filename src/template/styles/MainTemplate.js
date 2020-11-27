import {makeStyles} from "@material-ui/core/styles";

export default makeStyles((theme) => ({
    content: {
        overflow: 'auto',
        margin: '10px 10px 0 20px',
        width: '100%',
        height: 'calc(100% - 400px)',
    },
    workArea: {
        display: 'flex',
    },
    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
    }
}));
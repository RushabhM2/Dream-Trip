import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((themes) => ({
  root: {
    padding: themes.spacing(2),
    textAlign: 'center',
    minWidth: 200,
  },
  media: {
    height: 200,
  },
}));

export default useStyles;

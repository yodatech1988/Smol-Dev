import { createStyles, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      height: '100vh',
    },
    image: {
      backgroundImage: 'url(https://source.unsplash.com/random)',
      backgroundRepeat: 'no-repeat',
      backgroundColor:
        'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 100%), rgba(0,0,0,0.3)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    },
    paper: {
      margin: '8px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: '8px',
      backgroundColor: '#f50057',
    },
    form: {
      width: '100%', 
      marginTop: '8px',
    },
    submit: {
      margin: '24px 0px 16px',
    },
  }),
);

export default useStyles;
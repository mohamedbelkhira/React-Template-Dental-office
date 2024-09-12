import useMediaQuery from '@mui/material/useMediaQuery';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

// assets
import Google from 'assets/images/icons/google.svg';
/* import Twitter from 'assets/images/icons/twitter.svg';
import Facebook from 'assets/images/icons/facebook.svg'; */
import { auth, googleProvider } from '../../../firebase';
import { useNavigate } from 'react-router';

// ==============================|| FIREBASE - SOCIAL BUTTON ||============================== //

export default function FirebaseSocial({ setSubmitting }) {
  const downSM = useMediaQuery((theme) => theme.breakpoints.down('sm'));
  const navigate = useNavigate();

  // @ts-ignore
  const googleHandler = async () => {
    // login || singup
    try {
      const result = await auth.signInWithPopup(googleProvider);
      const user = result.user;

      // Store user information in localStorage
      localStorage.setItem(
        'auth',
        JSON.stringify({
          userID: user.uid,
          username: user.displayName,
          email: user.email,
          profilePic: user.photoURL,
          roles: ['ADMIN']
        })
      );
      navigate('/');
    } catch (error) {
      console.error('Google login error:', error);
      setSubmitting(false);
    }
  };

  /*   const twitterHandler = async () => {
    // login || singup
  };

  const facebookHandler = async () => {
    // login || singup
  }; */

  return (
    <Stack
      direction="row"
      spacing={{ xs: 1, sm: 2 }}
      justifyContent={{ xs: 'space-around', sm: 'space-between' }}
      sx={{ '& .MuiButton-startIcon': { mr: { xs: 0, sm: 1 }, ml: { xs: 0, sm: -0.5 } } }}
    >
      <Button
        variant="outlined"
        color="secondary"
        fullWidth={!downSM}
        startIcon={<img src={Google} alt="Google" />}
        onClick={googleHandler}
      >
        {!downSM && 'Google'}
      </Button>
      {/*       <Button
        variant="outlined"
        color="secondary"
        fullWidth={!downSM}
        startIcon={<img src={Twitter} alt="Twitter" />}
        onClick={twitterHandler}
      >
        {!downSM && 'Twitter'}
      </Button>
      <Button
        variant="outlined"
        color="secondary"
        fullWidth={!downSM}
        startIcon={<img src={Facebook} alt="Facebook" />}
        onClick={facebookHandler}
      >
        {!downSM && 'Facebook'}
      </Button> */}
    </Stack>
  );
}

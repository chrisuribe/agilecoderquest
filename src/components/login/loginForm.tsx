import { getAuth, signInWithEmailAndPassword, sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '../../firebase-config';
import Copyright from './copyRight';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { SetStateAction, useState } from 'react';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

interface LoginProps {
  onSwitchView: () => void;
}

const Login: React.FC<LoginProps> = ({ onSwitchView }) => {
  const [error, setError] = useState('');
  const [snackbarOpen, setSnackbarOpen] = useState<boolean>(false);
  const [snackbarMessage, setSnackbarMessage] = useState<string>('');

  const handleSnackbarOpen = (message: string) => {
    setSnackbarMessage(message);
    setSnackbarOpen(true);
  };

  const handleSnackbarClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setSnackbarOpen(false);
  };

  const signIn = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const email = data.get('email');
    const password = data.get('password');
    const rememberMe = data.get('rememeberMe') === 'on';

    if (typeof email === 'string' && typeof password === 'string') {
      signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        userCredential.user.getIdToken().then((token) => {
          if (rememberMe) {
            localStorage.setItem('firebaseToken', token);
          } else {
            sessionStorage.setItem('firebaseToken', token);
          }
        });
        e.currentTarget.reset();
        console.log('User logged in:', userCredential.user);
      }).catch((error) => {
        e.currentTarget.reset();
        handleSnackbarOpen(error.message);
      });
    } 
  };

  const resetPassword = (email: string) => {
    if (email) {
      sendPasswordResetEmail(auth, email)
      .then(() => {
        alert('Password reset email sent!');
      })
      .catch((error) => {
        setError(error.message);
      });
    } else {
      setError('Please enter a valid email address.');
    }
  };

  const defaultTheme = createTheme();

  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box 
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}>
              <Avatar sx={{ m: 1, bgcolor: 'secondary.main'}}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">Sign In</Typography>
              {error && <Alert severity="error">{error}</Alert>}
              <Box component="form" onSubmit={signIn} noValidate sx={{ mt: 1 }}>
                <TextField 
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  type="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus 
                />
                <TextField 
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                />
                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Remember me" 
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Sign In
                </Button>
                <Grid container>
                  <Grid item xs>
                    <Link href="#" onClick={(e) => {
                      e.preventDefault();
                      const email = prompt("Please enter your email address:");
                      if (email) resetPassword(email);
                    }} variant="body2">
                      Forgot password?
                    </Link>
                  </Grid>
                  <Grid item>
                <Link  onClick={onSwitchView} variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
            </Box>
          </Box>
          <Snackbar open={snackbarOpen} autoHideDuration={6000} onClose={handleSnackbarClose}>
            <Alert onClose={handleSnackbarClose} severity="error" sx={{ width: '100%' }}>
            {snackbarMessage}
            </Alert>
          </Snackbar>
          <Copyright sx={{ mt: 5 }} />
        </Container>
      </ThemeProvider>
    </>
  );
}

export default Login;
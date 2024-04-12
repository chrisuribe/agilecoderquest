import { createUserWithEmailAndPassword } from 'firebase/auth';
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

interface SignUpProps {
  onSwitchView: () => void;
}

const SignUp: React.FC<SignUpProps> = ({ onSwitchView }) => {
  const signUp = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(e.currentTarget);
    const email = data.get('email');
    const password = data.get('password');

if (typeof email === 'string' && typeof password === 'string') {
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      form.reset();
      const user = userCredential.user;
      console.log('User logged in:', user);
    }).catch((error) => {
      form.reset();
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error('Error loggin in:', errorCode, errorMessage);
    });
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
              margintTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}>
              <Avatar sx={{ m: 1, mt: 3, bgcolor: 'secondary.main'}}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component = "h1" variant = "h5">Sign up</Typography>
          
            <Box component="form" noValidate onSubmit={signUp} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
              <TextField 
                autoComplete="given-name"
                name="firstName"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
              />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I want to stay up to date on Agile Coder Quest."
                />
              </Grid>
            </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign Up
              </Button>
              <Grid container justifyContent="flex-end">
              <Grid item>
                <Link onClick={onSwitchView} variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
            </Box>
          </Box>
          <Copyright sx={{ mt: 5 }} />
        </Container>
      </ThemeProvider>
    </>
  );
}

export default SignUp;

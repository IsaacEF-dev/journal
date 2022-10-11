import { Link as RouterLink } from 'react-router-dom';
import { Button, Grid, Link, TextField, Typography } from '@mui/material';
import { Google } from '@mui/icons-material';
import { AuthLayout } from '../layout/AuthLayout';
import {useDispatch} from "react-redux"
import { useForm } from '../../hooks/useForm';
import { checkingAuthentication, startGoogleSingIn } from '../../store/auth/thunks';
import { signInWhitGoogle } from '../../firebase/provider';
import {useSelector} from "react-redux"
import { useMemo } from 'react';


export const LoginPage = () => {
  const{status}= useSelector(state=>state.auth)

  const {email,password,inputChange}=useForm({
    email:"Isaac124@gmail.com",
    password:"123456"
  });
  const dispatch=useDispatch()
  
  const onSumbit=(e)=>{
    e.preventDefault();
    console.log(email,password);
    dispatch(checkingAuthentication());
  }

  const onGoogleSumbit=(e)=>{
    e.preventDefault();
    dispatch(startGoogleSingIn());
   
  }

  const isAuthenticated=useMemo(() => status==="checking", [status])

  return (
    <AuthLayout title="Login">
      <form onSubmit={onSumbit}>
          <Grid container>
            <Grid item xs={ 12 } sx={{ mt: 2 }}>
              <TextField 
                label="Correo" 
                type="email" 
                placeholder='correo@google.com' 
                fullWidth
                name='email'
                value={email}
                onChange={inputChange}
              />
            </Grid>

            <Grid item xs={ 12 } sx={{ mt: 2 }}>
              <TextField 
                label="Contraseña" 
                type="password" 
                placeholder='Contraseña' 
                fullWidth
                name='password'
                value={password}
                onChange={inputChange}
              />
            </Grid>
            
            <Grid container spacing={ 2 } sx={{ mb: 2, mt: 1 }}>
              <Grid item xs={ 12 } sm={ 6 }>
                <Button disabled={isAuthenticated} type='submit' variant='contained' fullWidth>
                  Login
                </Button>
              </Grid>
              <Grid item xs={ 12 } sm={ 6 }>
                <Button disabled={isAuthenticated} onClick={onGoogleSumbit} variant='contained' fullWidth>
                  <Google />
                  <Typography sx={{ ml: 1 }}>Google</Typography>
                </Button>
              </Grid>
            </Grid>


            <Grid container direction='row' justifyContent='end'>
              <Link component={ RouterLink } color='inherit' to="/auth/register">
                Crear una cuenta
              </Link>
            </Grid>

          </Grid>


        </form>

    </AuthLayout>
  )
}

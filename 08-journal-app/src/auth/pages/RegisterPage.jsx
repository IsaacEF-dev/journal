import { Link as RouterLink } from 'react-router-dom';
import {useDispatch} from "react-redux"
import { Button, Grid, Link, TextField, Typography } from '@mui/material';
import { Google } from '@mui/icons-material';
import { AuthLayout } from '../layout/AuthLayout';
import { useForm } from '../../hooks/useForm';
import { registerWithUser } from '../../store/auth/thunks';


export const RegisterPage = () => {
  const dispatch=useDispatch();

  const {inputChange,displayName,email,password}=useForm({
    displayName:"Isaac Escutia Flores",
    email:"Isaacjoyita@gmail.com",
    password:"123456"
  });

  const onSumbit=(e)=>{
    e.preventDefault();
    dispatch(registerWithUser({password,email,displayName}));
  }
  return (
    <AuthLayout title="Crear cuenta">
      <form onSubmit={onSumbit}>
          <Grid container>
           
            <Grid item xs={ 12 } sx={{ mt: 2 }}>
              <TextField 
                label="Nombre completo" 
                type="text" 
                placeholder='Nombre completo' 
                fullWidth
                name="displayName"
                value={displayName}
                onChange={inputChange}
              />
            </Grid>

            <Grid item xs={ 12 } sx={{ mt: 2 }}>
              <TextField 
                label="Correo" 
                type="email" 
                placeholder='correo@google.com' 
                fullWidth
                name={"email"}
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
                name={"password"}
                value={password}
                onChange={inputChange}
              />
            </Grid>
            
            <Grid container spacing={ 2 } sx={{ mb: 2, mt: 1 }}>
              <Grid item xs={ 12 }>
                <Button type='submit' variant='contained' fullWidth>
                  Crear cuenta
                </Button>
              </Grid>
            </Grid>


            <Grid container direction='row' justifyContent='end'>
              <Typography sx={{ mr: 1 }}>¿Ya tienes cuenta?</Typography>
              <Link component={ RouterLink } color='inherit' to="/auth/login">
                ingresar
              </Link>
            </Grid>

          </Grid>


        </form>

    </AuthLayout>
  )
}

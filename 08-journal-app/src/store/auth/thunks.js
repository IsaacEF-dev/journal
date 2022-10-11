import { async } from "@firebase/util";
import { registerUser, signInWhitGoogle } from "../../firebase/provider";
import { checkingToken, login, logout } from "./authSlice"

export const checkingAuthentication=(email,password)=>{
    return async(dispatch)=>{
        dispatch(checkingToken());
    }
}

export const startGoogleSingIn= ()=>{
    return async(dispatch)=>{
        dispatch(checkingToken());

        const result=await signInWhitGoogle();
        if(!result.ok) return dispatch(logout(result.errorMessage));

        delete result.ok;
        dispatch(login(result));
        
    }
}

export const registerWithUser=({password,email,displayName})=>{
    return async(dispatch)=>{
        dispatch(checkingToken());
        
        const result=await registerUser({password,email,displayName});

        console.log(result);
    }
}
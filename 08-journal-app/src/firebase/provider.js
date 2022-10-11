import {GoogleAuthProvider, signInWithPopup,createUserWithEmailAndPassword} from "firebase/auth"
import { AuthApp } from "./config";

const googleProvider=new GoogleAuthProvider();

export const signInWhitGoogle=async()=>{
    try {
        const result= await signInWithPopup(AuthApp,googleProvider);
        const {displayName,email,photoURL,uid}=result.user;
        // const credentials= GoogleAuthProvider.credentialFromResult(result);
        
        return{
            ok:true,
            displayName,email,photoURL,uid
        }

    } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        
        return {
            ok:false,
            errorMessage
        }
    }
};

export const registerUser=async({password,email,displayName})=>{
    try {
        
        const resp=await createUserWithEmailAndPassword(AuthApp,email,password);
        const {uid,photoURL}=resp.user;
        return{
            ok:true,
            email,displayName,uid,photoURL
        }
        
    } catch (error) {
        console.log(error);
        return{
            ok:false,
            errorMessage:error.message
        }
    }
}
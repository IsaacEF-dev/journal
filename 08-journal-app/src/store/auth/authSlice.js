import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
    name: "auth",
    initialState: {
        status:"not-authorization",
        uid: null,
        correo:null,
        displayName:null,
        photoUrl:null,
        errorMessage:null
    },
    reducers: {
        login: (state, {payload} ) => {
            
            state.status="authenticated";
            state.uid= payload.uid;
            state.correo=payload.email;
            state.displayName=payload.displayName;
            state.photoUrl=payload.photoURL;
            state.errorMessage=null;
        },
        logout:(state,{payload})=>{
            state.status="not-authenticated";
            state.uid= null;
            state.correo=null;
            state.displayName=null;
            state.photoUrl=null;
            state.errorMessage=payload;
        },
        checkingToken:(state)=>{
            state.status="checking"
        }
    }
});


// Action creators are generated for each case reducer function
export const { login,logout,checkingToken } = authSlice.actions;
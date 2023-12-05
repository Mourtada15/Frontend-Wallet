import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

export const loginUser = createAsyncThunk(
 '/login/signin',
 async (userCredential) => {
   const request = await axios.post('http://localhost:8000/login/signin', userCredential);
   const response = await request.data.data;
   localStorage.setItem('user', JSON.stringify(response));
   return response;
 },
 {
   pending: (state) => {
     state.loading = true;
     state.users=null;
     state.error= null;
   },
   fulfilled: (state, action) => {
     state.loading = false;
     state.users=action.payload;
     state.error= null;
   },
   rejected: (state, action) => {
     state.loading = false;
     state.error= action.error.message;
   }
 }
);

const userSlice = createSlice({
 name: "users", 
 initialState: {
   currentUser: null,
   loading: false,
   error: false,
   users: [],
 },
 reducers: {
   getUser: (state, action) => {
     state.users = action.payload.map((user) => {
       return {
         id: user.id,
         balance_usd: user.balance_usd,
         balance_usdt: user.balance_usdt,
         email: user.email,
         username: user.username,
         password: user.password,
         status: user.status,
         role: user.role,
       };
     });
   },
 },
 extraReducers: (builder) => {
   builder
   .addCase(loginUser.pending, (state) => {
     state.loading = true;
     state.users=null;
     state.error= null;
   })
   .addCase(loginUser.fulfilled, (state, action) => {
     state.loading = false;
     state.users=action.payload;
     state.error= null;
   })
   .addCase(loginUser.rejected, (state, action) => {
     state.loading = false;
     state.users=null;
     console.log(action.error.message)
     if(action.error.message === 'Request faild with status code 401'){
     state.error= "access denied";}
     else{
      state.error= action.error.message
     }
   })
 }
});

export const {
 getUser, getUserbyId, 
} = userSlice.actions;

export default userSlice.reducer;

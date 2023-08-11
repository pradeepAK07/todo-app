import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getusers = createAsyncThunk('getusers',async()=>{
    return axios.get('https://jsonplaceholder.typicode.com/users').then(res=> {
        return res.data
    }).catch(error=> {return error});
})

const userSlice  = createSlice({
    name:'user',
    initialState:{
        user:[],
        isLoading:false
    },
    extraReducers:{
            [getusers.pending] : (state,action)=>{
                state.isLoading = true;
            },
            [getusers.fulfilled] : (state,action)=>{
                state.isLoading = false;
                state.user = action.payload
            },
            [getusers.rejected] : (state,action)=>{
                state.isLoading = false;
            }
    }
})

export default userSlice.reducer;
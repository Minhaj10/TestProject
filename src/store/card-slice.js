import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
export const getAllData= createAsyncThunk("card/getData",async (arg,{rejectWithValue})=>{
    try {
        const {data}= await axios.get("https://api.spacexdata.com/v3/launches");
        return data;
    } catch (error) {
        rejectWithValue(error.response.data)
    }
})

const cardSlice = createSlice({
    name : 'card',
    initialState : {
        launchList: [],
        isSuccess: false,
        loading :false,
    },
    reducers:{
       
    },
    extraReducers:{
        [getAllData.pending]: (state,{payload})=>{
            state.loading=true;
        },
        [getAllData.fulfilled]: (state, { payload }) => {
            state.loading = false;
            state.launchList = payload;
            state.isSuccess = true;
          },
          [getAllData.rejected]: (state, { payload }) => {
            state.loading = false;
            state.isSuccess = false;
            state.message = "failed";
          },
    }
})

export default cardSlice;

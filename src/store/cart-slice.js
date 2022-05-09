import { createSlice } from '@reduxjs/toolkit'
import { fetchData } from './card-actions';

const cartSlice = createSlice({
    name : 'cart',
    initialState : {
        launchList: fetchData(),
    },
    reducers:{
        getAllCart(state){
            state.isCartAdded=true;
        }
    }
})

export const cartAction = cartSlice.actions;
export default cartSlice;

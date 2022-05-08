import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
    name : 'cart',
    initialState : {isCartAdded: true},
    reducers:{
        getAllCart(state){
            state.isCartAdded=true;
        }
    }
})

export const cartAction = cartSlice.actions;
export default cartSlice;

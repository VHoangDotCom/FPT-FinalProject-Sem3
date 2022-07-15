import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    cartItems: JSON.parse(localStorage.getItem("cartItems")) || [],
    checkCreateOrder: JSON.parse(localStorage.getItem("checkOrder")) || false
};

const modalSlice = createSlice({
    name: 'ADD_CART_ITEM',
    initialState,
    reducers: {
        addcartItem: (state, { payload }) => {
            var existItem = state.cartItems.find(item => item.Id === payload.Id);
            if (existItem) {
                state.cartItems = state.cartItems.map(x => x.Id === existItem.Id ? payload : x);
            } else {
                state.cartItems = [...state.cartItems, payload]
            }
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
        },
        removecartItem: (state, action) => {
            state.cartItems = state.cartItems.filter(x => x.Id !== action.payload)
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
        },
        checkOrder: (state) => {
            state.checkCreateOrder = true
            localStorage.setItem("checkOrder", JSON.stringify(state.checkCreateOrder));
        },
        addByIdOrder: (state, action) => {
            var Id = action.payload;
            localStorage.setItem("IdOrder", JSON.stringify(Id));
        },
        clearOrder: (state) => {
            localStorage.removeItem("checkOrder");
            localStorage.removeItem("IdOrder");
            localStorage.removeItem("cartItems");
        }
    },
});

export const { addcartItem, removecartItem, checkOrder, addByIdOrder, clearOrder } = modalSlice.actions;

export default modalSlice.reducer;
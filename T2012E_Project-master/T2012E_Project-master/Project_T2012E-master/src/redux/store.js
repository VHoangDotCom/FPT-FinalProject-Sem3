import { configureStore } from '@reduxjs/toolkit'

import productModalReducer from './product-modal/productModalSlice'

//import cartItemsReducer from './shopping-cart/cartItemsSlide'
import cartItemsReducer from './shopping-cart-2/shoppingCart';

import commentProductReducer from './comment-product/commentProductSlice'

export const store = configureStore({
    reducer: {
        productModal: productModalReducer,
        cart: cartItemsReducer,
        commentProducts: commentProductReducer,
    },
})
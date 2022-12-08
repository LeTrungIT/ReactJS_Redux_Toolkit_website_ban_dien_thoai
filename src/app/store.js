import { configureStore } from '@reduxjs/toolkit';
import cartSlice from '../features/Slice/cartSlice';
import productsSlice from '../features/Slice/productSlice';
import messageSlice from '../features/Slice/messageSlice';

export const store = configureStore({
    reducer: {
        carts: cartSlice,
        products: productsSlice,
        messages: messageSlice,
    },
});

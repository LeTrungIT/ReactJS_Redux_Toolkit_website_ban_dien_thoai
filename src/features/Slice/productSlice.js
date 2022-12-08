import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as request from '../../utils/request';

export const productSlice = createSlice({
    name: 'products',
    initialState: { status: 'idle', data: [] },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(FETCH_DATA_REQUEST.pending, (state, action) => {
                state.status = 'loading';
            })
            .addCase(FETCH_DATA_REQUEST.fulfilled, (state, action) => {
                state.status = 'success';
                state.data = action.payload;
            });
    },
});

export const FETCH_DATA_REQUEST = createAsyncThunk('products/fetchProducts', async () => {
    const res = request.get('products');
    return res;
});

export default productSlice.reducer;

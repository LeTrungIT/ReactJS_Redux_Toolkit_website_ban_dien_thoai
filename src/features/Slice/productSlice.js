import { createSlice } from '@reduxjs/toolkit';

const data = [
    {
        id: 0,
        name: 'Điện thoại iPhone 13 Pro Max 128GB',
        image: 'https://cdn.tgdd.vn/Products/Images/42/230529/iphone-13-pro-max-silver-600x600.jpg',
        price: 32900000,
        describe: 'Thông tin sản phẩm',
        stock: 10,
        star: 5,
    },
    {
        id: 1,
        name: 'Điện thoại Samsung Galaxy S21+ 5G 128GB',
        image: 'https://cdn.tgdd.vn/Products/Images/42/226385/samsung-galaxy-s21-plus-tim-600x600-200x200.jpg',
        price: 20900000,
        describe: 'Thông tin sản phẩm',
        stock: 10,
        star: 3,
    },
    {
        id: 2,
        name: 'Điện thoại OPPO Find X3 Pro 5G ',
        image: 'https://cdn.tgdd.vn/Products/Images/42/232190/oppo-find-x3-pro-black-001-1-600x600.jpg',
        price: 23990000,
        describe: 'Thông tin sản phẩm',
        stock: 10,
        star: 4,
    },
];

export const productSlice = createSlice({
    name: 'products',
    initialState: data,
    reducers: {},
});

export default productSlice.reducer;

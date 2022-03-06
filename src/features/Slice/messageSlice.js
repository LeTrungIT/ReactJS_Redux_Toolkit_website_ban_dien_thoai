import { createSlice } from "@reduxjs/toolkit";

const data = "Chào mừng đến với website bán hàng trực tuyến";

export const messageSlice = createSlice({
  name: "message",
  initialState: data,
  reducers: {
    SHOW_MESSAGE: (state, action) => {
      return action.payload;
    },
  },
});
export const { SHOW_MESSAGE } = messageSlice.actions;
export default messageSlice.reducer;

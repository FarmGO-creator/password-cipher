import {createSlice} from "@reduxjs/toolkit";
import {RootState} from "../app/store";
import {encodedPost} from "./cipherThunk";
import {Encode} from "../types";

interface initialStateType {
  encoded: Encode;
  loadingPost: boolean;
}

const initialState:initialStateType = {
  encoded: {encoded: ''},
  loadingPost: false,
}

export const encodeSlice = createSlice({
  name: 'cipher',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(encodedPost.pending, (state) => {
      state.loadingPost = true;
    });
    builder.addCase(encodedPost.fulfilled, (state, {payload: encode}) => {
      state.loadingPost = false;
      state.encoded = encode;
    });
    builder.addCase(encodedPost.rejected, (state) => {
      state.loadingPost = false;
    });
  }
});

export const encodeReducer = encodeSlice.reducer;
export const selectEncoded = (state: RootState) => state.encode.encoded;
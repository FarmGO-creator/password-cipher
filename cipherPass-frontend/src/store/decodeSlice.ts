import {createSlice} from "@reduxjs/toolkit";
import {RootState} from "../app/store";
import {decodedPost} from "./cipherThunk";
import {Decode} from "../types";

interface initialStateType {
  decoded: Decode;
  loadingPost: boolean;
}

const initialState:initialStateType = {
  decoded: {decoded: ''},
  loadingPost: false,
}

export const decodeSlice = createSlice({
  name: 'cipher',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(decodedPost.pending, (state) => {
      state.loadingPost = true;
    });
    builder.addCase(decodedPost.fulfilled, (state, {payload: decode}) => {
      state.loadingPost = false;
      state.decoded = decode;
    });
    builder.addCase(decodedPost.rejected, (state) => {
      state.loadingPost = false;
    });
  }
});

export const decodeReducer = decodeSlice.reducer;
export const selectDecoded = (state: RootState) => state.decode.decoded;
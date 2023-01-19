import {createAsyncThunk} from "@reduxjs/toolkit";
import axiosApi from "../axiosApi";
import {CipherTypePost, Decode, Encode} from "../types";


export const encodedPost = createAsyncThunk<Encode, CipherTypePost>(
  'encoded/post',
  async (cipher) => {
    const response = await axiosApi.post('/encode', cipher);

    return response.data
  }
);

export const decodedPost = createAsyncThunk<Decode, CipherTypePost>(
  'encoded/post',
  async (cipher) => {
    const response = await axiosApi.post('/decode', cipher);

    return response.data
  }
);
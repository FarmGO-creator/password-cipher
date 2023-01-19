import {configureStore} from "@reduxjs/toolkit";
import {encodeReducer} from "../store/encodeSlice";
import {decodeReducer} from "../store/decodeSlice";

export const store = configureStore({
  reducer: {
    encode: encodeReducer,
    decode: decodeReducer,
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
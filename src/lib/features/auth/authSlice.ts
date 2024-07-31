import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface IAuthState {
  authState: boolean;
  authToken: string | null;
}

const initialState: IAuthState = {
  authState: false,
  authToken: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setToken: (state, action: PayloadAction<string>) => {
      state.authToken = action.payload;
      state.authState = true;
    },
    clearToken: (state) => {
      state.authToken = null;
      state.authState = false;
    },
  },
});

export const { setToken, clearToken } = authSlice.actions;
export const authReducer = authSlice.reducer;

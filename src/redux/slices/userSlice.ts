import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

interface User {
  id: number | null;
  name: string | null;
  email: string | null;
}

interface Token {
  access_token: string | null;
  token_type: string | null;
}

interface UserState {
  user: User;
  token: Token;
}

const initialState: UserState = {
  user: {
    id: null,
    name: null,
    email: null,
  },
  token: {
    access_token: null,
    token_type: null,
  },
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
    setToken: (state, action: PayloadAction<Token>) => {
      state.token = action.payload;
    },
    clearUser: (state) => {
      state.user = {
        id: null,
        name: null,
        email: null,
      };
      state.token = {
        access_token: null,
        token_type: null,
      };
    },
  },
});

export const { setUser, setToken, clearUser } = userSlice.actions;

export const selectUser = (state: RootState) => state.user;

export default userSlice.reducer;

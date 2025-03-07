import { createSlice } from "@reduxjs/toolkit";

export interface User {
  id: string;
  name: string;
  email: string;
  password: string;
}

interface UserState {
  user: User | null;
}

const initialState: UserState = {
  user: null,
};

export const userSlice = createSlice({
  initialState,
  name: "user",
  reducers: {
    registerUser: (state, action) => {
      state.user = action.payload;
      localStorage.setItem("user", JSON.stringify(state.user));
    },

    deleteUser: (state, action) => {
      const deletedUser = action.payload;
      if (deletedUser) {
        state.user = null;
      }
    },
  },
});

export const { registerUser, deleteUser } = userSlice.actions;

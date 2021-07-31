import { createSlice, createDraftSafeSelector } from "@reduxjs/toolkit";

import { RootState } from "src/store";

const initialState: IAppState = {
  isDark: true,
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    toggleIsDark: (state) => {
      state.isDark = !state.isDark;
    },
  },
});

// Action creators are generated for each case reducer function
export const { toggleIsDark } = appSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectIsDark = createDraftSafeSelector(
  (state: RootState) => state.app,
  (app) => app.isDark
);

export default appSlice.reducer;

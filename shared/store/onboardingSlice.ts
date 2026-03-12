// onboardingSlice.ts
import { createSlice } from "@reduxjs/toolkit";

const onboardingSlice = createSlice({
  name: "onboarding",
  initialState: {
    hasSeen: false, // default value; will be overwritten from AsyncStorage on app start
  },
  reducers: {
    setHasSeen: (state, action) => {
      state.hasSeen = action.payload; // true or false
    },
  },
});

export const { setHasSeen } = onboardingSlice.actions;
export default onboardingSlice.reducer;
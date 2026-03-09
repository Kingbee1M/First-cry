import { createSlice } from "@reduxjs/toolkit";

const onboardingSlice = createSlice({
  name: "onboarding",
  initialState: {
    completed: false,
  },
  reducers: {
    finishOnboarding: (state) => {
      state.completed = true;
    },
  },
});

export const { finishOnboarding } = onboardingSlice.actions;
export default onboardingSlice.reducer;
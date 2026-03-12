import authReducer from "@/shared/store/authSlice";
import onboardingReducer from "@/shared/store/onboardingSlice";
import { combineReducers, configureStore } from "@reduxjs/toolkit";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { persistReducer, persistStore } from "redux-persist";

const rootReducer = combineReducers({
  auth: authReducer,
  onboarding: onboardingReducer,
});

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  whitelist: ["auth"], // only auth will persist
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // required for redux-persist
    }),
});

export const persistor = persistStore(store);

/* Types */

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
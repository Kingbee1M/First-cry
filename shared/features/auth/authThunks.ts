import { api } from "@/shared/services/api";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const loginUser = createAsyncThunk(
  "auth/login",
  async ({ identifier, password }: { identifier: string; password: string }) => {
    const response = await api.post("auth/", {
      identifier,
      password,
    });

    return response.data;
  }
);
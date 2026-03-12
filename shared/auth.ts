import { BASE_URL } from '@env';

export async function loginUser(identifier: string, password: string) {
  if (!BASE_URL) {
    console.error("BASE_URL is not defined in your environment!");
    throw new Error("Unable to connect: API base URL not set.");
  }

  try {
    const response = await fetch(`${BASE_URL}auth/`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ identifier, password }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Login failed");
    }

    return data;
  } catch (err: any) {
    console.error("Login request failed:", err);
    if (err.message === "Network request failed") {
      throw new Error("Unable to connect to server. Please check your internet or API URL.");
    }
    throw err;
  }
}

export async function signUpUser(firstName: string | number, lastName: string, password: string, phone: string) {
  if (!BASE_URL) {
    console.error("BASE_URL is not defined in your environment!");
    throw new Error("Unable to connect: API base URL not set.");
  }

  try {
    const response = await fetch(`${BASE_URL}auth/`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ firstName, lastName, password, phone }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Login failed");
    }

    return data;
  } catch (err: any) {
    console.error("Login request failed:", err);
    if (err.message === "Network request failed") {
      throw new Error("Unable to connect to server. Please check your internet or API URL.");
    }
    throw err;
  }
}
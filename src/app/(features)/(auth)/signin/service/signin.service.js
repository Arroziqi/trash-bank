"use server";

import { API_BASE_URL } from "@/app/const/const";
import { cookies } from "next/headers";

export default async function signIn({ usernameOrPhone, password }) {
  const cookieStore = await cookies();
  try {
    const response = await fetch(`${API_BASE_URL}/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({
        usernameOrPhone,
        password,
      }),
    });

    if (!response.ok) {
      throw new Error("Invalid username or password");
    }

    const data = await response.json();
    console.log(data);

    cookieStore.set("token", data.user.token);
    cookieStore.set("role", data.user.role);

    return data;
  } catch (error) {
    console.log(error);
    throw new Error(error.message);
  }
}

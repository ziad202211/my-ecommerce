"use server";

import { cookies } from "next/headers";
import { loginSchema, LoginFormValues, userSchema } from "@/lib/utils/validators";

export async function loginAction(values: LoginFormValues) {
  try {
    // 1. Validate the input using Zod
    const validatedFields = loginSchema.safeParse(values);
    if (!validatedFields.success) {
      return { 
        error: "Please check your inputs.", 
        // This extracts the specific errors for username and password!
        fieldErrors: validatedFields.error.flatten().fieldErrors 
      };
    }


    const { username, password } = validatedFields.data;

    // 2. Make the request to DummyJSON
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username,
        password,
        expiresInMins: 30, // Request token valid for 30 mins
      }),
    });

    const data = await res.json();

    if (!res.ok) {
      return { error: data.message || "Invalid credentials" };
    }

    // 3. Extract tokens and user data from the response
    const { accessToken, refreshToken, ...userData } = data;

    // 4. Validate the user data matches our schema
    const parsedUser = userSchema.safeParse(userData);
    
    if (!parsedUser.success) {
      console.error("User data format mismatch:", parsedUser.error);
      return { error: "An error occurred parsing user data." };
    }

    // 5. Store the tokens securely in Next.js Cookies
    const cookieStore = await cookies(); // Note: in Next.js 15, cookies() is awaited. If you're on Next 14, remove 'await'
    
    const isProduction = process.env.NODE_ENV === "production";

    cookieStore.set("accessToken", accessToken, {
      httpOnly: true,
      secure: isProduction,
      sameSite: "lax",
      maxAge: 30 * 60, // 30 minutes in seconds
      path: "/",
    });

    cookieStore.set("refreshToken", refreshToken, {
      httpOnly: true,
      secure: isProduction,
      sameSite: "lax",
      maxAge: 7 * 24 * 60 * 60, // 7 days in seconds
      path: "/",
    });

    // 6. Return the clean user data to the client
    return { success: true, user: parsedUser.data };

  } catch (error) {
    console.error("Login Error:", error);
    return { error: "An unexpected error occurred during login." };
  }
}

export async function getAuthUser(){
  try{
    const cookieStore = await cookies();
    const accessToken = cookieStore.get("accessToken")?.value;
    if(!accessToken){
       return null;
    }
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/me`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        if (!res.ok){
          return null;
        }
        const userData = await res.json();
         const parsedUser = userSchema.safeParse(userData);
    
    if (!parsedUser.success) {
      console.error("Invalid user data received from API");
      return null;
    }
    return parsedUser.data;

  }catch(error){
        console.error("Error fetching auth user:", error);
    return null;
  }
}

export async function logoutAction() {
  const cookieStore = await cookies();
  
  // Deleting cookies by setting them with an empty value and expiring them immediately
  cookieStore.delete("accessToken");
  cookieStore.delete("refreshToken");

  // Normally, you might also want to redirect the user to the login page here
  // import { redirect } from "next/navigation";
  // redirect("/login");
}

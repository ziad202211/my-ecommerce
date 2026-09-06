"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { loginAction } from "@/lib/actions/auth.actions";

export default function LoginForm() {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<{username?: string[], password?: string[]}>({});
  const [isPending, setIsPending] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsPending(true);
    setError(null);
    setFieldErrors({});

    // Grab data from the standard HTML form
    const formData = new FormData(e.currentTarget);
    const username = formData.get("username") as string;
    const password = formData.get("password") as string;

    // Call our server action! 
    const result = await loginAction({ username, password });

    if (result.fieldErrors) {
      setFieldErrors(result.fieldErrors);
      setError(result.error || "Please check your inputs.");
      setIsPending(false);
    } else if (result.error) {
      setError(result.error);
      setIsPending(false);
    } else if (result.success) {
      // Success! Next.js cookies are set, redirect to homepage
      router.push("/"); 
      router.refresh(); // Forces the server components to re-fetch user data
    }
  }

  return (
    <div className="min-h-[80vh] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-3xl shadow-2xl border border-gray-100">
        <div>
          <h2 className="mt-2 text-center text-3xl font-extrabold text-gray-900 tracking-tight">
            Welcome back
          </h2>
          <p className="mt-2 text-center text-sm text-gray-500">
            Please sign in to your account
          </p>
        </div>
        
        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <div className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5" htmlFor="username">
                Username
              </label>
              <input 
                id="username"
                name="username" 
                placeholder="e.g., emilys" 
                required 
                className="appearance-none block w-full px-4 py-3.5 border border-gray-200 rounded-xl shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black focus:border-black transition-all duration-200 bg-gray-50 focus:bg-white"
              />
              {fieldErrors.username && (
                <p className="mt-1.5 text-sm text-red-500 font-medium">
                  {fieldErrors.username[0]}
                </p>
              )}
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5" htmlFor="password">
                Password
              </label>
              <input 
                id="password"
                type="password" 
                name="password" 
                placeholder="••••••••" 
                required 
                className="appearance-none block w-full px-4 py-3.5 border border-gray-200 rounded-xl shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black focus:border-black transition-all duration-200 bg-gray-50 focus:bg-white"
              />
              {fieldErrors.password && (
                <p className="mt-1.5 text-sm text-red-500 font-medium">
                  {fieldErrors.password[0]}
                </p>
              )}
            </div>
          </div>
          
          {error && (
            <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-xl">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-red-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-red-700">{error}</p>
                </div>
              </div>
            </div>
          )}
          
          <button 
            type="submit" 
            disabled={isPending}
            className="group relative w-full flex justify-center py-3.5 px-4 border border-transparent text-sm font-semibold rounded-xl text-white bg-[#DB4444] hover:bg-[#DB4444]/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#DB4444] disabled:opacity-70 disabled:cursor-not-allowed transition-all duration-200 shadow-md hover:shadow-xl active:scale-[0.98]"
          >
            {isPending ? (
              <span className="flex items-center">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Signing in...
              </span>
            ) : "Sign In"}
          </button>
        </form>
      </div>
    </div>
  );
}

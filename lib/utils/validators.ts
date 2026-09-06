import { z } from "zod";

// --- Authentication Schemas ---

export const loginSchema = z.object({
  username: z.string().min(4, { message: "Username is required" }),
  password: z.string().min(8, { message: "Password must be at least 8 characters" }),
});

export const signupSchema = loginSchema.extend({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
});

export const userSchema = z.object({
  id: z.number(),
  username: z.string(),
  email: z.string().email(),
  firstName: z.string(),
  lastName: z.string(),
  image: z.string().url(),
  
});



// --- E-commerce Schemas ---

export const productSchema = z.object({
  name: z.string().min(3, { message: "Product name is required" }),
  description: z.string().min(10, { message: "Description is too short" }),
  price: z.number().positive({ message: "Price must be a positive number" }),
  category: z.string().min(1, { message: "Category is required" }),
  inStock: z.boolean().default(true),
});

export const checkoutSchema = z.object({
  fullName: z.string().min(2, { message: "Full name is required" }),
  address: z.string().min(5, { message: "Shipping address is required" }),
  city: z.string().min(2, { message: "City is required" }),
  zipCode: z.string().min(5, { message: "Zip code is required" }),
  cardNumber: z.string().min(16, { message: "Invalid card number" }),
});

// --- Contact Schemas ---
export const contactFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

// Infer types from the schemas
export type LoginFormValues = z.infer<typeof loginSchema>;
export type SignupFormValues = z.infer<typeof signupSchema>;
export type ProductFormValues = z.infer<typeof productSchema>;
export type CheckoutFormValues = z.infer<typeof checkoutSchema>;
export type ContactFormValues = z.infer<typeof contactFormSchema>;
export type UserFormValues = z.infer<typeof userSchema>;

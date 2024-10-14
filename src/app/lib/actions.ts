"use server";

import { sql } from "@vercel/postgres";
import { signIn } from "../../../auth";
import { AuthError } from "next-auth";

export async function authenticate(
  prevState: string | undefined,
  formData: FormData
) {
  try {
    await signIn("credentials", formData);
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return "Invalid credentials.";
        default:
          return "Something went wrong.";
      }
    }
    throw error;
  }
}

export async function createRecette(id: string, name: string, process: string) {
  const { rows } = await sql`
    INSERT INTO recettes (id, name, process)
    VALUES (${id}, ${name}, ${process})
    RETURNING * 
    `;
  return rows[0];
}

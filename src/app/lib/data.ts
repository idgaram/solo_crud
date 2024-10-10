import { sql } from "@vercel/postgres";
import type { Recette, User } from "./definitions";

export async function fetchRecettes() {
  try {
    const data = await sql<Recette>`select * from recettes;`;
    // console.log(data);
    return data.rows;
  } catch (error) {
    console.error("database Error: ", error);
  }
}

export async function fetchUsers() {
  try {
    const data = await sql<User>`
    SELECT * FROM users;
`;
    return data.rows;
  } catch (error) {
    console.error("database Error: ", error);
  }
}

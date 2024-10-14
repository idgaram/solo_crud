import mysql from "mysql2/promise";

const dbConfig = {
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "undefined",
  database: process.env.DB_NAME || "undefined",
  port: process.env.DB_PORT ? Number.parseInt(process.env.DB_PORT, 10) : 3306,
};

const requiredKeys = ["host", "user", "password", "database"] as const;
for (const key of requiredKeys) {
  if (!dbConfig[key]) {
    throw new Error(`missing required database configuration: ${key}`);
  }
}
export const db = mysql.createPool(dbConfig);
// async function connectToDatabase() {
//   const connection = await mysql.createConnection({
//     host: process.env.DB_HOST,
//     user: process.env.DB_USER,
//     password: process.env.DB_PASSWORD,
//     database: process.env.DB_NAME,
//     port: 3306,//   });
//   return connection;
// }

// export async function fetchRecettes() {
//   const connection = await connectToDatabase();
//   try {
//     const [rows] = await connection.execute("SELECT * FROM recettes");
//     // console.log(rows);
//     return rows;
//   } catch (err) {
//     console.error("error fetching recettes: ", err);
//   } finally {
//     await connection.end();
//   }
// }

// import { sql } from "@vercel/postgres";
// import type { Recette, User } from "./definitions";
// import { createRecette } from "@/app/lib/actions";

// export async function fetchRecettes() {
//   try {
//     const data = await sql<Recette>`SELECT * FROM recettes;`;
//     // console.log(data);
//     return data.rows;
//   } catch (error) {
//     console.error("database Error: ", error);
//   }
// }

// export async function fetchUsers() {
//   try {
//     const data = await sql<User>`
//     SELECT * FROM users;
// `;
//     return data.rows;
//   } catch (error) {
//     console.error("database Error: ", error);
//   }
// }

// export async function createRecette(id: string, name: string, process: string) {
//   const { rows } = await sql`
//     INSERT INTO recettes (id, name, process)
//     VALUES (${id}, ${name}, ${process})
//     RETURNING *
//     `;
//   return rows[0];
// }

// export async function POST(req: Request) {
//   const { id, name, description } = await req.json();

//   if (!name || !process || !id) {
//     return new Response("missing name or description", { status: 400 });
//   }

//   try {
//     const newRecette = await createRecette(id, name, description);
//     return new Response(JSON.stringify(newRecette), { status: 201 });
//   } catch (error) {
//     return new Response(
//       JSON.stringify({ error: `error creatint itme: ${error}` }),
//       { status: 500 }
//     );
//   }
// }

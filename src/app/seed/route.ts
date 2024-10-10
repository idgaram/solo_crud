import bcrypt from "bcrypt";
import { db } from "@vercel/postgres";
import { users, recettes } from "../lib/Placeholder-data";

const client = await db.connect();

async function seedUsers() {
  await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
  await client.sql`
        CREATE TABLE IF NOT EXISTS users (
            id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
            email TEXT NOT NULL UNIQUE,
            password TEXT NOT NULL
            );
    `;

  const insertedUsers = await Promise.all(
    users.map(async (user) => {
      const hashedPassword = await bcrypt.hash(user.password, 10);
      return client.sql`
                INSERT INTO users (id, email, password)
                VALUES (${user.id},${user.email}, ${hashedPassword})
                ON CONFLICT (email) DO NOTHING;
                `;
    })
  );

  return insertedUsers;
}

async function seedRecettes() {
  // await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

  await client.sql`
    CREATE TABLE IF NOT EXISTS recettes (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      name VARCHAR(45) NOT NULL UNIQUE,
      process TEXT NOT NULL
    );  
  `;

  const insertedRecettes = await Promise.all(
    recettes.map(
      (recette) => client.sql`
      INSERT INTO recettes (id, name, process)
      VALUES (${recette.id}, ${recette.name}, ${recette.process})
      ON CONFLICT (name) DO NOTHING
    `
    )
  );
  return insertedRecettes;
}

export async function GET() {
  try {
    await client.sql`BEGIN`;
    await seedUsers();
    await seedRecettes();
    await client.sql`COMMIT`;

    return Response.json({ message: "Database seeded succesfully" });
  } catch (error) {
    await client.sql`ROLLBACK`;
    return Response.json({ error }, { status: 500 });
  }
}

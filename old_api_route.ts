// export default function GET(request: Request) {
//   return new Response("Helo", { status: 200 });
// }

// import { createRecette } from "@/app/lib/actions";
// import { sql } from "@vercel/postgres";
// import { NextResponse } from "next/server";

// export async function POST(req: Request) {
//   try {
//     const { id, name, process } = await req.json();

//     if (!name || !process) {
//       return NextResponse.json(
//         { message: "missing name or process" },
//         { status: 400 }
//       );
//     }

//     const result = await sql`
//   INSERT INTO recettes (id, name, process)
//   VALUES (${id}, ${name}, ${process})
//       ON CONFLICT (name) DO NOTHING
//   RETURNING *
//   `;

//     if (result.rowCount === 0) {
//       return NextResponse.json(
//         { message: "recipe already exists" },
//         { status: 409 }
//       );
//     }
//     return NextResponse.json(
//       { message: "recipe created successfully", recette: result.rows[0] },
//       { status: 201 }
//     );
//   } catch (error) {
//     console.error("Error creating recette: ", error);
//     return NextResponse.json(
//       { message: "internal server error" },
//       { status: 500 }
//     );
//   }
// }

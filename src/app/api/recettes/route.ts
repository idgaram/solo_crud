import { db } from "@/app/lib/data";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const [recettes] = await db.query("SELECT * FROM recettes");
    return NextResponse.json(recettes);
  } catch (err) {
    return NextResponse.json(
      { message: "Error fecthing recettes", err },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  const { id, name, process } = await req.json();
  try {
    const [result] = await db.query(
      "INSERT INTO recettes (id, name, process) VALUES (?,?,?)",
      [id, name, process]
    );
    return NextResponse.json({ result, id, name, process }, { status: 201 });
  } catch (err) {
    return NextResponse.json(
      { message: "error creating recette: ", err },
      { status: 500 }
    );
  }
}

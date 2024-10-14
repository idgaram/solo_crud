import { db } from "@/app/lib/data";
import type { ResultSetHeader } from "mysql2";
import { NextResponse } from "next/server";

export async function PUT(
  req: Request,
  { params }: { params: { name: string } }
) {
  const { name } = params;
  const { newProcess } = await req.json();
  try {
    const [result] = await db.query<ResultSetHeader>(
      "UPDATE recettes SET process = ? WHERE name = ?",
      [newProcess, name]
    );
    if (result.affectedRows === 0) {
      return NextResponse.json(
        { message: `no recette found with name: ${name}` },
        { status: 404 }
      );
    }
    return NextResponse.json({
      message: "Recette updated",
      updatedRecette: { name, process: newProcess },
    });
  } catch (err) {
    return NextResponse.json(
      { message: "error updating recette: ", err },
      { status: 500 }
    );
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: { name: string } }
) {
  const { name } = params;
  try {
    const [result] = await db.query<ResultSetHeader>(
      " DELETE FROM recettes WHERE name = ?",
      [name]
    );
    if (result.affectedRows === 0) {
      return NextResponse.json(
        { message: `no recette found with name: ${name}` },
        { status: 404 }
      );
    }
    return NextResponse.json({
      message: "Recette deleted",
    });
  } catch (err) {
    return NextResponse.json(
      { message: "error deleting recette: ", err },
      { status: 500 }
    );
  }
}

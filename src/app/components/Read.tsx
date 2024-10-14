"use client";

import type { Recette } from "../type/types";
import Recipe from "./Recipe";
// import type { ReadProps } from "../type/types";
import { useEffect, useState } from "react";
// import { GET } from "../recettes/api/route";
// import { setErrorMap } from "zod";
// import { fetchRecettes } from "../lib/data";

const Read = () => {
  const [recettes, setRecettes] = useState<Recette[]>([]);
  const [message, setMessage] = useState<string | null>(null);

  useEffect(() => {
    const fetchRecettes = async () => {
      try {
        const res = await fetch("/api/recettes");
        if (!res.ok) {
          throw new Error("Error fetching recettes");
        }
        const data = await res.json();
        setRecettes(data);
      } catch (err) {
        const errorMessage = "failed to update";
        if (err instanceof Error) {
          setMessage(errorMessage);
        }
      }
    };

    fetchRecettes();
  }, []);

  if (message) return <div className="text-red-500">{message}</div>;

  return (
    <div className="  bg-white/20 backdrop-blur-lg rounded-xl p-8 mb-8">
      <h2 className="text-xl text-orange-400 m-8 my-0">READ</h2>
      <ul className="text-orange-400">
        {recettes.length > 0 ? (
          recettes.map((recette) => (
            <li key={recette.name}>
              <Recipe name={recette.name} process={recette.process} />
            </li>
          ))
        ) : (
          <div>no recipe found</div>
        )}
      </ul>
    </div>
  );
};
export default Read;

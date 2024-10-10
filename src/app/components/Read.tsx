"use client";

import Recipe from "./Recipe";
import type { ReadProps } from "../type/types";

const Read = ({ recettes }: ReadProps) => {
  return (
    <div className="  bg-white/20 backdrop-blur-lg rounded-xl p-8 mb-8">
      <h2 className="text-xl text-orange-400 m-8 my-0">READ</h2>
      <ul className="text-orange-400">
        {recettes.map((recette) => (
          <li key={recette.name}>
            <Recipe name={recette.name} process={recette.process} />
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Read;

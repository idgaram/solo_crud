"use client";

const Recipe = ({
  id,
  name,
  process,
}: {
  id: number;
  name: string;
  process: string;
}) => {
  return (
    <div className="border-orange-400 border my-4 rounded-lg p-4 text-white">
      <h2>recipe id: {id}</h2>
      <h2>recipe name: {name}</h2>
      <p>{process}</p>
    </div>
  );
};
export default Recipe;

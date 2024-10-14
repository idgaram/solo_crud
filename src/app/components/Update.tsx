"use client";

import { useState } from "react";

const Update = () => {
  const [name, setName] = useState("");
  const [newProcess, setNewProcess] = useState("");
  const [message, setMessage] = useState("");

  const updateRecette = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch(`/api/recettes/${name}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ newProcess }),
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.message || "error updating recette");
      }
      setMessage(`Recette updated: ${data.updatedRecette.name}`);
    } catch (err) {
      const errorMessage = "failed to update";
      if (err instanceof Error) {
        setMessage(errorMessage);
      }
    }
  };

  return (
    <div className="border-t mb-16">
      <h2 className="text-xl text-orange-400 m-8 flex gap-8">
        <span className=" bg-white/20 backdrop-blur-lg rounded-xl p-8 mb-8 py-2 px-4">
          UPDATE
        </span>{" "}
      </h2>
      <form onSubmit={updateRecette} className="px-8">
        {/* <div className="my-4 flex flex-col items-center  gap-4">
          <input

            type="text"
            id="Update_id"
            className="border rounded-lg border-orange-600 w-full drop-shadow-[4px_4px_rgba(106,_39,_5,_1)] outline-none p-2"
          />{" "}
          <label
            htmlFor="Update_id"
            className="font-[family-name:var(--font-roboto)] underline mb-4"
          >
            recipe id
          </label>
        </div> */}
        <div className="my-4 flex flex-col items-center  gap-4">
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="current recipe name"
            type="text"
            id="Update_name"
            className="border rounded-lg border-orange-600 w-full drop-shadow-[4px_4px_rgba(106,_39,_5,_1)] outline-none p-2"
          />{" "}
          <label
            htmlFor="Update_name"
            className="font-[family-name:var(--font-roboto)] underline mb-4"
          >
            recipe name
          </label>
        </div>
        <div className="my-4 flex flex-col items-center gap-4">
          <textarea
            value={newProcess}
            onChange={(e) => setNewProcess(e.target.value)}
            placeholder="current recipe process"
            id="Update_process"
            className="border rounded-lg border-orange-600 w-full drop-shadow-[4px_4px_rgba(106,_39,_5,_1)] outline-none p-2"
          />{" "}
          <label htmlFor="Update_process" className="underline mb-4">
            recipe process
          </label>
        </div>
        <button
          type="submit"
          className="text-slate-600 border-2 rounded-lg border-orange-800 w-full py-4 text-xl bg-orange-600 drop-shadow-[8px_8px_rgba(106,_39,_5,_1)]"
        >
          save
        </button>
      </form>
      {message && <div className="text-red-500 mt-4">{message}</div>}
    </div>
  );
};

export default Update;

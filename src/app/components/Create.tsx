"use client";

import { v4 as uuidv4 } from "uuid";
// import axios, { AxiosError } from "axios";
import { useState } from "react";

const Create = () => {
  const [name, setName] = useState("");
  const [process, setProcess] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async () => {
    setLoading(true);
    setError("");
    setSuccess("");
    const id = uuidv4();

    try {
      const res = await fetch("/api/recettes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id, name, process }),
      });

      if (res.ok) {
        // const newRecette = await res.json();
        setSuccess("recipe created successfully");
        setName("");
        setProcess("");
      } else {
        const error = await res.json();
        setError(error.message || "Error creating recette");
      }
    } catch (err) {
      setError(`error submiting form: ${err}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="border-t mb-16">
      <h2 className="text-xl text-orange-400   m-8 flex gap-8">
        <span className=" bg-white/20 backdrop-blur-lg rounded-xl p-8 mb-8 py-2 px-4">
          CREATE
        </span>{" "}
      </h2>
      <form className="px-8" onSubmit={handleSubmit}>
        <div className="my-4 flex flex-col items-center  gap-4">
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            id="create_name"
            className="border rounded-lg border-orange-600 w-full drop-shadow-[4px_4px_rgba(106,_39,_5,_1)] outline-none p-2"
          />{" "}
          <label
            htmlFor="create_name"
            className="font-[family-name:var(--font-roboto)] underline mb-4"
          >
            recipe name
          </label>
        </div>
        <div className="my-4 flex flex-col items-center gap-4">
          <textarea
            value={process}
            onChange={(e) => setProcess(e.target.value)}
            id="create_process"
            className="border rounded-lg border-orange-600 w-full drop-shadow-[4px_4px_rgba(106,_39,_5,_1)] outline-none p-2"
          />{" "}
          <label htmlFor="create_process" className="underline mb-4">
            recipe process
          </label>
        </div>
        {error && <p>{error}</p>}
        {success && <p>{success}</p>}
        <button
          type="submit"
          className="border-2 rounded-lg border-orange-800 w-full py-4 text-slate-600 text-xl bg-orange-600 drop-shadow-[8px_8px_rgba(106,_39,_5,_1)]"
        >
          {loading ? "saving..." : "save"}
        </button>
      </form>
    </div>
  );
};

export default Create;

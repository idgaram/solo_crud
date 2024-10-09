"use client";

const Delete = () => {
  return (
    <div className="border-t mb-16">
      <h2 className="text-xl text-orange-400 m-8 flex gap-8">
        <span className=" bg-white/20 backdrop-blur-lg rounded-xl p-8 mb-8 py-2 px-4">
          DELETE
        </span>{" "}
      </h2>
      <form className="px-8">
        <div className="my-4 flex flex-col items-center  gap-4">
          <input
            type="text"
            id="Delete_id"
            className="border rounded-lg border-orange-600 w-full drop-shadow-[4px_4px_rgba(106,_39,_5,_1)] outline-none p-2"
          />{" "}
          <label
            htmlFor="Delete_id"
            className="font-[family-name:var(--font-roboto)] underline mb-4"
          >
            recipe id
          </label>
        </div>

        <button
          type="submit"
          className="border-2 rounded-lg border-orange-800 w-full py-4 text-xl text-slate-600 bg-orange-600 drop-shadow-[8px_8px_rgba(106,_39,_5,_1)]"
        >
          delete
        </button>
      </form>
    </div>
  );
};

export default Delete;

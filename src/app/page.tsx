import Link from "next/link";
import MaxWidthWrapper from "./components/MaxWidthWrapper";
import Create from "./components/Create";
import Update from "./components/Update";
import Delete from "./components/Delete";
import Read from "./components/Read";
// import { fetchRecettes } from "@/app/lib/data";
// import { useEffect, useState, useRef } from "react";
// import { fetchRecettes } from "./lib/data";
// import type { Recette } from "./type/types";

export default async function Home() {
  // const recettes: Recette[] = (await fetchRecettes()) || [];
  // const recetteNameRef = useRef();
  // const recetteNameToDeleteRef = useRef();
  // const recetteNameToUpdateRef = useRef();

  // const [recettes, setRecettes] = useState([]);
  // const [updated, setUpdates] = useState(false);
  // const [created, setCreated] = useState(false);
  // const [deleted, setDeleted] = useState(false);
  // const [updatedError, setUpdatedError] = useState(false);
  // const [deletedError, setDeletedError] = useState(false);
  // fetchRecettes();

  // async function getRecettes() {
  //   const postData = {
  //     method: "GET",
  //     headers: {
  //       "Content-type": "application/json",
  //     },
  //   };
  //   const res = await fetchRecettes()
  // }

  // async function createRecettes() {}

  // async function deleteRecettes() {}

  // async function updateRecettes() {}

  return (
    <div className="text-orange-400 ">
      <MaxWidthWrapper>
        <div className="my-8">
          <h1 className="text-orange-600 text-7xl text-center font-[family-name:var(--font-roboto)] mb-8 ">
            CRUD recettes
          </h1>
          <h2 className="text-xl text-orange-400   m-8 flex gap-8">
            <span className=" bg-white/20 backdrop-blur-lg rounded-xl p-8 mb-8 py-2 px-4">
              <Link href="#" className="  underline m-8 ">
                Database api data
              </Link>
            </span>{" "}
          </h2>
        </div>
        <Read />
        <Create />
        <Update />
        <Delete />
      </MaxWidthWrapper>
    </div>
  );
}

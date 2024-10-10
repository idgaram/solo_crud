import Link from "next/link";
import { signOut } from "../../../auth";

const Navbar = () => {
  const user = undefined;
  const isAdmin = false;

  return (
    <nav className="sticky z-[100] h-14 inset-x-0 top-0 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg ">
      <div className=" mx-4 flex h-14 items-center justify-between border-b border-zinc-200">
        <Link href="/" className="text-orange-400">
          Accueil
        </Link>
        <div className="text-orange-500 flex z-40 font-semibold h-full items-center space-x-4">
          {user ? (
            <>
              <Link href="/api/auth/logout">Sign out</Link>{" "}
              {isAdmin ? <Link href="/api/auth/logout">DashBoard</Link> : null}{" "}
              <Link href="configure/upload">Create recipe</Link>
            </>
          ) : (
            <>
              <Link href="/login">login</Link>{" "}
              <div>
                <Link href="/configure/upload">Create recipe</Link>
              </div>
            </>
          )}
          <form
            action={async () => {
              "use server";
              await signOut();
            }}
          >
            {" "}
            <button
              type="submit"
              className="flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3"
            >
              Sign out
            </button>{" "}
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

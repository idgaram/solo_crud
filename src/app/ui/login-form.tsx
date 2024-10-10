"use client";

import { useState } from "react";
import { authenticate } from "../lib/actions";

export default function LoginForm() {
  //   const [errorMessage, formAction, isPending] = useActionState(
  //     authenticate,
  //     undefined
  //   );
  const [errorMessage, setErrorMessage] = useState("");
  const [isPending, setIsPending] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsPending(true);
    setErrorMessage("");

    const formData = new FormData(event.currentTarget);

    try {
      const result = await authenticate(undefined, formData);
      if (result) {
        setErrorMessage(result);
      }
    } catch {
      setErrorMessage("failed to log");
    } finally {
      setIsPending(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <div className="flex-1 rounded-lg bg-gray-500 px-6 pb-4 pt-8 ">
        <h1 className="mb-3 text-2xl text-slate-800">
          Please log in to continue
        </h1>
        <div className="w-full">
          <div>
            <label
              htmlFor="email"
              className="mb-3 mt-5 block text-xs font-medium text-gray-900"
            >
              Email
            </label>
            <div className="relative">
              <input
                type="email"
                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 text-orange-300 placeholder:text-slate-300"
                id="email"
                name="email"
                placeholder="Enter your email address"
                required
              />
            </div>
          </div>
          <div className="mt-4">
            <label
              htmlFor="password"
              className="mb-3 mt-5 block text-xs font-medium text-gray-900"
            >
              Password
            </label>
            <div className="relative">
              <input
                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 text-orange-300 placeholder:text-slate-300"
                type="password"
                id="password"
                placeholder="Enter password"
                name="password"
                minLength={6}
                required
              />
            </div>
          </div>
        </div>
        <button className="mt-4 w-full" type="submit" aria-disabled={isPending}>
          {isPending ? "logging in ..." : "log in"}
        </button>
        <div>
          {errorMessage && (
            <p className="text-sm text-red-500">!!!!! {errorMessage}</p>
          )}
        </div>
      </div>
    </form>
  );
}

import Image from "next/image";
import LoginForm from "../ui/login-form";

export default function LoginPage() {
  return (
    <main className="flex items-center justify-center md:h-screen ">
      <div className="relative mx-auto flex w-full max-w-[400px] flex-col space-y-2.5 p-4 md:-mt-32">
        <div className="flex h-20 justify-center w-full items-center rounded-lg bg-blue-500/50  md:h-36  ">
          <Image
            className=""
            src="/img/manman.png"
            alt="manman"
            width={100}
            height={100}
            // layout="fill"
            objectFit="cover"
          />
        </div>
        <LoginForm />
      </div>
    </main>
  );
}

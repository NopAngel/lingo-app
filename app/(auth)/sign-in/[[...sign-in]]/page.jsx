import { SignIn } from "@clerk/nextjs";
import Image from "next/image";

export default function Page() {
  return (
    <article className="flex justify-center h-[100vh] items-center flex-col text-center">
      <div className="p-[6px]">
        <Image
          src="/mascot.svg"
          width={100}
          height={100}
          className="mx-auto mb-[20px]"
        />
        <h1 className="text-3xl font-semibold">¡Bienvenido a Lingo!</h1>
        <p className="text-xs text-neutral-700">
          ¡Aprende idiomas fácilmente y divertivo!
        </p>
      </div>
      <SignIn />
    </article>
  );
}

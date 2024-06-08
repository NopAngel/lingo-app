import ButtonEdit from "@/components/ButtonEdit";
import LevelButton from "@/components/LevelButton";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import { SignInButton, SignedIn, SignedOut } from "@clerk/nextjs";
import { LucideBookUser } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Navbar />
      <section className="flex justify-around items-center h-[80vh] lg:flex-row flex-col gap-6">
        <section>
          <h1 className="text-4xl text-neutral-600 font-bold max-w-[500px]">
            Aprende, practica y domina nuevos idiomas con Lingo.
          </h1>

          <SignedIn>
            <a
              className="inline-flex items-center justify-center whitespace-nowrap rounded-xl text-sm font-bold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 uppercase tracking-wide bg-green-500 text-primary-foreground hover:bg-green-500/90 border-green-600 border-b-4 active:border-b-0 h-12 px-8 w-full text-white"
              href="/home"
            >
              Continuar
            </a>
          </SignedIn>
          <SignedOut>
            <a
              className="inline-flex items-center justify-center whitespace-nowrap rounded-xl text-sm font-bold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 uppercase tracking-wide bg-green-500 text-primary-foreground hover:bg-green-500/90 border-green-600 border-b-4 active:border-b-0 h-12 px-8 w-full text-white"
              href="/sign-in"
            >
              Empezar
            </a>
          </SignedOut>
        </section>
        <section>
          <Image src="/hero.svg" width={500} height={500} alt="Hero Lingo" />
        </section>
      </section>
    </main>
  );
}

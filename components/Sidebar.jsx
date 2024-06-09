import { ClerkLoaded, ClerkLoading } from "@clerk/nextjs";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import React from "react";

function Sidebar() {
  return (
    <aside className="lg:w-[200px] w-[60px] h-[100vh] border-r-[1px] p-[3px] border-zinc-300">
      <nav>
        <ul className="flex flex-col items-center h-[20vh]">
          <section className="mt-[6px]">
            <Image
              alt="Logo Lingo App"
              src="/mascot.svg"
              width={60}
              height={60}
            />
          </section>
          <section className="mt-[60px] gap-10 flex flex-col">
            <li>
              <a href="/home" className="flex items-center">
                <Image src="/learn.svg" alt="Inicio - Lingo App" />
                <span className="lg:block none">Inicio</span>
              </a>
            </li>
            <li>
              <a href="/challenges" className="flex items-center">
                <Image src="/quests.svg" alt="Retos - Lingo App" />
                <span className="lg:block none">Retos</span>
              </a>
            </li>
          </section>
          <section className="absolute bottom-0">
            <li>
              <ClerkLoading>
                <div className="size-7 bg-green-500 animate-ping rounded-full"></div>
              </ClerkLoading>
              <ClerkLoaded>
                <UserButton afterSignOutUrl="/" />
              </ClerkLoaded>
            </li>
          </section>
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;

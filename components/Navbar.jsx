import { UserButton } from "@clerk/nextjs";
import React from "react";

function Navbar() {
  return (
    <header>
      <nav>
        <ul className="flex items-center justify-around p-6 border-b-2">
          <section>
            <li className="flex items-center gap-1">
              <img src="/mascot.svg" width={50} alt="" />
              <span className="text-green-500 font-bold text-2xl">Lingo</span>
            </li>
          </section>
          <section>
            <li>
              <UserButton afterSignOutUrl="/" userProfileMode="navigation" />
            </li>
          </section>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;

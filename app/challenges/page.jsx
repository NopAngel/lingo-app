import CardChallenges from "@/components/CardChallenges";
import Sidebar from "@/components/Sidebar";
import React from "react";

function challenges() {
  return (
    <main>
      <section className="flex">
        <Sidebar />
        <article className="p-[6px] mx-auto w-[98%] text-center">
          <section>
            <section className="w-[500px] bg-green-500 text-white mx-auto mt-6 mb-6 rounded-lg text-left p-3">
              <h1 className="text-3xl font-semibold p-2">Retos</h1>
              <p className="p-1 opacity-70">Acá estan los Retos</p>
            </section>
            <div className="w-[400px] mx-auto grid grid-cols-1">
              <CardChallenges
                Title="Lingo_X"
                Description="Derrota el Jefe, difícil en Lingo."
                ImageSRC="/mascot_sad.svg"
                Href="/challenges/boss"
              />
            </div>
          </section>
        </article>
      </section>
    </main>
  );
}

export default challenges;

import { CreateCard } from "@/app/levels/level-1/page";
import React from "react";

function BossRound3() {
  return (
    <main className="flex justify-center mt-[20px]">
      <section>
        <h1 className="text-3xl font-extrabold p-2 max-w-2xl text-center">
          A horse was with other horses, and a Cat was found.
        </h1>
        <h2 className="w-fit mx-auto">¿Qué encontro el Caballo?</h2>
        <div className="grid grid-cols-3 gap-3">
          <CreateCard
            NoCorrect={true}
            Title="un perro"
            OptionNumber={1}
            ImageSrc="/dog-face.svg"
          />
          <CreateCard
            NoCorrect={false}
            Title="un gato"
            OptionNumber={2}
            ImageSrc="/cat.svg"
            NextLevel="/challenges/boss/finish-boss/"
          />
          <CreateCard
            NoCorrect={true}
            Title="arbol"
            OptionNumber={3}
            ImageSrc="/tree.svg"
          />
        </div>
      </section>
    </main>
  );
}

export default BossRound3;

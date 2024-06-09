import { CreateCard } from "@/app/levels/level-1/page";
import React from "react";

function BossRound1() {
  return (
    <main className="flex justify-center mt-[20px]">
      <section>
        <h1 className="text-3xl font-extrabold p-2 max-w-2xl text-center">
          A person was sleeping, until he heard a tree
        </h1>
        <h2 className="w-fit mx-auto">¿Qué escucho el Humano?</h2>
        <div className="grid grid-cols-3 gap-3">
          <CreateCard
            NoCorrect={false}
            Title="un arbol"
            OptionNumber={1}
            ImageSrc="/tree.svg"
            NextLevel="/challenges/boss/round-2/"
          />
          <CreateCard
            NoCorrect={true}
            Title="un perro"
            OptionNumber={2}
            ImageSrc="/dog-face.svg"
          />
          <CreateCard
            NoCorrect={true}
            Title="un robot"
            OptionNumber={3}
            ImageSrc="/robot.svg"
          />
        </div>
      </section>
    </main>
  );
}

export default BossRound1;

import { CreateCard } from "@/app/levels/level-1/page";
import React from "react";

function Boss() {
  return (
    <main className="flex justify-center mt-[20px]">
      <section>
        <h1 className="text-3xl font-extrabold p-2 max-w-2xl text-center">
          "A dog was walking and met a horse."
        </h1>
        <h2 className="w-fit mx-auto">¿Qué se encontro el Perro?</h2>

        <div className="grid grid-cols-3 gap-3">
          <CreateCard
            NoCorrect={false}
            Title="un caballo"
            OptionNumber={1}
            ImageSrc="/horse-face.svg"
            NextLevel="/challenges/boss/round-1/"
          />
          <CreateCard
            NoCorrect={true}
            Title="un pinguino"
            OptionNumber={2}
            ImageSrc="/penguin.svg"
          />
          <CreateCard
            NoCorrect={true}
            Title="un perro"
            OptionNumber={3}
            ImageSrc="/dog-face.svg"
          />
        </div>
      </section>
    </main>
  );
}

export default Boss;

import Image from "next/image";
import React from "react";
import { CreateCard } from "../page";

function Round2() {
  return (
    <main>
      <section className="w-[98%] mx-auto text-center mt-[50px]">
        <h1 className="text-3xl mb-[10px] font-extrabold text-neutral-700">
          ¿Cuál de todos es el "the girl"?
        </h1>
        <div className="w-[700px] mx-auto grid grid-cols-3 gap-3">
          <CreateCard
            NoCorrect={false}
            Title="la chica"
            ImageSrc="/girl.svg"
            OptionNumber={1}
            NextLevel="/levels/finish"
          />

          <CreateCard
            NoCorrect={true}
            Title="el zombie"
            ImageSrc="/zombie.svg"
            OptionNumber={2}
            NextLevel="/levels/level-1/no-correct"
          />

          <CreateCard
            NoCorrect={true}
            Title="la mujer"
            ImageSrc="/woman.svg"
            NextLevel="/levels/level-1/no-correct"
            OptionNumber={3}
          />
        </div>
      </section>
    </main>
  );
}

export default Round2;

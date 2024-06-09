import { CreateCard } from "@/app/levels/level-1/page";
import React from "react";

function BossRound2() {
  return (
    <main className="flex justify-center mt-[20px]">
      <section>
        <h1 className="text-3xl font-extrabold p-2 max-w-2xl text-center">
          A boy went to buy cookies, but it turns out that the cookies were out
          of stock.
        </h1>
        <h2 className="w-fit mx-auto">¿Qué a comprar el Chico?</h2>
        <div className="grid grid-cols-3 gap-3">
          <CreateCard
            NoCorrect={true}
            Title="un perro"
            OptionNumber={1}
            ImageSrc="/dog-face.svg"
          />
          <CreateCard
            NoCorrect={true}
            Title="un arbol"
            OptionNumber={2}
            ImageSrc="/tree.svg"
          />
          <CreateCard
            NoCorrect={false}
            Title="galletas"
            OptionNumber={3}
            NextLevel="/challenges/boss/round-3/"
            ImageSrc="/cookies.svg"
          />
        </div>
      </section>
    </main>
  );
}

export default BossRound2;

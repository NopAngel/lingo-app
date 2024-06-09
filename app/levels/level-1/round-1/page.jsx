import Image from "next/image";
import React from "react";

export function CreateCard({
  NoCorrect,
  Title,
  ImageSrc,
  OptionNumber,
  NextLevel,
}) {
  if (NoCorrect === true) {
    return (
      <a href="/levels/no-correct/" className="w-fit">
        <div
          className="rounded-xl border-2 border-b-8 w-fit cursor-pointer hover:bg-blue-100/55 hover:border-blue-200"
          id="active"
        >
          <section className="pl-8 pr-8 pt-8 pb-3">
            <Image width={120} height={120} src={ImageSrc} alt={Title} />
          </section>
          <section className="flex justify-around w-full items-center pb-6">
            <h1>{Title}</h1>
            <p className="border-2 w-[20px] flex justify-center text-neutral-600 rounded-lg text-xs">
              {OptionNumber}
            </p>
          </section>
        </div>
      </a>
    );
  } else if (NoCorrect === false) {
    return (
      <a href={NextLevel} className="w-fit">
        <div
          className="rounded-xl border-2 border-b-8 w-fit cursor-pointer hover:bg-blue-100/55 hover:border-blue-200"
          id="active"
        >
          <section className="pl-8 pr-8 pt-8 pb-3">
            <Image width={120} height={120} src={ImageSrc} alt={Title} />
          </section>
          <section className="flex justify-around w-full items-center pb-6">
            <h1>{Title}</h1>
            <p className="border-2 w-[20px] flex justify-center text-neutral-600 rounded-lg text-xs">
              {OptionNumber}
            </p>
          </section>
        </div>
      </a>
    );
  }
}

function Round1() {
  return (
    <main>
      <section className="w-[98%] mx-auto text-center mt-[50px]">
        <h1 className="text-3xl mb-[10px] font-extrabold text-neutral-700">
          ¿Cuál de todos es el <b className="font-extrabold">the robot</b>?
        </h1>
        <div className="w-[700px] mx-auto grid grid-cols-3 gap-3">
          <CreateCard
            NoCorrect={false}
            Title="el robot"
            ImageSrc="/robot.svg"
            OptionNumber={1}
            NextLevel="/levels/level-1/round-2/"
          />

          <CreateCard
            NoCorrect={true}
            Title="el chico"
            ImageSrc="/boy.svg"
            OptionNumber={2}
          />

          <CreateCard
            NoCorrect={true}
            Title="el zombie"
            ImageSrc="/zombie.svg"
            OptionNumber={3}
          />
        </div>
      </section>
    </main>
  );
}

export default Round1;

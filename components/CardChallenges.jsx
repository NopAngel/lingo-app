import Image from "next/image";
import Link from "next/link";
import React from "react";

function CardChallenges({ Href, ImageSRC, Title, Description }) {
  return (
    <Link
      className="flex items-center w-fit p-2 border-2 border-b-8 rounded-xl justify-around gap-3"
      href={Href}
    >
      <div className="max-w-[300px]">
        <h1 className="text-2xl font-extrabold">{Title}</h1>
        <p className="p-2 opacity-50">{Description}</p>
      </div>
      <div>
        <Image src={ImageSRC} alt={Title} width={80} height={80} />
      </div>
    </Link>
  );
}

export default CardChallenges;

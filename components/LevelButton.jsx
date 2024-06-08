import React from "react";

function LevelButton({ ClickManager, PosX }) {
  if (PosX === "0") {
    return (
      <a href={ClickManager}>
        <div className="size-12 scale-120 bg-slate-200 flex justify-center items-center rounded-full p-[6px] hover:cursor-pointer">
          <div className="translate-y-[-60px] transalte-x-[10px]">
            <div className="absolute bg-slate-50 border-[3px] animate-bounce border-neutral-200 p-[5px] text-green-500 rounded-full">
              <h1>Empezar.</h1>
            </div>
          </div>
          <div className="w-full h-full bg-green-500 text-black flex items-center justify-center rounded-full">
            <img src="/Start.svg" alt="" />
          </div>
        </div>
      </a>
    );
  } else if (PosX === "2") {
    return (
      <a href={ClickManager}>
        <div className="size-12 scale-120 translate-x-[60px] bg-slate-200 flex justify-center items-center rounded-full p-[6px] hover:cursor-pointer">
          <div className="translate-y-[-60px] transalte-x-[10px]">
            <div className="absolute bg-slate-50 border-[3px] animate-bounce border-neutral-200 p-[5px] text-green-500 rounded-full">
              <h1>Empezar.</h1>
            </div>
          </div>
          <div className="w-full h-full bg-green-500 text-black flex items-center justify-center rounded-full">
            <img src="/Start.svg" alt="" />
          </div>
        </div>
      </a>
    );
  } else {
    return (
      <a href={ClickManager}>
        <div className="size-12 scale-120 translate-x-[-60px] bg-slate-200 flex justify-center items-center rounded-full p-[6px] hover:cursor-pointer">
          <div className="translate-y-[-60px] transalte-x-[10px]">
            <div className="absolute bg-slate-50 border-[3px] animate-bounce border-neutral-200 p-[5px] text-green-500 rounded-full">
              <h1>Empezar.</h1>
            </div>
          </div>
          <div className="w-full h-full bg-green-500 text-black flex items-center justify-center rounded-full">
            <img src="/Start.svg" alt="" />
          </div>
        </div>
      </a>
    );
  }
}

export default LevelButton;

import ButtonEdit from "@/components/ButtonEdit";
import LevelButton from "@/components/LevelButton";
import Sidebar from "@/components/Sidebar";
import { LucideBookUser } from "lucide-react";
import Image from "next/image";

export default function HomeApp() {
  return (
    <main>
      <section className="flex">
        <Sidebar />
        <article className="p-[6px] w-[98%] mx-auto text-center">
          <div className="bg-green-500 w-[700px] mx-auto text-white flex items-center justify-around rounded-md p-3">
            <div className="max-w-[400px] text-left">
              <h1 className="text-3xl font-semibold">Curso 1</h1>
              <p className="text-xs text-slate-200">
                Aprende cosas básicas del Ingles, como Saludos y Demas.
              </p>
            </div>
            <div>
              <ButtonEdit
                Color="transparent"
                Icon={"/btn-book.svg"}
                Text="Continuar."
              />
            </div>
          </div>
          <div className="w-[400px] mx-auto text-center mt-[90px] flex gap-20 flex-col">
            <LevelButton ClickManager="levels/level-1" PosX="0" />
            <LevelButton ClickManager="levels/level-1" PosX="1" />
            <LevelButton ClickManager="levels/level-1" PosX="2" />
            <LevelButton ClickManager="levels/level-1" PosX="1" />
            <LevelButton ClickManager="levels/level-1" PosX="2" />
          </div>
        </article>
      </section>
    </main>
  );
}

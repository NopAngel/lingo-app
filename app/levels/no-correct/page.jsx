function NoCorrect() {
  return (
    <main className=" overflow-hidden">
      <section className="flex justify-center items-center flex-col h-[100vh]">
        <article className="animate-bad flex justify-center flex-col text-center z-50">
          <img src="/mascot_bad.svg" width={100} className="mx-auto" alt="" />
          <h1 className="text-3xl font-extrabold p-[6px] lg:w-[400px] w-full text-center">
            Bueno se intento..
          </h1>
          <p>No haz podido completar el nivel..</p>
          <div></div>
        </article>
        <footer className="absolute bottom-0 left-0 w-full bg-white p-6 z-50 border-t-2 flex justify-around">
          <a
            href="/levels/level-1"
            className="p-2 border-2 border-b-8 rounded-xl cursor-pointer"
          >
            Volver a Intentarlo.
          </a>
          <a
            href="/home"
            className="p-2 border-2 border-b-8 cursor-pointer border-green-700 bg-green-500 text-white rounded-xl text-white"
          >
            Ir al Prinicipio
          </a>
        </footer>
      </section>
      <section className="flex absolute top-0 w-full justify-around">
        <section className="gap-20 grid anime-bad-img">
          <img
            src="/mascot_bad.svg"
            className="translate-x-[30px] rotate-6"
            width={100}
            alt=""
          />
          <img
            src="/mascot_bad.svg"
            className="translate-x-[-50px] -rotate-12"
            width={100}
            alt=""
          />
          <img
            src="/mascot_bad.svg"
            className="translate-x-[90px] rotate-6"
            width={100}
            alt=""
          />
          <img
            src="/mascot_bad.svg"
            className="translate-x-[30px] -rotate-12"
            width={100}
            alt=""
          />

          <img
            src="/mascot_bad.svg"
            className="translate-x-[30px] rotate-6"
            width={100}
            alt=""
          />
          <img
            src="/mascot_bad.svg"
            className="translate-x-[-50px] -rotate-12"
            width={100}
            alt=""
          />
          <img
            src="/mascot_bad.svg"
            className="translate-x-[90px] rotate-6"
            width={100}
            alt=""
          />
          <img
            src="/mascot_bad.svg"
            className="translate-x-[30px] -rotate-12"
            width={100}
            alt=""
          />
          <img
            src="/mascot_bad.svg"
            className="translate-x-[30px] rotate-6"
            width={100}
            alt=""
          />
          <img
            src="/mascot_bad.svg"
            className="translate-x-[-50px] -rotate-12"
            width={100}
            alt=""
          />
          <img
            src="/mascot_bad.svg"
            className="translate-x-[90px] rotate-6"
            width={100}
            alt=""
          />
          <img
            src="/mascot_bad.svg"
            className="translate-x-[30px] -rotate-12"
            width={100}
            alt=""
          />
        </section>
        <section className="gap-20 grid anime-bad-img">
          <img
            src="/mascot_bad.svg"
            className="translate-x-[30px] rotate-6"
            width={100}
            alt=""
          />
          <img
            src="/mascot_bad.svg"
            className="translate-x-[-50px] -rotate-12"
            width={100}
            alt=""
          />
          <img
            src="/mascot_bad.svg"
            className="translate-x-[90px] rotate-6"
            width={100}
            alt=""
          />
          <img
            src="/mascot_bad.svg"
            className="translate-x-[30px] -rotate-12"
            width={100}
            alt=""
          />

          <img
            src="/mascot_bad.svg"
            className="translate-x-[30px] rotate-6"
            width={100}
            alt=""
          />
          <img
            src="/mascot_bad.svg"
            className="translate-x-[-50px] -rotate-12"
            width={100}
            alt=""
          />
          <img
            src="/mascot_bad.svg"
            className="translate-x-[90px] rotate-6"
            width={100}
            alt=""
          />
          <img
            src="/mascot_bad.svg"
            className="translate-x-[30px] -rotate-12"
            width={100}
            alt=""
          />
          <img
            src="/mascot_bad.svg"
            className="translate-x-[30px] rotate-6"
            width={100}
            alt=""
          />
          <img
            src="/mascot_bad.svg"
            className="translate-x-[-50px] -rotate-12"
            width={100}
            alt=""
          />
          <img
            src="/mascot_bad.svg"
            className="translate-x-[90px] rotate-6"
            width={100}
            alt=""
          />
          <img
            src="/mascot_bad.svg"
            className="translate-x-[30px] -rotate-12"
            width={100}
            alt=""
          />
        </section>
      </section>
      <audio src="/incorrect.wav" autoPlay />
    </main>
  );
}

export default NoCorrect;

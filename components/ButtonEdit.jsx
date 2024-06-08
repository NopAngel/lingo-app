function ButtonEdit({ Color, Icon, Text }) {
  if (Color == "transparent") {
    return (
      <button className="items-center justify-center whitespace-nowrap rounded-xl text-sm font-bold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 uppercase tracking-wide bg-green-500 text-primary-foreground hover:bg-green-500/90 border-green-600 h-12 px-8 hidden xl:flex border-2 border-b-4 active:border-b-2">
        <img src={Icon} alt="Icon Button." />
        <p>{Text}</p>
      </button>
    );
  } else if (Color == "white") {
    return (
      <button className="text-white border-[2px] bg-slate-50 rounded-sm shadow-sm flex items-center gap-3 p-1">
        <img src={Icon} className="saturate-200" alt="Icon Button." />
        <p>{Text}</p>
      </button>
    );
  }
}

export default ButtonEdit;

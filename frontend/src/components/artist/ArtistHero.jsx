const ArtistHero = () => {
  return (
    <div className="relative h-[450px] w-full">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAe2w1C--Zw1wtf_xcMK4jR0DqZ0or200ZeVdw53RU0ETjhfH9lmD3JQQ5dwf6jyqhCepOP1Gj_mSqTj651wqbW-R3jr8DMCmRl2Ggay-dOBFLjkidGJ3FztwsCcSDrLzx_59n5dW8zdNiXeFfWk4Hg9bLZUR3Ln3aLUDhC5pf_djDPQK32Hbju1pnu9Q9cGrlutW45TDgWbyRmrhrAL8zPDFuaKSuyfM5rHvnX6czld1hdIe2N0MMqIR-BeHBPGXrd7juwB0b_pgO3")',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-background-dark/30 to-transparent" />

      <div className="absolute bottom-0 left-0 p-10 space-y-3">
        <div className="flex items-center gap-2 bg-blue-500 px-3 py-1 rounded-full w-fit text-xs font-bold">
          VERIFIED ARTIST
        </div>

        <h1 className="text-6xl md:text-8xl font-bold tracking-tight">
          Lumina Nova
        </h1>

        <p className="text-slate-300 text-lg font-medium">
          24,502,110 Monthly Listeners
        </p>
      </div>
    </div>
  );
};

export default ArtistHero;

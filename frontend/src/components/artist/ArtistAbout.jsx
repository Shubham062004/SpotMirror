const ArtistAbout = () => {
  return (
    <div className="bg-surface-dark p-6 rounded-2xl border border-white/5">
      <h2 className="text-2xl font-bold mb-4">About</h2>

      <div className="flex items-baseline gap-2 mb-4">
        <span className="text-4xl font-bold">#24</span>
        <span className="uppercase text-xs text-slate-400 font-bold">
          In the World
        </span>
      </div>

      <p className="text-slate-300 leading-relaxed mb-6">
        Lumina Nova is an electronic music pioneer blending ethereal soundscapes
        with high-energy synth-wave beats, originating from Berlin’s underground
        scene.
      </p>

      <button className="font-bold text-sm hover:text-primary transition">
        READ BIOGRAPHY →
      </button>
    </div>
  );
};

export default ArtistAbout;

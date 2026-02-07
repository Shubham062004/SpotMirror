export default function TrackCard() {
  return (
    <div className="bg-card-dark p-4 rounded-xl hover:bg-white/10 transition cursor-pointer">
      <div className="aspect-square bg-black rounded mb-3" />
      <h3 className="font-semibold truncate">Song Name</h3>
      <p className="text-sm text-slate-400 truncate">Artist</p>
    </div>
  );
}

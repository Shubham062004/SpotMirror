import TrackCard from "./TrackCard";

export default function PlaylistGrid() {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-4">Based on your listening</h2>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {[...Array(6)].map((_, i) => (
          <TrackCard key={i} />
        ))}
      </div>
    </section>
  );
}

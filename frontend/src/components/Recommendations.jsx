const Recommendations = () => {
  return (
    <section className="mt-10">
      <h2 className="text-xl font-bold mb-4">
        Based on your recent listening
      </h2>

      <div className="flex gap-4 overflow-x-auto">
        {[1, 2, 3, 4, 5].map((i) => (
          <div
            key={i}
            className="min-w-[180px] p-4 bg-white/10 rounded-lg hover:bg-white/20"
          >
            <p className="font-semibold">Recommended #{i}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Recommendations;

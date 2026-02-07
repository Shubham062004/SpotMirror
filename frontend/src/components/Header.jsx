const Header = () => {
  return (
    <header className="flex justify-between items-center px-8 py-4 sticky top-0 bg-background-dark/80 backdrop-blur">
      <input
        className="w-96 rounded-full px-4 py-2 bg-white/10 outline-none"
        placeholder="Search songs, artists..."
      />
      <div className="font-semibold">Welcome 👋</div>
    </header>
  );
};

export default Header;

export async function generatePlaylist(mood, seedSong) {
  const res = await fetch(
    `http://127.0.0.1:8000/playlist/generate?mood=${mood}&seed=${seedSong}`
  );
  return res.json();
}

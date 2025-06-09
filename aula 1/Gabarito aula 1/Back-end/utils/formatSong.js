function formatSong(song) {
  return {
    id: song._id,
    title: song.title.toUpperCase(),
    artist: song.artist,
    duration: song.duration || "00:00",
  };
}

export default formatSong;

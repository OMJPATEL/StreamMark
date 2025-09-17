function Music() {
    const musicList = [
        { id: 1, title: "52 Bars", artist: "Karan Aujla", duration: "3:42" },
        { id: 2, title: "Aphrodite", artist: "Arjan Dhillon", duration: "2:29" },
        { id: 3, title: "Call me Later", artist: "Dulla", duration: "2:42" },
    ];

  return (
    <section className="music">
      <h2>Music Collection</h2>
      <ul>
        {musicList.map((track) => (
          <li key={track.id}>
            <h3>{track.title}</h3>
            <p>Artist: {track.artist}</p>
            <p>Duration: {track.duration}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Music;
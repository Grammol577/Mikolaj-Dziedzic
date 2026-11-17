function Anime({ anime }) {
  return (
    <article className="anime">
      <span>{anime.gatunek}</span>
      <h3>{anime.tytul}</h3>
      <p>{anime.opis}</p>
    </article>
  )
}

export default Anime

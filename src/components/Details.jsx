export default function Details({ place, goTo, onMarkVisited, onMarkFavorite }) {
  if (!place) return <p>No place selected</p>;

  return (
    <div>
      <button onClick={() => goTo("home")}>⬅ Home</button>

      <h2>{place.name}</h2>
      <p>{place.description}</p>

      <p>Noise Level: {place.noise}</p>
      <p>Seating Type: {place.seating}</p>
      <p>{place.nearFood ? "🍔 Near Food" : "🚫 Not near food"}</p>

      <button onClick={onMarkFavorite}>Add to Favourites</button>
      <button onClick={onMarkVisited}>Mark as Visited</button>
      <button onClick={() => goTo("review")}>Leave Review</button>
    </div>
  );
}

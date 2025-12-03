export default function Details({ place, goTo }) {
  if (!place) return <p>No place selected.</p>;

  return (
    <div>
      <h2>{place.name}</h2>
      <p>Noise: {place.noise}</p>
      <p>Seating: {place.seating}</p>
      <p>{place.nearFood ? "Near food 🍔" : "No food nearby"}</p>

      <button onClick={() => goTo("review")}>Leave a Review</button>
    </div>
  );
}

export default function Favorites({ goTo }) {
  const favouritePlaces = [
    {
      id: 1,
      name: "Health Science Library - 2nd Floor",
      noise: "Loud",
      seating: "Group",
      nearFood: true,
    },
    {
      id: 2,
      name: "Thode Library - Basement",
      noise: "Quiet",
      seating: "Individual",
      nearFood: false,
    },
  ];

  return (
    <div>
      <h2>Favourite Places</h2>

      {favouritePlaces.length === 0 ? (
        <p>You haven’t added any favourites yet.</p>
      ) : (
        <ul>
          {favouritePlaces.map((place) => (
            <div>
              <h2>{place.name}</h2>
              <p>{place.description}</p>

              <p>Noise Level: {place.noise}</p>
              <p>Seating Type: {place.seating}</p>
              <p>{place.nearFood ? "🍔 Near Food" : "🚫 Not near food"}</p>

            </div>
          ))}
        </ul>
      )}

      <div style={{ marginTop: "20px" }}>
        <button onClick={() => goTo("home")}>⬅ Back</button>
      </div>
    </div>
  );
}

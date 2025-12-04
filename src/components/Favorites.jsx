export default function Favorites({ goTo, onSelectPlace }) {
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
              <button onClick={() => onSelectPlace(place)}>See Details</button>
            </div>
          ))}
        </ul>
      )}

      <div style={{ marginTop: "20px" }}>
        <button onClick={() => goTo("home")}>⬅ Home</button>
      </div>
    </div>
  );
}

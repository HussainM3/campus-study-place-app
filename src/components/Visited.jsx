export default function Visited({ goTo, onSelectPlace }) {
  const visitedPlaces = [
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
    {
      id: 3,
      name: "LR Wilson Building",
      noise: "Moderate",
      seating: "Group",
      nearFood: false,
    },
    {
      id: 4,
      name: "Mills Library - 2nd Floor",
      noise: "Loud",
      seating: "Group",
      nearFood: true,
    },
  ];

  return (
    <div>
      <h2>Visited Places</h2>

      {visitedPlaces.length === 0 ? (
        <p>You haven’t visited any places yet.</p>
      ) : (
        <ul>
          {visitedPlaces.map((place) => (
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

import places from "../data/places";

export default function Home({ onSelectPlace }) {
  return (
    <div>
      <h2>Study Places</h2>

      <div style={{ marginTop: "15px", display: "grid", gap: "12px" }}>
        {places.map((place) => (
          <div
            key={place.id}
            onClick={() => onSelectPlace(place)}
            style={{
              border: "1px solid #ccc",
              padding: "12px",
              borderRadius: "8px",
              cursor: "pointer",
            }}
          >
            <h3 style={{ margin: "0" }}>{place.name}</h3>
            <p style={{ margin: "5px 0" }}>
              Noise: {place.noise} | Seating: {place.seating}
            </p>
            <small>
              {place.nearFood ? "Near food 🍔" : "No food nearby"}
            </small>
          </div>
        ))}
      </div>

      {/* Bottom Navigation */}
      <div
        style={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          padding: "10px",
          borderTop: "1px solid #ddd",
          display: "flex",
          justifyContent: "space-around",
          background: "white",
        }}
      >

      </div>
    </div>
    );
}
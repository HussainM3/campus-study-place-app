import places from "../data/places";

export default function Home({ onSelectPlace }) {
  return (
    <div style={{
        padding: "10px 6px 90px", // bottom space for nav
      }}>
      <h2 style={{
          textAlign: "center",
          marginBottom: "20px",
          fontSize: "20px",
        }}>Study Places</h2>

      <div style={{
          display: "flex",
          flexDirection: "column",
          gap: "14px",
        }}>
        {places.map((place) => (
          <div
            key={place.id}
            onClick={() => onSelectPlace(place)}
            style={{
              border: "1px solid #ccc",
              padding: "14px",
              borderRadius: "10px",
              cursor: "pointer",
            }}
          >
            <h3 style={{
                margin: "0 0 6px",
                fontSize: "16px",
              }}>{place.name}</h3>
            <p style={{
                margin: "0 0 6px",
                fontSize: "16px",
              }}>
              Noise: {place.noise} | Seating: {place.seating}
            </p>
            <small style={{ fontSize: "13px" }}>
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
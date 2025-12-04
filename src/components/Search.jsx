import { useState } from "react";
import '../App.css';

export default function Search({ goTo }) {
  const [, setNoise] = useState("");
  const [, setSeating] = useState("");
  const [nearFood, setNearFood] = useState(false);
  const [results, setResults] = useState([]);
  const hardcodedPlaces = [
     {
      id: 1,
      name: "Mills Library - 2nd Floor",
      noise: "Loud",
      seating: "Group",
      nearFood: true,
    },
    {
      id: 2,
      name: "Health Science Library - 2nd Floor",
      noise: "Loud",
      seating: "Group",
      nearFood: true,
    },
  ];

  return (
    <div className="page-container">
      <h2>Search & Filter</h2>

      <input className="input-field" placeholder="Search place..." />

      <select className="input-field" onChange={(e) => setNoise(e.target.value)}>
        <option value="">Noise Level</option>
        <option value="Quiet">Quiet</option>
        <option value="Moderate">Moderate</option>
        <option value="Loud">Loud</option>
      </select>

      <select className="input-field" onChange={(e) => setSeating(e.target.value)}>
        <option value="">Seating Type</option>
        <option value="Individual">Individual</option>
        <option value="Group">Group</option>
      </select>

      <label className="checkbox-field">
        <input type="checkbox" onChange={() => setNearFood(!nearFood)} />
        Near Food
      </label>

      <div className="button-group">
        <button onClick={() => setResults(hardcodedPlaces)}>Apply</button>
        <button onClick={() => setResults([])}>Reset</button>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginTop: "16px" }}>
        {results.map((place) => (
          <div
            key={place.id}
            style={{ border: "1px solid #ccc", padding: "12px", borderRadius: "8px" }}
          >
            <h3 style={{ margin: "0" }}>{place.name}</h3>
            <p style={{ margin: "5px 0" }}>
              Noise: {place.noise} | Seating: {place.seating}
            </p>
            <small>{place.nearFood ? "Near food 🍔" : "No food nearby"}</small>
          </div>
        ))}
      </div>

      <div>
        <button className="back-button" onClick={() => goTo("home")}>⬅ Home</button>
      </div>
    </div>
  );
}

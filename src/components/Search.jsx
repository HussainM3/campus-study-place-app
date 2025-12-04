import { useState } from "react";

export default function Search({ goTo }) {
  const [, setNoise] = useState("");
  const [, setSeating] = useState("");
  const [nearFood, setNearFood] = useState(false);

  return (
    <div>
      <h2>Search & Filter</h2>

      <input placeholder="Search place..." />

      <select onChange={(e) => setNoise(e.target.value)}>
        <option value="">Noise Level</option>
        <option value="Quiet">Quiet</option>
        <option value="Moderate">Moderate</option>
        <option value="Loud">Loud</option>
      </select>

      <select onChange={(e) => setSeating(e.target.value)}>
        <option value="">Seating Type</option>
        <option value="Individual">Individual</option>
        <option value="Group">Group</option>
        <option value="Couch">Couch</option>
      </select>

      <label>
        <input type="checkbox" onChange={() => setNearFood(!nearFood)} />
        Near Food
      </label>

      <br />

      <button>Apply</button>
      <button>Reset</button>

      <div style={{ marginTop: "20px" }}>
        <button onClick={() => goTo("home")}>⬅ Back</button>
      </div>
    </div>
  );
}

import { useState } from "react";
import '../App.css';

export default function Search({ goTo }) {
  const [, setNoise] = useState("");
  const [, setSeating] = useState("");
  const [nearFood, setNearFood] = useState(false);
  
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
        <option value="Couch">Couch</option>
      </select>

      <label className="checkbox-field">
        <input type="checkbox" onChange={() => setNearFood(!nearFood)} />
        Near Food
      </label>

      <div className="button-group">
        <button>Apply</button>
        <button>Reset</button>
      </div>

      <div>
        <button className="back-button" onClick={() => goTo("home")}>⬅ Back</button>
      </div>
    </div>
  );
}

import { useState } from "react";
import './App.css';

import Home from "./components/Home.jsx";
import Search from "./components/Search.jsx";
import Details from "./components/Details.jsx";
import Review from "./components/Review.jsx";
import Favorites from "./components/Favorites.jsx";
import Visited from "./components/Visited.jsx";
import ReviewPrompt from "./components/ReviewPrompt.jsx";

export default function App() {
  const [screen, setScreen] = useState("home");
  const [selectedPlace, setSelectedPlace] = useState(null);

  const [showReviewPrompt, setShowReviewPrompt] = useState(false);

  const goTo = (screenName) => {
    setScreen(screenName);

    if (screenName !== "details" && screenName !== "review") {
      setSelectedPlace(null);
    }
  };

  const onSelectPlace = (place) => {
    setSelectedPlace(place);
    setScreen("details");
  };

  const markAsVisited = () => {
    setScreen("visited");
    setShowReviewPrompt(true);
  };

  const markAsFavorite = () => {
    setScreen("favorites");
    setShowReviewPrompt(true);
  }

  return (
    <div
      style={{
        width: "390px",
        height: "844px", // iPhone-ish height
        background: "white",
        borderRadius: "28px",
        boxShadow: "0 0 20px rgba(0,0,0,0.15)",
        padding: "16px 12px 90px",
        boxSizing: "border-box",
        position: "relative",
        overflowY: "auto",
        fontFamily: "Arial, sans-serif"
      }}
    >

      <h1 style={{
        textAlign: "center",
        fontSize: "20px",
        marginBottom: "16px",
      }}>Campus Study Spaces</h1>

      {screen === "home" && (
        <Home onSelectPlace={onSelectPlace} goTo={goTo} />
      )}

      {screen === "search" && <Search goTo={goTo} />}
      {screen === "details" && (
        <Details place={selectedPlace} goTo={goTo} onMarkVisited={markAsVisited} onMarkFavorite={markAsFavorite} />
      )}
      {screen === "review" && <Review place={selectedPlace} goTo={goTo} />}
      {screen === "favorites" && <Favorites goTo={goTo} />}
      {screen === "visited" && <Visited goTo={goTo} />}

      {showReviewPrompt && (
        <ReviewPrompt
          onClose={() => setShowReviewPrompt(false)}
          onReview={() => {
            setShowReviewPrompt(false);
            setScreen("review");
          }}
        />
      )}

      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          borderTop: "1px solid #ccc",
          background: "white",
          display: "flex",
          justifyContent: "space-around",
          padding: "10px 0",
          borderBottomLeftRadius: "28px",
          borderBottomRightRadius: "28px",
        }}
      >
        <button onClick={() => goTo("home")}>Home</button>
        <button onClick={() => goTo("search")}>Search</button>
        <button onClick={() => goTo("favorites")}>Favourites</button>
        <button onClick={() => goTo("visited")}>Visited</button>
        <button onClick={() => goTo("review")}>Leave a review</button>
      </div>

    </div>
  );
}

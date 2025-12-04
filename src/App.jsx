import { useState } from "react";

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
        maxWidth: "390px",
        margin: "0 auto",
        minHeight: "100vh",
        border: "1px solid #ddd",
        padding: "20px",
        paddingBottom: "80px", // space for bottom nav
        fontFamily: "Arial",
      }}
    >
      <h1>Campus Study Spaces</h1>

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

        <button onClick={() => goTo("home")}>Home</button>
        <button onClick={() => goTo("search")}>Search</button>
        <button onClick={() => goTo("favorites")}>Favourites</button>
        <button onClick={() => goTo("visited")}>Visited</button>
        <button onClick={() => goTo("review")}>Leave a review</button>

    </div>
  );
}

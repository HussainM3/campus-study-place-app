import { useState } from "react";

export default function Review({ place }) {
  const isGeneralReview = !place;

  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const reviewData = {
      place: isGeneralReview ? "General" : place.name,
      rating,
      comment,
    };

    console.log("Review submitted:", reviewData);

    // Reset
    setRating(0);
    setComment("");
  };

  return (
    <div>
      <h2>
        {isGeneralReview
          ? "Leave a review below for a campus study space"
          : `Leave a review for ${place.name}`}
      </h2>

      <form onSubmit={handleSubmit}>
        <label>Rating (1–5)</label>
        <select
          value={rating}
          onChange={(e) => setRating(Number(e.target.value))}
          required
        >
          <option value={0}>Select...</option>
          <option value={1}>1 - Poor</option>
          <option value={2}>2 - Ok</option>
          <option value={3}>3 - Good</option>
          <option value={4}>4 - Great</option>
          <option value={5}>5 - Excellent</option>
        </select>

        <label>Your review</label>
        <textarea
          placeholder={
            isGeneralReview
              ? "Share your thoughts about a campus study space"
              : `What was your experience at ${place.name}?`
          }
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          required
        />

        <button type="submit">Submit review</button>
      </form>
    </div>
  );
}

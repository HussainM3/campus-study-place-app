export default function ReviewPrompt({ onClose, onReview }) {
  return (
    <div style={{
      position: "fixed",
      inset: 0,
      background: "rgba(0,0,0,0.5)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      zIndex: 1000
    }}>
      <div style={{
        background: "white",
        padding: "20px",
        borderRadius: "12px",
        width: "280px",
        textAlign: "center"
      }}>
        <h3>Would you like to leave a review?</h3>

        <p style={{ margin: "15px 0" }}>
          Sharing your experience helps other students find the best study spots.
        </p>

        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <button onClick={onReview} style={{ flex: 1, marginRight: "8px" }}>
            Leave a Review
          </button>
          <button onClick={onClose} style={{ flex: 1, marginLeft: "8px" }}>
            Later
          </button>
        </div>
      </div>
    </div>
  );
}

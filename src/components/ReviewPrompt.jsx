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
        width: "300px"
      }}>
        <h3>Leave a quick review?</h3>

        <div style={{ fontSize: "24px", marginBottom: "10px" }}>
           ☆ ☆ ☆ ☆ ☆
        </div>

        <textarea placeholder="Optional comment..." />

        <div style={{ marginTop: "10px" }}>
          <button onClick={onReview}>Yes</button>
          <button onClick={onClose}>Later</button>
        </div>
      </div>
    </div>
  );
}

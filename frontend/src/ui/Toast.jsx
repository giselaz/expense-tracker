export default function Toast({ message, onClose }) {
  // Auto close after 3 seconds
  setTimeout(onClose, 3000);

  return (
    <div
      style={{
        position: "fixed",
        top: "20px",
        right: "20px",
        backgroundColor: "#f8d7da",
        color: "#842029",
        padding: "15px 20px",
        borderRadius: "8px",
        boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
        zIndex: 1000,
      }}
    >
      {message}
    </div>
  );
}
import "./hearts.css";

export default function HeartBackground() {
  return (
    <div className="hearts-container">
      {[...Array(25)].map((_, i) => (
        <div
          key={i}
          className="heart"
          style={{
            left: Math.random() * 100 + "%",
            animationDuration: 5 + Math.random() * 5 + "s",
            opacity: Math.random(),
            transform: `scale(${0.5 + Math.random()}) rotate(45deg)`,
          }}
        />
      ))}
    </div>
  );
}

import "./risingHearts.css";

export default function RisingHearts() {
  return (
    <div className="rising-hearts">
      {[...Array(30)].map((_, i) => (
        <div
          key={i}
          className="r-heart"
          style={{
            left: Math.random() * 100 + "%",
            animationDuration: 4 + Math.random() * 4 + "s",
            animationDelay: Math.random() * 5 + "s",
            opacity: Math.random(),
            transform: `scale(${0.5 + Math.random()}) rotate(45deg)`,
          }}
        />
      ))}
    </div>
  );
}

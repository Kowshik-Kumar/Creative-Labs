export default function ParallaxTransition() {
  return (
    <section
      style={{
        position: "relative",
        height: "500px",
        overflow: "hidden",
        borderRadius: "24px",
        margin: "0 24px",
      }}
    >
      {/* Arch image background (using a generated gradient as a fallback if no palace image) */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.6))",
          zIndex: 2,
        }}
      />
      {/* Palace arch SVG background simulation */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(135deg, #2D1B07 0%, #5C3315 30%, #8B4513 50%, #5C3315 70%, #2D1B07 100%)",
          zIndex: 0,
        }}
      />
      {/* Arch decorative elements */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 1,
        }}
      >
        <svg width="100%" height="100%" viewBox="0 0 800 500" preserveAspectRatio="xMidYMid slice">
          {/* Main arch */}
          <path
            d="M 300 500 L 300 200 Q 300 100 400 100 Q 500 100 500 200 L 500 500"
            fill="none"
            stroke="rgba(255,200,100,0.3)"
            strokeWidth="2"
          />
          {/* Inner arch  */}
          <path
            d="M 330 500 L 330 220 Q 330 130 400 130 Q 470 130 470 220 L 470 500"
            fill="rgba(0,0,0,0.4)"
            stroke="rgba(255,200,100,0.2)"
            strokeWidth="1"
          />
          {/* Decorative pillars */}
          <rect x="255" y="150" width="45" height="350" fill="rgba(100,70,30,0.4)" />
          <rect x="500" y="150" width="45" height="350" fill="rgba(100,70,30,0.4)" />
          {/* Ornamental details */}
          <ellipse cx="400" cy="105" rx="60" ry="25" fill="rgba(255,200,100,0.15)" />
          <ellipse cx="400" cy="105" rx="40" ry="16" fill="rgba(255,200,100,0.1)" />
          {/* Side arches */}
          <path d="M 80 500 L 80 280 Q 80 210 140 210 Q 200 210 200 280 L 200 500" fill="rgba(80,50,20,0.3)" />
          <path d="M 600 500 L 600 280 Q 600 210 660 210 Q 720 210 720 280 L 720 500" fill="rgba(80,50,20,0.3)" />
          {/* Sky through arch */}
          <clipPath id="archClip">
            <path d="M 330 500 L 330 220 Q 330 130 400 130 Q 470 130 470 220 L 470 500 Z" />
          </clipPath>
          <rect x="0" y="0" width="800" height="500" clipPath="url(#archClip)"
            fill="none" />
          <path
            d="M 332 500 L 332 222 Q 332 134 400 134 Q 468 134 468 222 L 468 500"
            fill="rgba(135,180,230,0.2)"
          />
        </svg>
      </div>

      {/* Text overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 3,
          padding: "40px",
          textAlign: "center",
        }}
      >
        <div>
          <p
            className="serif-italic"
            style={{
              fontSize: "clamp(24px, 4vw, 48px)",
              color: "white",
              fontWeight: 300,
              lineHeight: 1.4,
              textShadow: "0 2px 20px rgba(0,0,0,0.4)",
              maxWidth: "700px",
              margin: "0 auto",
            }}
          >
            Discover practical systems that turn complex requirements into reliable, high-performing digital products.
          </p>
        </div>
      </div>
    </section>
  );
}

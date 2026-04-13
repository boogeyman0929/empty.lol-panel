import logoImg from "@/assets/logo.png";

export default function Header() {
  const isMobile = typeof navigator !== "undefined" && /android|iphone|ipad/i.test(navigator.userAgent);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        animation: "fadein 1s ease both",
        animationDelay: "0.3s",
        opacity: 0,
      }}
    >
      <a
        href={isMobile ? "tg://resolve?domain=emptyanc" : "https://t.me/emptyanc"}
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: "none" }}
      >
        <img
          src={logoImg}
          alt=""
          draggable={false}
          style={{
            width: "80px",
            height: "auto",
            filter: "grayscale(1) contrast(0.85)",
            marginBottom: "16px",
            userSelect: "none",
            transition: "all 0.3s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.03)";
            e.currentTarget.style.filter = "grayscale(1) contrast(0.9) brightness(1.1)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
            e.currentTarget.style.filter = "grayscale(1) contrast(0.85)";
          }}
        />
      </a>
      <a
        href={isMobile ? "tg://resolve?domain=emptyanc" : "https://t.me/emptyanc"}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          textDecoration: "none",
          fontFamily: "var(--font-minecraft)",
          fontSize: "14px",
          letterSpacing: "8px",
          color: "#888",
          transition: "color 0.3s ease",
          cursor: "pointer",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.color = "#aaa")}
        onMouseLeave={(e) => (e.currentTarget.style.color = "#888")}
      >
        empty.lol
      </a>
      <p
        style={{
          fontFamily: "var(--font-minecraft)",
          fontSize: "8px",
          letterSpacing: "4px",
          color: "#444",
          marginTop: "6px",
          animation: "fadein 1s ease both",
          animationDelay: "0.8s",
          opacity: 0,
        }}
      >
        private roster
      </p>
      <div
        style={{
          width: "40px",
          height: "1px",
          background: "rgba(234,234,234,0.08)",
          marginTop: "20px",
          animation: "fadein 1s ease both",
          animationDelay: "1s",
          opacity: 0,
        }}
      />
    </div>
  );
}

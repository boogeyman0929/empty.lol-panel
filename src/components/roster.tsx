const members = [
  { name: "VALE", role: "founder", link: "https://t.me/carfaxing" },
  { name: "SIGNAL", role: "member", link: null },
  { name: "VK", role: "member", link: null },
];

export default function Roster() {
  return (
    <div
      style={{
        animation: "fadein 1.2s ease both",
        animationDelay: "1.4s",
        opacity: 0,
      }}
    >
      <p
        style={{
          fontFamily: "var(--font-minecraft)",
          fontSize: "10px",
          letterSpacing: "3px",
          color: "#666",
          marginBottom: "24px",
        }}
      >
        members
      </p>
      <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        {members.map((m, i) => {
          const inner = (
            <div
              key={m.name}
              style={{
                animation: "fadein 0.8s ease both",
                animationDelay: `${1.6 + i * 0.2}s`,
                opacity: 0,
                cursor: m.link ? "pointer" : "default",
                transition: "all 0.3s ease",
              }}
              className="member-row"
            >
              <p
                style={{
                  fontFamily: "var(--font-pricedown)",
                  fontSize: "16px",
                  letterSpacing: "4px",
                  color: "#eaeaea",
                  margin: 0,
                }}
              >
                {m.name}
              </p>
              <p
                style={{
                  fontFamily: "var(--font-pricedown)",
                  fontSize: "9px",
                  letterSpacing: "2px",
                  color: "#444",
                  margin: "2px 0 0 0",
                }}
              >
                {m.role}
              </p>
            </div>
          );

          if (m.link) {
            return (
              <a
                key={m.name}
                href={m.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none" }}
              >
                {inner}
              </a>
            );
          }
          return inner;
        })}
      </div>
      <style>{`
        .member-row:hover {
          opacity: 0.7 !important;
          transform: translateX(2px);
        }
      `}</style>
    </div>
  );
}

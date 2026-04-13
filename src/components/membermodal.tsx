type Member = {
  name: string
  role: string
  bio: string
  pfp: string
  link: string | null
  discord: string | null
}

export default function MemberModal({
  member,
  onClose,
}: {
  member: Member
  onClose: () => void
}) {
  const openLink = (url: string | null) => {
    if (!url) return
    window.open(url, "_blank", "noopener,noreferrer")
  }

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1000,
        padding: "20px",
        animation: "fadein 0.2s ease",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(0,0,0,0.9)",
        }}
      />

      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          position: "relative",
          width: "550px",
          maxWidth: "92vw",
          minHeight: "260px",
          background: "#080808",
          border: "1px solid #1a1a1a",
          display: "flex",
          flexDirection: "row",
          overflow: "hidden",
          boxShadow: "0 20px 80px rgba(0,0,0,0.55)",
        }}
      >
        <div
          style={{
            width: "180px",
            padding: "30px",
            borderRight: "1px solid #1a1a1a",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            background: "#050505",
            flexShrink: 0,
          }}
        >
          <div
            style={{
              width: "120px",
              height: "120px",
              marginBottom: "20px",
              border: "1px solid #333",
              background: `center/cover no-repeat url(${member.pfp})`,
              filter: "grayscale(100%) contrast(1.3) brightness(0.4)",
            }}
          />

          <div
            style={{
              width: "100%",
              textAlign: "center",
              fontFamily: "var(--font-pricedown)",
              fontSize: "18px",
              letterSpacing: "4px",
              fontWeight: 700,
              color: "#f2f2f2",
              textTransform: "uppercase",
            }}
          >
            {member.name}
          </div>
        </div>

        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            minWidth: 0,
          }}
        >
          <div
            style={{
              fontSize: "9px",
              color: "#333",
              letterSpacing: "3px",
              textTransform: "uppercase",
              padding: "15px 25px",
              borderBottom: "1px solid #1a1a1a",
              background: "#0a0a0a",
              fontFamily: "var(--font-minecraft)",
            }}
          >
            {member.role === "founder" ? "founder" : "node_01 // session_active"}
          </div>

          <div
            style={{
              flex: 1,
              fontSize: "11px",
              lineHeight: 1.7,
              padding: "25px",
              textAlign: "left",
              color: "#999",
              fontFamily: '"Courier New", monospace',
              background: "#080808",
              whiteSpace: "pre-wrap",
            }}
          >
            {member.bio}
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr",
              borderTop: "1px solid #1a1a1a",
            }}
          >
            <button
              type="button"
              onClick={() => openLink(member.link)}
              style={pillStyle}
            >
              telegram
            </button>

            <button
              type="button"
              onClick={() => openLink(member.discord)}
              style={pillStyle}
            >
              discord
            </button>

            <button
              type="button"
              onClick={onClose}
              style={{ ...pillStyle, borderRight: "0" }}
            >
              close
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

const pillStyle: React.CSSProperties = {
  padding: "15px 10px",
  fontSize: "8px",
  letterSpacing: "3px",
  color: "#444",
  background: "transparent",
  textTransform: "uppercase",
  textAlign: "center",
  border: "0",
  borderRight: "1px solid #111",
  cursor: "pointer",
  transition: "0.2s",
  fontFamily: "var(--font-minecraft)",
}

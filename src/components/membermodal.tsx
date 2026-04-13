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
  const open = (url: string | null) => {
    if (!url) return
    window.open(url, "_blank", "noopener,noreferrer")
  }

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.72)",
        backdropFilter: "blur(4px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 9999,
        animation: "fadein 0.22s ease",
        padding: "20px",
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          width: "min(760px, 92vw)",
          minHeight: "360px",
          background: "rgba(8,8,8,0.9)",
          border: "1px solid rgba(255,255,255,0.07)",
          display: "grid",
          gridTemplateColumns: "220px 1fr",
          overflow: "hidden",
          boxShadow: "0 20px 80px rgba(0,0,0,0.55)",
        }}
      >
        <div
          style={{
            borderRight: "1px solid rgba(255,255,255,0.06)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "flex-start",
            padding: "28px 20px",
          }}
        >
          <div
            style={{
              width: "120px",
              height: "150px",
              border: "1px solid rgba(255,255,255,0.05)",
              background: `#000 url(${member.pfp}) center/cover no-repeat`,
              filter: "grayscale(100%) brightness(0.55)",
              marginBottom: "22px",
            }}
          />
          <div
            style={{
              fontFamily: "var(--font-pricedown)",
              fontSize: "24px",
              letterSpacing: "3px",
              color: "#f3f3f3",
              textAlign: "center",
            }}
          >
            {member.name}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            minWidth: 0,
          }}
        >
          <div
            style={{
              height: "74px",
              borderBottom: "1px solid rgba(255,255,255,0.06)",
              display: "flex",
              alignItems: "center",
              padding: "0 28px",
              fontFamily: "var(--font-minecraft)",
              fontSize: "11px",
              letterSpacing: "4px",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.32)",
            }}
          >
            {member.role === "founder" ? "founder" : "node_01 // session_active"}
          </div>

          <div
            style={{
              flex: 1,
              padding: "28px",
              display: "flex",
              alignItems: "flex-start",
            }}
          >
            <p
              style={{
                margin: 0,
                color: "rgba(255,255,255,0.82)",
                fontFamily: "Georgia, serif",
                fontSize: "clamp(20px, 2.2vw, 28px)",
                lineHeight: 1.7,
                maxWidth: "440px",
              }}
            >
              {member.bio}
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, minmax(0,1fr))",
              borderTop: "1px solid rgba(255,255,255,0.06)",
            }}
          >
            <button
              onClick={() => open(member.link)}
              style={actionStyle}
            >
              telegram
            </button>

            <button
              onClick={() => open(member.discord)}
              style={actionStyle}
            >
              discord
            </button>

            <button
              onClick={onClose}
              style={actionStyle}
            >
              close
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

const actionStyle: React.CSSProperties = {
  height: "56px",
  background: "transparent",
  border: "0",
  borderRight: "1px solid rgba(255,255,255,0.06)",
  color: "rgba(255,255,255,0.5)",
  fontFamily: "var(--font-minecraft)",
  fontSize: "11px",
  letterSpacing: "3px",
  textTransform: "uppercase",
  cursor: "pointer",
}

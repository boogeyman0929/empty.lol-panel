import React from "react"

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
        zIndex: 9999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "28px",
        background: "rgba(0,0,0,0.82)",
        backdropFilter: "blur(6px)",
        WebkitBackdropFilter: "blur(6px)",
        animation: "fadein 0.18s ease",
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          width: "min(920px, 92vw)",
          minHeight: "520px",
          background: "rgba(8,8,8,0.96)",
          border: "1px solid rgba(255,255,255,0.07)",
          display: "grid",
          gridTemplateColumns: "300px 1fr",
          overflow: "hidden",
          boxShadow: "0 30px 100px rgba(0,0,0,0.6)",
        }}
      >
        <div
          style={{
            borderRight: "1px solid rgba(255,255,255,0.06)",
            padding: "42px 28px 34px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "flex-start",
            background: "rgba(5,5,5,0.92)",
          }}
        >
          <div
            style={{
              width: "210px",
              height: "210px",
              border: "1px solid rgba(255,255,255,0.05)",
              background: `#000 center/cover no-repeat url(${member.pfp})`,
              filter: "grayscale(100%) contrast(1.15) brightness(0.45)",
              marginBottom: "34px",
              flexShrink: 0,
            }}
          />

          <div
            style={{
              fontFamily: "Pricedown, sans-serif",
              fontSize: "30px",
              letterSpacing: "4px",
              color: "#f2f2f2",
              textTransform: "uppercase",
              textAlign: "center",
              lineHeight: 1,
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
              height: "78px",
              borderBottom: "1px solid rgba(255,255,255,0.06)",
              display: "flex",
              alignItems: "center",
              padding: "0 42px",
              background: "rgba(10,10,10,0.95)",
              color: "rgba(255,255,255,0.28)",
              fontFamily: "Minecraft, monospace",
              fontSize: "11px",
              letterSpacing: "4px",
              textTransform: "uppercase",
            }}
          >
            {member.role === "founder" ? "founder" : "node_01 // session_active"}
          </div>

          <div
            style={{
              flex: 1,
              padding: "42px",
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
              background: "rgba(8,8,8,0.96)",
            }}
          >
            <p
              style={{
                margin: 0,
                maxWidth: "520px",
                color: "rgba(255,255,255,0.78)",
                fontFamily: '"Courier New", monospace',
                fontSize: "clamp(22px, 2.2vw, 34px)",
                lineHeight: 1.9,
                letterSpacing: "0.5px",
                textWrap: "balance",
              }}
            >
              {member.bio}
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
              borderTop: "1px solid rgba(255,255,255,0.06)",
            }}
          >
            <button
              type="button"
              onClick={() => openLink(member.link)}
              style={actionStyle}
            >
              telegram
            </button>

            <button
              type="button"
              onClick={() => openLink(member.discord)}
              style={actionStyle}
            >
              discord
            </button>

            <button
              type="button"
              onClick={onClose}
              style={{ ...actionStyle, borderRight: "0" }}
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
  height: "64px",
  background: "transparent",
  border: "0",
  borderRight: "1px solid rgba(255,255,255,0.06)",
  color: "rgba(255,255,255,0.42)",
  fontFamily: "Minecraft, monospace",
  fontSize: "11px",
  letterSpacing: "3px",
  textTransform: "uppercase",
  cursor: "pointer",
  transition: "background 0.18s ease, color 0.18s ease",
}

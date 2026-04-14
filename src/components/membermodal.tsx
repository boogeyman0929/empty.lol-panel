import React, { useState, useEffect } from "react"

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
  const [displayedBio, setDisplayedBio] = useState("")

  useEffect(() => {
    setDisplayedBio("")
    let i = 0
    const interval = setInterval(() => {
      i++
      setDisplayedBio(member.bio.slice(0, i))
      if (i >= member.bio.length) clearInterval(interval)
    }, 35)
    return () => clearInterval(interval)
  }, [member.bio])

  const openLink = (url: string | null) => {
    if (!url) return
    window.open(url, "_blank", "noopener,noreferrer")
  }

  const actionCount = (member.link ? 1 : 0) + (member.discord ? 1 : 0) + 1
  const gridCols = `repeat(${actionCount}, minmax(0, 1fr))`

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
        background: "rgba(0,0,0,0.9)",
        animation: "fadein 0.18s ease",
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          width: "min(550px, 92vw)",
          minHeight: "260px",
          background: "#080808",
          border: "1px solid #1a1a1a",
          display: "flex",
          flexDirection: "row",
          overflow: "hidden",
          boxShadow: "0 30px 100px rgba(0,0,0,0.6)",
        }}
      >
        {/* Sidebar */}
        <div
          style={{
            width: "180px",
            padding: "30px",
            borderRight: "1px solid #1a1a1a",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            background: "#050505",
          }}
        >
          <div
            style={{
              width: "120px",
              height: "120px",
              border: "1px solid #333",
              background: `#000 center/cover no-repeat url(${member.pfp})`,
              filter: "grayscale(100%) contrast(1.3) brightness(0.4)",
              marginBottom: "20px",
              flexShrink: 0,
            }}
          />
          <div
            style={{
              fontFamily: "var(--font-pricedown)",
              fontSize: "18px",
              letterSpacing: "4px",
              color: "#f2f2f2",
              textTransform: "uppercase",
              textAlign: "center",
              fontWeight: "bold",
            }}
          >
            {member.name}
          </div>
        </div>

        {/* Main */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column", minWidth: 0 }}>
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
              padding: "25px",
              display: "flex",
              alignItems: "flex-start",
              background: "#080808",
            }}
          >
            <p
              style={{
                margin: 0,
                color: "#999",
                fontFamily: '"Courier New", monospace',
                fontSize: "11px",
                lineHeight: 1.7,
                letterSpacing: "0.5px",
              }}
            >
              {displayedBio}
              <span style={{ animation: "blink 1s step-end infinite", opacity: 0.6 }}>▌</span>
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: gridCols,
              borderTop: "1px solid #1a1a1a",
            }}
          >
            {member.link && (
              <button type="button" onClick={() => openLink(member.link)} style={actionStyle}>
                telegram
              </button>
            )}
            {member.discord && (
              <button type="button" onClick={() => openLink(member.discord)} style={actionStyle}>
                discord
              </button>
            )}
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
  padding: "15px 10px",
  background: "transparent",
  border: "0",
  borderRight: "1px solid #111",
  color: "#444",
  fontFamily: "var(--font-minecraft)",
  fontSize: "8px",
  letterSpacing: "3px",
  textTransform: "uppercase",
  cursor: "pointer",
  transition: "background 0.18s ease, color 0.18s ease",
}

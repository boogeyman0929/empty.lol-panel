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
  const [closing, setClosing] = useState(false)

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

  const handleClose = () => {
    setClosing(true)
    setTimeout(() => onClose(), 320)
  }

  const actionCount = (member.link ? 1 : 0) + (member.discord ? 1 : 0) + 1
  const gridCols = `repeat(${actionCount}, minmax(0, 1fr))`

  return (
    <div
      onClick={handleClose}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "28px",
        background: closing ? "transparent" : "rgba(0,0,0,0.88)",
        backdropFilter: closing ? "none" : "blur(12px)",
        WebkitBackdropFilter: closing ? "none" : "blur(12px)",
        animation: closing ? "modalFadeOut 0.32s ease forwards" : "modalFadeIn 0.28s ease",
        transition: "background 0.32s ease, backdrop-filter 0.32s ease",
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          width: "min(680px, 94vw)",
          minHeight: "300px",
          background: "#080808",
          border: "1px solid rgba(255,255,255,0.06)",
          display: "flex",
          flexDirection: "row",
          overflow: "hidden",
          boxShadow: "0 40px 120px rgba(0,0,0,0.7), 0 0 1px rgba(255,255,255,0.05)",
          animation: closing ? "modalCardOut 0.3s ease forwards" : "modalCardIn 0.32s cubic-bezier(0.22,1,0.36,1)",
        }}
      >
        {/* Sidebar with PFP */}
        <div
          style={{
            width: "200px",
            padding: "36px 28px",
            borderRight: "1px solid rgba(255,255,255,0.04)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            background: "#050505",
            flexShrink: 0,
          }}
        >
          <div
            style={{
              width: "130px",
              height: "130px",
              border: "1px solid rgba(255,255,255,0.08)",
              background: `#000 center/cover no-repeat url(${member.pfp})`,
              filter: "grayscale(100%) contrast(1.2) brightness(0.4)",
              marginBottom: "22px",
              flexShrink: 0,
            }}
          />
          <div
            style={{
              fontFamily: "var(--font-pricedown)",
              fontSize: "20px",
              letterSpacing: "4px",
              color: "#f2f2f2",
              textTransform: "uppercase",
              textAlign: "center",
              fontWeight: "bold",
              lineHeight: 1.1,
            }}
          >
            {member.name}
          </div>
        </div>

        {/* Main content */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column", minWidth: 0 }}>
          {/* Header bar */}
          <div
            style={{
              fontSize: "9px",
              color: "rgba(255,255,255,0.18)",
              letterSpacing: "3px",
              textTransform: "uppercase",
              padding: "16px 30px",
              borderBottom: "1px solid rgba(255,255,255,0.04)",
              background: "#0a0a0a",
              fontFamily: "var(--font-minecraft)",
            }}
          >
            {member.role === "founder" ? "founder" : "node_01 // session_active"}
          </div>

          {/* Bio area + gif */}
          <div
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "row",
              background: "#080808",
              minHeight: "180px",
            }}
          >
            {/* Typewriter bio */}
            <div
              style={{
                flex: 1,
                padding: "30px",
                display: "flex",
                alignItems: "flex-start",
              }}
            >
              <p
                style={{
                  margin: 0,
                  color: "rgba(255,255,255,0.55)",
                  fontFamily: '"Courier New", monospace',
                  fontSize: "12px",
                  lineHeight: 1.85,
                  letterSpacing: "0.3px",
                  maxWidth: "320px",
                }}
              >
                {displayedBio}
                <span style={{ animation: "blink 1s step-end infinite", opacity: 0.5 }}>▌</span>
              </p>
            </div>

            {/* Lain gif */}
            <div
              style={{
                width: "140px",
                flexShrink: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "20px 16px 20px 0",
              }}
            >
              <img
                src="/images/lain-neg.gif"
                alt=""
                draggable={false}
                style={{
                  width: "100%",
                  height: "auto",
                  maxHeight: "160px",
                  objectFit: "contain",
                  opacity: 0.12,
                  filter: "grayscale(1) brightness(0.7) contrast(1.1)",
                  pointerEvents: "none",
                }}
              />
            </div>
          </div>

          {/* Action buttons */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: gridCols,
              borderTop: "1px solid rgba(255,255,255,0.04)",
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
              onClick={handleClose}
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
  padding: "16px 10px",
  background: "transparent",
  border: "0",
  borderRight: "1px solid rgba(255,255,255,0.04)",
  color: "rgba(255,255,255,0.28)",
  fontFamily: "var(--font-minecraft)",
  fontSize: "8px",
  letterSpacing: "3px",
  textTransform: "uppercase",
  cursor: "pointer",
  transition: "background 0.2s ease, color 0.2s ease",
}

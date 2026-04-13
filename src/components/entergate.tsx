import { useRef, useState } from "react"
import logoImg from "@/assets/logo.png"

interface Props {
  onEnter: () => void
}

export default function EnterGate({ onEnter }: Props) {
  const [fading, setFading] = useState(false)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  function handleClick() {
    if (fading) return

    setFading(true)

    try {
      if (!audioRef.current) {
        audioRef.current = new Audio("/audio/decay.mp3")
        audioRef.current.loop = true
        audioRef.current.volume = 0.35
      }
      audioRef.current.play().catch(() => {})
    } catch {}

    setTimeout(() => onEnter(), 1100)
  }

  return (
    <div
      onClick={handleClick}
      style={{
        position: "fixed",
        inset: 0,
        background: "#000",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 5000,
        cursor: "pointer",
        animation: fading ? "gateFadeBlack 1.1s ease forwards" : undefined,
      }}
    >
      <img
        src={logoImg}
        alt=""
        draggable={false}
        style={{
          width: "120px",
          height: "auto",
          filter: "grayscale(1) brightness(0.92) contrast(0.9)",
          marginBottom: "24px",
        }}
      />

      <p
        style={{
          fontFamily: "var(--font-minecraft)",
          fontSize: "18px",
          letterSpacing: "8px",
          color: "#f2f2f2",
          fontWeight: 700,
          textTransform: "uppercase",
          margin: 0,
          marginBottom: "10px",
        }}
      >
        empty.lol
      </p>

      <p
        style={{
          fontFamily: "var(--font-minecraft)",
          fontSize: "9px",
          letterSpacing: "2px",
          opacity: 0.28,
          textTransform: "uppercase",
          color: "#f2f2f2",
          margin: 0,
          marginBottom: "40px",
        }}
      >
        private roster
      </p>

      <p
        style={{
          fontFamily: "var(--font-minecraft)",
          fontSize: "11px",
          letterSpacing: "4px",
          color: "#f2f2f2",
          animation: "fadePulse 2.8s ease-in-out infinite",
          margin: 0,
        }}
      >
        click to proceed
      </p>
    </div>
  )
}

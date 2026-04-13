import { useState, useRef } from "react";
import logoImg from "@/assets/logo.png";

interface Props {
  onEnter: () => void;
}

export default function EnterGate({ onEnter }: Props) {
  const [fading, setFading] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  function handleClick() {
    setFading(true);
    try {
      if (!audioRef.current) {
        audioRef.current = new Audio("/audio/decay.mp3");
        audioRef.current.loop = true;
        audioRef.current.volume = 0.4;
      }
      audioRef.current.play();
    } catch (_) {}
    setTimeout(() => onEnter(), 1200);
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
        animation: fading ? "gateFade 1.2s forwards" : undefined,
      }}
    >
      <img
        src={logoImg}
        alt=""
        draggable={false}
        style={{
          width: "120px",
          height: "auto",
          filter: "grayscale(1) contrast(0.85)",
          marginBottom: "24px",
          userSelect: "none",
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
          marginBottom: "8px",
        }}
      >
        empty.lol
      </p>
      <p
        style={{
          fontFamily: "var(--font-minecraft)",
          fontSize: "9px",
          letterSpacing: "2px",
          opacity: 0.25,
          textTransform: "uppercase",
          color: "#f2f2f2",
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
          opacity: 0,
          animation: "fadePulse 3s infinite",
        }}
      >
        CLICK TO PROCEED
      </p>
    </div>
  );
}

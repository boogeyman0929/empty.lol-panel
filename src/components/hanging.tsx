import hangingImg from "@/assets/hanging.png";

export default function Hanging() {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: 10,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "1px",
          height: "20px",
          background: "linear-gradient(to bottom, rgba(234,234,234,0.3), rgba(234,234,234,0.08))",
        }}
      />
      <div
        style={{
          transformOrigin: "top center",
          animation: "swing 4s ease-in-out infinite",
          filter: "drop-shadow(0 8px 16px rgba(0,0,0,0.6)) blur(0.3px)",
        }}
      >
        <img
          src={hangingImg}
          alt=""
          draggable={false}
          style={{
            width: "60px",
            height: "auto",
            opacity: 0.85,
            userSelect: "none",
          }}
        />
      </div>
    </div>
  );
}

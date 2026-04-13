import { useState } from "react";
import MemberModal from "@/components/membermodal";
import pfpVale from "@/assets/pfpvale.png";
import pfpSignal from "@/assets/signal.png";
import pfpVk from "@/assets/vkpfp.jpg";

const members = [
  { name: "VALE", role: "founder", bio: "if you love life, don't waste time, for time is what life is made of", pfp: pfpVale, link: "https://t.me/carfaxing" },
  { name: "SIGNAL", role: "member", bio: "you werent supposed to find this", pfp: pfpSignal, link: null },
  { name: "VK", role: "member", bio: "idk bro ^_^", pfp: pfpVk, link: null },
];

export default function Roster() {
  const [selected, setSelected] = useState<typeof members[0] | null>(null);

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
          fontSize: "11px",
          letterSpacing: "3px",
          color: "#666",
          marginBottom: "30px",
        }}
      >
        members
      </p>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 80px)",
          gap: "25px 20px",
        }}
      >
        {members.map((m, i) => (
          <div
            key={m.name}
            onClick={() => setSelected(m)}
            style={{
              textAlign: "center",
              cursor: "pointer",
              transition: "0.3s ease",
              animation: "fadein 0.8s ease both",
              animationDelay: `${1.6 + i * 0.2}s`,
              opacity: 0,
            }}
            className="member-tile"
          >
            <div
              style={{
                width: "60px",
                height: "60px",
                margin: "0 auto",
                border: "1px solid #222",
                background: `#000 url(${m.pfp}) center/cover no-repeat`,
                filter: "grayscale(100%) brightness(0.5)",
              }}
            />
            <p
              style={{
                fontFamily: "var(--font-pricedown)",
                fontSize: "10px",
                letterSpacing: "2px",
                color: "#f2f2f2",
                opacity: 0.75,
                marginTop: "8px",
              }}
            >
              {m.name}
            </p>
          </div>
        ))}
      </div>
      {selected && (
        <MemberModal member={selected} onClose={() => setSelected(null)} />
      )}
      <style>{`
        .member-tile:hover {
          opacity: 0.4 !important;
          filter: brightness(0.5);
        }
      `}</style>
    </div>
  );
}

interface MemberData {
  name: string;
  role: string;
  bio: string;
  pfp: string;
  link: string | null;
}

interface Props {
  member: MemberData | null;
  onClose: () => void;
}

export default function MemberModal({ member, onClose }: Props) {
  if (!member) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1000,
        padding: "20px",
      }}
    >
      <div
        onClick={onClose}
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(0,0,0,0.9)",
        }}
      />
      <div
        style={{
          position: "relative",
          width: "550px",
          maxWidth: "100%",
          background: "#080808",
          border: "1px solid #1a1a1a",
          display: "flex",
          flexDirection: "row",
          minHeight: "260px",
          animation: "fadein 0.3s ease both",
        }}
      >
        <div
          style={{
            width: "180px",
            padding: "30px",
            borderRight: "1px solid #1a1a1a",
            display: "flex",
            flexDirection: "column",
            background: "#050505",
            alignItems: "center",
          }}
        >
          <div
            style={{
              width: "120px",
              height: "120px",
              marginBottom: "20px",
              border: "1px solid #333",
              backgroundImage: `url(${member.pfp})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              filter: "grayscale(100%) contrast(1.3) brightness(0.4)",
            }}
          />
          <p
            style={{
              fontFamily: "var(--font-pricedown)",
              fontSize: "18px",
              letterSpacing: "4px",
              fontWeight: "bold",
              color: "#f2f2f2",
              textTransform: "uppercase",
              textAlign: "center",
            }}
          >
            {member.name}
          </p>
        </div>
        <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
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
            {member.role}
          </div>
          <div
            style={{
              flex: 1,
              fontSize: "11px",
              lineHeight: 1.7,
              padding: "25px",
              textAlign: "left",
              color: "#999",
              fontFamily: "var(--font-minecraft)",
              background: "#080808",
            }}
          >
            {member.bio}
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              borderTop: "1px solid #1a1a1a",
            }}
          >
            {member.link && (
              <a
                href={member.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  padding: "15px 10px",
                  fontSize: "8px",
                  letterSpacing: "3px",
                  color: "#444",
                  textDecoration: "none",
                  transition: "0.2s",
                  borderRight: "1px solid #111",
                  textTransform: "uppercase",
                  textAlign: "center",
                  fontFamily: "var(--font-minecraft)",
                }}
                className="modal-pill"
              >
                Telegram
              </a>
            )}
            <div
              onClick={onClose}
              style={{
                padding: "15px 10px",
                fontSize: "8px",
                letterSpacing: "3px",
                color: "#444",
                textDecoration: "none",
                transition: "0.2s",
                textTransform: "uppercase",
                textAlign: "center",
                cursor: "pointer",
                fontFamily: "var(--font-minecraft)",
              }}
              className="modal-pill"
            >
              Close
            </div>
          </div>
        </div>
      </div>
      <style>{`
        .modal-pill:hover {
          background: #0a0a0a !important;
          color: #fff !important;
        }
      `}</style>
    </div>
  );
}

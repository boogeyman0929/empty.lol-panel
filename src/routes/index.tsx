import { createFileRoute } from "@tanstack/react-router";
import Header from "@/components/header";
import Roster from "@/components/roster";
import Hanging from "@/components/hanging";
import Grain from "@/components/grain";
import Scanlines from "@/components/scanlines";
import Particles from "@/components/particles";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "empty.lol" },
      { name: "description", content: "private roster" },
      { property: "og:title", content: "empty.lol" },
      { property: "og:description", content: "private roster" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        backgroundImage: "url(/images/bg.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Hanging />
      <Grain />
      <Scanlines />
      <Particles />
      <div
        style={{
          position: "relative",
          zIndex: 5,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "40px",
          maxWidth: "320px",
          width: "100%",
          padding: "120px 20px 60px",
        }}
      >
        <Header />
        <Roster />
      </div>
    </div>
  );
}

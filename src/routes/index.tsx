import { createFileRoute } from "@tanstack/react-router"
import { useEffect, useState } from "react"
import Header from "@/components/header"
import Roster from "@/components/roster"
import Grain from "@/components/grain"
import Scanlines from "@/components/scanlines"
import Particles from "@/components/particles"
import EnterGate from "@/components/entergate"

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "empty.lol" },
      { name: "description", content: "private roster" },
      { property: "og:title", content: "empty.lol" },
      { property: "og:description", content: "private roster" },
      { name: "theme-color", content: "#000000" },
    ],
  }),
  component: Index,
})

function Index() {
  const [entered, setEntered] = useState(false)
  const [revealed, setRevealed] = useState(false)

  useEffect(() => {
    if (!entered) return
    const timer = window.setTimeout(() => setRevealed(true), 40)
    return () => window.clearTimeout(timer)
  }, [entered])

  if (!entered) {
    return <EnterGate onEnter={() => setEntered(true)} />
  }

  return (
    <div
      className={revealed ? "page-reveal" : ""}
      style={{
        minHeight: "100vh",
        position: "relative",
        background: "#000",
      }}
    >
      <div className="bg-gif-layer" />
      <div className="bg-vignette" />

      <Grain />
      <Scanlines />
      <Particles />

      <div className="center-shell">
        <div className="panel-wrap">
          <Header />
          <Roster />
        </div>
      </div>
    </div>
  )
}

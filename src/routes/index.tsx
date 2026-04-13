import { createFileRoute } from "@tanstack/react-router"
import { useEffect, useState } from "react"
import Grain from "@/components/grain"
import Scanlines from "@/components/scanlines"
import Particles from "@/components/particles"
import EnterGate from "@/components/entergate"
import valeImg from "@/assets/logo.png"

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
    const timer = window.setTimeout(() => setRevealed(true), 50)
    return () => window.clearTimeout(timer)
  }, [entered])

  const openExternal = (url: string) => {
    document.body.style.transition = "opacity 0.35s ease"
    document.body.style.opacity = "0"

    window.setTimeout(() => {
      window.location.href = url
    }, 350)
  }

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
          <div className="roster-window">
            <div className="roster-left">
              <img
                src={valeImg}
                alt="Vale"
                className="member-image"
              />
              <p className="member-name">VALE</p>
            </div>

            <div className="roster-right">
              <div className="roster-content">
                <p className="section-label">FOUNDER</p>
                <p className="member-quote">
                  if you love life, don&apos;t waste time, for time is what life is made of
                </p>
              </div>

              <div className="roster-actions">
                <button
                  className="roster-action"
                  onClick={() => openExternal("https://t.me/carfaxing")}
                >
                  telegram
                </button>
                <button
                  className="roster-action"
                  onClick={() => openExternal("https://discord.com")}
                >
                  discord
                </button>
                <button
                  className="roster-action"
                  onClick={() => setEntered(false)}
                >
                  close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

import { createFileRoute } from "@tanstack/react-router"
import { useEffect, useState } from "react"
import Header from "@/components/header"
import Roster from "@/components/roster"
import Grain from "@/components/grain"
import Scanlines from "@/components/scanlines"
import Particles from "@/components/particles"
import EnterGate from "@/components/entergate"
import DevToolsBlocker from "@/components/devtoolsblocker"

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
    const words = ["empty.lol", "t.me/emptyanc", "vale", "signal", "vk"]
    let wordIndex = 0
    let charIndex = 0
    let deleting = false
    let timeoutId: number

    const tick = () => {
      const current = words[wordIndex]

      if (!deleting) {
        charIndex++
        document.title = current.slice(0, charIndex)

        if (charIndex === current.length) {
          timeoutId = window.setTimeout(() => {
            deleting = true
            tick()
          }, 1000)
          return
        }
      } else {
        charIndex--
        document.title = current.slice(0, charIndex)

        if (charIndex === 0) {
          deleting = false
          wordIndex = (wordIndex + 1) % words.length
        }
      }

      timeoutId = window.setTimeout(tick, deleting ? 65 : 110)
    }

    tick()

    return () => {
      window.clearTimeout(timeoutId)
    }
  }, [])

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
      <DevToolsBlocker />
      <div className="bg-gif-layer" />

      {/* Lain gif on the right */}
      <div
        style={{
          position: "fixed",
          top: 0,
          right: 0,
          width: "420px",
          height: "100vh",
          backgroundImage: "url(/images/lain-neg.gif)",
          backgroundPosition: "center top",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          opacity: 0.08,
          pointerEvents: "none",
          zIndex: 2,
          filter: "grayscale(1) brightness(0.6)",
        }}
      />

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

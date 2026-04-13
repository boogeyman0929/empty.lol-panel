import { createFileRoute } from "@tanstack/react-router"
import Scanlines from "@/components/scanlines"

export const Route = createFileRoute("/")({
  component: Index,
})

function Index() {
  return (
    <div className="page-shell">
      <div className="bg-gif-layer" />
      <div className="bg-noise" />
      <div className="brand-mark">empty.lol</div>
      <Scanlines />
      <div className="edge-vignette" />
    </div>
  )
}

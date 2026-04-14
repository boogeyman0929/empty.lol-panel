import { useEffect } from "react"

export default function DevToolsBlocker() {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // F12
      if (e.key === "F12") {
        e.preventDefault()
        e.stopPropagation()
        return false
      }
      // Ctrl+Shift+I / Ctrl+Shift+J / Ctrl+Shift+C (dev tools)
      if (e.ctrlKey && e.shiftKey && ["I", "J", "C"].includes(e.key.toUpperCase())) {
        e.preventDefault()
        e.stopPropagation()
        return false
      }
      // Ctrl+U (view source)
      if (e.ctrlKey && e.key.toUpperCase() === "U") {
        e.preventDefault()
        e.stopPropagation()
        return false
      }
      // Ctrl+S (save)
      if (e.ctrlKey && e.key.toUpperCase() === "S") {
        e.preventDefault()
        e.stopPropagation()
        return false
      }
    }

    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault()
      return false
    }

    document.addEventListener("keydown", handleKeyDown, true)
    document.addEventListener("contextmenu", handleContextMenu, true)

    return () => {
      document.removeEventListener("keydown", handleKeyDown, true)
      document.removeEventListener("contextmenu", handleContextMenu, true)
    }
  }, [])

  return null
}

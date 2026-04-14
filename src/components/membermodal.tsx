import { useCallback, useEffect, useId, useState } from "react"
import { createPortal } from "react-dom"

type Member = {
  name: string
  role: string
  bio: string
  pfp: string
  link: string | null
  discord: string | null
}

const CLOSE_DELAY_MS = 320
const MODAL_GIF_SRC = "/lain-neg-BKqyW8Dh.gif"

export default function MemberModal({
  member,
  onClose,
}: {
  member: Member
  onClose: () => void
}) {
  const [displayedBio, setDisplayedBio] = useState("")
  const [closing, setClosing] = useState(false)
  const titleId = useId()

  const actions = [
    member.link ? { label: "telegram", href: member.link } : null,
    member.discord ? { label: "discord", href: member.discord } : null,
  ].filter((action): action is { label: string; href: string } => Boolean(action))

  const handleClose = useCallback(() => {
    if (closing) return
    setClosing(true)
    window.setTimeout(() => onClose(), CLOSE_DELAY_MS)
  }, [closing, onClose])

  useEffect(() => {
    setClosing(false)
    setDisplayedBio("")

    let characterIndex = 0
    const intervalId = window.setInterval(() => {
      characterIndex += 1
      setDisplayedBio(member.bio.slice(0, characterIndex))

      if (characterIndex >= member.bio.length) {
        window.clearInterval(intervalId)
      }
    }, 26)

    return () => window.clearInterval(intervalId)
  }, [member.bio])

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault()
        handleClose()
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [handleClose])

  if (typeof document === "undefined") {
    return null
  }

  return createPortal(
    <div
      className={`member-modal-root${closing ? " is-closing" : ""}`}
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
    >
      <button
        type="button"
        className="member-modal-overlay"
        aria-label="Close member panel"
        onClick={handleClose}
      />

      <div className="member-modal-frame">
        <div className="member-modal-card" onClick={(event) => event.stopPropagation()}>
          <div className="member-modal-copy">
            <p className="member-modal-label">
              {member.role === "founder" ? "founder // session_active" : "node_01 // session_active"}
            </p>

            <div className="member-modal-profile">
              <img
                src={member.pfp}
                alt={`${member.name} profile picture`}
                className="member-modal-avatar"
                draggable={false}
              />

              <div className="member-modal-heading">
                <h2 id={titleId} className="member-modal-name">
                  {member.name}
                </h2>
                <p className="member-modal-role">{member.role}</p>
              </div>
            </div>

            <div className="member-modal-bio">
              <p className="member-modal-typewriter">
                {displayedBio}
                <span className="member-modal-cursor">▌</span>
              </p>
            </div>

            <div
              className="member-modal-actions"
              style={{ gridTemplateColumns: `repeat(${actions.length + 1}, minmax(0, 1fr))` }}
            >
              {actions.map((action) => (
                <a
                  key={action.label}
                  href={action.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="member-modal-action"
                >
                  {action.label}
                </a>
              ))}

              <button type="button" className="member-modal-action" onClick={handleClose}>
                close
              </button>
            </div>
          </div>

          <div className="member-modal-media">
            <div className="member-modal-media-shell">
              <img
                src={MODAL_GIF_SRC}
                alt=""
                aria-hidden="true"
                className="member-modal-gif"
                draggable={false}
              />
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.body
  )
}

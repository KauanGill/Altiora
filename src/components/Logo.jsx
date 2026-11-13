import { Link } from 'react-router-dom'

export function LogoMark() {
  return (
    <svg viewBox="0 0 40 40" aria-hidden="true">
      <defs>
        <linearGradient id="altiora-g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#F3D9A0" />
          <stop offset="0.5" stopColor="#D4AF6A" />
          <stop offset="1" stopColor="#B8893B" />
        </linearGradient>
      </defs>
      <path d="M20 4 36 34h-7.5L20 17.5 11.5 34H4L20 4Z" fill="url(#altiora-g)" />
      <path d="M15.5 27.5h9" stroke="#0A0A0A" strokeWidth="2.2" />
      <circle cx="20" cy="4" r="1.6" fill="#F3D9A0" />
    </svg>
  )
}

export default function Logo() {
  return (
    <Link to="/" className="logo" aria-label="Altiora — início">
      <LogoMark />
      <span>Altiora</span>
    </Link>
  )
}

"use client"

import { useEffect, useState } from "react"
import { useTheme } from "next-themes"
import { FaMoon, FaSun } from "react-icons/fa"

export default function DarkModeButton() {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  const isDark = resolvedTheme === "dark"

  return (
    <button
      type="button"
      aria-label="Toggle dark mode"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="fixed right-2 bottom-2 text-white"
    >
      {isDark ? <FaSun /> : <FaMoon />}
    </button>
  )
}

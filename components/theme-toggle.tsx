"use client"

import { useTheme } from "@/hooks/use-theme"
import { Button } from "@/components/ui/button"

export function ThemeToggle() {
  const { theme, toggleTheme, mounted } = useTheme()

  if (!mounted) {
    return null
  }

  return (
    <Button
      onClick={toggleTheme}
      size="icon"
      className="fixed top-6 right-6 z-50 rounded-full bg-slate-800/50 hover:bg-slate-700/50 dark:bg-slate-200/50 dark:hover:bg-slate-300/50 border border-cyan-500/30 dark:border-cyan-400/30 text-cyan-400 dark:text-cyan-600 hover:text-cyan-300 dark:hover:text-cyan-500 transition-all duration-300"
    >
      <span className="text-2xl">{theme === "dark" ? "☀️" : "🌙"}</span>
    </Button>
  )
}

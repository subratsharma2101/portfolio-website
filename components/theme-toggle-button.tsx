"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export default function ThemeToggleButton() {
    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return null
    }

    return (
        <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="fixed bottom-8 right-8 z-50 p-4 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 dark:from-cyan-600 dark:to-blue-600 text-white shadow-lg hover:shadow-cyan-500/50 dark:hover:shadow-cyan-600/50 transition-all duration-300 hover:scale-110 group"
            aria-label="Toggle theme"
        >
            {theme === "dark" ? (
                <Sun className="w-6 h-6 group-hover:rotate-180 transition-transform duration-500" />
            ) : (
                <Moon className="w-6 h-6 group-hover:-rotate-12 transition-transform duration-500" />
            )}
        </button>
    )
}

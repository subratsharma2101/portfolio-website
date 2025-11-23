"use client"

import { useEffect, useState } from "react"

interface TypewriterProps {
    texts: string[]
    typingSpeed?: number
    deletingSpeed?: number
    pauseDuration?: number
}

export default function Typewriter({
    texts,
    typingSpeed = 100,
    deletingSpeed = 50,
    pauseDuration = 2000,
}: TypewriterProps) {
    const [displayText, setDisplayText] = useState("")
    const [currentIndex, setCurrentIndex] = useState(0)
    const [isDeleting, setIsDeleting] = useState(false)

    useEffect(() => {
        const currentText = texts[currentIndex]

        const timeout = setTimeout(
            () => {
                if (!isDeleting) {
                    // Typing
                    if (displayText.length < currentText.length) {
                        setDisplayText(currentText.slice(0, displayText.length + 1))
                    } else {
                        // Pause before deleting
                        setTimeout(() => setIsDeleting(true), pauseDuration)
                    }
                } else {
                    // Deleting
                    if (displayText.length > 0) {
                        setDisplayText(currentText.slice(0, displayText.length - 1))
                    } else {
                        setIsDeleting(false)
                        setCurrentIndex((prev) => (prev + 1) % texts.length)
                    }
                }
            },
            isDeleting ? deletingSpeed : typingSpeed,
        )

        return () => clearTimeout(timeout)
    }, [displayText, currentIndex, isDeleting, texts, typingSpeed, deletingSpeed, pauseDuration])

    return (
        <span className="inline-block">
            {displayText}
            <span className="animate-pulse">|</span>
        </span>
    )
}

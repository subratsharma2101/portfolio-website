"use client"

import type React from "react"
import { ThemeToggle } from "@/components/theme-toggle"

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <ThemeToggle />
      {children}
    </>
  )
}

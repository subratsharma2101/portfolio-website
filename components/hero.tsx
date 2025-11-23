"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import Typewriter from "@/components/typewriter"

export default function Hero() {
  const handleDownloadResume = () => {
    // Open resume in new tab for printing/saving as PDF
    window.open('/resume.html', '_blank')
  }

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 md:px-6 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 dark:from-white dark:via-slate-50 dark:to-white"></div>
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-500/15 dark:bg-cyan-500/5 rounded-full blur-3xl -z-10 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-500/10 dark:bg-blue-500/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] bg-purple-500/5 dark:bg-purple-500/2 rounded-full blur-3xl -z-10"></div>

      <div className="space-y-8 max-w-5xl mx-auto relative z-10">
        <div className="inline-block">
          <span className="px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 dark:from-cyan-500/10 dark:to-blue-500/10 border border-cyan-500/40 dark:border-cyan-500/30 text-cyan-300 dark:text-cyan-600 text-sm font-semibold tracking-wide">
            🌐 Aspiring Network Engineer | Software Developer
          </span>
        </div>

        <h1 className="text-5xl md:text-8xl font-black tracking-tighter text-white dark:text-slate-900 leading-tight">
          Hi, I'm{" "}
          <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-300 dark:from-cyan-600 dark:via-blue-600 dark:to-cyan-500 bg-clip-text text-transparent animate-pulse">
            Subrat Sharma
          </span>
        </h1>

        <p className="text-lg md:text-2xl text-slate-300 dark:text-slate-700 max-w-3xl mx-auto leading-relaxed font-light">
          Passionate about{" "}
          <span className="text-cyan-400 dark:text-cyan-600 font-semibold">
            <Typewriter
              texts={[
                "networking technologies",
                "network infrastructure",
                "TCP/IP protocols",
                "routing & switching",
                "network security",
                "CCNA certification",
              ]}
            />
          </span>
          . Currently building my expertise in network engineering while leveraging my software development background to
          create innovative solutions.
        </p>

        <div className="flex flex-wrap gap-6 justify-center pt-8">
          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 dark:from-cyan-600 dark:to-blue-600 dark:hover:from-cyan-700 dark:hover:to-blue-700 text-white font-bold px-8 py-6 text-lg rounded-lg shadow-lg hover:shadow-cyan-500/50 transition-all duration-300"
          >
            <Link href="#projects">View My Work</Link>
          </Button>
          <Button
            asChild
            size="lg"
            className="border-2 border-cyan-500/60 dark:border-cyan-600/60 text-cyan-300 dark:text-cyan-700 hover:bg-cyan-500/10 dark:hover:bg-cyan-600/10 bg-transparent font-bold px-8 py-6 text-lg rounded-lg transition-all duration-300"
          >
            <Link href="#contact">Contact Me</Link>
          </Button>
          <Button
            onClick={handleDownloadResume}
            size="lg"
            className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 dark:from-emerald-600 dark:to-teal-600 dark:hover:from-emerald-700 dark:hover:to-teal-700 text-white font-bold px-8 py-6 text-lg rounded-lg shadow-lg hover:shadow-emerald-500/50 transition-all duration-300"
          >
            📥 Download Resume
          </Button>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-cyan-400 dark:text-cyan-600"
          >
            <path d="M12 5v14"></path>
            <path d="m19 12-7 7-7-7"></path>
          </svg>
        </div>
      </div>
    </section>
  )
}

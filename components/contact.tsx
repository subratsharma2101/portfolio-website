"use client"

import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react"
import Link from "next/link"

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-32 bg-gradient-to-b from-slate-900 to-slate-950 dark:from-slate-50 dark:to-white relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-500/5 dark:bg-cyan-500/3 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-1/2 w-[600px] h-[600px] bg-blue-500/5 dark:bg-blue-500/3 rounded-full blur-3xl -z-10"></div>

      <div className="container px-4 md:px-8 lg:px-12 mx-auto max-w-6xl">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-black tracking-tight text-white dark:text-slate-900 mb-6">
            Get In Touch
          </h2>
          <p className="text-slate-400 dark:text-slate-600 max-w-3xl mx-auto text-lg font-light">
            Let's connect! I'm actively seeking networking opportunities, internships, and collaborations in the networking field.
          </p>
        </div>

        <div className="grid gap-16 md:grid-cols-3 max-w-4xl mx-auto">
          <div className="flex flex-col items-center text-center group">
            <div className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 dark:from-cyan-500/30 dark:to-blue-500/30 p-6 rounded-xl border border-cyan-500/30 dark:border-cyan-500/40 group-hover:border-cyan-500/60 dark:group-hover:border-cyan-500/50 transition-all duration-300 mb-6">
              <Mail className="w-10 h-10 text-cyan-400 dark:text-cyan-600" />
            </div>
            <h3 className="text-xl font-bold text-white dark:text-slate-900 mb-3">Email</h3>
            <a
              href="mailto:subratsharma21097@gmail.com"
              className="text-slate-400 dark:text-slate-600 text-lg hover:text-cyan-400 dark:hover:text-cyan-600 transition-colors"
            >
              subratsharma21097@gmail.com
            </a>
          </div>

          <div className="flex flex-col items-center text-center group">
            <div className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 dark:from-cyan-500/30 dark:to-blue-500/30 p-6 rounded-xl border border-cyan-500/30 dark:border-cyan-500/40 group-hover:border-cyan-500/60 dark:group-hover:border-cyan-500/50 transition-all duration-300 mb-6">
              <Phone className="w-10 h-10 text-cyan-400 dark:text-cyan-600" />
            </div>
            <h3 className="text-xl font-bold text-white dark:text-slate-900 mb-3">Phone</h3>
            <a
              href="tel:+919315600141"
              className="text-slate-400 dark:text-slate-600 text-lg hover:text-cyan-400 dark:hover:text-cyan-600 transition-colors"
            >
              +91-9315600141
            </a>
          </div>

          <div className="flex flex-col items-center text-center group">
            <div className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 dark:from-cyan-500/30 dark:to-blue-500/30 p-6 rounded-xl border border-cyan-500/30 dark:border-cyan-500/40 group-hover:border-cyan-500/60 dark:group-hover:border-cyan-500/50 transition-all duration-300 mb-6">
              <MapPin className="w-10 h-10 text-cyan-400 dark:text-cyan-600" />
            </div>
            <h3 className="text-xl font-bold text-white dark:text-slate-900 mb-3">Location</h3>
            <a
              href="https://www.google.com/maps/place/Mahipalpur,+New+Delhi,+Delhi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 dark:text-slate-600 text-lg hover:text-cyan-400 dark:hover:text-cyan-600 transition-colors cursor-pointer"
            >
              Mahipalpur, New Delhi
            </a>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl font-bold text-white dark:text-slate-900 mb-8">Connect With Me</h3>
          <div className="flex justify-center gap-6">
            <Link
              href="https://github.com/subratsharma2101"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-3 p-6 bg-gradient-to-br from-slate-800/40 to-slate-900/40 dark:from-slate-200/40 dark:to-slate-100/40 border border-cyan-500/30 dark:border-cyan-500/40 rounded-xl hover:border-cyan-500/60 dark:hover:border-cyan-500/60 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20 dark:hover:shadow-cyan-500/10 min-w-[140px]"
            >
              <Github className="w-8 h-8 text-cyan-400 dark:text-cyan-600 group-hover:scale-110 transition-transform" />
              <span className="text-white dark:text-slate-900 font-semibold">GitHub</span>
            </Link>

            <Link
              href="https://www.linkedin.com/in/subratse/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-3 p-6 bg-gradient-to-br from-slate-800/40 to-slate-900/40 dark:from-slate-200/40 dark:to-slate-100/40 border border-cyan-500/30 dark:border-cyan-500/40 rounded-xl hover:border-cyan-500/60 dark:hover:border-cyan-500/60 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20 dark:hover:shadow-cyan-500/10 min-w-[140px]"
            >
              <Linkedin className="w-8 h-8 text-cyan-400 dark:text-cyan-600 group-hover:scale-110 transition-transform" />
              <span className="text-white dark:text-slate-900 font-semibold">LinkedIn</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

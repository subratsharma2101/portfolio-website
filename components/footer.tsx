import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="py-12 bg-slate-950 dark:bg-white border-t border-cyan-500/10 dark:border-cyan-500/20 text-slate-300 dark:text-slate-700">
      <div className="container px-4 md:px-8 lg:px-12 mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <p className="text-sm font-light">© 2025 Subrat Sharma. All rights reserved.</p>
            <p className="text-xs text-slate-500 dark:text-slate-600 mt-2">
              Aspiring Network Engineer | Building the Future of Connectivity
            </p>
          </div>

          <div className="flex items-center gap-6">
            <Link
              href="https://github.com/subratsharma2101"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 text-slate-400 dark:text-slate-600 hover:text-cyan-400 dark:hover:text-cyan-600 transition-all duration-300"
            >
              <div className="p-2 rounded-lg bg-slate-800/50 dark:bg-slate-200/50 group-hover:bg-cyan-500/20 dark:group-hover:bg-cyan-500/30 transition-all duration-300">
                <Github className="w-5 h-5" />
              </div>
              <span className="text-sm font-medium hidden sm:inline">GitHub</span>
            </Link>

            <Link
              href="https://www.linkedin.com/in/subratse/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 text-slate-400 dark:text-slate-600 hover:text-cyan-400 dark:hover:text-cyan-600 transition-all duration-300"
            >
              <div className="p-2 rounded-lg bg-slate-800/50 dark:bg-slate-200/50 group-hover:bg-cyan-500/20 dark:group-hover:bg-cyan-500/30 transition-all duration-300">
                <Linkedin className="w-5 h-5" />
              </div>
              <span className="text-sm font-medium hidden sm:inline">LinkedIn</span>
            </Link>

            <Link
              href="mailto:subratsharma21097@gmail.com"
              className="group flex items-center gap-2 text-slate-400 dark:text-slate-600 hover:text-cyan-400 dark:hover:text-cyan-600 transition-all duration-300"
            >
              <div className="p-2 rounded-lg bg-slate-800/50 dark:bg-slate-200/50 group-hover:bg-cyan-500/20 dark:group-hover:bg-cyan-500/30 transition-all duration-300">
                <Mail className="w-5 h-5" />
              </div>
              <span className="text-sm font-medium hidden sm:inline">Email</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function About() {
  return (
    <section
      id="about"
      className="py-32 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 dark:from-white dark:via-slate-50 dark:to-white relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-500/5 dark:bg-cyan-500/3 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-1/2 w-[600px] h-[600px] bg-blue-500/5 dark:bg-blue-500/3 rounded-full blur-3xl -z-10"></div>

      <div className="container px-4 md:px-8 lg:px-12 mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="flex justify-center lg:justify-start">
            <div className="relative w-full max-w-md aspect-square overflow-hidden rounded-2xl border-2 border-cyan-500/30 dark:border-cyan-500/40 shadow-2xl shadow-cyan-500/20 dark:shadow-cyan-500/10 hover:shadow-cyan-500/40 dark:hover:shadow-cyan-500/20 transition-all duration-300">
              <Image
                src="/professional-developer-portrait.png"
                alt="Subrat Sharma"
                width={500}
                height={500}
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 dark:from-white/20 to-transparent"></div>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h2 className="text-5xl md:text-6xl font-black tracking-tight text-white dark:text-slate-900 mb-4">
                About Me
              </h2>
              <div className="w-16 h-1.5 bg-gradient-to-r from-cyan-400 dark:from-cyan-600 to-blue-500 dark:to-blue-600 rounded-full"></div>
            </div>

            <div className="space-y-6">
              <p className="text-slate-300 dark:text-slate-700 leading-relaxed text-lg font-light">
                I'm a motivated Computer Science undergraduate from{" "}
                <span className="text-cyan-400 dark:text-cyan-600 font-semibold">South-West Delhi, India</span>, with a
                deep passion for <span className="text-cyan-400 dark:text-cyan-600 font-semibold">networking technologies</span> and{" "}
                network infrastructure. While I've built strong foundations in full-stack development and machine learning,
                my true calling lies in the world of <span className="text-blue-400 dark:text-blue-600 font-semibold">network engineering</span>.
              </p>

              <p className="text-slate-300 dark:text-slate-700 leading-relaxed text-lg font-light">
                Currently working as a{" "}
                <span className="text-cyan-400 dark:text-cyan-600 font-semibold">
                  Junior Software Developer at Mobilise App Pvt. Ltd.
                </span>{" "}
                (Aug 2024 - Present), I'm actively building my networking expertise while applying my development skills
                to create robust solutions. Previously, I interned at{" "}
                <span className="text-cyan-400 dark:text-cyan-600 font-semibold">THDC India Limited</span> where I developed
                a secure MERN-based Job & Internship Portal, enabling 100+ students to explore 50+ verified opportunities.
              </p>

              <p className="text-slate-300 dark:text-slate-700 leading-relaxed text-lg font-light">
                My journey into networking is driven by fascination with how data flows across the internet, how networks
                are designed for scalability and security, and how infrastructure powers our connected world. I'm actively
                learning <span className="text-emerald-400 dark:text-emerald-600 font-semibold">network protocols</span>,{" "}
                <span className="text-emerald-400 dark:text-emerald-600 font-semibold">routing & switching</span>, and{" "}
                <span className="text-emerald-400 dark:text-emerald-600 font-semibold">network security</span> to transition
                into a full-time networking role.
              </p>

              <p className="text-slate-300 dark:text-slate-700 leading-relaxed text-lg font-light">
                When I'm not studying networking concepts or coding, I enjoy exploring new technologies, working on
                networking labs, and staying updated with the latest trends in network infrastructure and cybersecurity.
              </p>
            </div>

            <div className="pt-4">
              <Button
                asChild
                className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 dark:from-cyan-600 dark:to-blue-600 dark:hover:from-cyan-700 dark:hover:to-blue-700 text-white font-bold px-8 py-6 text-lg rounded-lg shadow-lg hover:shadow-cyan-500/50 transition-all duration-300"
              >
                <Link href="mailto:subratsharma21097@gmail.com">Get In Touch</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

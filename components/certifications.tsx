"use client"

import { Award, BookOpen, Target } from "lucide-react"

export default function Certifications() {
    const certifications = {
        inProgress: [
            {
                name: "CCNA (Cisco Certified Network Associate)",
                provider: "Cisco",
                description: "Comprehensive networking certification covering routing, switching, and network fundamentals",
                icon: Target,
            },
            {
                name: "CompTIA Network+",
                provider: "CompTIA",
                description: "Industry-standard certification for networking professionals",
                icon: Target,
            },
        ],
        planned: [
            {
                name: "CCNP (Cisco Certified Network Professional)",
                provider: "Cisco",
                description: "Advanced networking certification for enterprise infrastructure",
                icon: BookOpen,
            },
            {
                name: "CompTIA Security+",
                provider: "CompTIA",
                description: "Security fundamentals and network security best practices",
                icon: BookOpen,
            },
            {
                name: "AWS Certified Solutions Architect",
                provider: "Amazon Web Services",
                description: "Cloud networking and infrastructure design",
                icon: BookOpen,
            },
        ],
    }

    return (
        <section id="certifications" className="py-32 bg-slate-900 dark:bg-slate-100 relative overflow-hidden">
            <div className="absolute top-0 right-1/3 w-[500px] h-[500px] bg-emerald-500/5 dark:bg-emerald-500/3 rounded-full blur-3xl -z-10"></div>
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-teal-500/5 dark:bg-teal-500/3 rounded-full blur-3xl -z-10"></div>

            <div className="container px-4 md:px-8 lg:px-12 mx-auto max-w-7xl">
                <div className="text-center mb-20">
                    <h2 className="text-5xl md:text-6xl font-black tracking-tight text-white dark:text-slate-900 mb-6">
                        Certifications & Learning Path
                    </h2>
                    <p className="text-slate-400 dark:text-slate-600 max-w-3xl mx-auto text-lg font-light">
                        Actively pursuing industry-recognized networking certifications to build expertise in network engineering
                    </p>
                </div>

                <div className="space-y-16">
                    {/* In Progress */}
                    <div>
                        <div className="flex items-center gap-3 mb-8">
                            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-500/20 dark:from-cyan-500/10 dark:to-blue-500/10 border-2 border-cyan-500/40 dark:border-cyan-500/30 flex items-center justify-center">
                                <Target className="w-6 h-6 text-cyan-400 dark:text-cyan-600" />
                            </div>
                            <h3 className="text-3xl font-bold text-white dark:text-slate-900">Currently Pursuing</h3>
                        </div>

                        <div className="grid gap-6 md:grid-cols-2">
                            {certifications.inProgress.map((cert, index) => (
                                <div
                                    key={index}
                                    className="group relative bg-gradient-to-br from-slate-800/40 to-slate-900/40 dark:from-slate-200/40 dark:to-slate-100/40 border-2 border-cyan-500/40 dark:border-cyan-500/50 p-8 rounded-2xl hover:border-cyan-500/70 dark:hover:border-cyan-500/70 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20 dark:hover:shadow-cyan-500/10"
                                >
                                    <div className="absolute top-4 right-4">
                                        <span className="px-3 py-1 bg-cyan-500/20 dark:bg-cyan-500/30 border border-cyan-500/40 dark:border-cyan-500/50 text-cyan-300 dark:text-cyan-700 rounded-full text-xs font-bold">
                                            IN PROGRESS
                                        </span>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 dark:from-cyan-500/10 dark:to-blue-500/10 flex items-center justify-center flex-shrink-0">
                                            <Award className="w-7 h-7 text-cyan-400 dark:text-cyan-600" />
                                        </div>

                                        <div className="flex-1">
                                            <h4 className="text-xl font-bold text-white dark:text-slate-900 mb-2 group-hover:text-cyan-300 dark:group-hover:text-cyan-600 transition-colors">
                                                {cert.name}
                                            </h4>
                                            <p className="text-cyan-400 dark:text-cyan-600 font-semibold text-sm mb-3">{cert.provider}</p>
                                            <p className="text-slate-300 dark:text-slate-700 text-sm leading-relaxed">{cert.description}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Planned */}
                    <div>
                        <div className="flex items-center gap-3 mb-8">
                            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-500/20 to-teal-500/20 dark:from-emerald-500/10 dark:to-teal-500/10 border-2 border-emerald-500/40 dark:border-emerald-500/30 flex items-center justify-center">
                                <BookOpen className="w-6 h-6 text-emerald-400 dark:text-emerald-600" />
                            </div>
                            <h3 className="text-3xl font-bold text-white dark:text-slate-900">Future Goals</h3>
                        </div>

                        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                            {certifications.planned.map((cert, index) => (
                                <div
                                    key={index}
                                    className="group relative bg-gradient-to-br from-slate-800/40 to-slate-900/40 dark:from-slate-200/40 dark:to-slate-100/40 border border-emerald-500/30 dark:border-emerald-500/40 p-8 rounded-2xl hover:border-emerald-500/60 dark:hover:border-emerald-500/60 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/10 dark:hover:shadow-emerald-500/5"
                                >
                                    <div className="absolute top-4 right-4">
                                        <span className="px-3 py-1 bg-emerald-500/20 dark:bg-emerald-500/30 border border-emerald-500/40 dark:border-emerald-500/50 text-emerald-300 dark:text-emerald-700 rounded-full text-xs font-bold">
                                            PLANNED
                                        </span>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-emerald-500/20 to-teal-500/20 dark:from-emerald-500/10 dark:to-teal-500/10 flex items-center justify-center flex-shrink-0">
                                            <Award className="w-7 h-7 text-emerald-400 dark:text-emerald-600" />
                                        </div>

                                        <div className="flex-1">
                                            <h4 className="text-lg font-bold text-white dark:text-slate-900 mb-2 group-hover:text-emerald-300 dark:group-hover:text-emerald-600 transition-colors">
                                                {cert.name}
                                            </h4>
                                            <p className="text-emerald-400 dark:text-emerald-600 font-semibold text-sm mb-3">
                                                {cert.provider}
                                            </p>
                                            <p className="text-slate-300 dark:text-slate-700 text-sm leading-relaxed">{cert.description}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

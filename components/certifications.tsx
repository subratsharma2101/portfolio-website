"use client"

import { Award, BookOpen, Target, Shield, Cloud } from "lucide-react"

export default function Certifications() {
    const certifications = {
        current: [
            {
                name: "Certificate Programme in AI for Industrial & Cyber-Physical Systems (AI4ICPS)",
                provider: "IIT Kharagpur",
                description: "Hands-on approach to AI for real-world applications - Currently pursuing",
                icon: Award,
                status: "In Progress",
            },
        ],
        networking: [
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
                icon: BookOpen,
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
                description: "Essential cybersecurity certification for network security",
                icon: Shield,
            },
            {
                name: "AWS Certified Solutions Architect",
                provider: "Amazon Web Services",
                description: "Cloud infrastructure and networking on AWS platform",
                icon: Cloud,
            },
        ],
    }

    return (
        <section id="certifications" className="py-32 bg-slate-900 dark:bg-slate-100 relative overflow-hidden">
            <div className="absolute top-0 right-1/3 w-[500px] h-[500px] bg-emerald-500/5 dark:bg-emerald-500/3 rounded-full blur-3xl -z-10"></div>
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-teal-500/5 dark:bg-teal-500/3 rounded-full blur-3xl -z-10"></div>

            <div className="container px-4 md:px-8 lg:px-12 mx-auto max-w-7xl">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-6xl font-black tracking-tight text-white dark:text-slate-900 mb-6">
                        Certifications & Learning Path
                    </h2>
                    <p className="text-slate-400 dark:text-slate-600 max-w-3xl mx-auto text-lg font-light">
                        Actively pursuing industry-recognized certifications to build expertise in AI and network engineering
                    </p>
                </div>

                <div className="space-y-16">
                    {/* Current Certification */}
                    <div>
                        <div className="flex items-center gap-3 mb-8">
                            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-500/20 dark:from-cyan-500/10 dark:to-blue-500/10 border-2 border-cyan-500/40 dark:border-cyan-500/30 flex items-center justify-center">
                                <Award className="w-6 h-6 text-cyan-400 dark:text-cyan-600" />
                            </div>
                            <h3 className="text-3xl font-bold text-white dark:text-slate-900">Currently Pursuing</h3>
                        </div>

                        <div className="grid gap-6">
                            {certifications.current.map((cert, index) => (
                                <div
                                    key={index}
                                    className="group relative bg-gradient-to-br from-slate-800/60 to-slate-900/60 dark:from-slate-100/60 dark:to-slate-200/60 p-6 md:p-8 rounded-2xl border-2 border-cyan-500/40 dark:border-cyan-500/50 hover:border-cyan-400/60 dark:hover:border-cyan-400/70 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/20 dark:hover:shadow-cyan-500/10"
                                >
                                    <div className="flex items-start gap-6">
                                        <div className="p-4 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 dark:from-cyan-500/30 dark:to-blue-500/30 border border-cyan-500/30 dark:border-cyan-500/40">
                                            <cert.icon className="w-10 h-10 text-cyan-400 dark:text-cyan-600" />
                                        </div>
                                        <div className="flex-1">
                                            <div className="flex items-start justify-between gap-4 mb-3">
                                                <h4 className="text-xl font-bold text-white dark:text-slate-900">{cert.name}</h4>
                                                <span className="px-4 py-1.5 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 dark:from-cyan-500/30 dark:to-blue-500/30 border border-cyan-500/40 dark:border-cyan-500/50 text-cyan-400 dark:text-cyan-600 text-sm font-semibold whitespace-nowrap">
                                                    {cert.status}
                                                </span>
                                            </div>
                                            <p className="text-cyan-400 dark:text-cyan-600 font-semibold mb-3 text-lg">{cert.provider}</p>
                                            <p className="text-slate-300 dark:text-slate-700 leading-relaxed">{cert.description}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Networking Goals */}
                    <div>
                        <div className="flex items-center gap-3 mb-8">
                            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-500/20 to-teal-500/20 dark:from-emerald-500/10 dark:to-teal-500/10 border-2 border-emerald-500/40 dark:border-emerald-500/30 flex items-center justify-center">
                                <Target className="w-6 h-6 text-emerald-400 dark:text-emerald-600" />
                            </div>
                            <h3 className="text-3xl font-bold text-white dark:text-slate-900">Networking Goals</h3>
                        </div>

                        <div className="grid gap-6 md:grid-cols-2">
                            {certifications.networking.map((cert, index) => (
                                <div
                                    key={index}
                                    className="group relative bg-gradient-to-br from-slate-800/40 to-slate-900/40 dark:from-slate-200/40 dark:to-slate-100/40 border border-emerald-500/30 dark:border-emerald-500/40 p-6 md:p-8 rounded-2xl hover:border-emerald-500/60 dark:hover:border-emerald-500/60 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/10 dark:hover:shadow-emerald-500/5"
                                >
                                    <div className="flex items-start gap-4">
                                        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-emerald-500/20 to-teal-500/20 dark:from-emerald-500/10 dark:to-teal-500/10 flex items-center justify-center flex-shrink-0">
                                            <cert.icon className="w-7 h-7 text-emerald-400 dark:text-emerald-600" />
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

                    {/* Future Goals */}
                    <div>
                        <div className="flex items-center gap-3 mb-8">
                            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500/20 to-indigo-500/20 dark:from-blue-500/10 dark:to-indigo-500/10 border-2 border-blue-500/40 dark:border-blue-500/30 flex items-center justify-center">
                                <BookOpen className="w-6 h-6 text-blue-400 dark:text-blue-600" />
                            </div>
                            <h3 className="text-3xl font-bold text-white dark:text-slate-900">Future Goals</h3>
                        </div>

                        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                            {certifications.planned.map((cert, index) => (
                                <div
                                    key={index}
                                    className="group relative bg-gradient-to-br from-slate-800/40 to-slate-900/40 dark:from-slate-200/40 dark:to-slate-100/40 border border-blue-500/30 dark:border-blue-500/40 p-6 md:p-8 rounded-2xl hover:border-blue-500/60 dark:hover:border-blue-500/60 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 dark:hover:shadow-blue-500/5"
                                >
                                    <div className="flex items-start gap-4">
                                        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500/20 to-indigo-500/20 dark:from-blue-500/10 dark:to-indigo-500/10 flex items-center justify-center flex-shrink-0">
                                            <cert.icon className="w-7 h-7 text-blue-400 dark:text-blue-600" />
                                        </div>

                                        <div className="flex-1">
                                            <h4 className="text-lg font-bold text-white dark:text-slate-900 mb-2 group-hover:text-blue-300 dark:group-hover:text-blue-600 transition-colors">
                                                {cert.name}
                                            </h4>
                                            <p className="text-blue-400 dark:text-blue-600 font-semibold text-sm mb-3">{cert.provider}</p>
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

"use client"

import { GraduationCap, School } from "lucide-react"

export default function Education() {
    const education = [
        {
            degree: "B.Tech in Computer Science Engineering",
            institution: "THDC Institute of Hydropower Engineering and Technology",
            period: "2021 - 2025",
            description: "Building strong foundations in computer science, networking, and software engineering.",
            icon: GraduationCap,
        },
        {
            degree: "Class 12 (PCMB)",
            institution: "Bidhan Chandra Vidyalaya",
            period: "2020 - 2021",
            score: "70%",
            icon: School,
        },
        {
            degree: "Class 10",
            institution: "Air Force Gyan Jyoti School",
            period: "2017 - 2018",
            score: "65%",
            icon: School,
        },
    ]

    return (
        <section id="education" className="py-32 bg-slate-950 dark:bg-white relative overflow-hidden">
            <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-purple-500/5 dark:bg-purple-500/3 rounded-full blur-3xl -z-10"></div>
            <div className="absolute bottom-0 right-1/3 w-[600px] h-[600px] bg-indigo-500/5 dark:bg-indigo-500/3 rounded-full blur-3xl -z-10"></div>

            <div className="container px-4 md:px-8 lg:px-12 mx-auto max-w-7xl">
                <div className="text-center mb-20">
                    <h2 className="text-5xl md:text-6xl font-black tracking-tight text-white dark:text-slate-900 mb-6">
                        Education
                    </h2>
                    <p className="text-slate-400 dark:text-slate-600 max-w-3xl mx-auto text-lg font-light">
                        My academic journey building foundations in computer science and networking
                    </p>
                </div>

                <div className="max-w-4xl mx-auto">
                    <div className="relative">
                        {/* Timeline line */}
                        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500/40 via-blue-500/40 to-purple-500/40 dark:from-cyan-500/30 dark:via-blue-500/30 dark:to-purple-500/30"></div>

                        <div className="space-y-12">
                            {education.map((edu, index) => (
                                <div key={index} className="relative pl-20">
                                    {/* Timeline dot */}
                                    <div className="absolute left-0 top-2 w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-500/20 dark:from-cyan-500/10 dark:to-blue-500/10 border-2 border-cyan-500/40 dark:border-cyan-500/30 flex items-center justify-center">
                                        <edu.icon className="w-7 h-7 text-cyan-400 dark:text-cyan-600" />
                                    </div>

                                    {/* Content card */}
                                    <div className="group bg-gradient-to-br from-slate-800/40 to-slate-900/40 dark:from-slate-200/40 dark:to-slate-100/40 border border-cyan-500/20 dark:border-cyan-500/30 p-8 rounded-2xl hover:border-cyan-500/60 dark:hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10 dark:hover:shadow-cyan-500/5">
                                        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                                            <div>
                                                <h3 className="text-2xl font-bold text-white dark:text-slate-900 group-hover:text-cyan-300 dark:group-hover:text-cyan-600 transition-colors">
                                                    {edu.degree}
                                                </h3>
                                                <p className="text-cyan-400 dark:text-cyan-600 font-semibold text-lg mt-2">
                                                    {edu.institution}
                                                </p>
                                            </div>
                                            <div className="flex flex-col items-start md:items-end gap-2">
                                                <span className="px-4 py-2 bg-cyan-500/10 dark:bg-cyan-500/20 border border-cyan-500/30 dark:border-cyan-500/40 text-cyan-300 dark:text-cyan-700 rounded-lg text-sm font-semibold">
                                                    {edu.period}
                                                </span>
                                                {edu.score && (
                                                    <span className="px-4 py-2 bg-emerald-500/10 dark:bg-emerald-500/20 border border-emerald-500/30 dark:border-emerald-500/40 text-emerald-300 dark:text-emerald-700 rounded-lg text-sm font-semibold">
                                                        {edu.score}
                                                    </span>
                                                )}
                                            </div>
                                        </div>
                                        {edu.description && (
                                            <p className="text-slate-300 dark:text-slate-700 leading-relaxed">
                                                {edu.description}
                                            </p>
                                        )}
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

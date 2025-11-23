import { Badge } from "@/components/ui/badge"

export default function Experience() {
  const experiences = [
    {
      id: 1,
      title: "Junior Software Developer (Intern)",
      company: "Mobilise App Pvt. Ltd., New Delhi",
      period: "Aug 2024 - Present",
      description:
        "Currently interning as a Junior Software Developer, working on MERN-based web solutions and performance optimization. Gaining valuable experience in full-stack development while building foundations for a networking career.",
      highlights: ["Full-Stack Development", "MERN Stack", "Backend APIs", "Performance Optimization"],
    },
    {
      id: 2,
      title: "Web Developer Intern",
      company: "THDC India Limited, Rishikesh",
      period: "Sep 2024 - Oct 2024",
      description:
        "Developed a scalable and secure MERN-based Job & Internship Portal enabling 100+ students to explore 50+ verified opportunities. Enhanced UX by designing responsive front-end interfaces using React.js. Streamlined hiring workflows by automating job-posting logic, reducing HR manual effort by 60%.",
      highlights: ["MERN Stack", "React.js", "Node.js", "MongoDB", "Express.js"],
    },
  ]

  return (
    <section id="experience" className="py-32 bg-slate-900 dark:bg-slate-100 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/5 dark:bg-blue-500/3 rounded-full blur-3xl -z-10"></div>
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-cyan-500/5 dark:bg-cyan-500/3 rounded-full blur-3xl -z-10"></div>

      <div className="container px-4 md:px-8 lg:px-12 mx-auto max-w-6xl">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-black tracking-tight text-white dark:text-slate-900 mb-6">
            Work Experience
          </h2>
          <p className="text-slate-400 dark:text-slate-600 max-w-3xl mx-auto text-lg font-light">
            Building technical foundations through software development while pursuing networking expertise.
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={exp.id}
              className="group relative bg-gradient-to-br from-slate-800/40 to-slate-900/40 dark:from-slate-200/40 dark:to-slate-100/40 border border-cyan-500/20 dark:border-cyan-500/30 rounded-2xl p-10 hover:border-cyan-500/60 dark:hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10 dark:hover:shadow-cyan-500/5"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/0 to-cyan-500/0 group-hover:from-cyan-500/5 group-hover:via-cyan-500/5 group-hover:to-cyan-500/0 dark:group-hover:from-cyan-500/2 dark:group-hover:via-cyan-500/2 dark:group-hover:to-cyan-500/0 rounded-2xl transition-all duration-300 -z-10"></div>

              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-6">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white dark:text-slate-900 group-hover:text-cyan-300 dark:group-hover:text-cyan-600 transition-colors">
                    {exp.title}
                  </h3>
                  <p className="text-cyan-400 dark:text-cyan-600 font-semibold text-lg mt-2">{exp.company}</p>
                </div>
                <span className="text-sm font-semibold text-cyan-300 dark:text-cyan-700 whitespace-nowrap bg-cyan-500/10 dark:bg-cyan-500/20 px-4 py-2 rounded-full">
                  {exp.period}
                </span>
              </div>

              <p className="text-slate-300 dark:text-slate-700 leading-relaxed mb-6 text-lg font-light">
                {exp.description}
              </p>

              <div className="flex flex-wrap gap-3">
                {exp.highlights.map((highlight) => (
                  <Badge
                    key={highlight}
                    className="bg-cyan-500/20 dark:bg-cyan-500/30 text-cyan-300 dark:text-cyan-700 border border-cyan-500/40 dark:border-cyan-500/50 hover:bg-cyan-500/30 dark:hover:bg-cyan-500/40 font-medium px-4 py-2"
                  >
                    {highlight}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

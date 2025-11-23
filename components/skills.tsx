export default function Skills() {
  const skillCategories = [
    {
      title: "🌐 Networking Skills",
      skills: [
        "TCP/IP Protocol Suite",
        "OSI Model",
        "Subnetting & IP Addressing",
        "Routing & Switching",
        "DNS & DHCP",
        "Network Security Fundamentals",
        "Firewalls & VPNs",
        "Network Troubleshooting",
      ],
    },
    {
      title: "🛠️ Networking Tools",
      skills: ["Wireshark", "Cisco Packet Tracer", "Network Simulators", "Command Line Tools", "Network Monitoring"],
    },
    {
      title: "💻 Programming & Development",
      skills: ["C++", "Python", "Java", "SQL", "JavaScript"],
    },
    {
      title: "🔧 Frameworks & Technologies",
      skills: ["MongoDB", "Express.js", "React.js", "Node.js (MERN)", "TensorFlow"],
    },
    {
      title: "📚 Technical Domains",
      skills: [
        "Network Infrastructure",
        "Full-Stack Web Development",
        "Machine Learning",
        "Backend APIs",
        "System Architecture",
        "Problem Solving",
      ],
    },
    {
      title: "🎯 Professional Skills",
      skills: ["Team Coordination", "Technical Ownership", "Communication", "Project Management", "Analytical Thinking"],
    },
  ]

  return (
    <section id="skills" className="py-32 bg-slate-900 dark:bg-slate-100 relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/5 dark:bg-blue-500/3 rounded-full blur-3xl -z-10"></div>
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-cyan-500/5 dark:bg-cyan-500/3 rounded-full blur-3xl -z-10"></div>

      <div className="container px-4 md:px-8 lg:px-12 mx-auto max-w-7xl">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-black tracking-tight text-white dark:text-slate-900 mb-6">
            My Skills
          </h2>
          <p className="text-slate-400 dark:text-slate-600 max-w-3xl mx-auto text-lg font-light">
            I've worked with a variety of languages, technologies and tools throughout my academic and professional
            journey.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="group relative bg-gradient-to-br from-slate-800/40 to-slate-900/40 dark:from-slate-200/40 dark:to-slate-100/40 border border-cyan-500/20 dark:border-cyan-500/30 p-6 md:p-10 rounded-2xl hover:border-cyan-500/60 dark:hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10 dark:hover:shadow-cyan-500/5"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 to-cyan-500/0 group-hover:from-cyan-500/5 group-hover:to-cyan-500/5 dark:group-hover:from-cyan-500/2 dark:group-hover:to-cyan-500/2 rounded-2xl transition-all duration-300 -z-10"></div>

              <h3 className="text-2xl font-bold text-white dark:text-slate-900 mb-8 group-hover:text-cyan-300 dark:group-hover:text-cyan-600 transition-colors">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2.5 bg-cyan-500/10 dark:bg-cyan-500/20 border border-cyan-500/30 dark:border-cyan-500/40 text-cyan-300 dark:text-cyan-700 rounded-lg text-sm font-semibold hover:bg-cyan-500/20 dark:hover:bg-cyan-500/30 hover:border-cyan-500/50 dark:hover:border-cyan-500/60 transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

import { motion } from "framer-motion";

const categories = {
  "Featured Projects": [
    {
      title: "SeeMedia",
      desc: "MERN social media app with 6 content types (posts, reels, stories, comments, likes, saves), a follow system and a dynamic explore feed via a unified API. Real-time 1:1 chat, live online-user tracking and instant notifications using Socket.IO across 3 event channels. 15+ REST API routes across 5 modules, secured with JWT cookie auth and Bearer fallback, with 24-hour TTL auto-expiry on stories. Cloudinary media uploads and Redux Toolkit state management.",
      github: "https://github.com/yash9359/SeeMedia",
      live: "https://see-media.vercel.app/",
      tags: ["MongoDB", "Express.js", "React.js", "Node.js", "Socket.IO", "Redux Toolkit", "Cloudinary"]
    },
    {
      title: "FlowTunes",
      desc: "Full-stack music streaming app built with Next.js 16 and Supabase (PostgreSQL + JWT auth) with Google OAuth across 6 DB tables. Features a self-healing stream resolver with 1-hour TTL cache (Zustand + Immer) and auto-retry via a JioSaavn/Piped fallback chain, real-time synced lyrics (JioSaavn + LRCLIB), and a Canvas-based color extractor that updates the global theme per track.",
      github: "https://github.com/yash9359/FLOWTUNES",
      live: "https://flowtunes.vercel.app/",
      tags: ["Next.js", "React.js", "TypeScript", "Supabase", "Zustand", "Framer Motion", "Tailwind CSS"]
    },
    {
      title: "Cloudinary SaaS",
      desc: "Full-stack SaaS for video upload, compression and cloud media management that reduces video size by 40%+. 100% of API routes secured via Clerk auth (email/password + OAuth) with server-side session checks. Video metadata (size, duration, public ID) managed with Prisma ORM and PostgreSQL.",
      github: "https://github.com/yash9359/cloudinary-saas",
      live: "https://cloudinary-saas-azure.vercel.app/home",
      tags: ["Next.js", "TypeScript", "Cloudinary", "Clerk", "PostgreSQL", "Prisma", "Tailwind CSS"]
    },
  ],
};

const cardColors = ["#FBFAF7", "#E0A0A1", "#908571"];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative w-full py-24 px-4 sm:px-6 bg-brand-bg text-brand-dark border-t-3 border-brand-dark bg-grid-pattern"
    >
      <div className="max-w-6xl mx-auto z-10 relative">

        {/* Section Heading Card */}
        <div className="flex justify-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: -1 }}
            whileInView={{ opacity: 1, scale: 1, rotate: -1.5 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block bg-brand-rose text-brand-dark px-4 py-2.5 sm:px-8 sm:py-3 border-3 border-brand-dark neo-shadow sm:neo-shadow-lg"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-black uppercase tracking-tight">
              Projects
            </h2>
          </motion.div>
        </div>

        {/* Categories Stack */}
        <div className="flex flex-col gap-16">
          {Object.entries(categories).map(([categoryName, projects], catIdx) => (
            <div key={catIdx} className="space-y-6">

              {/* Category Tab Header */}
              <div className="flex items-center">
                <div className="bg-brand-dark text-brand-bg px-5 py-2 font-display font-black text-lg md:text-xl uppercase tracking-wider border-2 border-brand-dark rotate-[-0.5deg]">
                  {categoryName}
                </div>
                <div className="h-0.5 bg-brand-dark flex-grow border-t-2 border-brand-dark"></div>
              </div>

              {/* Projects Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, i) => {
                  const cardBg = cardColors[(i + catIdx) % cardColors.length];
                  return (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.15 }}
                      transition={{ duration: 0.5, delay: i * 0.1 }}
                      className="border-3 border-brand-dark p-6 flex flex-col justify-between neo-shadow hover:translate-x-[-3px] hover:translate-y-[-3px] hover:shadow-[7px_7px_0px_0px_rgba(24,33,37,1)] transition-all duration-150"
                      style={{ backgroundColor: cardBg }}
                    >
                      <div>
                        {/* Project Title */}
                        <h4 className="text-2xl font-display font-black text-brand-dark uppercase tracking-wide mb-3">
                          {project.title}
                        </h4>

                        {/* Description */}
                        {project.desc && (
                          <p className="text-brand-dark/95 font-medium text-sm md:text-base leading-relaxed mb-4">
                            {project.desc}
                          </p>
                        )}
                      </div>

                      <div>
                        {/* Tags Badges */}
                        {project.tags && (
                          <div className="flex flex-wrap gap-1.5 mb-5">
                            {project.tags.map((tag, tIdx) => (
                              <span
                                key={tIdx}
                                className="text-xxs md:text-xs font-bold uppercase tracking-wider bg-brand-bg text-brand-dark border border-brand-dark px-1.5 py-0.5 rounded-none"
                              >
                                #{tag}
                              </span>
                            ))}
                          </div>
                        )}

                        {/* Action Buttons */}
                        <div className="flex gap-3">
                          {project.github && (
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex-1 text-center py-2.5 font-display font-extrabold text-sm uppercase bg-brand-dark text-brand-bg border-2 border-brand-dark hover:bg-brand-red hover:text-brand-bg hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[3px_3px_0px_0px_rgba(24,33,37,1)] transition-all duration-100 active:translate-x-[1px] active:translate-y-[1px] active:shadow-none inline-block"
                            >
                              GitHub
                            </a>
                          )}
                          {project.live && (
                            <a
                              href={project.live}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex-1 text-center py-2.5 font-display font-extrabold text-sm uppercase bg-brand-red text-brand-bg border-2 border-brand-dark hover:bg-brand-dark hover:text-brand-bg hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[3px_3px_0px_0px_rgba(24,33,37,1)] transition-all duration-100 active:translate-x-[1px] active:translate-y-[1px] active:shadow-none inline-block"
                            >
                              Live Demo
                            </a>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Global Bottom CTA */}
        <div className="text-center mt-20">
          <motion.a
            href="https://github.com/yash9359?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-block px-8 py-4 bg-brand-muddy text-brand-bg font-display font-black text-lg border-3 border-brand-dark neo-shadow uppercase tracking-wider transition-all duration-150 hover:translate-x-[-3px] hover:translate-y-[-3px] hover:shadow-[7px_7px_0px_0px_rgba(24,33,37,1)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
          >
            Explore More Projects on GitHub
          </motion.a>
        </div>
      </div>
    </section>
  );
}

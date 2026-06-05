"use client"

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { ProjectCard } from "@/components/project-card";
import { DATA } from "@/data/resume";
import { Search, X } from "lucide-react";

const BLUR_FADE_DELAY = 0.04;

export default function ProjectsPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProjects = useMemo(() => {
    if (!searchQuery.trim()) return DATA.projects;

    const query = searchQuery.toLowerCase();
    return DATA.projects.filter(
      (project) =>
        project.title.toLowerCase().includes(query) ||
        project.description.toLowerCase().includes(query) ||
        project.technologies.some((tech) =>
          tech.toLowerCase().includes(query)
        )
    );
  }, [searchQuery]);

  const handleClearSearch = () => {
    setSearchQuery("");
  };

  return (
    <main className="flex flex-col min-h-[100dvh] space-y-8">
      {/* Hero Section */}
      <section id="projects-hero" className="space-y-6">
        <div className="space-y-4">
          <BlurFadeText
            delay={BLUR_FADE_DELAY}
            className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
            yOffset={8}
            text="My Projects"
          />
          <BlurFadeText
            delay={BLUR_FADE_DELAY * 2}
            className="max-w-[600px] text-lg text-muted-foreground"
            text="Explore my latest work in full-stack development, featuring production-ready applications with real-world clients and users."
          />
        </div>

        {/* Search Bar */}
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="relative"
          >
            <div className="relative flex items-center">
              <Search className="absolute left-3 w-5 h-5 text-muted-foreground pointer-events-none" />
              <input
                type="text"
                placeholder="Search projects by name, description, or technology..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-10 py-3 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
              />
              {searchQuery && (
                <motion.button
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  onClick={handleClearSearch}
                  className="absolute right-3 p-1 hover:bg-muted rounded-md transition-colors"
                  aria-label="Clear search"
                >
                  <X className="w-5 h-5 text-muted-foreground hover:text-foreground" />
                </motion.button>
              )}
            </div>
            {searchQuery && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-sm text-muted-foreground mt-2"
              >
                Found {filteredProjects.length} project
                {filteredProjects.length !== 1 ? "s" : ""}
              </motion.p>
            )}
          </motion.div>
        </BlurFade>
      </section>

      {/* Projects Grid */}
      <section id="projects-grid" className="space-y-6">
        {filteredProjects.length > 0 ? (
          <motion.div
            layout
            className="grid grid-cols-1 gap-6 sm:grid-cols-2"
          >
            {filteredProjects.map((project, id) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{
                  duration: 0.3,
                  delay: id * 0.05,
                }}
              >
                <BlurFade
                  delay={BLUR_FADE_DELAY * 4 + id * 0.05}
                >
                  <ProjectCard
                    href={project.href}
                    title={project.title}
                    description={project.description}
                    dates={project.dates}
                    tags={project.technologies}
                    image={project.image}
                    video={project.video}
                    links={project.links}
                  />
                </BlurFade>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-lg text-muted-foreground">
              No projects found matching "{searchQuery}"
            </p>
            <button
              onClick={handleClearSearch}
              className="mt-4 px-4 py-2 rounded-lg text-primary hover:bg-primary/10 transition-colors"
            >
              Clear search
            </button>
          </motion.div>
        )}
      </section>

      {/* Stats Section */}
      <section id="projects-stats" className="pt-12 border-t">
        <BlurFade delay={BLUR_FADE_DELAY * 5}>
          <div className="grid grid-cols-3 gap-4 md:gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-center space-y-2"
            >
              <div className="text-3xl font-bold text-primary">
                {DATA.projects.length}+
              </div>
              <p className="text-sm text-muted-foreground">
                Production Projects
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="text-center space-y-2"
            >
              <div className="text-3xl font-bold text-primary">200+</div>
              <p className="text-sm text-muted-foreground">Active Users</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="text-center space-y-2"
            >
              <div className="text-3xl font-bold text-primary">100+</div>
              <p className="text-sm text-muted-foreground">
                Transactions Processed
              </p>
            </motion.div>
          </div>
        </BlurFade>
      </section>

      {/* CTA Section */}
      <section id="projects-cta" className="pt-12 text-center space-y-4">
        <BlurFade delay={BLUR_FADE_DELAY * 6}>
          <h2 className="text-2xl font-bold">Ready to start your project?</h2>
          <p className="text-muted-foreground max-w-[500px] mx-auto">
            Let's build something amazing together. Get in touch to discuss your
            ideas.
          </p>
          <motion.a
            href="https://x.com/Rishabh__73"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-6 py-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors font-medium"
          >
            Message Me on Twitter
          </motion.a>
        </BlurFade>
      </section>
    </main>
  );
}

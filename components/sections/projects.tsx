"use client"

import * as React from "react"
import Link from "next/link"
import { ExternalLink, ArrowRight, ChevronDown } from "lucide-react"
import { GithubIcon } from "@/components/icons"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { projects } from "@/lib/data"
import {
  AnimatedSection,
  AnimatedDiv,
  StaggerGroup,
  fadeUp,
  motion,
  useReducedMotion,
} from "@/components/motion"

function ProjectCard({
  project,
}: {
  project: (typeof projects)[0]
}) {
  const [expanded, setExpanded] = React.useState(false)
  const [glowPosition, setGlowPosition] = React.useState({ x: 50, y: 40 })
  const prefersReducedMotion = useReducedMotion()

  const handleMouseMove = (event: React.MouseEvent<HTMLElement>) => {
    if (prefersReducedMotion) return
    const bounds = event.currentTarget.getBoundingClientRect()
    const x = ((event.clientX - bounds.left) / bounds.width) * 100
    const y = ((event.clientY - bounds.top) / bounds.height) * 100
    setGlowPosition({ x, y })
  }

  return (
    <AnimatedDiv variants={fadeUp}>
      <article
        onMouseMove={handleMouseMove}
        className="card-surface group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/[0.08] bg-surface shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-white/[0.14]"
      >
        {!prefersReducedMotion && (
          <div
            className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
            aria-hidden="true"
            style={{
              background: `radial-gradient(420px circle at ${glowPosition.x}% ${glowPosition.y}%, rgba(255,255,255,0.05), transparent 70%)`,
            }}
          />
        )}
        <div className="flex flex-col gap-4 p-7 pb-5">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div className="flex flex-wrap items-center gap-3">
              <Badge
                variant="outline"
                className="rounded-full border-white/[0.08] bg-background px-3 py-1 font-mono text-[10px] font-semibold uppercase tracking-wider text-foreground"
              >
                {project.type}
              </Badge>
              <span
                className={`font-mono text-[10px] font-semibold uppercase tracking-wide ${
                  project.status === "Completed" ? "text-white/80" : "text-white/55"
                }`}
              >
                ● {project.status}
              </span>
            </div>
            <div className="flex items-center gap-3">
              {project.github && (
                <Link
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${project.name} GitHub repository`}
                  className="rounded-full border border-white/[0.08] bg-background p-2 text-muted-foreground transition-colors duration-200 hover:text-foreground"
                >
                  <GithubIcon className="h-4 w-4" />
                </Link>
              )}
              {project.live && (
                <Link
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${project.name} live demo`}
                  className="rounded-full border border-white/[0.08] bg-background p-2 text-muted-foreground transition-colors duration-200 hover:text-foreground"
                >
                  <ExternalLink className="h-4 w-4" />
                </Link>
              )}
            </div>
          </div>

          <div className="space-y-1">
            <h3 className="text-2xl font-black tracking-[-0.04em] text-foreground transition-colors duration-200 group-hover:text-white">
              <Link href={`/projects/${project.slug}`}>{project.name}</Link>
            </h3>
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              {project.tagline}
            </p>
          </div>

          <p className="text-[13px] leading-relaxed text-muted-foreground">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-1.5">
            {project.tech.map((tech) => (
              <Badge
                key={tech}
                variant="secondary"
                className="rounded-full border border-white/[0.08] bg-background px-2.5 py-0.5 font-mono text-[10px] text-muted-foreground"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>

        <div className="mt-auto">
          <Separator className="opacity-10" />
          <button
            onClick={() => setExpanded((value) => !value)}
            className="flex w-full items-center justify-between px-7 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-foreground/75 transition-colors duration-200 hover:text-foreground"
          >
            <span>Technical Specs</span>
            <motion.span
              animate={{ rotate: expanded ? 180 : 0 }}
              transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
              <ChevronDown className="h-4 w-4" />
            </motion.span>
          </button>

          <motion.div
            initial={false}
            animate={{
              height: expanded ? "auto" : 0,
              opacity: expanded ? 1 : 0,
            }}
            transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="space-y-4 border-t border-white/[0.08] bg-background px-7 pb-6 pt-4">
              <div className="space-y-1.5">
                <span className="label-mono text-[9px] block text-muted-foreground">
                  Architecture
                </span>
                <p className="text-xs leading-relaxed text-muted-foreground">
                  {project.architectureNote}
                </p>
              </div>
              <div className="space-y-1.5">
                <span className="label-mono text-[9px] block text-muted-foreground">
                  Builder note
                </span>
                <p className="text-xs leading-relaxed text-muted-foreground">
                  {project.humanNote}
                </p>
              </div>
              <div>
                <Link
                  href={`/projects/${project.slug}`}
                  className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-foreground transition-colors duration-200 hover:text-white"
                >
                  Read case study
                  <ArrowRight className="h-3 w-3" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </article>
    </AnimatedDiv>
  )
}

export function ProjectsSection() {
  const featured = projects
    .filter((project) => project.featured)
    .sort((a, b) => a.order - b.order)

  return (
    <AnimatedSection id="projects" aria-label="Projects" className="py-28 px-6">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 space-y-3">
          <span className="label-mono tracking-wider font-semibold text-primary">
            Projects
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-foreground lg:text-4xl">
            Four systems.{" "}
            <span className="block font-semibold text-foreground/60">
              One pattern: ship with intent.
            </span>
          </h2>
          <p className="max-w-lg text-[14px] leading-relaxed text-muted-foreground">
            Backend engineering, hackathon velocity, and product-shaped interfaces.
          </p>
        </div>

        <StaggerGroup className="grid gap-6 lg:grid-cols-2">
          {featured.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </StaggerGroup>
      </div>
    </AnimatedSection>
  )
}

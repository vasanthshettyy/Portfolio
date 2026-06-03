"use client"

import * as React from "react"
import Link from "next/link"
import { ExternalLink, ArrowRight, ChevronDown } from "lucide-react"
import { GithubIcon } from "@/components/icons"
import { Button } from "@/components/ui/button"
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
  const prefersReducedMotion = useReducedMotion()

  const [rotateX, setRotateX] = React.useState(0)
  const [rotateY, setRotateY] = React.useState(0)
  const [glowX, setGlowX] = React.useState(50)
  const [glowY, setGlowY] = React.useState(50)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (prefersReducedMotion) return
    const card = e.currentTarget
    const box = card.getBoundingClientRect()
    const x = e.clientX - box.left
    const y = e.clientY - box.top
    
    const px = (x / box.width) * 100
    const py = (y / box.height) * 100
    setGlowX(px)
    setGlowY(py)

    const centerX = box.width / 2
    const centerY = box.height / 2
    // Limit rotation to max 5 degrees
    const rX = ((y - centerY) / centerY) * -5
    const rY = ((x - centerX) / centerX) * 5
    setRotateX(rX)
    setRotateY(rY)
  }

  const handleMouseLeave = () => {
    setRotateX(0)
    setRotateY(0)
  }

  return (
    <AnimatedDiv variants={fadeUp}>
      <motion.article
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        animate={{
          rotateX,
          rotateY,
          transformPerspective: 1000,
        }}
        transition={{ type: "spring", stiffness: 250, damping: 22 }}
        className="card-surface group relative overflow-hidden bg-surface/30 backdrop-blur-xl border border-white/[0.05] flex flex-col gap-0 rounded-3xl shadow-md h-full transition-colors duration-300 hover:border-white/[0.12] select-none"
        style={{
          transformStyle: "preserve-3d",
        }}
      >
        {/* Cursor tracking glass light reflection glow */}
        {!prefersReducedMotion && (
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10"
            style={{
              background: `radial-gradient(350px circle at ${glowX}% ${glowY}%, rgba(255, 255, 255, 0.05), transparent 80%)`,
            }}
          />
        )}

        {/* Header content */}
        <div className="p-7 pb-5 flex flex-col gap-4 relative z-20">
          <div className="flex items-start justify-between gap-4 flex-wrap">
            <div className="flex items-center gap-3 flex-wrap">
              <Badge
                variant="outline"
                className="text-[10px] font-semibold tracking-wider uppercase font-mono px-3 py-1 bg-surface-raised/40 text-foreground border-white/[0.05] rounded-full"
              >
                {project.type}
              </Badge>
              <span
                className={`text-[10px] font-semibold tracking-wide uppercase font-mono ${
                  project.status === "Completed" ? "text-emerald-500" : "text-amber-500"
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
                  className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  <GithubIcon className="w-4.5 h-4.5" />
                </Link>
              )}
              {project.live && (
                <Link
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${project.name} live demo`}
                  className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  <ExternalLink className="w-4.5 h-4.5" />
                </Link>
              )}
            </div>
          </div>

          <div className="space-y-1">
            <h3 className="text-xl font-bold text-foreground tracking-tight hover:text-primary transition-colors duration-200">
              <Link href={`/projects/${project.slug}`}>
                {project.name}
              </Link>
            </h3>
            <p className="text-xs font-semibold text-muted-foreground tracking-wide font-mono uppercase">
              {project.tagline}
            </p>
          </div>

          <p className="text-[13px] text-muted-foreground leading-relaxed">
            {project.description}
          </p>

          {/* Tech badges in aluminum outline format */}
          <div className="flex flex-wrap gap-1.5">
            {project.tech.map((t) => (
              <Badge
                key={t}
                variant="secondary"
                className="text-[10px] font-mono px-2.5 py-0.5 bg-surface-raised/20 text-muted-foreground border border-white/[0.04] rounded-full"
              >
                {t}
              </Badge>
            ))}
          </div>
        </div>

        <div className="mt-auto relative z-20">
          <Separator className="opacity-10" />
          <button
            onClick={() => setExpanded(!expanded)}
            className="w-full flex items-center justify-between px-7 py-4 text-xs font-semibold text-foreground/80 hover:text-foreground transition-colors duration-200 cursor-pointer"
          >
            <span>TECHNICAL SPECS</span>
            <motion.span
              animate={{ rotate: expanded ? 180 : 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              <ChevronDown className="w-4 h-4" />
            </motion.span>
          </button>

          <motion.div
            initial={false}
            animate={{
              height: expanded ? "auto" : 0,
              opacity: expanded ? 1 : 0,
            }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div className="px-7 pb-6 space-y-4 border-t border-white/[0.04] bg-surface-raised/20">
              <div className="pt-4">
                <span className="label-mono text-[9px] block mb-1 font-semibold text-primary">ARCHITECTURE</span>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {project.architectureNote}
                </p>
              </div>
              <div>
                <span className="label-mono text-[9px] block mb-1 font-semibold text-primary">PROBLEM & SOLUTION</span>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {project.humanNote}
                </p>
              </div>
              <div className="pt-2">
                <Link
                  href={`/projects/${project.slug}`}
                  className="inline-flex items-center gap-1.5 text-[11px] font-bold tracking-wide text-foreground hover:text-primary transition-colors duration-200"
                >
                  Read full case study
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.article>
    </AnimatedDiv>
  )
}

export function ProjectsSection() {
  const featured = projects
    .filter((p) => p.featured)
    .sort((a, b) => a.order - b.order)

  return (
    <AnimatedSection id="projects" aria-label="Projects" className="py-28 px-6">
      <div className="mx-auto max-w-6xl">
        {/* Section title */}
        <div className="mb-14 space-y-3">
          <span className="label-mono tracking-wider font-semibold text-primary">Projects</span>
          <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-foreground">
            Four types of work.{" "}
            <span className="opacity-60 block text-foreground font-semibold">One pattern: ship it.</span>
          </h2>
          <p className="text-muted-foreground text-[14px] leading-relaxed max-w-lg">
            A comprehensive look at backend engineering, fast hackathon MVPs, and production SaaS structures.
          </p>
        </div>

        {/* Project grid */}
        <StaggerGroup className="grid lg:grid-cols-2 gap-6">
          {featured.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </StaggerGroup>
      </div>
    </AnimatedSection>
  )
}

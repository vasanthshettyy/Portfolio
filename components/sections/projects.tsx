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
  scaleIn,
  motion,
} from "@/components/motion"

const typeColor: Record<string, string> = {
  "Startup SaaS": "text-violet-400 bg-violet-400/10 border-violet-400/20",
  "Full-Stack Web App": "text-cyan-400 bg-cyan-400/10 border-cyan-400/20",
  "Hackathon Build": "text-amber-400 bg-amber-400/10 border-amber-400/20",
  "AI Experiment": "text-emerald-400 bg-emerald-400/10 border-emerald-400/20",
}

const statusColor: Record<string, string> = {
  "In Progress": "text-amber-400",
  Completed: "text-emerald-400",
}

function ProjectCard({
  project,
}: {
  project: (typeof projects)[0]
}) {
  const [expanded, setExpanded] = React.useState(false)

  return (
    <AnimatedDiv variants={fadeUp}>
      <article
        className="card-surface brand-glow flex flex-col gap-0 overflow-hidden group transition-all duration-200 h-full"
      >
        {/* Header */}
        <div className="p-6 pb-4 flex flex-col gap-4">
          <div className="flex items-start justify-between gap-4 flex-wrap">
            <div className="flex items-center gap-2.5 flex-wrap">
              <Badge
                variant="outline"
                className={`text-[10px] font-mono px-2 py-0.5 border ${typeColor[project.type] ?? ""}`}
              >
                {project.type}
              </Badge>
              <span
                className={`text-[10px] font-mono ${statusColor[project.status] ?? "text-muted-foreground"}`}
              >
                ● {project.status}
              </span>
            </div>
            <div className="flex items-center gap-2">
              {project.github && (
                <Link
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${project.name} GitHub repository`}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <GithubIcon className="w-4 h-4" />
                </Link>
              )}
              {project.live && (
                <Link
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${project.name} live demo`}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                </Link>
              )}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
              {project.name}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {project.tagline}
            </p>
          </div>

          <p className="text-sm text-muted-foreground/80 leading-relaxed">
            {project.description}
          </p>

          {/* Tech stack */}
          <div className="flex flex-wrap gap-1.5">
            {project.tech.map((t) => (
              <Badge
                key={t}
                variant="secondary"
                className="text-[10px] font-mono px-2 py-0 border border-border/50"
              >
                {t}
              </Badge>
            ))}
          </div>
        </div>

        <Separator className="opacity-30" />

        {/* Key highlights */}
        <div className="px-6 py-4">
          <ul className="space-y-2">
            {project.highlights.map((h) => (
              <li
                key={h}
                className="flex items-start gap-2 text-sm text-muted-foreground"
              >
                <ArrowRight className="w-3 h-3 mt-1 text-primary shrink-0" />
                {h}
              </li>
            ))}
          </ul>
        </div>

        {/* Expandable deep dive */}
        <div className="border-t border-border/30 mt-auto">
          <button
            id={`project-expand-${project.slug}`}
            onClick={() => setExpanded((e) => !e)}
            className="w-full flex items-center justify-between px-6 py-3 text-xs text-muted-foreground hover:text-foreground hover:bg-accent/20 transition-all"
            aria-expanded={expanded}
          >
            <span className="font-mono">Technical details</span>
            <motion.span
              animate={{ rotate: expanded ? 180 : 0 }}
              transition={{ duration: 0.2 }}
            >
              <ChevronDown className="w-3.5 h-3.5" />
            </motion.span>
          </button>

          <motion.div
            initial={false}
            animate={{
              height: expanded ? "auto" : 0,
              opacity: expanded ? 1 : 0,
            }}
            transition={{ duration: 0.25, ease: [0.25, 0.4, 0.25, 1] }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-5 space-y-4 border-t border-border/20">
              <div className="pt-4">
                <span className="label-mono block mb-1.5">Architecture</span>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {project.architectureNote}
                </p>
              </div>
              <div>
                <span className="label-mono block mb-1.5">Why it exists</span>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {project.humanNote}
                </p>
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
    .filter((p) => p.featured)
    .sort((a, b) => a.order - b.order)

  return (
    <AnimatedSection id="projects" aria-label="Projects" className="py-24 px-6">
      <div className="mx-auto max-w-6xl">
        {/* Section header */}
        <div className="mb-12">
          <span className="label-mono mb-3 block">Projects</span>
          <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-foreground mb-3">
            Four types of work.{" "}
            <span className="text-brand-gradient">One pattern: ship it.</span>
          </h2>
          <p className="text-muted-foreground text-sm leading-relaxed max-w-lg">
            Each project is a different kind of problem. Expand any card to see
            the architecture and reasoning.
          </p>
        </div>

        {/* Project grid */}
        <StaggerGroup className="grid lg:grid-cols-2 gap-5">
          {featured.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </StaggerGroup>
      </div>
    </AnimatedSection>
  )
}

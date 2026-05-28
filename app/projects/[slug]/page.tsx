import * as React from "react"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, ExternalLink, ShieldCheck, Database, Layout, Sparkles } from "lucide-react"
import { GithubIcon } from "@/components/icons"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { projects } from "@/lib/data"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

interface ProjectPageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }))
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params
  const project = projects.find((p) => p.slug === slug)

  if (!project) {
    notFound()
  }

  return (
    <>
      <Navbar />
      <main className="min-h-dvh pt-28 pb-16 px-6 relative overflow-hidden">
        <div className="mx-auto max-w-4xl">
          {/* Back button */}
          <div className="mb-8">
            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 text-xs font-semibold tracking-wide text-muted-foreground hover:text-foreground transition-colors duration-200 group cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform duration-200" />
              BACK TO PROJECTS
            </Link>
          </div>

          {/* Project Header Widget */}
          <div className="card-surface p-8 bg-surface/30 backdrop-blur-xl border border-white/[0.05] rounded-3xl mb-8 space-y-6">
            <div className="flex items-start justify-between gap-4 flex-wrap">
              <div className="space-y-2">
                <div className="flex items-center gap-3.5 flex-wrap">
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
                <h1 className="text-3xl lg:text-4xl font-bold tracking-tight text-foreground">
                  {project.name}
                </h1>
                <p className="text-base text-muted-foreground font-semibold font-mono uppercase tracking-wide">
                  {project.tagline}
                </p>
              </div>

              {/* Action buttons */}
              <div className="flex items-center gap-2">
                {project.github && (
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="gap-2 border-white/[0.05] bg-surface/30 hover:bg-surface-raised/40 rounded-xl font-semibold ios-hover cursor-pointer"
                  >
                    <Link
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <GithubIcon className="w-4 h-4 text-foreground/80" />
                      Code
                    </Link>
                  </Button>
                )}
                {project.live && (
                  <Button
                    asChild
                    size="sm"
                    className="gap-2 bg-foreground text-background hover:bg-foreground/90 rounded-xl font-semibold ios-hover cursor-pointer"
                  >
                    <Link
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </Link>
                  </Button>
                )}
              </div>
            </div>

            <Separator className="opacity-10" />

            {/* Overview */}
            <div className="space-y-2">
              <span className="label-mono text-[9px] block text-primary font-semibold">OVERVIEW</span>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Tech stack badge list */}
            <div className="space-y-3 pt-2">
              <span className="label-mono text-[9px] block text-primary font-semibold">TECH STACK</span>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <Badge
                    key={t}
                    variant="secondary"
                    className="text-xs font-mono px-3 py-1 bg-surface-raised/30 text-foreground border border-white/[0.04] rounded-full"
                  >
                    {t}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          {/* Detailed Content Cards */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {/* The Problem */}
            <div className="card-surface p-7 bg-surface/30 backdrop-blur-xl border border-white/[0.05] rounded-3xl space-y-3.5">
              <div className="flex items-center gap-2.5">
                <span className="flex items-center justify-center w-8 h-8 rounded-xl bg-red-500/5 text-red-500 shrink-0">
                  <ShieldCheck className="w-4 h-4" />
                </span>
                <span className="label-mono text-[10px] font-semibold text-muted-foreground">THE PROBLEM</span>
              </div>
              <p className="text-[13px] text-muted-foreground leading-relaxed">
                {project.problem}
              </p>
            </div>

            {/* The Design Architecture */}
            <div className="card-surface p-7 bg-surface/30 backdrop-blur-xl border border-white/[0.05] rounded-3xl space-y-3.5">
              <div className="flex items-center gap-2.5">
                <span className="flex items-center justify-center w-8 h-8 rounded-xl bg-blue-500/5 text-blue-500 shrink-0">
                  <Database className="w-4 h-4" />
                </span>
                <span className="label-mono text-[10px] font-semibold text-muted-foreground">ARCHITECTURE</span>
              </div>
              <p className="text-[13px] text-muted-foreground leading-relaxed">
                {project.architectureNote}
              </p>
            </div>
          </div>

          {/* Full Width Personal Learnings / Decisions */}
          <div className="card-surface p-8 bg-surface/30 backdrop-blur-xl border border-white/[0.05] rounded-3xl space-y-4">
            <div className="flex items-center gap-2.5">
              <span className="flex items-center justify-center w-9 h-9 rounded-2xl bg-amber-500/5 text-amber-500 shrink-0">
                <Sparkles className="w-4.5 h-4.5" />
              </span>
              <span className="label-mono text-[10px] font-semibold text-muted-foreground">BUILDER PERSPECTIVE & STORY</span>
            </div>
            <p className="text-[14px] text-muted-foreground leading-relaxed italic">
              &ldquo;{project.humanNote}&rdquo;
            </p>
            
            <div className="pt-4 border-t border-white/[0.04] space-y-3">
              <span className="label-mono text-[9px] block text-primary font-semibold">KEY DELIVERABLES & SHIPMENTS</span>
              <ul className="grid sm:grid-cols-2 gap-3.5">
                {project.highlights.map((h, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2.5 text-[13px] text-muted-foreground leading-relaxed"
                  >
                    <span className="text-foreground/40 text-xs font-mono mt-0.5 select-none">[0{idx + 1}]</span>
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

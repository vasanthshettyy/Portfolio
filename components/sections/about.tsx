"use client"

import Image from "next/image"
import { Code2, Rocket, Users, BookOpen } from "lucide-react"
import { personal } from "@/lib/data"
import {
  AnimatedSection,
  AnimatedDiv,
  StaggerGroup,
  fadeUp,
  scaleIn,
} from "@/components/motion"

const pillars = [
  {
    icon: Code2,
    title: "I build systems, not just features",
    description:
      "Every project I work on is designed from data model to deployment. I think about structure before I write a single line of code.",
  },
  {
    icon: Rocket,
    title: "Speed is a design constraint",
    description:
      "I've shipped working MVPs under 6 and 12-hour hackathon limits. Knowing how to cut scope without cutting quality is a skill I practice deliberately.",
  },
  {
    icon: Users,
    title: "I lead and I build simultaneously",
    description:
      "As team lead across multiple hackathons, I coordinated problem framing, architecture decisions, and execution — while still writing code.",
  },
  {
    icon: BookOpen,
    title: "Startup-first thinking",
    description:
      "I'm not building demo apps. I'm building things that could actually be products — with real users, real data models, and deployable architecture.",
  },
]

export function AboutSection() {
  return (
    <AnimatedSection
      id="about"
      aria-label="About Vasanth Shetty"
      className="py-24 px-6"
    >
      <div className="mx-auto max-w-6xl">
        {/* Hero area — text + desk image */}
        <div className="grid lg:grid-cols-5 gap-10 lg:gap-16 mb-14 items-center">
          {/* Text — 3 cols */}
          <div className="lg:col-span-3">
            <span className="label-mono mb-3 block">About</span>
            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-foreground mb-4">
              Not a student doing projects.{" "}
              <span className="text-brand-gradient">
                A builder who happens to be studying.
              </span>
            </h2>
            <p className="text-muted-foreground text-base leading-relaxed max-w-2xl">
              {personal.bio}
            </p>
          </div>

          {/* Desk image — 2 cols */}
          <StaggerGroup className="lg:col-span-2">
            <AnimatedDiv variants={scaleIn}>
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-border/60 brand-glow">
                <Image
                  src="/desk.png"
                  alt="Vasanth Shetty at his build desk with laptop and books"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
                {/* Subtle overlay for dark mode blending */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
              </div>
            </AnimatedDiv>
          </StaggerGroup>
        </div>

        {/* Pillars grid */}
        <StaggerGroup className="grid sm:grid-cols-2 gap-5">
          {pillars.map((pillar) => {
            const Icon = pillar.icon
            return (
              <AnimatedDiv key={pillar.title} variants={fadeUp}>
                <div className="card-surface-raised p-6 h-full group hover:border-primary/30 transition-all duration-200">
                  <div className="flex items-start gap-4">
                    <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-primary/10 text-primary shrink-0 group-hover:bg-primary/15 transition-colors">
                      <Icon className="w-4 h-4" />
                    </span>
                    <div>
                      <h3 className="text-sm font-semibold text-foreground mb-2">
                        {pillar.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                </div>
              </AnimatedDiv>
            )
          })}
        </StaggerGroup>

        {/* Education strip */}
        <StaggerGroup className="mt-8">
          <AnimatedDiv variants={fadeUp}>
            <div className="px-5 py-4 rounded-xl border border-border/60 bg-surface flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8">
              <div>
                <span className="label-mono block mb-0.5">Degree</span>
                <span className="text-sm font-medium text-foreground">
                  {personal.degree} — Computer Applications
                </span>
              </div>
              <div className="sm:border-l border-border/50 sm:pl-8">
                <span className="label-mono block mb-0.5">CGPA</span>
                <span className="text-sm font-medium text-primary">
                  {personal.cgpa} / 10 (up to Semester 5)
                </span>
              </div>
              <div className="sm:border-l border-border/50 sm:pl-8">
                <span className="label-mono block mb-0.5">Graduating</span>
                <span className="text-sm font-medium text-foreground">
                  {personal.graduationYear}
                </span>
              </div>
            </div>
          </AnimatedDiv>
        </StaggerGroup>
      </div>
    </AnimatedSection>
  )
}

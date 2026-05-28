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
      className="py-28 px-6"
    >
      <div className="mx-auto max-w-6xl">
        {/* Section title & Desk Image row */}
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 mb-16 items-center">
          {/* Text block */}
          <div className="lg:col-span-3 space-y-4">
            <span className="label-mono tracking-wider font-semibold text-primary">About</span>
            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-foreground leading-tight">
              Not a student doing projects.{" "}
              <span className="opacity-60 block text-foreground font-semibold">
                A builder who happens to be studying.
              </span>
            </h2>
            <p className="text-muted-foreground text-[15px] leading-relaxed max-w-2xl">
              {personal.bio}
            </p>
          </div>

          {/* Desk Image - Apple Rounded squircle */}
          <StaggerGroup className="lg:col-span-2">
            <AnimatedDiv variants={scaleIn}>
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-white/[0.06] shadow-xl">
                <Image
                  src="/desk.png"
                  alt="Vasanth Shetty at his build desk with laptop and books"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/20 via-transparent to-transparent" />
              </div>
            </AnimatedDiv>
          </StaggerGroup>
        </div>

        {/* Pillars dynamic grid */}
        <StaggerGroup className="grid sm:grid-cols-2 gap-6">
          {pillars.map((pillar) => {
            const Icon = pillar.icon
            return (
              <AnimatedDiv key={pillar.title} variants={fadeUp}>
                <div className="card-surface-raised p-7 h-full group ios-hover border border-white/[0.04] bg-surface-raised/40 hover:border-white/[0.1] rounded-3xl">
                  <div className="flex items-start gap-4.5">
                    <span className="flex items-center justify-center w-10 h-10 rounded-2xl bg-foreground/[0.04] text-foreground shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                      <Icon className="w-4.5 h-4.5" />
                    </span>
                    <div className="space-y-1.5">
                      <h3 className="text-sm font-semibold text-foreground tracking-tight">
                        {pillar.title}
                      </h3>
                      <p className="text-[13px] text-muted-foreground leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                </div>
              </AnimatedDiv>
            )
          })}
        </StaggerGroup>

        {/* Apple widget education status panel */}
        <StaggerGroup className="mt-8">
          <AnimatedDiv variants={fadeUp}>
            <div className="px-6 py-5 rounded-3xl border border-white/[0.05] bg-surface/30 backdrop-blur-xl shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-6">
              <div className="space-y-1">
                <span className="label-mono text-[9px] block text-muted-foreground/75 font-semibold">DEGREE</span>
                <span className="text-[14px] font-semibold text-foreground">
                  {personal.degree} — Computer Applications
                </span>
              </div>
              <div className="sm:border-l border-white/[0.06] sm:pl-8 flex-1 space-y-1">
                <span className="label-mono text-[9px] block text-muted-foreground/75 font-semibold">CGPA</span>
                <span className="text-[14px] font-semibold text-foreground">
                  {personal.cgpa} / 10 <span className="text-[11px] text-muted-foreground font-normal">(up to Sem 5)</span>
                </span>
              </div>
              <div className="sm:border-l border-white/[0.06] sm:pl-8 space-y-1">
                <span className="label-mono text-[9px] block text-muted-foreground/75 font-semibold">GRADUATING YEAR</span>
                <span className="text-[14px] font-semibold text-foreground">
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

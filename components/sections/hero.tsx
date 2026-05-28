"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import {
  Mail,
  ArrowRight,
  Sparkles,
} from "lucide-react"
import { GithubIcon, LinkedinIcon } from "@/components/icons"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { personal } from "@/lib/data"
import { cn } from "@/lib/utils"
import {
  motion,
  AnimatedDiv,
  StaggerGroup,
  fadeUp,
  fadeIn,
  scaleIn,
  slideInRight,
  defaultTransition,
  useReducedMotion,
} from "@/components/motion"

// ─── Animated typing effect for the terminal ───────────────────────────
function TypingLine({
  text,
  delay = 0,
  className,
}: {
  text: string
  delay?: number
  className?: string
}) {
  const [visible, setVisible] = React.useState(false)

  React.useEffect(() => {
    const t = setTimeout(() => setVisible(true), delay)
    return () => clearTimeout(t)
  }, [delay])

  return (
    <span
      className={cn(
        "transition-opacity duration-500",
        visible ? "opacity-100" : "opacity-0",
        className
      )}
    >
      {text}
    </span>
  )
}

// ─── Terminal mini panel ───────────────────────────────────────────────
function TerminalPanel() {
  return (
    <div className="card-surface brand-glow relative overflow-hidden">
      {/* Terminal header bar */}
      <div className="flex items-center gap-2 px-4 py-2.5 border-b border-border/60 bg-surface-raised">
        <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
        <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
        <span className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
        <span className="ml-3 text-xs text-muted-foreground font-mono">
          vasanth@portfolio ~
        </span>
      </div>

      {/* Terminal body */}
      <div className="p-5 font-mono text-xs leading-relaxed space-y-1.5">
        <div className="flex gap-2">
          <span className="text-primary">❯</span>
          <TypingLine text="whoami" delay={200} className="text-foreground" />
        </div>
        <TypingLine
          text="Vasanth Shetty — Full-Stack Developer"
          delay={700}
          className="text-muted-foreground pl-4"
        />

        <div className="flex gap-2 pt-1">
          <span className="text-primary">❯</span>
          <TypingLine
            text="cat status.json"
            delay={1100}
            className="text-foreground"
          />
        </div>
        <div className="pl-4 space-y-0.5">
          <TypingLine
            text={`{ "role": "BCA Student",`}
            delay={1500}
            className="text-muted-foreground block"
          />
          <TypingLine
            text={`  "cgpa": "${personal.cgpa}",`}
            delay={1700}
            className="text-muted-foreground block"
          />
          <TypingLine
            text={`  "graduating": "${personal.graduationYear}",`}
            delay={1900}
            className="text-muted-foreground block"
          />
          <TypingLine
            text={`  "open_to": "internship & startup roles" }`}
            delay={2100}
            className="text-primary block"
          />
        </div>

        <div className="flex gap-2 pt-1">
          <span className="text-primary">❯</span>
          <TypingLine
            text="ls projects/"
            delay={2500}
            className="text-foreground"
          />
        </div>
        <TypingLine
          text="MakerHQ  AgroShare  ScamGuard  CogniVault"
          delay={2900}
          className="text-muted-foreground pl-4 block"
        />

        {/* blinking cursor */}
        <div className="flex gap-2 pt-1">
          <span className="text-primary">❯</span>
          <span className="inline-block w-2 h-3.5 bg-primary animate-pulse mt-0.5" />
        </div>
      </div>
    </div>
  )
}

// ─── Stats strip ───────────────────────────────────────────────────────
function StatsStrip() {
  const stats = [
    { value: "4", label: "Shipped Projects" },
    { value: "3", label: "Hackathons Led" },
    { value: personal.cgpa, label: "CGPA (Sem 5)" },
    { value: "2026", label: "Graduating" },
  ]

  return (
    <div className="grid grid-cols-4 gap-px rounded-xl overflow-hidden border border-border/60">
      {stats.map((s, i) => (
        <div
          key={i}
          className="bg-surface flex flex-col items-center justify-center py-3 px-2 text-center"
        >
          <span className="text-xl font-bold font-mono text-primary">
            {s.value}
          </span>
          <span className="text-[10px] text-muted-foreground mt-0.5 leading-tight">
            {s.label}
          </span>
        </div>
      ))}
    </div>
  )
}

// ─── Hero Section ──────────────────────────────────────────────────────
export function HeroSection() {
  const prefersReducedMotion = useReducedMotion()

  return (
    <section
      id="hero"
      aria-label="Hero — Identity and introduction"
      className="relative min-h-dvh flex items-center pt-20 pb-16"
    >
      {/* Ambient gradient blob — subtle, positioned top-right */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full opacity-[0.07]"
        style={{
          background:
            "radial-gradient(circle, oklch(0.72 0.19 196) 0%, transparent 70%)",
        }}
      />

      <div className="mx-auto max-w-6xl w-full px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* ── Left: Identity ── */}
          <motion.div
            className="flex flex-col gap-6"
            initial={prefersReducedMotion ? "visible" : "hidden"}
            animate="visible"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
            }}
          >
            {/* Availability badge */}
            <AnimatedDiv variants={fadeUp} className="flex items-center gap-2.5">
              <span className="pulse-dot" aria-hidden="true" />
              <span className="label-mono text-[0.65rem]">
                {personal.availability}
              </span>
            </AnimatedDiv>

            {/* Headshot + Name (mobile visible / desktop alongside text) */}
            <AnimatedDiv variants={fadeUp} className="flex items-center gap-5">
              <div className="relative w-16 h-16 lg:w-20 lg:h-20 rounded-full overflow-hidden border-2 border-primary/30 shrink-0 brand-glow">
                <Image
                  src="/headshot.png"
                  alt="Vasanth Shetty headshot"
                  fill
                  className="object-cover object-top"
                  priority
                  sizes="80px"
                />
              </div>
              <div className="space-y-1">
                <h1 className="text-4xl lg:text-5xl font-bold tracking-tight leading-[1.05]">
                  <span className="text-foreground">{personal.name}</span>
                </h1>
                <p className="text-base lg:text-lg text-muted-foreground font-medium">
                  {personal.tagline}
                </p>
              </div>
            </AnimatedDiv>

            {/* Headline */}
            <AnimatedDiv variants={fadeUp}>
              <p className="text-base text-muted-foreground leading-relaxed max-w-md">
                {personal.headline}
              </p>
            </AnimatedDiv>

            {/* Tech badges */}
            <AnimatedDiv variants={fadeUp} className="flex flex-wrap gap-2">
              {["Next.js", "React", "TypeScript", "PHP", "Supabase", "MySQL"].map(
                (tech) => (
                  <Badge
                    key={tech}
                    variant="secondary"
                    className="text-xs font-mono px-2.5 py-0.5 bg-accent/40 text-accent-foreground border border-border/60"
                  >
                    {tech}
                  </Badge>
                )
              )}
            </AnimatedDiv>

            <AnimatedDiv variants={fadeIn}>
              <Separator className="opacity-30" />
            </AnimatedDiv>

            {/* CTA buttons */}
            <AnimatedDiv variants={fadeUp} className="flex flex-wrap gap-3">
              <Button
                id="hero-cta-projects"
                asChild
                size="default"
                className="gap-2 font-medium"
              >
                <Link href="#projects">
                  View Projects
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
              <Button
                id="hero-cta-contact"
                asChild
                variant="outline"
                size="default"
                className="gap-2 font-medium border-border/80"
              >
                <Link href="#contact">Get in Touch</Link>
              </Button>
            </AnimatedDiv>

            {/* Social links */}
            <AnimatedDiv variants={fadeUp} className="flex items-center gap-4 pt-1">
              <Link
                id="hero-github-link"
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="GitHub profile"
              >
                <GithubIcon className="w-5 h-5" />
              </Link>
              <Link
                id="hero-linkedin-link"
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="LinkedIn profile"
              >
                <LinkedinIcon className="w-5 h-5" />
              </Link>
              <Link
                id="hero-email-link"
                href={`mailto:${personal.email}`}
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Send email"
              >
                <Mail className="w-5 h-5" />
              </Link>
            </AnimatedDiv>
          </motion.div>

          {/* ── Right: Terminal + Stats ── */}
          <motion.div
            className="flex flex-col gap-5"
            initial={prefersReducedMotion ? "visible" : "hidden"}
            animate="visible"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.15, delayChildren: 0.4 } },
            }}
          >
            {/* Currently building card */}
            <AnimatedDiv
              variants={scaleIn}
              className="flex items-center gap-3 px-4 py-3 rounded-xl border border-primary/20 bg-primary/5"
            >
              <Sparkles className="w-4 h-4 text-primary shrink-0" />
              <div>
                <span className="label-mono text-[0.6rem] block mb-0.5">
                  Currently building
                </span>
                <span className="text-sm font-medium text-foreground/90">
                  {personal.currentFocus}
                </span>
              </div>
            </AnimatedDiv>

            {/* Terminal panel */}
            <AnimatedDiv variants={slideInRight}>
              <TerminalPanel />
            </AnimatedDiv>

            {/* Stats strip */}
            <AnimatedDiv variants={fadeUp}>
              <StatsStrip />
            </AnimatedDiv>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

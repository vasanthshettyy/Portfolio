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
        "transition-opacity duration-600",
        visible ? "opacity-100" : "opacity-0",
        className
      )}
    >
      {text}
    </span>
  )
}

// ─── Xcode / Terminal mini panel ───────────────────────────────────────
function TerminalPanel() {
  return (
    <div className="card-surface relative overflow-hidden bg-surface/50 backdrop-blur-xl border border-white/[0.06] shadow-2xl rounded-2xl">
      {/* Xcode header bar */}
      <div className="flex items-center gap-2 px-4 py-3 border-b border-white/[0.04] bg-surface-raised/40">
        <span className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
        <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
        <span className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
        <span className="ml-3 text-[11px] text-muted-foreground font-mono font-medium">
          vasanth.swift
        </span>
      </div>

      {/* Code body */}
      <div className="p-6 font-mono text-xs leading-relaxed space-y-2 text-foreground/80">
        <div className="flex gap-2">
          <span className="text-muted-foreground/60 select-none">❯</span>
          <TypingLine text="whoami" delay={200} className="text-foreground font-medium" />
        </div>
        <TypingLine
          text="Vasanth Shetty — Full-Stack Developer"
          delay={700}
          className="text-muted-foreground/90 pl-4 block"
        />

        <div className="flex gap-2 pt-1.5">
          <span className="text-muted-foreground/60 select-none">❯</span>
          <TypingLine
            text="cat status.json"
            delay={1100}
            className="text-foreground font-medium"
          />
        </div>
        <div className="pl-4 space-y-0.5">
          <TypingLine
            text={`{ "role": "BCA Student",`}
            delay={1500}
            className="text-muted-foreground/90 block"
          />
          <TypingLine
            text={`  "cgpa": "${personal.cgpa}",`}
            delay={1700}
            className="text-muted-foreground/90 block"
          />
          <TypingLine
            text={`  "graduating": "${personal.graduationYear}",`}
            delay={1900}
            className="text-muted-foreground/90 block"
          />
          <TypingLine
            text={`  "open_to": "internship & startup roles" }`}
            delay={2100}
            className="text-foreground block font-medium"
          />
        </div>

        <div className="flex gap-2 pt-1.5">
          <span className="text-muted-foreground/60 select-none">❯</span>
          <TypingLine
            text="ls projects/"
            delay={2500}
            className="text-foreground font-medium"
          />
        </div>
        <TypingLine
          text="MakerHQ  AgroShare  ScamGuard  CogniVault"
          delay={2900}
          className="text-muted-foreground/90 pl-4 block"
        />

        {/* cursor */}
        <div className="flex gap-2 pt-1">
          <span className="text-muted-foreground/60 select-none">❯</span>
          <span className="inline-block w-1.5 h-3.5 bg-primary/80 animate-pulse mt-0.5" />
        </div>
      </div>
    </div>
  )
}

// ─── iOS widget style stats strip ──────────────────────────────────────
function StatsStrip() {
  const stats = [
    { value: "4", label: "Shipped" },
    { value: "3", label: "Led" },
    { value: personal.cgpa, label: "CGPA" },
    { value: "2026", label: "Grads" },
  ]

  return (
    <div className="grid grid-cols-4 gap-px rounded-2xl overflow-hidden border border-white/[0.06] bg-surface-raised/35 shadow-sm">
      {stats.map((s, i) => (
        <div
          key={i}
          className="bg-surface/30 backdrop-blur-xl flex flex-col items-center justify-center py-3.5 px-2 text-center"
        >
          <span className="text-xl font-semibold tracking-tight text-foreground">
            {s.value}
          </span>
          <span className="text-[10px] text-muted-foreground mt-0.5 font-medium leading-none">
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
      className="relative min-h-dvh flex items-center pt-24 pb-16 overflow-hidden"
    >
      <div className="mx-auto max-w-6xl w-full px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
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
            {/* Availability pill */}
            <AnimatedDiv variants={fadeUp} className="flex items-center gap-2">
              <div className="flex items-center gap-2 px-3 py-1 rounded-full border border-white/[0.06] bg-surface/40 backdrop-blur-md">
                <span className="pulse-dot animate-pulse" aria-hidden="true" />
                <span className="text-[10px] font-semibold tracking-wide text-muted-foreground uppercase">
                  {personal.availability}
                </span>
              </div>
            </AnimatedDiv>

            {/* Premium circular headshot + name */}
            <AnimatedDiv variants={fadeUp} className="flex items-center gap-6">
              <div className="relative w-20 h-20 lg:w-24 lg:h-24 rounded-full overflow-hidden border border-white/[0.08] shadow-lg shrink-0">
                <Image
                  src="/headshot.png"
                  alt="Vasanth Shetty profile picture"
                  fill
                  className="object-cover object-top"
                  priority
                  sizes="(max-width: 1024px) 80px, 96px"
                />
              </div>
              <div className="space-y-1">
                <h1 className="text-4xl lg:text-5xl font-bold tracking-tight text-foreground leading-[1.05]">
                  {personal.name}
                </h1>
                <p className="text-base lg:text-lg text-muted-foreground font-medium">
                  {personal.tagline}
                </p>
              </div>
            </AnimatedDiv>

            {/* Headline */}
            <AnimatedDiv variants={fadeUp}>
              <p className="text-base text-muted-foreground/90 leading-relaxed max-w-md">
                {personal.headline}
              </p>
            </AnimatedDiv>

            {/* Sleek aluminum skill tags */}
            <AnimatedDiv variants={fadeUp} className="flex flex-wrap gap-1.5">
              {["Next.js", "React", "TypeScript", "PHP", "Supabase", "MySQL"].map(
                (tech) => (
                  <Badge
                    key={tech}
                    variant="secondary"
                    className="text-[11px] font-medium font-mono px-3 py-1 bg-surface-raised/40 text-foreground border border-white/[0.06] rounded-full shadow-sm"
                  >
                    {tech}
                  </Badge>
                )
              )}
            </AnimatedDiv>

            <AnimatedDiv variants={fadeIn}>
              <Separator className="opacity-20" />
            </AnimatedDiv>

            {/* Luxury CTA buttons */}
            <AnimatedDiv variants={fadeUp} className="flex flex-wrap gap-3">
              <Button
                id="hero-cta-projects"
                asChild
                size="default"
                className="gap-2 font-medium bg-foreground text-background hover:bg-foreground/90 rounded-full px-5 ios-hover"
              >
                <Link href="#projects">
                  View Projects
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </Button>
              <Button
                id="hero-cta-contact"
                asChild
                variant="outline"
                size="default"
                className="gap-2 font-medium border-white/[0.06] bg-surface/20 backdrop-blur-md text-foreground rounded-full px-5 ios-hover"
              >
                <Link href="#contact">Get in Touch</Link>
              </Button>
            </AnimatedDiv>

            {/* Social links */}
            <AnimatedDiv variants={fadeUp} className="flex items-center gap-4.5 pt-1.5">
              <Link
                id="hero-github-link"
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                aria-label="GitHub profile"
              >
                <GithubIcon className="w-5 h-5" />
              </Link>
              <Link
                id="hero-linkedin-link"
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                aria-label="LinkedIn profile"
              >
                <LinkedinIcon className="w-5 h-5" />
              </Link>
              <Link
                id="hero-email-link"
                href={`mailto:${personal.email}`}
                className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                aria-label="Send email"
              >
                <Mail className="w-5 h-5" />
              </Link>
            </AnimatedDiv>
          </motion.div>

          {/* ── Right: Terminal + Stats ── */}
          <motion.div
            className="flex flex-col gap-6"
            initial={prefersReducedMotion ? "visible" : "hidden"}
            animate="visible"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.15, delayChildren: 0.4 } },
            }}
          >
            {/* Soft, beautiful currently building card */}
            <AnimatedDiv
              variants={scaleIn}
              className="flex items-center gap-3.5 px-4.5 py-3.5 rounded-2xl border border-white/[0.06] bg-surface/30 backdrop-blur-md shadow-sm"
            >
              <Sparkles className="w-4 h-4 text-primary shrink-0" />
              <div>
                <span className="label-mono text-[9px] block mb-0.5 text-muted-foreground/80 font-semibold tracking-wider">
                  CURRENTLY BUILDING
                </span>
                <span className="text-[13px] font-semibold text-foreground/90">
                  {personal.currentFocus}
                </span>
              </div>
            </AnimatedDiv>

            {/* Apple style Xcode body panel */}
            <AnimatedDiv variants={slideInRight}>
              <TerminalPanel />
            </AnimatedDiv>

            {/* Stats grid widget */}
            <AnimatedDiv variants={fadeUp}>
              <StatsStrip />
            </AnimatedDiv>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

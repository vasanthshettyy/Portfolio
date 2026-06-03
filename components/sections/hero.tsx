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

interface TerminalLine {
  text: string
  type: "cmd" | "output" | "error"
}

// ─── Interactive Xcode / Terminal Panel ───────────────────────────────
function TerminalPanel() {
  const [history, setHistory] = React.useState<TerminalLine[]>([
    { text: "whoami", type: "cmd" },
    { text: "Vasanth Shetty — Full-Stack Developer", type: "output" },
    { text: "cat status.json", type: "cmd" },
    { text: `{ "role": "BCA Student", "cgpa": "${personal.cgpa}", "graduating": "${personal.graduationYear}" }`, type: "output" },
    { text: "help", type: "cmd" },
    { text: "Available commands: about, projects, skills, hackathons, email, clear", type: "output" },
  ])
  const [inputValue, setInputValue] = React.useState("")
  const inputRef = React.useRef<HTMLInputElement>(null)
  const containerRef = React.useRef<HTMLDivElement>(null)

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault()
    const cmd = inputValue.trim().toLowerCase()
    if (!cmd) return

    let newHistory = [...history, { text: cmd, type: "cmd" as const }]

    if (cmd === "clear") {
      newHistory = []
    } else if (cmd === "help") {
      newHistory.push({
        text: "Available commands: about, projects, skills, hackathons, email, clear",
        type: "output",
      })
    } else if (cmd === "about") {
      newHistory.push({
        text: "BCA student building AI-assisted full-stack products for startup environments. Focused on rapid MVPs and system architecture.",
        type: "output",
      })
    } else if (cmd === "projects") {
      newHistory.push({
        text: "• MakerHQ: SaaS automation engine\n• AgroShare: Farm tools leasing marketplace\n• Scam Guard: AI chrome extension detector\n• CogniVault: Multi-agent reasoner",
        type: "output",
      })
    } else if (cmd === "skills") {
      newHistory.push({
        text: "Core: Next.js, React, TypeScript, PHP, MySQL, Supabase, Git, Vercel",
        type: "output",
      })
    } else if (cmd === "hackathons") {
      newHistory.push({
        text: "• AGMR CET AI/ML Hackathon (2026) - Team Lead (CogniVault)\n• SDMCET Hackathon (2025) - Scam Guard build",
        type: "output",
      })
    } else if (cmd === "email") {
      newHistory.push({
        text: `${personal.email} (Copied to clipboard)`,
        type: "output",
      })
      navigator.clipboard.writeText(personal.email).catch(() => {})
    } else {
      newHistory.push({
        text: `Command not found: '${cmd}'. Type 'help' for options.`,
        type: "error",
      })
    }

    setHistory(newHistory)
    setInputValue("")
    setTimeout(() => {
      if (containerRef.current) {
        containerRef.current.scrollTop = containerRef.current.scrollHeight
      }
    }, 50)
  }

  const focusInput = () => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }

  return (
    <div
      onClick={focusInput}
      className="card-surface relative overflow-hidden bg-surface/50 backdrop-blur-xl border border-white/[0.06] shadow-2xl rounded-2xl cursor-text"
    >
      {/* Xcode header bar */}
      <div className="flex items-center gap-2 px-4 py-3 border-b border-white/[0.04] bg-surface-raised/40 select-none">
        <span className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
        <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
        <span className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
        <span className="ml-3 text-[11px] text-muted-foreground font-mono font-medium flex items-center gap-1.5">
          <span>vasanth.swift</span>
          <span className="px-1.5 py-0.5 rounded bg-foreground/[0.06] text-[8px] text-muted-foreground/80 font-bold uppercase tracking-wider">
            interactive
          </span>
        </span>
      </div>

      {/* Code body */}
      <div
        ref={containerRef}
        className="p-6 font-mono text-xs leading-relaxed h-[290px] overflow-y-auto space-y-2 text-foreground/80 scrollbar-none"
      >
        {history.map((line, index) => (
          <div key={index} className="space-y-0.5">
            {line.type === "cmd" ? (
              <div className="flex gap-2">
                <span className="text-primary font-bold select-none">❯</span>
                <span className="text-foreground font-medium">{line.text}</span>
              </div>
            ) : (
              <div className="pl-4 whitespace-pre-line text-muted-foreground/90">
                {line.text}
              </div>
            )}
          </div>
        ))}

        {/* Input prompt line */}
        <form onSubmit={handleCommand} className="flex gap-2 items-center pt-1">
          <span className="text-primary font-bold select-none">❯</span>
          <input
            ref={inputRef}
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="flex-1 bg-transparent border-none outline-none focus:ring-0 p-0 m-0 text-foreground font-medium resize-none placeholder-muted-foreground/30 focus-visible:ring-0 focus-visible:outline-none"
            placeholder="type 'help'..."
            autoComplete="off"
            autoCorrect="off"
            autoCapitalize="off"
            spellCheck={false}
          />
        </form>
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

"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { Mail, ArrowRight, Sparkles } from "lucide-react"
import { GithubIcon, LinkedinIcon } from "@/components/icons"
import { Button } from "@/components/ui/button"
import { ResumeModal } from "@/components/resume-modal"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { personal } from "@/lib/data"
import {
  motion,
  AnimatedDiv,
  fadeUp,
  fadeIn,
  scaleIn,
  slideInRight,
  useReducedMotion,
} from "@/components/motion"

interface TerminalLine {
  text: string
  type: "banner" | "cmd" | "output" | "error" | "blank"
}

const initialTerminalHistory: TerminalLine[] = [
  { text: "", type: "blank" },
  { text: "whoami", type: "cmd" },
  { text: "Vasanth Shetty - Full-Stack Developer", type: "output" },
  { text: "", type: "blank" },
  { text: "cat status.json", type: "cmd" },
  { text: `{ "role": "BCA Student", "cgpa": "8.46", "graduating": "2026" }`, type: "output" },
  { text: "", type: "blank" },
  { text: "help", type: "cmd" },
  { text: "Available commands: about, projects, skills, hackathons, email, clear", type: "output" },
]

function TerminalPanel() {
  const [history, setHistory] = React.useState<TerminalLine[]>(initialTerminalHistory)
  const [inputValue, setInputValue] = React.useState("")
  const inputRef = React.useRef<HTMLInputElement>(null)
  const containerRef = React.useRef<HTMLDivElement>(null)

  const handleCommand = (event: React.FormEvent) => {
    event.preventDefault()
    const command = inputValue.trim().toLowerCase()
    if (!command) return

    let nextHistory = [...history]

    if (command === "clear") {
      nextHistory = initialTerminalHistory
    } else if (command === "help") {
      nextHistory.push({ text: "help", type: "cmd" })
      nextHistory.push({
        text: "For more information on a specific command, type HELP command-name.",
        type: "output",
      })
      nextHistory.push({
        text: "Available commands: about, projects, skills, hackathons, email, clear",
        type: "output",
      })
    } else if (command === "about") {
      nextHistory.push({ text: "about", type: "cmd" })
      nextHistory.push({
        text: "BCA student building AI-assisted full-stack products for startup environments. Focused on rapid MVPs and system architecture.",
        type: "output",
      })
    } else if (command === "projects") {
      nextHistory.push({ text: "projects", type: "cmd" })
      nextHistory.push({
        text: "MakerHQ\n  SaaS automation engine",
        type: "output",
      })
      nextHistory.push({
        text: "AgroShare\n  Farm tools leasing marketplace",
        type: "output",
      })
      nextHistory.push({
        text: "Scam Guard\n  Browser risk detection",
        type: "output",
      })
      nextHistory.push({
        text: "CogniVault\n  Multi-engine AI forensics",
        type: "output",
      })
    } else if (command === "skills") {
      nextHistory.push({ text: "skills", type: "cmd" })
      nextHistory.push({
        text: "Core technologies: Next.js, React, TypeScript, PHP, MySQL, Supabase, Git, Vercel",
        type: "output",
      })
    } else if (command === "hackathons") {
      nextHistory.push({ text: "hackathons", type: "cmd" })
      nextHistory.push({
        text: "AGMR CET AI/ML Hackathon (2026) - Team Lead\nSDMCET Hackathon (2025) - Builder",
        type: "output",
      })
    } else if (command === "email") {
      nextHistory.push({ text: "email", type: "cmd" })
      nextHistory.push({
        text: `${personal.email} (Copied to clipboard)`,
        type: "output",
      })
      navigator.clipboard.writeText(personal.email).catch(() => {})
    } else {
      nextHistory.push({ text: command, type: "cmd" })
      nextHistory.push({
        text: `Command not found: '${command}'. Type 'help' for options.`,
        type: "error",
      })
    }

    setHistory(nextHistory)
    setInputValue("")
    requestAnimationFrame(() => {
      if (containerRef.current) {
        containerRef.current.scrollTop = containerRef.current.scrollHeight
      }
    })
  }

  return (
    <div
      onClick={() => inputRef.current?.focus()}
      className="card-surface relative overflow-hidden rounded-lg border border-white/[0.08] bg-[#040404] cursor-text"
    >
      <div className="flex items-center justify-between gap-4 border-b border-white/[0.06] bg-[#121212] px-3 py-2.5 select-none">
        <div className="flex items-center gap-2">
          <div className="flex h-5 w-5 items-center justify-center rounded border border-white/15 bg-black/40 text-white/80">
            <span className="font-mono text-[10px] leading-none">C:\</span>
          </div>
          <span className="font-mono text-[11px] font-medium text-white/85">
            Command Prompt
          </span>
        </div>
        <div className="flex items-center gap-3 text-white/45 mr-1">
          {/* Minimize */}
          <span className="flex items-center justify-center w-3 h-3">
            <span className="w-3 h-[1.5px] bg-white/45" />
          </span>
          {/* Maximize */}
          <span className="flex items-center justify-center w-3 h-3">
            <span className="w-2.5 h-2.5 border border-white/45 rounded-sm" />
          </span>
          {/* Close */}
          <span className="flex items-center justify-center w-3 h-3">
            <span className="text-sm leading-none font-light -mt-[1px]">&times;</span>
          </span>
        </div>
      </div>
      <div className="border-b border-white/[0.04] px-4 py-2 font-mono text-[10px] uppercase tracking-[0.22em] text-white/45">
        Type <span className="text-white/80">HELP</span> to list available commands
      </div>

      <div className="absolute inset-x-0 top-[73px] h-px bg-white/5" />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        aria-hidden="true"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px)",
          backgroundSize: "100% 3px",
        }}
      />

      <div
        ref={containerRef}
        className="relative h-[290px] overflow-y-auto bg-transparent px-4 py-4 font-mono text-[15px] leading-[1.35] text-white/88 scrollbar-none"
      >
        {history.map((line, index) => (
          <div key={index} className="mb-1.5">
            {line.type === "cmd" ? (
              <div className="flex gap-2">
                <span className="select-none text-[#4ea1ff]">&gt;</span>
                <span className="font-semibold text-white/95">{line.text}</span>
              </div>
            ) : line.type === "blank" ? (
              <div className="h-2" />
            ) : line.type === "error" ? (
              <div className="text-white/74">
                <span className="text-white/45">C:\</span> {line.text}
              </div>
            ) : (
              <div className="whitespace-pre-line text-white/78">
                {line.text}
              </div>
            )}
          </div>
        ))}

        <form onSubmit={handleCommand} className="flex items-start gap-1 pt-2">
          <div className="select-none text-[#4ea1ff]">&gt;</div>
          <div className="relative flex min-h-[1.25rem] flex-1 items-center">
            <span className="select-none whitespace-pre text-white/90">
              {inputValue || <span className="text-white/22">type here...</span>}
            </span>
            <span className="ml-1 inline-block h-[1.1em] w-[0.65ch] bg-white/82" />
            <input
              ref={inputRef}
              type="text"
              value={inputValue}
              onChange={(event) => setInputValue(event.target.value)}
              className="absolute inset-0 m-0 h-full w-full border-none bg-transparent p-0 text-transparent outline-none focus:outline-none focus:ring-0 focus-visible:outline-none focus-visible:ring-0"
              autoComplete="off"
              autoCorrect="off"
              autoCapitalize="off"
              spellCheck={false}
            />
          </div>
        </form>
      </div>
    </div>
  )
}

function StatsStrip() {
  const stats = [
    { value: "4", label: "Shipped" },
    { value: "3", label: "Led" },
    { value: personal.cgpa, label: "CGPA" },
    { value: "2026", label: "Grad" },
  ]

  return (
    <div className="grid grid-cols-4 gap-px overflow-hidden rounded-2xl border border-white/[0.08] bg-background shadow-sm">
      {stats.map((item) => (
        <div key={item.label} className="flex flex-col items-center justify-center bg-surface px-2 py-3.5 text-center">
          <span className="text-xl font-semibold tracking-tight text-foreground">{item.value}</span>
          <span className="mt-0.5 text-[10px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
            {item.label}
          </span>
        </div>
      ))}
    </div>
  )
}

export function HeroSection() {
  const prefersReducedMotion = useReducedMotion()

  return (
    <section
      id="hero"
      aria-label="Hero - Identity and introduction"
      className="relative min-h-dvh overflow-hidden pt-28 pb-20 flex items-center"
    >
      <div className="mx-auto w-full max-w-6xl px-6 relative z-10">
        <div className="grid items-start gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <motion.div
            className="flex max-w-3xl flex-col gap-7"
            initial={prefersReducedMotion ? "visible" : "hidden"}
            animate="visible"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.06, delayChildren: 0.04 } },
            }}
          >
            <AnimatedDiv variants={fadeUp} className="flex items-center gap-2">
              <div className="flex items-center gap-2 rounded-full border border-white/[0.08] bg-surface px-3 py-1">
                <span className="pulse-dot" aria-hidden="true" />
                <span className="text-[10px] font-semibold uppercase tracking-wide text-muted-foreground">
                  {personal.availability}
                </span>
              </div>
            </AnimatedDiv>

            <AnimatedDiv variants={fadeUp} className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-full border border-white/[0.08] lg:h-20 lg:w-20">
                  <Image
                    src="/headshot.png"
                    alt="Vasanth Shetty profile picture"
                    fill
                    className="object-cover object-top"
                    priority
                    sizes="(max-width: 1024px) 72px, 80px"
                  />
                </div>
                <div className="space-y-1">
                  <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
                    Vasanth Shetty / BCA 2026
                  </p>
                  <p className="max-w-sm text-sm text-muted-foreground">
                    Full-stack developer focused on product systems, architecture, and shipping.
                  </p>
                </div>
              </div>
            </AnimatedDiv>

            <AnimatedDiv variants={fadeUp} className="space-y-5">
              <h1 className="max-w-2xl text-balance text-5xl font-black uppercase leading-[0.88] tracking-[-0.08em] sm:text-6xl lg:text-7xl">
                Building software that ships.
              </h1>
              <p className="max-w-2xl text-base leading-relaxed text-muted-foreground/90 sm:text-lg">
                {personal.headline}
              </p>
            </AnimatedDiv>

            <AnimatedDiv variants={fadeUp} className="flex flex-wrap gap-2.5">
              {["Next.js", "React", "TypeScript", "PHP", "Supabase", "MySQL"].map((tech) => (
                <Badge
                  key={tech}
                  variant="secondary"
                  className="rounded-full border border-white/[0.08] bg-background px-3 py-1 font-mono text-[11px] font-medium text-foreground"
                >
                  {tech}
                </Badge>
              ))}
            </AnimatedDiv>

            <AnimatedDiv variants={fadeIn}>
              <Separator className="opacity-20" />
            </AnimatedDiv>

            <AnimatedDiv variants={fadeUp} className="flex flex-wrap gap-3">
              <Button
                id="hero-cta-projects"
                asChild
                size="default"
                className="gap-2 rounded-full bg-foreground px-5 font-medium text-background hover:bg-foreground/90 ios-hover"
              >
                <Link href="#projects">
                  View Projects
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </Button>
              <ResumeModal>
                <Button
                  id="hero-cta-resume"
                  variant="outline"
                  size="default"
                  className="cursor-pointer gap-2 rounded-full border border-white/[0.08] bg-background px-5 font-medium text-foreground ios-hover"
                >
                  Resume
                </Button>
              </ResumeModal>
              <Button
                id="hero-cta-contact"
                asChild
                variant="outline"
                size="default"
                className="gap-2 rounded-full border border-white/[0.08] bg-background px-5 font-medium text-foreground ios-hover"
              >
                <Link href="#contact">Get in Touch</Link>
              </Button>
            </AnimatedDiv>

            <AnimatedDiv variants={fadeUp} className="flex items-center gap-4 pt-1.5">
              <Link
                id="hero-github-link"
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground transition-colors duration-200 hover:text-foreground"
                aria-label="GitHub profile"
              >
                <span className="sr-only">GitHub</span>
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/[0.08] bg-background">
                  <GithubIcon className="h-4 w-4" />
                </span>
              </Link>
              <Link
                id="hero-linkedin-link"
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground transition-colors duration-200 hover:text-foreground"
                aria-label="LinkedIn profile"
              >
                <span className="sr-only">LinkedIn</span>
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/[0.08] bg-background">
                  <LinkedinIcon className="h-4 w-4" />
                </span>
              </Link>
              <Link
                id="hero-email-link"
                href={`mailto:${personal.email}`}
                className="text-muted-foreground transition-colors duration-200 hover:text-foreground"
                aria-label="Send email"
              >
                <span className="sr-only">Email</span>
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/[0.08] bg-background">
                  <Mail className="h-4 w-4" />
                </span>
              </Link>
            </AnimatedDiv>
          </motion.div>

          <motion.div
            className="flex flex-col gap-6 lg:pt-2"
            initial={prefersReducedMotion ? "visible" : "hidden"}
            animate="visible"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.08, delayChildren: 0.18 } },
            }}
          >
            <AnimatedDiv
              variants={scaleIn}
              className="flex items-center gap-3.5 rounded-2xl border border-white/[0.08] bg-surface px-4 py-3.5 shadow-sm"
            >
              <Sparkles className="h-4 w-4 shrink-0 text-primary" />
              <div>
                <span className="label-mono text-[9px] block mb-0.5 text-muted-foreground/80 font-semibold tracking-wider">
                  CURRENTLY BUILDING
                </span>
                <span className="text-[13px] font-semibold text-foreground/90">
                  {personal.currentFocus}
                </span>
              </div>
            </AnimatedDiv>

            <AnimatedDiv variants={slideInRight}>
              <TerminalPanel />
            </AnimatedDiv>

            <AnimatedDiv variants={fadeUp}>
              <StatsStrip />
            </AnimatedDiv>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

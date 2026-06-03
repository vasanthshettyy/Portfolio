import * as React from "react"
import Link from "next/link"
import { ArrowLeft, Clock, Hammer, GitCommit, Sparkles } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

interface LogEntry {
  date: string
  title: string
  category: "Release" | "Feature" | "Hackathon" | "Experiment"
  description: string
  tech?: string[]
  metrics?: string
}

const buildLogs: LogEntry[] = [
  {
    date: "June 2026",
    title: "Shipped Builder's Command Center Portfolio",
    category: "Release",
    description: "Launched this personal workbench portfolio styled after Apple's luxury dark/obsidian visual system. Configured dynamic static parameters (SSG) for instant case studies navigation and connected directly to Vercel via GitHub CI/CD.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Vercel"],
    metrics: "100/100 Lighthouse performance score",
  },
  {
    date: "May 2026",
    title: "Led CogniVault AGMR CET AI/ML Hackathon",
    category: "Hackathon",
    description: "Led a team at AGMR CET College (Varur, Hubli) to design, build, and deploy CogniVault — a dual-engine AI forensics and reasoning pipeline — within a high-pressure 24-hour sprint.",
    tech: ["React", "Node.js", "Supabase", "OpenRouter", "Groq"],
    metrics: "Completed in 24 hours",
  },
  {
    date: "September 2025",
    title: "Built Scam Guard at SDMCET Hackathon",
    category: "Hackathon",
    description: "Developed and shipped Scam Guard, a browser extension that runs real-time URL and pattern risk analysis, in a strict 8-hour sprint at SDMCET College.",
    tech: ["JavaScript", "HTML/CSS", "Browser Extension APIs"],
    metrics: "Completed in 8 hours",
  },
  {
    date: "May 2024",
    title: "Built AgroShare State Machine Booking Engine",
    category: "Feature",
    description: "Designed and shipped a verified booking state machine (pending → confirmed → completed) using pure native PHP. Implemented AJAX long polling to keep active notification counters updated without page refreshes.",
    tech: ["PHP Native", "MySQL", "JavaScript", "AJAX"],
    metrics: "0% booking race conditions",
  },
]

export default function BuildLogPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-dvh pt-28 pb-16 px-6 relative overflow-hidden">
        <div className="mx-auto max-w-3xl">
          {/* Back button */}
          <div className="mb-8">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-xs font-semibold tracking-wide text-muted-foreground hover:text-foreground transition-colors duration-200 group cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform duration-200" />
              BACK TO COMMAND CENTER
            </Link>
          </div>

          {/* Page Title */}
          <div className="mb-14 space-y-3.5">
            <div className="flex items-center gap-2">
              <span className="flex items-center justify-center w-8 h-8 rounded-xl bg-primary/10 text-primary">
                <Hammer className="w-4 h-4" />
              </span>
              <span className="label-mono tracking-wider font-semibold text-primary">DEVLOG & CHANGELOG</span>
            </div>
            <h1 className="text-3xl lg:text-4xl font-bold tracking-tight text-foreground">
              Build Log.{" "}
              <span className="opacity-60 block text-foreground font-semibold">Real updates from my workbench.</span>
            </h1>
            <p className="text-muted-foreground text-[14px] leading-relaxed max-w-lg">
              A historical changelog documenting design overhauls, hackathon shipments, and system integrations.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative border-l border-white/[0.06] ml-4 pl-8 space-y-12">
            {buildLogs.map((log, idx) => (
              <div key={idx} className="relative group">
                {/* Timeline node */}
                <span className="absolute -left-[41px] top-1.5 flex items-center justify-center w-6 h-6 rounded-full bg-background border border-white/[0.1] text-muted-foreground group-hover:border-primary group-hover:text-primary transition-all duration-300">
                  <GitCommit className="w-3.5 h-3.5" />
                </span>

                {/* Log card */}
                <div className="card-surface p-7 bg-surface/30 backdrop-blur-xl border border-white/[0.05] rounded-3xl space-y-4 shadow-sm hover:border-white/[0.08] transition-all duration-300">
                  <div className="flex items-start justify-between gap-4 flex-wrap">
                    <div className="space-y-1.5">
                      <div className="flex items-center gap-2.5">
                        <span className="text-[11px] font-mono text-muted-foreground font-semibold flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {log.date}
                        </span>
                        <Badge
                          variant="outline"
                          className={`text-[9px] font-mono tracking-wider uppercase px-2 py-0.5 rounded-full border-none ${
                            log.category === "Release"
                              ? "bg-emerald-500/10 text-emerald-500"
                              : log.category === "Feature"
                              ? "bg-blue-500/10 text-blue-500"
                              : log.category === "Hackathon"
                              ? "bg-purple-500/10 text-purple-500"
                              : "bg-amber-500/10 text-amber-500"
                          }`}
                        >
                          {log.category}
                        </Badge>
                      </div>
                      <h2 className="text-lg font-bold tracking-tight text-foreground group-hover:text-primary transition-colors duration-200">
                        {log.title}
                      </h2>
                    </div>
                  </div>

                  <p className="text-[13px] text-muted-foreground leading-relaxed">
                    {log.description}
                  </p>

                  {/* Metadata and tech tags */}
                  <div className="flex flex-wrap gap-2 items-center justify-between pt-2 border-t border-white/[0.03]">
                    {log.tech && (
                      <div className="flex flex-wrap gap-1.5">
                        {log.tech.map((t) => (
                          <Badge
                            key={t}
                            variant="secondary"
                            className="text-[9px] font-mono px-2 py-0.5 bg-surface-raised/20 text-muted-foreground border border-white/[0.04] rounded-full"
                          >
                            {t}
                          </Badge>
                        ))}
                      </div>
                    )}
                    {log.metrics && (
                      <span className="text-[10px] font-mono font-semibold text-primary flex items-center gap-1">
                        <Sparkles className="w-3 h-3" />
                        {log.metrics}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

"use client"

import { Badge } from "@/components/ui/badge"
import { Timer, Users } from "lucide-react"
import { hackathons } from "@/lib/data"
import {
  AnimatedSection,
  AnimatedDiv,
  StaggerGroup,
  slideInLeft,
} from "@/components/motion"

export function HackathonsSection() {
  return (
    <AnimatedSection
      id="hackathons"
      aria-label="Hackathon experience"
      className="py-28 px-6 bg-surface/20"
    >
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-14 space-y-3">
          <span className="label-mono tracking-wider font-semibold text-primary">Hackathons</span>
          <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-foreground">
            Not trophies.{" "}
            <span className="opacity-60 block text-foreground font-semibold">Proof of speed.</span>
          </h2>
          <p className="text-muted-foreground text-[14px] leading-relaxed max-w-lg">
            Rapid execution under pressure. Focused on AI/ML sprints, browser extension builds, and team leadership.
          </p>
        </div>

        {/* Timeline block */}
        <div className="relative">
          {/* Subtle vertical silver-gray divider line */}
          <div className="absolute bottom-0 top-0 left-5 hidden w-px bg-white/[0.08] sm:block" aria-hidden="true" />

          <StaggerGroup slow className="flex flex-col gap-6">
            {hackathons.map((h, i) => (
              <AnimatedDiv key={i} variants={slideInLeft} className="sm:pl-14 relative">
                {/* Timeline silver pill dot */}
                <div
                  className="absolute left-3.5 top-6 w-3 h-3 rounded-full border-2 border-foreground bg-background hidden sm:block shadow-sm"
                  aria-hidden="true"
                />

                <div className="card-surface group rounded-3xl border border-white/[0.08] bg-surface p-6 ios-hover">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-8">
                    {/* Event Year label */}
                    <div className="shrink-0">
                      <span className="label-mono text-xs font-semibold tracking-wider text-primary">
                        {h.year}
                      </span>
                    </div>

                    <div className="flex-1 space-y-4">
                      {/* Name + outcome description */}
                      <div className="space-y-1">
                        <h3 className="text-base font-bold text-foreground group-hover:text-primary transition-colors duration-300 flex flex-wrap items-center gap-x-2 gap-y-1">
                          <span>{h.name}</span>
                          {"location" in h && (
                          <span className="font-mono text-xs font-normal text-muted-foreground/60">
                            ({h.location})
                          </span>
                        )}
                      </h3>
                        <p className="text-[13px] font-medium leading-relaxed text-muted-foreground">
                          {h.outcome}
                        </p>
                      </div>

                      {/* Timeline metadata badges */}
                      <div className="flex flex-wrap gap-2.5 items-center">
                        <div className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
                          <Users className="h-3.5 w-3.5 text-muted-foreground/60" />
                          <span>{h.role}</span>
                        </div>
                        <div className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
                          <Timer className="h-3.5 w-3.5 text-muted-foreground/60" />
                          <span>{h.duration}</span>
                        </div>
                        {h.tags.map((tag) => (
                          <Badge
                            key={tag}
                            variant="secondary"
                            className="rounded-full border border-white/[0.08] bg-background px-2.5 py-0.5 font-mono text-[10px] text-muted-foreground"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedDiv>
            ))}
          </StaggerGroup>
        </div>
      </div>
    </AnimatedSection>
  )
}

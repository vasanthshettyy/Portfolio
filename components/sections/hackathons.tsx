"use client"

import { Badge } from "@/components/ui/badge"
import { Timer, Users } from "lucide-react"
import { hackathons } from "@/lib/data"
import {
  AnimatedSection,
  AnimatedDiv,
  StaggerGroup,
  fadeUp,
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
            3 hackathons. Led team-building, architecture formulation, scope-cutting, and system coding.
          </p>
        </div>

        {/* Timeline block */}
        <div className="relative">
          {/* Subtle vertical silver-gray divider line */}
          <div
            className="absolute left-5 top-0 bottom-0 w-px bg-white/[0.06] hidden sm:block"
            aria-hidden="true"
          />

          <StaggerGroup slow className="flex flex-col gap-6">
            {hackathons.map((h, i) => (
              <AnimatedDiv key={i} variants={slideInLeft} className="sm:pl-14 relative">
                {/* Timeline silver pill dot */}
                <div
                  className="absolute left-3.5 top-6 w-3 h-3 rounded-full border-2 border-foreground bg-background hidden sm:block shadow-sm"
                  aria-hidden="true"
                />

                <div className="card-surface ios-hover p-6 bg-surface/30 border border-white/[0.05] rounded-3xl group">
                  <div className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-8">
                    {/* Event Year label */}
                    <div className="shrink-0">
                      <span className="label-mono text-primary font-semibold text-xs tracking-wider">{h.year}</span>
                    </div>

                    <div className="flex-1 space-y-4">
                      {/* Name + outcome description */}
                      <div className="space-y-1">
                        <h3 className="text-base font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                          {h.name}
                        </h3>
                        <p className="text-[13px] font-medium text-muted-foreground leading-relaxed">
                          {h.outcome}
                        </p>
                      </div>

                      {/* Timeline metadata badges */}
                      <div className="flex flex-wrap gap-2.5 items-center">
                        <div className="flex items-center gap-1.5 text-xs text-muted-foreground font-medium">
                          <Users className="w-3.5 h-3.5 text-muted-foreground/60" />
                          <span>{h.role}</span>
                        </div>
                        <div className="flex items-center gap-1.5 text-xs text-muted-foreground font-medium">
                          <Timer className="w-3.5 h-3.5 text-muted-foreground/60" />
                          <span>{h.duration}</span>
                        </div>
                        {h.tags.map((tag) => (
                          <Badge
                            key={tag}
                            variant="secondary"
                            className="text-[10px] font-mono px-2.5 py-0.5 bg-surface-raised/35 text-muted-foreground border border-white/[0.04] rounded-full"
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

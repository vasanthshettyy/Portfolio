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
      className="py-24 px-6 bg-surface/40"
    >
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-12">
          <span className="label-mono mb-3 block">Hackathons</span>
          <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-foreground mb-3">
            Not trophies.{" "}
            <span className="text-brand-gradient">Proof of speed.</span>
          </h2>
          <p className="text-muted-foreground text-sm leading-relaxed max-w-lg">
            3 hackathons. All as team lead. Different constraints — same pattern:
            understand fast, decide fast, build fast.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute left-5 top-0 bottom-0 w-px bg-border/60 hidden sm:block"
            aria-hidden="true"
          />

          <StaggerGroup slow className="flex flex-col gap-6">
            {hackathons.map((h, i) => (
              <AnimatedDiv key={i} variants={slideInLeft} className="sm:pl-14 relative">
                {/* Timeline node */}
                <div
                  className="absolute left-3.5 top-5 w-3 h-3 rounded-full border-2 border-primary bg-background hidden sm:block"
                  aria-hidden="true"
                />

                <div className="card-surface p-5 hover:border-primary/30 transition-all duration-200 group">
                  <div className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-8">
                    {/* Year */}
                    <div className="shrink-0">
                      <span className="label-mono text-primary">{h.year}</span>
                    </div>

                    <div className="flex-1 space-y-3">
                      {/* Name + role */}
                      <div>
                        <h3 className="text-base font-semibold text-foreground group-hover:text-primary transition-colors">
                          {h.name}
                        </h3>
                        <p className="text-sm text-muted-foreground mt-1">
                          {h.outcome}
                        </p>
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 items-center">
                        <span className="flex items-center gap-1 text-xs text-muted-foreground">
                          <Users className="w-3 h-3 text-primary" />
                          {h.role}
                        </span>
                        <span className="flex items-center gap-1 text-xs text-muted-foreground">
                          <Timer className="w-3 h-3 text-primary" />
                          {h.duration}
                        </span>
                        {h.tags.map((tag) => (
                          <Badge
                            key={tag}
                            variant="secondary"
                            className="text-[10px] font-mono px-2 py-0 border border-border/50"
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

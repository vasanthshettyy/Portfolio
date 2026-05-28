"use client"

import {
  Search,
  GitBranch,
  Zap,
  Bug,
  Layers,
  Rocket,
} from "lucide-react"
import { buildProcess } from "@/lib/data"
import {
  AnimatedSection,
  AnimatedDiv,
  StaggerGroup,
  fadeUp,
} from "@/components/motion"

const iconMap: Record<string, React.ElementType> = {
  Search,
  GitBranch,
  Zap,
  Bug,
  Layers,
  Rocket,
}

export function ProcessSection() {
  return (
    <AnimatedSection
      id="process"
      aria-label="How I work — build process"
      className="py-24 px-6"
    >
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-12">
          <span className="label-mono mb-3 block">Process</span>
          <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-foreground mb-3">
            How I actually build things.
          </h2>
          <p className="text-muted-foreground text-sm leading-relaxed max-w-lg">
            Six stages I repeat on every project. This is what separates building
            with intent from building at random.
          </p>
        </div>

        {/* Process stepper grid */}
        <StaggerGroup className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {buildProcess.map((step) => {
            const Icon = iconMap[step.icon]
            return (
              <AnimatedDiv key={step.step} variants={fadeUp}>
                <div className="card-surface-raised p-5 h-full group hover:border-primary/30 transition-all duration-200 relative overflow-hidden">
                  {/* Step number — large background */}
                  <span
                    className="absolute -bottom-3 -right-1 text-7xl font-bold text-foreground/[0.03] font-mono select-none pointer-events-none"
                    aria-hidden="true"
                  >
                    {step.step}
                  </span>

                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/15 transition-colors">
                        <Icon className="w-4 h-4" />
                      </span>
                      <span className="label-mono text-primary">
                        {step.step}
                      </span>
                    </div>
                    <h3 className="text-sm font-semibold text-foreground mb-2">
                      {step.title}
                    </h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </AnimatedDiv>
            )
          })}
        </StaggerGroup>
      </div>
    </AnimatedSection>
  )
}

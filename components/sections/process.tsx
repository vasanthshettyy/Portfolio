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
      className="py-28 px-6"
    >
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-14 space-y-3">
          <span className="label-mono tracking-wider font-semibold text-primary">Process</span>
          <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-foreground">
            How I actually build things.
          </h2>
          <p className="text-muted-foreground text-[14px] leading-relaxed max-w-lg">
            Six distinct engineering disciplines I run sequentially on every architecture.
          </p>
        </div>

        {/* Process layout grid */}
        <StaggerGroup className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {buildProcess.map((step) => {
            const Icon = iconMap[step.icon]
            return (
              <AnimatedDiv key={step.step} variants={fadeUp}>
                <div className="card-surface-raised group relative h-full overflow-hidden rounded-3xl border border-white/[0.08] bg-surface p-7 ios-hover">
                  {/* Step number — large luxury background typography */}
                  <span
                    className="pointer-events-none absolute -bottom-5 -right-2 select-none font-mono text-8xl font-black text-foreground/[0.03] transition-colors duration-500 group-hover:text-foreground/[0.05]"
                    aria-hidden="true"
                  >
                    {step.step}
                  </span>

                  <div className="relative z-10 space-y-4">
                    <div className="flex items-center gap-3">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-2xl border border-white/[0.08] bg-background text-foreground transition-all duration-300 group-hover:border-white/20">
                        <Icon className="h-4 w-4" />
                      </span>
                      <span className="label-mono text-[10px] font-semibold tracking-wide text-primary">
                        STEP {step.step}
                      </span>
                    </div>
                    <div className="space-y-1.5">
                      <h3 className="text-[14px] font-bold text-foreground tracking-tight">
                        {step.title}
                      </h3>
                      <p className="text-[12px] text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                    </div>
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

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
                <div className="card-surface-raised ios-hover p-7 h-full border border-white/[0.04] bg-surface-raised/40 hover:border-white/[0.1] rounded-3xl relative overflow-hidden group">
                  {/* Step number — large luxury background typography */}
                  <span
                    className="absolute -bottom-5 -right-2 text-8xl font-black text-foreground/[0.02] font-mono select-none pointer-events-none group-hover:text-primary/[0.04] transition-colors duration-500"
                    aria-hidden="true"
                  >
                    {step.step}
                  </span>

                  <div className="relative z-10 space-y-4">
                    <div className="flex items-center gap-3">
                      <span className="flex items-center justify-center w-9 h-9 rounded-2xl bg-foreground/[0.04] text-foreground shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                        <Icon className="w-4 h-4" />
                      </span>
                      <span className="label-mono text-primary font-semibold text-[10px] tracking-wide">
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

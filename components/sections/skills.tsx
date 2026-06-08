"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import {
  Code2,
  Monitor,
  Server,
  Database,
  Wrench,
  Lightbulb,
} from "lucide-react"
import { skillGroups } from "@/lib/data"
import {
  AnimatedSection,
  AnimatedDiv,
  StaggerGroup,
  fadeUp,
} from "@/components/motion"

const iconMap: Record<string, React.ElementType> = {
  Code2,
  Monitor,
  Server,
  Database,
  Wrench,
  Lightbulb,
}

const usedAndShippedSkills = new Set([
  "JavaScript",
  "PHP",
  "SQL",
  "React",
  "Tailwind CSS",
  "PHP (Native)",
  "Node.js",
  "Authentication Systems",
  "MySQL",
  "Supabase (PostgreSQL)",
  "Database Design",
  "Git",
  "GitHub",
  "Vercel",
  "AI-Assisted Development",
  "Rapid Prototyping",
  "System Architecture",
  "HTML",
  "CSS",
])

export function SkillsSection() {
  return (
    <AnimatedSection
      id="skills"
      aria-label="Technical skills"
      className="py-28 px-6 bg-surface/20"
    >
      <div className="mx-auto max-w-6xl">
        {/* Section header */}
        <div className="mb-12 space-y-3">
          <span className="label-mono tracking-wider font-semibold text-primary">Skills</span>
          <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-foreground">
            A system, not a list.
          </h2>
          <p className="text-muted-foreground text-[14px] leading-relaxed max-w-lg">
            Skills organized by domain. Highlighted tags indicate hands-on implementation in shipped projects.
          </p>
        </div>

        <StaggerGroup>
          <AnimatedDiv variants={fadeUp}>
            <Tabs defaultValue={skillGroups[0].category} className="w-full">
              {/* Tab list with Apple premium macOS Segmented Control styling */}
              <TabsList
                className="mb-8 flex h-auto flex-wrap gap-1 rounded-2xl border border-white/[0.08] bg-background p-1"
                role="tablist"
              >
                {skillGroups.map((group) => {
                  const Icon = iconMap[group.icon]
                  return (
                    <TabsTrigger
                      key={group.category}
                      value={group.category}
                      id={`skills-tab-${group.category.toLowerCase().replace(/\s+/g, "-")}`}
                    className="flex cursor-pointer items-center gap-2 rounded-xl px-4 py-2 text-xs font-semibold text-muted-foreground transition-all duration-300 data-[state=active]:bg-foreground data-[state=active]:text-background data-[state=active]:shadow-sm hover:text-foreground"
                  >
                      <Icon className="w-3.5 h-3.5" />
                      {group.category}
                    </TabsTrigger>
                  )
                })}
              </TabsList>

              {/* Tab content */}
              {skillGroups.map((group) => (
                <TabsContent
                  key={group.category}
                  value={group.category}
                  className="mt-0 focus-visible:outline-none"
                >
                  <div className="card-surface rounded-3xl border border-white/[0.08] bg-surface p-8">
                    <div className="flex flex-wrap gap-2.5">
                      {group.skills.map((skill) => {
                        const isUsedAndShipped = usedAndShippedSkills.has(skill)
                        return (
                          <Badge
                            key={skill}
                            variant={isUsedAndShipped ? "default" : "secondary"}
                            className={
                              isUsedAndShipped
                                ? "px-4 py-1.5 text-xs font-mono font-medium rounded-full cursor-default bg-foreground text-background border-none hover:opacity-90 transition-all duration-300 scale-95 hover:scale-100 shadow-sm"
                                : "px-4 py-1.5 text-xs font-mono font-medium rounded-full cursor-default bg-background text-foreground border border-white/[0.08] hover:bg-surface transition-all duration-300 scale-95 hover:scale-100"
                            }
                          >
                            {skill}
                            {isUsedAndShipped && (
                              <span className="ml-2 w-1.5 h-1.5 rounded-full bg-background inline-block animate-pulse" />
                            )}
                          </Badge>
                        )
                      })}
                    </div>

                    {/* Highly premium Apple-style Legend */}
                    <div className="mt-8 flex flex-wrap items-center gap-6 border-t border-white/[0.08] pt-5 font-mono text-[11px] font-medium text-muted-foreground">
                      <span className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-foreground inline-block" />
                        Used and shipped
                      </span>
                      <span className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-surface-raised/80 border border-white/[0.06] inline-block" />
                        Studied / practiced
                      </span>
                    </div>
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </AnimatedDiv>
        </StaggerGroup>
      </div>
    </AnimatedSection>
  )
}

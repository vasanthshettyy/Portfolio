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
  scaleIn,
} from "@/components/motion"

const iconMap: Record<string, React.ElementType> = {
  Code2,
  Monitor,
  Server,
  Database,
  Wrench,
  Lightbulb,
}

const provenSkills = new Set([
  "JavaScript",
  "TypeScript",
  "PHP",
  "SQL",
  "React",
  "Next.js",
  "Tailwind CSS",
  "PHP (Native)",
  "Node.js",
  "Next.js API Routes",
  "REST APIs",
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
])

export function SkillsSection() {
  return (
    <AnimatedSection
      id="skills"
      aria-label="Technical skills"
      className="py-24 px-6 bg-surface/40"
    >
      <div className="mx-auto max-w-6xl">
        {/* Section header */}
        <div className="mb-12">
          <span className="label-mono mb-3 block">Skills</span>
          <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-foreground mb-3">
            A system, not a list.
          </h2>
          <p className="text-muted-foreground text-sm leading-relaxed max-w-lg">
            Skills grouped by domain. Highlighted skills have been used in real
            shipped projects.
          </p>
        </div>

        <StaggerGroup>
          <AnimatedDiv variants={fadeUp}>
            <Tabs defaultValue={skillGroups[0].category} className="w-full">
              {/* Tab list */}
              <TabsList
                className="flex flex-wrap h-auto gap-1 bg-surface border border-border/60 p-1 rounded-xl mb-8"
                role="tablist"
              >
                {skillGroups.map((group) => {
                  const Icon = iconMap[group.icon]
                  return (
                    <TabsTrigger
                      key={group.category}
                      value={group.category}
                      id={`skills-tab-${group.category.toLowerCase().replace(/\s+/g, "-")}`}
                      className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-lg data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
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
                  className="mt-0"
                >
                  <div className="card-surface p-6">
                    <div className="flex flex-wrap gap-2.5">
                      {group.skills.map((skill) => {
                        const isProven = provenSkills.has(skill)
                        return (
                          <div key={skill} className="relative group">
                            <Badge
                              variant={isProven ? "default" : "secondary"}
                              className={
                                isProven
                                  ? "px-3 py-1 text-sm font-mono cursor-default bg-primary/15 text-primary border border-primary/30 hover:bg-primary/20 transition-all duration-200 hover:scale-105"
                                  : "px-3 py-1 text-sm font-mono cursor-default border border-border/50 hover:bg-accent/60 transition-all duration-200 hover:scale-105"
                              }
                            >
                              {skill}
                              {isProven && (
                                <span className="ml-1.5 w-1.5 h-1.5 rounded-full bg-primary inline-block" />
                              )}
                            </Badge>
                          </div>
                        )
                      })}
                    </div>

                    {/* Legend */}
                    <div className="mt-6 pt-4 border-t border-border/40 flex items-center gap-4 text-[11px] text-muted-foreground font-mono">
                      <span className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block" />
                        Used in shipped projects
                      </span>
                      <span className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground/50 inline-block" />
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

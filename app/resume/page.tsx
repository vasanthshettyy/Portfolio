"use client"

import * as React from "react"
import Link from "next/link"
import { ArrowLeft, Printer, Mail, MapPin, GraduationCap, Award, Briefcase, Code2, ExternalLink } from "lucide-react"
import { GithubIcon, LinkedinIcon } from "@/components/icons"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { personal, skillGroups, projects, hackathons } from "@/lib/data"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function ResumePage() {
  const handlePrint = () => {
    window.print()
  }

  return (
    <>
      <div className="print:hidden">
        <Navbar />
      </div>

      <main className="min-h-screen pt-28 pb-16 px-6 bg-background text-foreground relative overflow-hidden print:bg-white print:text-black print:p-0 print:pt-0 print:min-h-0">
        <div className="mx-auto max-w-4xl relative">
          
          {/* Controls Bar */}
          <div className="flex items-center justify-between gap-4 mb-8 print:hidden">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-xs font-semibold tracking-wide text-muted-foreground hover:text-foreground transition-colors duration-200 group cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform duration-200" />
              BACK TO PORTFOLIO
            </Link>

            <Button
              onClick={handlePrint}
              size="sm"
              className="gap-2 bg-foreground text-background hover:bg-foreground/90 rounded-xl font-semibold ios-hover cursor-pointer"
            >
              <Printer className="w-4 h-4" />
              Print / Save PDF
            </Button>
          </div>

          {/* Resume Container (A4 Proportions on Screen, Flat on Print) */}
          <div className="w-full bg-surface/30 backdrop-blur-xl border border-white/[0.05] rounded-3xl p-8 md:p-12 shadow-2xl print:shadow-none print:border-none print:bg-transparent print:p-0 print:rounded-none">
            
            {/* Header Block */}
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 pb-8 border-b border-white/[0.06] print:border-black/[0.1] print:pb-6">
              <div className="space-y-2.5">
                <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground print:text-black">
                  {personal.name}
                </h1>
                <p className="text-base font-semibold font-mono uppercase tracking-wider text-primary print:text-black/80">
                  {personal.tagline}
                </p>
                <p className="text-sm text-muted-foreground max-w-xl leading-relaxed print:text-black/70 print:text-xs">
                  {personal.bio}
                </p>
              </div>

              {/* Contact Information */}
              <div className="flex flex-col gap-2.5 text-xs text-muted-foreground font-mono print:text-black/80 print:text-[11px] shrink-0 md:text-right md:items-end">
                <span className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-primary print:text-black" />
                  {personal.location}
                </span>
                <a href={`mailto:${personal.email}`} className="flex items-center gap-2 hover:text-foreground transition-colors">
                  <Mail className="w-3.5 h-3.5 text-primary print:text-black" />
                  {personal.email}
                </a>
                <a href={personal.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-foreground transition-colors">
                  <GithubIcon className="w-3.5 h-3.5 text-primary print:text-black shrink-0" />
                  github.com/vasanthshettyy
                </a>
                <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-foreground transition-colors">
                  <LinkedinIcon className="w-3.5 h-3.5 text-primary print:text-black shrink-0" />
                  linkedin.com/in/vasanthshettyy
                </a>
              </div>
            </div>

            {/* Grid for two column section */}
            <div className="grid md:grid-cols-3 gap-8 pt-8 print:pt-6 print:gap-6">
              
              {/* Left Column: Education & Skills */}
              <div className="space-y-8 md:col-span-1 print:space-y-6">
                {/* Education */}
                <div className="space-y-4">
                  <h2 className="text-sm font-semibold tracking-wider font-mono uppercase text-primary border-b border-white/[0.04] pb-1.5 flex items-center gap-2 print:text-black print:border-black/[0.1]">
                    <GraduationCap className="w-4 h-4" />
                    Education
                  </h2>
                  <div className="space-y-2">
                    <h3 className="text-xs font-bold text-foreground print:text-black font-mono">
                      Bachelor of Computer Applications (BCA)
                    </h3>
                    <p className="text-[11px] text-muted-foreground print:text-black/70">
                      CGPA: <strong className="text-foreground print:text-black">{personal.cgpa}/10</strong> (up to Sem 5)
                    </p>
                    <p className="text-[11px] text-muted-foreground print:text-black/60">
                      Graduation Year: {personal.graduationYear}
                    </p>
                  </div>
                </div>

                {/* Skills */}
                <div className="space-y-4">
                  <h2 className="text-sm font-semibold tracking-wider font-mono uppercase text-primary border-b border-white/[0.04] pb-1.5 flex items-center gap-2 print:text-black print:border-black/[0.1]">
                    <Code2 className="w-4 h-4" />
                    Technical Skills
                  </h2>
                  <div className="space-y-3.5">
                    {skillGroups.map((group) => (
                      <div key={group.category} className="space-y-1.5">
                        <span className="text-[10px] font-bold font-mono text-foreground/80 uppercase print:text-black/90 block">
                          {group.category}
                        </span>
                        <div className="flex flex-wrap gap-1">
                          {group.skills.map((skill) => (
                            <Badge
                              key={skill}
                              variant="secondary"
                              className="text-[9px] font-mono px-2 py-0.5 bg-surface-raised/40 text-foreground border border-white/[0.04] rounded-full print:bg-black/[0.05] print:text-black print:border-none"
                            >
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Projects & Hackathons */}
              <div className="space-y-8 md:col-span-2 print:space-y-6">
                
                {/* Projects */}
                <div className="space-y-4">
                  <h2 className="text-sm font-semibold tracking-wider font-mono uppercase text-primary border-b border-white/[0.04] pb-1.5 flex items-center gap-2 print:text-black print:border-black/[0.1]">
                    <Briefcase className="w-4 h-4" />
                    Selected Projects
                  </h2>
                  <div className="space-y-5">
                    {projects.map((project) => (
                      <div key={project.slug} className="space-y-1.5">
                        <div className="flex items-center justify-between gap-2 flex-wrap">
                          <h3 className="text-sm font-bold text-foreground print:text-black">
                            {project.name}
                          </h3>
                          <span className="text-[10px] font-mono text-muted-foreground print:text-black/70">
                            {project.type}
                          </span>
                        </div>
                        <p className="text-xs text-muted-foreground leading-relaxed print:text-black/80">
                          {project.description}
                        </p>
                        <div className="text-[11px] font-mono text-muted-foreground print:text-black/70">
                          <strong className="text-foreground/80 print:text-black">Key Accomplishments:</strong>
                          <ul className="list-disc list-inside mt-1 space-y-0.5 pl-1.5">
                            {project.highlights.map((highlight, idx) => (
                              <li key={idx} className="leading-relaxed">
                                {highlight}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="flex flex-wrap gap-1 pt-1.5">
                          {project.tech.map((t) => (
                            <Badge
                              key={t}
                              variant="outline"
                              className="text-[9px] font-mono px-1.5 py-0 border-white/[0.05] bg-surface-raised/20 text-muted-foreground print:border-black/[0.1] print:text-black/70"
                            >
                              {t}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Hackathons */}
                <div className="space-y-4">
                  <h2 className="text-sm font-semibold tracking-wider font-mono uppercase text-primary border-b border-white/[0.04] pb-1.5 flex items-center gap-2 print:text-black print:border-black/[0.1]">
                    <Award className="w-4 h-4" />
                    Hackathons & Sprint Builds
                  </h2>
                  <div className="space-y-4">
                    {hackathons.map((h, idx) => (
                      <div key={idx} className="space-y-1">
                        <div className="flex items-center justify-between gap-2 flex-wrap">
                          <h3 className="text-xs font-bold text-foreground print:text-black">
                            {h.name} — <span className="text-primary print:text-black/80 font-mono text-[11px] font-semibold">{h.role}</span>
                          </h3>
                          <span className="text-[10px] font-mono text-muted-foreground print:text-black/70">
                            {h.year} ({h.duration})
                          </span>
                        </div>
                        <p className="text-xs text-muted-foreground leading-relaxed print:text-black/80">
                          {h.outcome}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

            </div>

          </div>

        </div>
      </main>

      <div className="print:hidden">
        <Footer />
      </div>
    </>
  )
}

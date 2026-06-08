"use client"

import * as React from "react"
import Link from "next/link"
import { Mail, Copy, Check } from "lucide-react"
import { GithubIcon, LinkedinIcon } from "@/components/icons"
import { Button } from "@/components/ui/button"
import { ResumeModal } from "@/components/resume-modal"
import { personal } from "@/lib/data"
import {
  AnimatedSection,
  AnimatedDiv,
  StaggerGroup,
  fadeUp,
  scaleIn,
} from "@/components/motion"

function CopyEmail() {
  const [copied, setCopied] = React.useState(false)

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(personal.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // fallback
    }
  }

  return (
    <button
      id="contact-copy-email"
      onClick={copy}
      className="group flex w-full cursor-pointer items-center gap-3 rounded-2xl border border-white/[0.08] bg-surface px-5 py-4 text-left transition-all duration-300 hover:bg-surface-raised"
      aria-label="Copy email address"
    >
      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl border border-white/[0.08] bg-background text-foreground transition-all duration-300 group-hover:border-white/20">
        <Mail className="h-4 w-4 shrink-0" />
      </div>
      <span className="font-mono text-sm font-semibold tracking-tight text-foreground/90">
        {personal.email}
      </span>
      <span className="ml-auto">
        {copied ? (
          <span className="flex items-center gap-1.5 text-xs font-semibold text-emerald-500 font-mono">
            <Check className="w-3.5 h-3.5" />
            COPIED
          </span>
        ) : (
          <Copy className="w-3.5 h-3.5 text-muted-foreground group-hover:text-foreground transition-colors duration-200" />
        )}
      </span>
    </button>
  )
}

export function ContactSection() {
  return (
    <AnimatedSection
      id="contact"
      aria-label="Contact and links"
      className="py-28 px-6 bg-surface/20"
    >
      <div className="mx-auto max-w-6xl">
        <StaggerGroup className="max-w-2xl mx-auto text-center space-y-8">
          {/* Header */}
          <AnimatedDiv variants={fadeUp} className="space-y-3">
            <span className="label-mono tracking-wider font-semibold text-primary">Contact</span>
            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-foreground">
              Let&apos;s work on something real.
            </h2>
            <p className="text-muted-foreground text-[14px] leading-relaxed">
              I&apos;m looking for internship roles and early-stage startup opportunities. If you&apos;re building a product and need a fast, detail-oriented full-stack engineer — let&apos;s build together.
            </p>
          </AnimatedDiv>

          {/* Contact options block */}
          <AnimatedDiv variants={scaleIn} className="flex flex-col gap-4 max-w-md mx-auto">
            <CopyEmail />
            <div className="grid grid-cols-2 gap-4">
              <Button
                id="contact-github-btn"
                asChild
                variant="outline"
                className="h-11 cursor-pointer gap-2 rounded-2xl border border-white/[0.08] bg-background font-semibold ios-hover hover:bg-surface"
              >
                <Link
                  href={personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GithubIcon className="w-4 h-4 text-foreground/80" />
                  GitHub
                </Link>
              </Button>
              <Button
                id="contact-linkedin-btn"
                asChild
                variant="outline"
                className="h-11 cursor-pointer gap-2 rounded-2xl border border-white/[0.08] bg-background font-semibold ios-hover hover:bg-surface"
              >
                <Link
                  href={personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LinkedinIcon className="w-4 h-4 text-foreground/80" />
                  LinkedIn
                </Link>
              </Button>
            </div>
            <ResumeModal>
              <Button
                id="contact-resume-btn"
                variant="outline"
                className="h-11 w-full cursor-pointer gap-2 rounded-2xl border border-white/[0.08] bg-background font-semibold ios-hover hover:bg-surface"
              >
                View & Download Resume
              </Button>
            </ResumeModal>
          </AnimatedDiv>

          {/* Status availability badge */}
          <AnimatedDiv
            variants={fadeUp}
            className="flex items-center justify-center gap-2 pt-4"
          >
            <div className="flex items-center gap-2 rounded-full border border-white/[0.08] bg-surface px-3 py-1 shadow-sm">
              <span className="pulse-dot animate-pulse" aria-hidden="true" />
              <span className="text-[10px] font-semibold tracking-wide text-muted-foreground uppercase">
                {personal.availability}
              </span>
            </div>
          </AnimatedDiv>
        </StaggerGroup>
      </div>
    </AnimatedSection>
  )
}

"use client"

import * as React from "react"
import Link from "next/link"
import { Mail, Copy, Check } from "lucide-react"
import { GithubIcon, LinkedinIcon } from "@/components/icons"
import { Button } from "@/components/ui/button"
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
      // fallback: do nothing
    }
  }

  return (
    <button
      id="contact-copy-email"
      onClick={copy}
      className="group flex items-center gap-2.5 px-4 py-3 rounded-xl border border-border/60 bg-surface hover:border-primary/40 hover:bg-primary/5 transition-all duration-200 w-full text-left"
      aria-label="Copy email address"
    >
      <Mail className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
      <span className="text-sm text-foreground font-mono">
        {personal.email}
      </span>
      <span className="ml-auto">
        {copied ? (
          <Check className="w-3.5 h-3.5 text-emerald-400" />
        ) : (
          <Copy className="w-3.5 h-3.5 text-muted-foreground group-hover:text-primary transition-colors" />
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
      className="py-24 px-6 bg-surface/40"
    >
      <div className="mx-auto max-w-6xl">
        <StaggerGroup className="max-w-2xl mx-auto text-center">
          {/* Header */}
          <AnimatedDiv variants={fadeUp}>
            <span className="label-mono mb-4 block">Contact</span>
            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-foreground mb-4">
              Let&apos;s work on something real.
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed mb-10">
              I&apos;m looking for internship roles and early-stage startup
              opportunities. If you&apos;re building something and need someone
              who can write backend logic, design systems, and ship fast — reach
              out.
            </p>
          </AnimatedDiv>

          {/* Contact options */}
          <AnimatedDiv variants={scaleIn} className="flex flex-col gap-3 mb-8">
            <CopyEmail />
            <div className="grid grid-cols-2 gap-3">
              <Button
                id="contact-github-btn"
                asChild
                variant="outline"
                className="gap-2 border-border/60 hover:border-primary/40 hover:bg-primary/5"
              >
                <Link
                  href={personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GithubIcon className="w-4 h-4" />
                  GitHub
                </Link>
              </Button>
              <Button
                id="contact-linkedin-btn"
                asChild
                variant="outline"
                className="gap-2 border-border/60 hover:border-primary/40 hover:bg-primary/5"
              >
                <Link
                  href={personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LinkedinIcon className="w-4 h-4" />
                  LinkedIn
                </Link>
              </Button>
            </div>
          </AnimatedDiv>

          {/* Status */}
          <AnimatedDiv
            variants={fadeUp}
            className="flex items-center justify-center gap-2"
          >
            <span className="pulse-dot" aria-hidden="true" />
            <span className="label-mono text-[0.65rem]">
              {personal.availability}
            </span>
          </AnimatedDiv>
        </StaggerGroup>
      </div>
    </AnimatedSection>
  )
}

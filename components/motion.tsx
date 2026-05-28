"use client"

import * as React from "react"
import { motion, useReducedMotion } from "framer-motion"
import type { Variants } from "framer-motion"

// ─── Shared animation variants ─────────────────────────────────────────

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
}

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
}

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1 },
}

export const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0 },
}

export const slideInRight: Variants = {
  hidden: { opacity: 0, x: 30 },
  visible: { opacity: 1, x: 0 },
}

// ─── Default transition ────────────────────────────────────────────────
export const defaultTransition = {
  duration: 0.5,
  ease: [0.25, 0.4, 0.25, 1] as const,
}

// ─── Stagger container ─────────────────────────────────────────────────
export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
}

export const staggerContainerSlow: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15,
    },
  },
}

// ─── Section wrapper with viewport-triggered animation ─────────────────
export function AnimatedSection({
  children,
  className,
  id,
  "aria-label": ariaLabel,
  delay = 0,
}: {
  children: React.ReactNode
  className?: string
  id?: string
  "aria-label"?: string
  delay?: number
}) {
  const prefersReducedMotion = useReducedMotion()

  return (
    <motion.section
      id={id}
      aria-label={ariaLabel}
      className={className}
      initial={prefersReducedMotion ? "visible" : "hidden"}
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={fadeUp}
      transition={{ ...defaultTransition, delay }}
    >
      {children}
    </motion.section>
  )
}

// ─── Animated div (for child elements) ─────────────────────────────────
export function AnimatedDiv({
  children,
  className,
  variants = fadeUp,
  ...props
}: {
  children: React.ReactNode
  className?: string
  variants?: Variants
} & Omit<React.ComponentProps<typeof motion.div>, "variants">) {
  return (
    <motion.div className={className} variants={variants} {...props}>
      {children}
    </motion.div>
  )
}

// ─── Stagger wrapper ───────────────────────────────────────────────────
export function StaggerGroup({
  children,
  className,
  slow = false,
}: {
  children: React.ReactNode
  className?: string
  slow?: boolean
}) {
  const prefersReducedMotion = useReducedMotion()

  return (
    <motion.div
      className={className}
      initial={prefersReducedMotion ? "visible" : "hidden"}
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={slow ? staggerContainerSlow : staggerContainer}
    >
      {children}
    </motion.div>
  )
}

// Re-export motion for direct use
export { motion, useReducedMotion }

import Link from "next/link"
import { personal } from "@/lib/data"
import { ResumeModal } from "@/components/resume-modal"

export function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-white/[0.04] py-8 px-6">
      <div className="mx-auto max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
        <span className="font-mono">
          © {year} {personal.name}
        </span>
        <div className="flex items-center gap-3 font-mono">
          <ResumeModal>
            <button className="hover:text-foreground transition-colors cursor-pointer bg-transparent border-none p-0 font-mono text-xs text-muted-foreground outline-none">
              Resume
            </button>
          </ResumeModal>
          <span>·</span>
          <span>Built with Next.js & Vercel</span>
        </div>
      </div>
    </footer>
  )
}

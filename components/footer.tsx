import { personal } from "@/lib/data"
import { ResumeModal } from "@/components/resume-modal"

export function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-white/[0.08] px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 text-xs text-muted-foreground sm:flex-row">
        <span className="font-mono tracking-[0.2em] uppercase">
          © {year} {personal.name}
        </span>
        <div className="flex items-center gap-3 font-mono uppercase tracking-[0.18em]">
          <ResumeModal>
            <button className="cursor-pointer border-none bg-transparent p-0 font-mono text-xs text-muted-foreground outline-none transition-colors hover:text-foreground">
              Resume
            </button>
          </ResumeModal>
          <span className="text-white/25">/</span>
          <span>Next.js + Vercel</span>
        </div>
      </div>
    </footer>
  )
}

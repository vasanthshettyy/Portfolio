import { personal } from "@/lib/data"

export function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-border/40 py-8 px-6">
      <div className="mx-auto max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
        <span className="font-mono">
          © {year} {personal.name}
        </span>
        <span className="font-mono">
          Built with Next.js · Deployed on Vercel
        </span>
      </div>
    </footer>
  )
}

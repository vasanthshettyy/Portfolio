"use client"

import * as React from "react"
import { Dialog, DialogContent, DialogTitle, DialogDescription, DialogClose } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Download, FileText, ExternalLink, X } from "lucide-react"

interface ResumeModalProps {
  children: React.ReactNode
}

export function ResumeModal({ children }: ResumeModalProps) {
  const [open, setOpen] = React.useState(false)

  type TriggerProps = {
    onClick?: React.MouseEventHandler<HTMLElement>
  }

  const trigger = React.isValidElement<TriggerProps>(children)
    ? React.cloneElement(children, {
        onClick: (e: React.MouseEvent<HTMLElement>) => {
          e.preventDefault()
          setOpen(true)
          const childProps = children.props
          if (childProps && typeof childProps.onClick === "function") {
            childProps.onClick(e)
          }
        }
      })
    : children

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      {trigger}
      <DialogContent showCloseButton={false} className="sm:max-w-4xl w-[95vw] md:w-[90vw] h-[85vh] p-0 bg-background border border-white/[0.08] rounded-2xl overflow-hidden flex flex-col gap-0 overscroll-none">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/[0.08] bg-surface shrink-0">
          <div className="flex items-center gap-3">
            <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10 text-primary">
              <FileText className="w-4 h-4" />
            </span>
            <div className="text-left">
              <DialogTitle className="text-sm font-bold text-foreground">
                Vasanth Shetty — Resume
              </DialogTitle>
              <DialogDescription className="text-[10px] text-muted-foreground font-mono mt-0.5">
                vasanth_shetty_resume.pdf
              </DialogDescription>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button
              asChild
              variant="outline"
              size="icon"
              className="w-8 h-8 border-white/[0.05] bg-surface/30 hover:bg-surface-raised/40 cursor-pointer text-muted-foreground hover:text-foreground"
              title="Open Raw PDF"
            >
              <a href="/assets/docs/resume.pdf" target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="icon"
              className="w-8 h-8 border-white/[0.05] bg-surface/30 hover:bg-surface-raised/40 cursor-pointer text-muted-foreground hover:text-foreground"
              title="Download PDF"
            >
              <a href="/assets/docs/resume.pdf" download="Vasanth_Shetty_Resume.pdf">
                <Download className="w-3.5 h-3.5" />
              </a>
            </Button>
            <DialogClose asChild>
              <Button
                variant="ghost"
                size="icon"
                className="w-8 h-8 hover:bg-surface-raised/40 cursor-pointer text-muted-foreground hover:text-foreground"
                title="Close"
              >
                <X className="w-4 h-4" />
                <span className="sr-only">Close</span>
              </Button>
            </DialogClose>
          </div>
        </div>

        {/* PDF viewer frame with scrollbar clipping */}
        <div className="flex-1 bg-black/20 relative w-full h-full min-h-0 overflow-hidden overscroll-none">
          <iframe
            src="/assets/docs/resume.pdf#zoom=90&toolbar=1&navpanes=0&scrollbar=0"
            className="border-none overflow-hidden max-w-none"
            scrolling="no"
            style={{ width: "calc(100% + 30px)", height: "100%", overflow: "hidden", marginLeft: "-15px", maxWidth: "none" }}
            title="Vasanth Shetty Resume PDF"
          />
        </div>

      </DialogContent>
    </Dialog>
  )
}

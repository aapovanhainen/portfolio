import { FileText } from "lucide-react"
import { Button } from "@/components/ui/button"

export function AudioSection() {
  return (
    <section id="audio" className="scroll-mt-24">
      <div className="space-y-4 max-w-3xl">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold tracking-tight">Audio</h2>
          <p className="text-sm text-muted-foreground">
            Under construction — audio systems, FMOD work, and sound design examples coming soon.
            Meanwhile, take a look at my Audio CV.
          </p>
        </div>

        <Button
          variant="outline"
          size="sm"
          asChild
          className="w-fit text-xs bg-transparent"
        >
          <a
            href="/portfolio/AapoVanhainen_CV_Audio_GameDevelopment.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FileText className="w-3 h-3 mr-1.5" />
            Audio CV (PDF)
          </a>
        </Button>
      </div>
    </section>
  )
}

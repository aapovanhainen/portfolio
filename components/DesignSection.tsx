import { FileText } from "lucide-react"
import { Button } from "@/components/ui/button"

export function DesignSection() {
  return (
    <section id="design" className="scroll-mt-24">
      <div className="space-y-4 max-w-3xl">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold tracking-tight">Design</h2>
          <p className="text-sm text-muted-foreground">
            Under construction.
            Meanwhile, take a look at my Design CV.
          </p>
        </div>

        <Button
          variant="outline"
          size="sm"
          asChild
          className="w-fit text-xs bg-transparent"
        >
          <a
            href="/portfolio/AapoVanhainen_CV_Design_GameDevelopment.pdf"
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

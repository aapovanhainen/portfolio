import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, FileText, Globe } from "lucide-react"

interface GameLink {
  label: string
  url: string
  type: "steam" | "pdf" | "website"
}

interface GameCardProps {
  title: string
  subtitle: string
  year: string
  studio?: string
  image: string
  roles: string[]
  details: string
  links?: GameLink[]
}

const roleColors: Record<string, string> = {
  // Producer/Publishing
  Producer: "bg-[var(--role-producer)]/20 text-[var(--role-producer)] border-[var(--role-producer)]/30",
  Publishing: "bg-[var(--role-producer)]/20 text-[var(--role-producer)] border-[var(--role-producer)]/30",

  // Design related
  "Game Design": "bg-[var(--role-designer)]/20 text-[var(--role-designer)] border-[var(--role-designer)]/30",
  Design: "bg-[var(--role-designer)]/20 text-[var(--role-designer)] border-[var(--role-designer)]/30",
  Balance: "bg-[var(--role-designer)]/20 text-[var(--role-designer)] border-[var(--role-designer)]/30",

  // Audio related (all purple)
  "Audio Design": "bg-[var(--role-audio)]/20 text-[var(--role-audio)] border-[var(--role-audio)]/30",
  "Audio Production": "bg-[var(--role-audio)]/20 text-[var(--role-audio)] border-[var(--role-audio)]/30",
  "Foley Sound Production": "bg-[var(--role-audio)]/20 text-[var(--role-audio)] border-[var(--role-audio)]/30",
  "Audio Editing": "bg-[var(--role-audio)]/20 text-[var(--role-audio)] border-[var(--role-audio)]/30",
  "Audio & Systems Integration": "bg-[var(--role-audio)]/20 text-[var(--role-audio)] border-[var(--role-audio)]/30",
  FMOD: "bg-[var(--role-audio)]/20 text-[var(--role-audio)] border-[var(--role-audio)]/30",

  // Programming related (all green - includes Combat System, Enemy AI)
  Programming: "bg-[var(--role-programmer)]/20 text-[var(--role-programmer)] border-[var(--role-programmer)]/30",
  "Combat System": "bg-[var(--role-programmer)]/20 text-[var(--role-programmer)] border-[var(--role-programmer)]/30",
  "Enemy AI": "bg-[var(--role-programmer)]/20 text-[var(--role-programmer)] border-[var(--role-programmer)]/30",
  "Ragdoll System": "bg-[var(--role-programmer)]/20 text-[var(--role-programmer)] border-[var(--role-programmer)]/30",
  Implementation: "bg-[var(--role-programmer)]/20 text-[var(--role-programmer)] border-[var(--role-programmer)]/30",

  // Level Design (yellow)
  "Level Design": "bg-[var(--role-level)]/20 text-[var(--role-level)] border-[var(--role-level)]/30",

  // QA
  QA: "bg-secondary text-secondary-foreground border-border",
}

export function GameCard({ title, subtitle, year, studio, image, roles, details, links }: GameCardProps) {
  return (
    <div className="bg-card border border-border rounded-lg overflow-hidden">
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-64 h-40 md:h-auto shrink-0">
          <img src={image || "/placeholder.svg"} alt={title} className="w-full h-full object-cover" />
        </div>

        <div className="flex-1 p-5">
          <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
            <div>
              <h3 className="text-lg font-semibold text-foreground">{title}</h3>
              <p className="text-sm text-muted-foreground">
                {studio && <span>{studio} • </span>}
                {year}
              </p>
            </div>
          </div>

          <p className="text-foreground/80 text-sm mb-3">{subtitle}</p>

          <div className="flex flex-wrap gap-2 mb-3">
            {roles.map((role) => (
              <Badge
                key={role}
                variant="outline"
                className={`text-xs ${roleColors[role] || "bg-secondary text-secondary-foreground"}`}
              >
                {role}
              </Badge>
            ))}
          </div>

          {links && links.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-3">
              {links.map((link) => (
                <Button key={link.label} variant="outline" size="sm" asChild className="text-xs bg-transparent">
                  <a href={link.url} target="_blank" rel="noopener noreferrer">
                    {link.type === "steam" ? (
                      <ExternalLink className="w-3 h-3 mr-1.5" />
                    ) : link.type === "website" ? (
                      <Globe className="w-3 h-3 mr-1.5" />
                    ) : (
                      <FileText className="w-3 h-3 mr-1.5" />
                    )}
                    {link.label}
                  </a>
                </Button>
              ))}
            </div>
          )}

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="details" className="border-border">
              <AccordionTrigger className="text-sm text-muted-foreground hover:text-foreground py-2">
                Read more
              </AccordionTrigger>
              <AccordionContent>
                <div className="text-foreground/90 text-sm leading-relaxed whitespace-pre-line pt-2">{details}</div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  )
}

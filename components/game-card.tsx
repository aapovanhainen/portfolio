"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, FileText, Globe } from "lucide-react"
import * as React from "react"

interface GameLink {
  label: string
  url: string
  type: "steam" | "pdf" | "website" | "itchio"
}

interface GameCardProps {
  title: string
  subtitle: string
  year: string
  studio?: string
  workdescription?: string
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
  "Systems Design": "bg-[var(--role-designer)]/20 text-[var(--role-designer)] border-[var(--role-designer)]/30",
  "Economy Design": "bg-[var(--role-designer)]/20 text-[var(--role-designer)] border-[var(--role-designer)]/30",
  "Combat Design": "bg-[var(--role-designer)]/20 text-[var(--role-designer)] border-[var(--role-designer)]/30",
  Balance: "bg-[var(--role-designer)]/20 text-[var(--role-designer)] border-[var(--role-designer)]/30",

  // Level Design (yellow)
  "Level Design": "bg-[var(--role-level)]/20 text-[var(--role-level)] border-[var(--role-level)]/30",

  // Audio related (all purple)
  "Audio Design": "bg-[var(--role-audio)]/20 text-[var(--role-audio)] border-[var(--role-audio)]/30",
  "Audio Production": "bg-[var(--role-audio)]/20 text-[var(--role-audio)] border-[var(--role-audio)]/30",
  "Foley Sound Production": "bg-[var(--role-audio)]/20 text-[var(--role-audio)] border-[var(--role-audio)]/30",
  "Audio Editing": "bg-[var(--role-audio)]/20 text-[var(--role-audio)] border-[var(--role-audio)]/30",
  "Audio & Systems Integration": "bg-[var(--role-audio)]/20 text-[var(--role-audio)] border-[var(--role-audio)]/30",
  FMOD: "bg-[var(--role-audio)]/20 text-[var(--role-audio)] border-[var(--role-audio)]/30",

  // Programming related (all green)
  Programming: "bg-[var(--role-programmer)]/20 text-[var(--role-programmer)] border-[var(--role-programmer)]/30",
  "Combat System": "bg-[var(--role-programmer)]/20 text-[var(--role-programmer)] border-[var(--role-programmer)]/30",
  "Enemy AI": "bg-[var(--role-programmer)]/20 text-[var(--role-programmer)] border-[var(--role-programmer)]/30",
  "Ragdoll System": "bg-[var(--role-programmer)]/20 text-[var(--role-programmer)] border-[var(--role-programmer)]/30",

  // Neutral / misc
  Documentation: "bg-secondary text-secondary-foreground border-border",
  Mentoring: "bg-secondary text-secondary-foreground border-border",
  Marketing: "bg-secondary text-secondary-foreground border-border",

  // QA
  QA: "bg-[var(--role-qa)]/20 text-[var(--role-qa)] border-[var(--role-qa)]/30",

  // Implementation
  Implementation: "bg-[var(--role-implementation)]/20 text-[var(--role-implementation)] border-[var(--role-implementation)]/30",
}

function extractContributions(details: string): string[] {
  const marker = "My contributions:"
  const idx = details.indexOf(marker)
  if (idx === -1) return []

  const after = details.slice(idx + marker.length).trim()

  // Supports both "• " bullets and plain lines
  const lines = after
    .split("\n")
    .map((l) => l.trim())
    .filter(Boolean)
    .map((l) => l.replace(/^•\s*/, ""))

  return lines
}

export function GameCard({ title, subtitle, year, studio, workdescription, image, roles, details, links }: GameCardProps) {
  const contributions = React.useMemo(() => extractContributions(details), [details])

  return (
    <article className="bg-card border border-border rounded-lg overflow-hidden">
<div className="w-full flex justify-center bg-muted py-4">
<div className="w-full md:w-64 h-40 md:h-auto shrink-0">
      <img
      src={image || "/placeholder.svg"}
      alt={title}
      className="w-full h-full object-cover rounded-md"
      loading="lazy"
    />
  </div>
</div>

      <div className="p-5">
        {/* Title + meta */}
        <div className="flex flex-col gap-1">
          <h3 className="text-lg font-semibold text-foreground">{title}</h3>

          <p className="text-sm text-muted-foreground">
            {studio && <span>{studio} • </span>}
            <span>{year}</span>
            {workdescription && <span> • {workdescription}</span>}
          </p>
        </div>

        {/* One-line description */}
        <p className="mt-2 text-foreground/80 text-sm">{subtitle}</p>

        {/* Role badges */}
        <div className="mt-3 flex flex-wrap gap-2">
          {roles.map((role) => (
            <Badge
              key={role}
              variant="outline"
              className={`text-xs ${roleColors[role] || "bg-secondary text-secondary-foreground border-border"}`}
            >
              {role}
            </Badge>
          ))}
        </div>

        {/* Links */}
        {links && links.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-2">
            {links.map((link) => (
              <Button key={link.label} variant="outline" size="sm" asChild className="text-xs bg-transparent">
                <a href={link.url} target="_blank" rel="noopener noreferrer">
                  {link.type === "website" ? (
                    <Globe className="w-3 h-3 mr-1.5" />
                  ) : link.type === "pdf" ? (
                    <FileText className="w-3 h-3 mr-1.5" />
                  ) : (
                    <ExternalLink className="w-3 h-3 mr-1.5" />
                  )}
                  {link.label}
                </a>
              </Button>
            ))}
          </div>
        )}

        {/* Contributions (pulled from details) */}
        {contributions.length > 0 && (
          <div className="mt-4 border-t border-border pt-4">
            <h4 className="text-sm font-semibold text-foreground mb-2">Contributions</h4>
            <ul className="list-disc pl-5 space-y-1 text-sm text-foreground/90">
              {contributions.map((item, i) => (
                <li key={`${title}-c-${i}`}>{item}</li>
              ))}
            </ul>
          </div>
        )}

        {/* If there are no "My contributions:" lines (board games), show full details */}
        {contributions.length === 0 && details?.trim() && (
          <div className="mt-4 border-t border-border pt-4">
            <p className="text-sm text-foreground/90 leading-relaxed whitespace-pre-line">{details}</p>
          </div>
        )}
      </div>
    </article>
  )
}
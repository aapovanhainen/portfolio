"use client"

import * as React from "react"
import { CodeItem } from "@/lib/code-items"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"

export function CodeSnippetCard({ item }: { item: CodeItem }) {
  const [open, setOpen] = React.useState(false)
  const [copied, setCopied] = React.useState(false)

  async function copyToClipboard() {
    try {
      await navigator.clipboard.writeText(item.code)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 1200)
    } catch {
      // no-op (clipboard permissions)
    }
  }

  return (
    <Card className="overflow-hidden">
      <CardHeader className="gap-2">
        <div className="flex items-start justify-between gap-3">
          <div>
            <CardTitle className="text-lg">{item.title}</CardTitle>
            <p className="mt-1 text-sm text-muted-foreground">{item.subtitle}</p>
          </div>

          <Collapsible open={open} onOpenChange={setOpen}>
            <CollapsibleTrigger asChild>
              <Button variant="outline" size="sm">
                {open ? "Hide code" : "View code"}
              </Button>
            </CollapsibleTrigger>
          </Collapsible>
        </div>

        {item.tags?.length ? (
          <div className="flex flex-wrap gap-2">
            {item.tags.map((t) => (
              <Badge key={t} variant="secondary">
                {t}
              </Badge>
            ))}
          </div>
        ) : null}
      </CardHeader>

      <Collapsible open={open} onOpenChange={setOpen}>
        <CollapsibleContent>
          <Separator />
          <CardContent className="pt-4">
            <div className="flex items-center justify-end gap-2 pb-3">
              <Button onClick={copyToClipboard} size="sm" variant="secondary">
                {copied ? "Copied" : "Copy"}
              </Button>
            </div>

            <pre className="max-h-[420px] overflow-auto rounded-lg border bg-muted/40 p-4 text-xs leading-relaxed">
              <code>{item.code}</code>
            </pre>
            
            {item.pdf && (
  <div className="mt-4 flex justify-end">
    <Button asChild variant="outline" size="sm">
      <a href={item.pdf.url} target="_blank" rel="noopener noreferrer">
        {item.pdf.label ?? "Open PDF"}
      </a>
    </Button>
  </div>
)}


            <p className="mt-3 text-xs text-muted-foreground">
              Tip: keep code excerpts focused. Link to full repo/commit if available.
            </p>
          </CardContent>
        </CollapsibleContent>
      </Collapsible>
    </Card>
  )
}

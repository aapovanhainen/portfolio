import { codeItems } from "@/lib/code-items"
import { CodeSnippetCard } from "@/components/CodeSnippetCard"

export function CodeSection() {
  return (
    <section id="code" className="scroll-mt-24">
      <div className="space-y-2">
        <h2 className="text-2xl font-semibold tracking-tight">Code</h2>
        <p className="text-sm text-muted-foreground">
          Game systems, gameplay scripts, and tools. Expand each entry to read the code.
        </p>
      </div>

      <div className="mt-6 grid gap-4">
        {codeItems.map((item) => (
          <CodeSnippetCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  )
}

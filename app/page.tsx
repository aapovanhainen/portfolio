import { AboutSection } from "@/components/about-section"
import { EducationSection } from "@/components/education-section"
import { VideoGamesSection } from "@/components/video-games-section"
import { BoardGamesSection } from "@/components/board-games-section"
import { Navigation } from "@/components/navigation"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="max-w-5xl mx-auto px-6 py-12 space-y-20">
        <AboutSection />
        <EducationSection />
        <VideoGamesSection />
        <BoardGamesSection />
      </main>
      <footer className="border-t border-border py-8 text-center text-muted-foreground text-sm">
        <p>© 2025 Game Developer Portfolio</p>
      </footer>
    </div>
  )
}

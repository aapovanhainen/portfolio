import { Badge } from "@/components/ui/badge"
import { Mail, Linkedin } from "lucide-react"

const proficiencies = [
  "Unity",
  "C#",
  "Reaper",
  "FMOD",
  "Audacity",
  "Excel",
  "Word",
  "PowerPoint",
  "GitHub",
  "Discord",
  "Steamworks",
]

export function AboutSection() {
  return (
    <section id="about" className="scroll-mt-20">
      <div className="flex flex-col md:flex-row gap-12 items-start">
        <div className="flex-1 space-y-6">
          <div>
            <Badge variant="outline" className="mb-4 text-primary border-primary">
              Game Developer
            </Badge>
            <h1 className="text-4xl font-bold text-foreground mb-2">About Me</h1>
            <p className="text-muted-foreground">Game Designer • Audio Designer • Unity/C# Developer</p>
          </div>

          <div className="space-y-4 text-foreground/90 leading-relaxed">
            <p>
              ▸ Hey! I'm a game developer with a passion for crafting systems and games that feel good to play. My sweet spot is where design meets audio meets code, and bring it all together in Unity.
            </p>
            <p>
              ▸ I shipped <span className="text-primary font-medium">Exsanguination</span> on Steam as producer, designer, programmer 
              and audio lead—handling combat feel, implementation, custom Foley sounds and more. At{" "}
              <span className="text-primary font-medium">Conifer Digital</span>, I worked on{" "}
              <span className="text-primary font-medium">Versebound</span> doing balance, QA, programming, marketing and dynamic audio systems.
              I've built enemy AI and level designs for game jam projects, and created FMOD-integrated dialogue and
              audio systems for <span className="text-primary font-medium">Neverance</span>.
            </p>
            <p>
              ▸ My education at <span className="text-primary font-medium">JAMK</span> covered game programming, Unity, Unreal Engine, software engineering, audio production, digital media, UX and usability, AI, cross-reality technologies, QA, Balance, mobile and online game development, content creation,  and professional skills, including entrepreneurship, project management, business, team collaboration, self-leadership.
              </p>
              <p>
              ▸ My Bachelor's thesis explored Foley sound production workflows for indie studios.
              </p>
              <p>
              ▸ Years of designing
              board games taught me to think in systems, balance, and player feedback loops.
            </p>
          </div>

          <div className="pt-4">
            <p className="text-sm text-muted-foreground mb-3">Proficiencies</p>
            <div className="flex flex-wrap gap-2">
              {proficiencies.map((prof) => (
                <Badge key={prof} variant="secondary" className="bg-card border border-border text-foreground/80">
                  {prof}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        <div className="w-full md:w-72 shrink-0">
          <div className="aspect-square rounded-lg bg-card border border-border overflow-hidden">
            <img src="profile.jpg" alt="Profile photo" className="w-full h-full object-cover" />
          </div>

          <div className="mt-4 space-y-2 text-center">
            <h2 className="text-xl font-semibold text-foreground">Aapo Vanhainen</h2>
            <div className="flex items-center justify-center gap-2 text-muted-foreground text-sm">
              <Mail className="w-4 h-4 text-primary" />
              <a href="mailto:aapo.vanhainen@gmail.com" className="hover:text-primary transition-colors">
                aapo.vanhainen@gmail.com
              </a>
            </div>
            <div className="flex items-center justify-center gap-2 text-muted-foreground text-sm">
              <Linkedin className="w-4 h-4 text-primary" />
              <a
                href="https://www.linkedin.com/in/aapo-vanhainen/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

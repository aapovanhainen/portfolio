import { GameCard } from "@/components/game-card"
import { Gamepad2 } from "lucide-react"

const videoGames = [
  {
    title: "Exsanguination",
    subtitle: "Fast-paced first-person melee action game (Unity)",
    year: "2024",
    studio: "Never Late Production",
    workdescription: "Product Lab (Steam release): 675 hours",
    image: "/portfolio/exsanguination.jpg",
    roles: [
      "Producer",
      "Publishing",
      "Game Design",
      "Audio Design",
      "Audio Production",
      "Foley Sound Production",
      "Audio Editing",
      "Programming",
      "Combat System",
      "Enemy AI",
      "Implementation",
      "Mentoring",
    ],
    links: [
      {
        label: "Steam Page (Link)",
        url: "https://store.steampowered.com/app/3286090/Exsanguination/",
        type: "steam" as const,
      },
      {
        label: "Practical Training Report (PDF)",
        url: "/portfolio/Exsanguination_documentation.pdf",
        type: "pdf" as const,
      },
      {
        label: "Game Design Document (PDF)",
        url: "/portfolio/Exsanguination_GDD.pdf",
        type: "pdf" as const,
      },
      {
        label: "Audio Design Document (PDF)",
        url: "/portfolio/Exsanguination_ADD.pdf",
        type: "pdf" as const,
      },
      {
        label: "Sound Effects (YouTube)",
        url: "https://youtu.be/Fpvl1oyYrO0",
        type: "website" as const,
      },
    ],
    details: `My contributions:
• Producer: task planning and coordination; scope and milestone tracking
• Steam release: store page setup and build management in Steamworks
• Combat & movement: attacks, combos, parry mechanics, and movement abilities (Unity)
• Enemies & encounters: designed and implemented two enemy types, combat encounters, and tutorial flow
• Documentation: wrote and maintained the Game Design Document and Audio Design Document
• Audio: Foley recording, sound effect production, audio editing, and in-engine implementation
• Music: dynamic level-based transitions for music
• Mentoring: guided a junior programmer on gameplay systems and Unity implementation`,
  },
  {
    title: "Versebound",
    subtitle: "2D action roguelike inspired by Kalevala folklore (Unity)",
    year: "2025",
    studio: "Conifer Digital",
    workdescription: "Practical Training: 463 hours",
    image: "/portfolio/versebound.jpg",
    roles: ["Balance", "QA", "Programming", "Implementation", "Audio Production", "Audio Editing", "Marketing"],
    links: [
      {
        label: "Steam Page (Link)",
        url: "https://store.steampowered.com/app/2672520/Versebound/",
        type: "steam" as const,
      },
      {
        label: "Practical Training Report (PDF)",
        url: "/portfolio/ab0136_practicaltraining_report_coniferdigital.pdf",
        type: "pdf" as const,
      },
      {
        label: "Game Testing Questionnaire (PDF)",
        url: "/portfolio/Versebound_ab0136_GameTesting_Questionnaire.pdf",
        type: "pdf" as const,
      },
      {
        label: "Sound Effects (YouTube)",
        url: "https://youtu.be/ZPsqmJUq86k",
        type: "website" as const,
      },
    ],
    details: `My contributions:
• Balance: characters, enemies, abilities, progression, pacing, and difficulty through iteration and playtesting
• QA: coordinated testing scenarios, tracked issues posted in Discord server and validated fixes
• Implementation: implemented gameplay features and system logic in Unity
• Audio: produced and implemented sound effects for weapons, environments, characters, UI and more, as well as a dynamic environmental audio system
• Documentation: maintained balance notes in multi-sheet Excel
• Marketing support: assisted with influencer outreach and preparation`,
  },
  {
    title: "The Incursion",
    subtitle: "First-person horror puzzle game (Unity)",
    year: "2024",
    studio: "Personal project",
    workdescription: "Game Jam project: 2 days",
    image: "/portfolio/incursion.png",
    roles: ["Design", "Level Design", "Enemy AI", "Implementation"],
    links: [
      {
        label: "Itch.io (Link)",
        url: "https://koirenkoppi.itch.io/incursion",
        type: "website" as const,
      },
    ],
    details: `My contributions:
• Level design: designed the full playable level with gameplay elements such as item spawns
• AI: implemented enemies with NavMesh patrolling and chasing
• Design: collaborated on mechanics with focus on readable feedback and fair randomization`,
  },
  {
    title: "Lehtipuhallinmies Helvetissä",
    subtitle: "First-person comedic action game (Unity)",
    year: "2025",
    studio: "Personal project",
    workdescription: "Game Jam project: 2 days",
    image: "/portfolio/lehtipuhallin.png",
    roles: ["Design", "Level Design", "Programming", "Enemy AI", "Implementation"],
    links: [
      {
        label: "Itch.io (Link)",
        url: "https://koirenkoppi.itch.io/lehtinpuhallinmies-helvetissa",
        type: "website" as const,
      },
    ],
    details: `My contributions:
• Level design: multi-section level with escalation and hidden routes, including enemy spawn and patrol points
• AI: designed and implemented two enemy types; patrol/chase/lost-sight behaviors and ragdoll mechanics
• Audio: contributed to audio and music vocal work`,
  },
  {
    title: "Neverance",
    subtitle: "Solar-punk themed mobile game with exploration and turn-based combat (Unity)",
    year: "In Development",
    studio: "Gangster Pūkeko Games",
    workdescription: "Practical Training: 351 hours",
    image: "/portfolio/pukeko.png",
    roles: ["Audio Design", "Audio & Systems Integration", "FMOD", "Programming", "Implementation"],
    links: [
      {
        label: "Gangster Pūkeko Games Website",
        url: "https://www.gangsterpukeko.com",
        type: "website" as const,
      },
      {
        label: "Practical Training Report (PDF)",
        url: "/portfolio/gangsterpukeko_practicaltraining_report.pdf",
        type: "pdf" as const,
      },
    ],
    details: `My contributions:
• Implemented an Ink-based dialogue system with typewriter effect with per-character typewriter audio triggering
• Created the FMOD project setup and AudioManager (SFX/music VCAs, UI SFX, exploration audio)
• Designed a dynamic “sweetness” system using FMOD global parameters
• Documentation: produced clear technical documentation for future development`,
  },
]

export function VideoGamesSection() {
  return (
    <section id="video-games" className="scroll-mt-20">
      <div className="mb-8">
        <div className="flex items-center gap-3">
          <Gamepad2 className="w-6 h-6 text-primary" />
          <h2 className="text-2xl font-bold text-foreground">Video Games</h2>
        </div>

        <p className="mt-3 text-muted-foreground max-w-3xl">
          Commercial releases, professional training projects, and game jam titles developed in Unity. Includes shipped
          Steam games, industry collaborations, and smaller personal projects.
        </p>
      </div>

      <div className="space-y-4">
        {videoGames.map((game) => (
          <GameCard key={game.title} {...game} />
        ))}
      </div>
    </section>
  )
}
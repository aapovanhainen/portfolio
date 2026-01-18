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
  "Level Design",
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
        url: "https://blobs.vusercontent.net/blob/Ab0136_TC_Portfolio_pdf-K9zj1g5X2K9X0hn2Ht49WSwVubYJGB.pdf",
        type: "pdf" as const,
      },
    ],
    details: `Exsanguination focuses on high-speed, reflex-based melee combat. Players use movement, dashing, sliding, grappling, and a timed combo-based sword system to fight through rooms filled with enemies, traps, and traversal challenges.

Culminating in a multi-phase boss fight, the game is designed as a short but intense experience where mastery of mechanics is rewarded through speed, efficiency, and execution.

My contributions:
• As Producer, coordinated task planning, adjusted scope under tight deadlines
• Steam release, including the store page and build management in Steamworks,
• Designed and implemented two enemy types
• Recording and editing custom Foley & asset sound effects
• Dynamic state-based transitions for music
• Player movement and combat systems with combo features
• Mentored a junior programmer`
  },
  {
    title: "Versebound",
    subtitle: "2D action roguelike inspired by Kalevala folklore (Unity)",
    year: "2025",
    studio: "Conifer Digital",
    workdescription: "Practical Training: 463 hours",
    image: "/portfolio/versebound.jpg",
roles: [
  "Balance",
  "QA",
  "Programming",
  "Implementation",
  "Audio Production",
  "Audio Editing", 
  "Marketing",
],
    links: [
      { label: "Steam Page (Link)", url: "https://store.steampowered.com/app/2672520/Versebound/", type: "steam" as const },
      {
        label: "Practical Training Report (PDF)",
        url: "https://blobs.vusercontent.net/blob/ab0136_practicaltraining_report_coniferdigital-Uqm6DOcqbLuPaUhw4boBbA0XuAu7QP.pdf",
        type: "pdf" as const,
      },
       {
    label: "Game Testing Questionnaire (PDF)",
    url: "/portfolio/Versebound_ab0136_GameTesting_Questionnaire.pdf",
    type: "pdf" as const,
  },
    ],
    details: `Versebound is a challenging action roguelike where players fight through enemy waves and bosses in short, repeatable runs, unlocking weapons, artifacts, and characters while performing ritual-based challenges that shape each playthrough.

My contributions:
• Game balance: all weapons, passives, enemies, bosses, and progression through extensive playtesting and data-driven iteration
• QA: Created playtest sessions including 20+ students with custom questionnaire
• Bug fixes and usability improvements
• Improved UI clarity by redesigning upgrade and stat texts
• Designed, created and implemented sound effects, including a dynamic environmental audio system
• Supported influencer outreach and marketing preparation
• Designed a structured playtesting questionnaire used for external testing`,
  },
  {
    title: "Incursion",
    subtitle: "First-person horror puzzle game (Unity)",
    year: "2024",
    studio: "Personal project",
    workdescription: "Game Jam project: 2 days",
    image: "/portfolio/incursion.png",
roles: [
  "Design",
  "Level Design",
  "Enemy AI",
  "Implementation",
],
    details: `Incursion is a first-person horror puzzle game developed during a self-directed two-day game jam in Unity with one collaborator. The player must defeat and evade enemies using the correct tools, with enemy weaknesses, detection methods, and potion effects randomized each run, forcing observation and experimentation rather than memorization.

My contributions:
• Designed the full playable level
• Implemented enemies with NavMesh pathing for patrolling and chasing
• Collaborated on core mechanics with focus on instant-death rules, fair randomization of distinct perception systems (vision, hearing, potion-based reactions), and clear player feedback`,
  },
  {
    title: "Lehtipuhallinmies Helvetissä",
    subtitle: "First-person comedic action game (Unity)",
    year: "2025",
    studio: "Personal project",
    workdescription: "Game Jam project: 2 days",
    image: "/portfolio/lehtipuhallin.png",
roles: [
  "Design",
  "Level Design",
  "Programming",
  "Enemy AI",
  "Implementation",
],
    details: `Lehtipuhallinmies Helvetissä is a comedic first-person action game developed during a self-directed two-day game jam by a two-person core team and a support person for music. The player cleans Hell by blowing large amounts of leaves into lava while avoiding demons that patrol, chase, and search the level. As leaves are cleared, the player unlocks increasingly powerful abilities that enhance movement and the leaf blower.

My contributions:
• Designed a multi-section level with escalating pressure and hidden escape areas
• Designed and implemented two enemy types
• Implemented enemy patrol, chase, and loss-of-sight behavior
• Implemented ragdoll mechanics for enemies
• Contributed to audio and vocal work`,
  },
  {
    title: "Neverance",
    subtitle: "Solar-punk themed mobile game with turn-based combat (Unity)",
    year: "In Development",
    studio: "Gangster Pūkeko Games",
    workdescription: "Practical Training: 351 hours",
    image: "/portfolio/pukeko.png",
roles: [
  "Audio Design",
  "Audio & Systems Integration",
  "FMOD",
  "Programming",
  "Implementation",
],
    links: [{ label: "Gangster Pūkeko Games Website", url: "https://www.gangsterpukeko.com", type: "website" as const }],
    details: `Neverance is an in-development mobile game centered around grid-based exploration where players uncover items and enemies in patterned sequences, transitioning into turn-based combat encounters. Narrative progression is delivered through story-driven dialogue sequences integrated directly into gameplay.

My contributions:
• Designed and implemented an Ink-based dialogue system with character-by-character typewriter effect integrated with FMOD for synchronized typing sound effects
• Built reusable systems for adjustable typing speeds via Ink tags, per-character audio triggering with rate limiting, and rich-text–safe dialogue rendering
• Created FMOD Audio Manager handling global SFX and music volume control via VCAs, UI sound effects, and exploration audio
• Designed and implemented a dynamic "sweetness" audio feedback system using FMOD global parameters to scale audio intensity based on successful item sequences
• Produced internal technical documentation covering system setup, architecture, and usage`,
  },
]

export function VideoGamesSection() {
  return (
    <section id="video-games" className="scroll-mt-20">
      <div className="flex items-center gap-3 mb-8">
        <Gamepad2 className="w-6 h-6 text-primary" />
        <h2 className="text-2xl font-bold text-foreground">Video Games</h2>
        <p className="text-muted-foreground mb-8 max-w-3xl">
  Commercial releases, professional training projects, and game jam titles developed in Unity.
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

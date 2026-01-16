import { GameCard } from "@/components/game-card"
import { Gamepad2 } from "lucide-react"

const videoGames = [
  {
    title: "Exsanguination",
    subtitle: "Fast-paced first-person melee action game",
    year: "2024",
    studio: "Never Late Production",
    image: "/portfolio/exsanguination.jpg",
    roles: [
      "Producer",
      "Game Design",
      "Audio Design",
      "Audio Production",
      "Foley Sound Production",
      "Audio Editing",
      "Programming",
      "Combat System",
      "Enemy AI",
      "Level Design",
      "Publishing",
      "Implementation",
      "Mentoring",
    ],
    links: [
      {
        label: "Steam Page",
        url: "https://store.steampowered.com/app/3286090/Exsanguination/",
        type: "steam" as const,
      },
      {
        label: "Practical Training Report (with GDD)",
        url: "https://blobs.vusercontent.net/blob/Ab0136_TC_Portfolio_pdf-K9zj1g5X2K9X0hn2Ht49WSwVubYJGB.pdf",
        type: "pdf" as const,
      },
    ],
    details: `Exsanguination focuses on high-speed, reflex-based melee combat built around momentum, positioning, and precision. Players use directional movement, dashing, sliding, grappling, and a timed combo-based sword system to fight through tightly designed combat spaces filled with enemies, traps, and traversal challenges.

Combat emphasizes parrying, finishers, and aggressive play, culminating in a multi-phase boss fight that combines melee pressure, area control, and special attacks. The game is designed as a short but intense experience where mastery of mechanics is rewarded through speed, efficiency, and execution.

My contributions:
• Worked across design, audio, programming, production, and publishing
• Contributed directly to core gameplay systems including player combat and movement, enemy behaviors, traps, and boss encounters
• Designed and implemented two enemy types with full AI logic
• Led audio design by recording and editing custom Foley sound effects
• Implemented all music and SFX systems in Unity, including audio mixers and dynamic state-based transitions
• As Producer, coordinated task planning, adjusted scope under tight deadlines, mentored a junior programmer
• Handled the Steam release, including the store page and build management`,
  },
  {
    title: "Versebound",
    subtitle: "2D action roguelike inspired by Kalevala folklore",
    year: "2025",
    studio: "Conifer Digital",
    image: "/portfolio/versebound.jpg",
    roles: ["Programming", "QA", "Audio Production", "Audio Editing", "Implementation", "Balance", "Marketing"],
    links: [
      { label: "Steam Page", url: "https://store.steampowered.com/app/2672520/Versebound/", type: "steam" as const },
      {
        label: "Practical Training Report",
        url: "https://blobs.vusercontent.net/blob/ab0136_practicaltraining_report_coniferdigital-Uqm6DOcqbLuPaUhw4boBbA0XuAu7QP.pdf",
        type: "pdf" as const,
      },
    ],
    details: `Versebound is a challenging action roguelike where players fight through enemy waves and bosses in short, repeatable runs, unlocking weapons, artifacts, and characters while performing ritual-based challenges that shape each playthrough. The game emphasizes build experimentation, precise combat, and mastery through repetition, set in an atmospheric world inspired by Kalevala folklore.

My contributions (Internship: Jan–Apr 2025, ~460 hours):
• Worked primarily on game balance and QA, tuning weapons, passives, enemies, bosses, and progression through extensive playtesting and data-driven iteration
• Improved UI clarity by redesigning upgrade and stat text to present precise numerical information
• Designed and implemented sound effects, including a dynamic environmental audio system
• Contributed technical fixes and usability improvements in Unity
• Supported influencer outreach and marketing preparation
• Designed a structured playtesting questionnaire used for external testing`,
  },
  {
    title: "Incursion",
    subtitle: "First-person horror puzzle game (Game Jam)",
    year: "2024",
    studio: "Game Jam Project",
    image: "/portfolio/incursion.png",
    roles: ["Design", "Level Design", "Enemy AI", "Implementation"],
    details: `Incursion is a first-person horror puzzle game developed during a self-directed two-day game jam in Unity with one collaborator. The player must defeat or evade three enemies using the correct tools, with enemy weaknesses, detection methods, and potion effects randomized each run, forcing observation and experimentation rather than memorization.

My contributions:
• Designed the full playable level
• Implemented enemies with NavMesh pathing for patrolling and chasing
• Collaborated on core mechanics with focus on instant-death rules, fair randomization of distinct perception systems (vision, hearing, potion-based reactions), and clear player feedback`,
  },
  {
    title: "Lehtipuhallinmies Helvetissä",
    subtitle: "Comedic 3D game where you clean Hell with a leaf blower",
    year: "2025",
    studio: "Game Jam Project",
    image: "/portfolio/lehtipuhallin.png",
    roles: ["Design", "Level Design", "Enemy AI", "Ragdoll System", "Implementation"],
    details: `Lehtipuhallinmies Helvetissä is a comedic first-person 3D game developed during a self-directed two-day game jam by a two-person core team. The player cleans Hell by blowing large amounts of leaves into lava while avoiding demons that patrol, chase, and search the level. As leaves are cleared, the player unlocks increasingly powerful abilities that enhance movement and the leaf blower.

My contributions:
• Designed a large multi-section level with escalating pressure and hidden escape areas
• Implemented enemy patrol, chase, and loss-of-sight behavior using NavMesh-based pathing
• Created a faster, continuously spawning enemy type for the final area
• Implemented ragdoll reactions and animation logic for enemies
• Contributed to audio and vocal work`,
  },
  {
    title: "Neverance",
    subtitle: "Solar-punk mobile game with turn-based combat (In Development)",
    year: "Unreleased",
    studio: "Gangster Pūkeko Games",
    image: "/portfolio/pukeko.png",
    roles: ["Audio Design", "Audio & Systems Integration", "FMOD", "Programming", "Implementation"],
    links: [{ label: "Studio Website", url: "https://www.gangsterpukeko.com", type: "website" as const }],
    details: `Neverance is an in-development indie mobile game centered around grid-based exploration where players uncover items and enemies in patterned sequences, balancing risk and reward before transitioning into turn-based combat encounters. Narrative progression is delivered through story-driven dialogue sequences integrated directly into gameplay.

My contributions:
• Designed and implemented an Ink-based dialogue system with character-by-character typewriter effect integrated with FMOD for synchronized typing sound effects
• Built reusable systems for adjustable typing speeds via Ink tags, per-character audio triggering with rate limiting, and rich-text–safe dialogue rendering
• Created a centralized FMOD Audio Manager handling global SFX and music volume control via VCAs, UI sound effects, and exploration audio
• Designed and implemented a dynamic "sweetness" audio feedback system using FMOD global parameters to scale musical intensity based on successful item sequences
• Produced internal technical documentation covering system setup, architecture, and usage`,
  },
]

export function VideoGamesSection() {
  return (
    <section id="video-games" className="scroll-mt-20">
      <div className="flex items-center gap-3 mb-8">
        <Gamepad2 className="w-6 h-6 text-primary" />
        <h2 className="text-2xl font-bold text-foreground">Video Games</h2>
      </div>

      <div className="space-y-4">
        {videoGames.map((game) => (
          <GameCard key={game.title} {...game} />
        ))}
      </div>
    </section>
  )
}

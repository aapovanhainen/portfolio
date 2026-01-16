import { GameCard } from "@/components/game-card"
import { Dice5 } from "lucide-react"

const boardGames = [
  {
    title: "Arrywal: Corruption within the kingdom",
    subtitle: "Solo or 3-player cooperative RPG with class-based combat",
    year: "2020",
    image: "arrywal.png",
    roles: ["Co-Designer", "Systems Design", "Balance", "Playtesting", "Documentation"],
    details: `A turn-based cooperative RPG board game where players explore a rich fantasy world, complete main and side quests, and face dynamic encounters including dungeons and bosses. Players choose from distinct classes (Berserker, Thief, Wizard) with unique weapons, skills, and progression, customizing gear, crafting items, and managing resources.

The game features branching quests, randomized events, and deep lore, blending tactical combat, strategic planning, and narrative storytelling. Fully designed rulebook, combat system with abilities, attacks, conditions and more, branching main quest and side quests, items, gear, guilds and explorable map.

Arrywal showcases comprehensive game design skills: narrative world-building, mechanics development, balancing, and systems design in a cooperative RPG context.`,
  },
  {
    title: "Arrywal: Constellation of Hope",
    subtitle: "Competitive 3-player game with asymmetric classes and card combat",
    year: "2021",
    image: "arrywal-pvp.png",
    roles: ["Co-Designer", "Systems Design", "Balance", "Playtesting", "Documentation"],
    details: `A 3-player competitive board game where players race to retrieve a powerful star and return it to their camp while fighting rival players, defeating PvE bosses, and navigating escalating world threats. Players choose from six asymmetric classes with unique stats, weapons, passives, and movement abilities, creating strong build variety and counterplay.

Combat is resolved through simultaneous card-based attack and defense choices, emphasizing prediction, timing, and status interactions such as stun, bleed, poison, and reflect. The modular map features dungeons, bosses, treasure zones, graveyards, and a roaming global threat that accelerates the endgame.

Arrywal PvP showcases deep systems design, asymmetry, emergent gameplay, and high replayability through tightly interconnected mechanics and risk–reward decision-making.`,
  },
  {
    title: "Arrywal (PvPvE)",
    subtitle: "Quest-driven progression with PvE bosses and competitive PvP",
    year: "2022",
    image: "arrywal-pvpve.png",
    roles: ["Co-Designer", "Systems Design", "Balance", "Playtesting", "Iteration"],
    details: `A progression-focused Arrywal variant that blends PvE quests and bosses with the same asymmetric PvP combat system as Arrywal PvP. Players choose spawn points on the edges of a hexagonal map, complete quests, defeat central bosses, and clash with rivals while advancing inward.

The main objective is to reach the center, claim the primary reward, and return safely to base, creating constant tension between progression, risk, and player conflict. The design emphasizes strategic routing, contested objectives, and PvP-driven escalation rather than isolated PvE play.`,
  },
  {
    title: "Goblin Village",
    subtitle: "3-player competitive resource management and village building",
    year: "2024",
    image: "goblin-village.png",
    roles: ["Co-Designer", "Systems Design", "Economy Design", "Balance", "Playtesting"],
    details: `Goblin Village is a 3-player competitive board game where players manage and expand goblin villages through structured turn phases. Each turn consists of gathering resources, constructing and upgrading buildings, and taking aggressive or defensive actions against opponents.

Players must manage food upkeep, optimize asymmetric character perks, and choose between economic growth or PvP pressure. The game ends after 20 turns or when only one player remains, rewarding strategic pacing, interaction, and risk–reward decision-making.`,
  },
  {
    title: "Untitled Post-Apocalyptic Game",
    subtitle: "1-5 player cooperative tactical game with grid-based combat",
    year: "2021",
    image: "post-apocalyptic-tactical-board-game-miniatures-gr.jpg",
    roles: ["Co-Designer", "Systems Design", "Combat Design", "Balancing", "Playtesting"],
    details: `A turn-based tactical board game where players control a squad of specialized characters and progress through hostile zones filled with mutated creatures, human enemies, and dynamic combat scenarios.

Combat is played on a modular 10×10 grid assembled from interchangeable map sections, with randomized enemy spawns, objectives, and item placements. The game features class-based characters (Medic, Engineer, Inventor, Support, Tracker), dice-based interactions for objectives such as hacking and lockpicking, and a deep condition system affecting combat flow.

Designed with a strong focus on systems-driven gameplay, replayability, procedural variation, and tactical risk–reward decision-making, inspired by S.T.A.L.K.E.R. and Fallout.`,
  },
]

export function BoardGamesSection() {
  return (
    <section id="board-games" className="scroll-mt-20">
      <div className="flex items-center gap-3 mb-8">
        <Dice5 className="w-6 h-6 text-primary" />
        <h2 className="text-2xl font-bold text-foreground">Board Games</h2>
      </div>

      <p className="text-muted-foreground mb-8 max-w-3xl">
        Personal passion projects co-created with a close collaborator. Each game has undergone extensive iteration
        cycles, systematic balancing passes, and numerous playtest sessions to refine mechanics and player experience.
        These designs remain unpublished but represent deep exploration of tabletop game systems.
      </p>

      <div className="space-y-4">
        {boardGames.map((game) => (
          <GameCard key={game.title} {...game} />
        ))}
      </div>
    </section>
  )
}

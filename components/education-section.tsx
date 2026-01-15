import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, BookOpen, FileText } from "lucide-react"

const courseCategories = [
  {
    title: "Game Production",
    courses: [
      {
        code: "HTGP0140",
        name: "Basics of Game Programming",
        description:
          "Introduces fundamental programming concepts used in game development. Practical experience in implementing game logic, interaction, and basic gameplay systems.",
      },
      {
        code: "HTGP0160",
        name: "Game Engine 1",
        description:
          "Introduces the use of a modern game engine as a development tool. Hands-on experience with core engine features such as scene creation, assets, scripting, and basic gameplay mechanics.",
      },
      {
        code: "HTGP0170",
        name: "Game Design",
        description:
          "Focuses on principles of designing engaging games. Knowledge of gameplay mechanics, player experience, level design, and iterative design processes.",
      },
      {
        code: "HTGP0180",
        name: "Game Industry",
        description:
          "Overview of the structure and practices of the global game industry. Insight into development roles, production pipelines, publishing models, and industry trends.",
      },
      {
        code: "HTGP0190",
        name: "Basics of 2D Game Art",
        description:
          "Introduces visual content creation for games. Fundamentals of 2D art production, visual style, and asset creation for game engines.",
      },
      {
        code: "HTGP0200",
        name: "Narrative Design",
        description:
          "Focuses on storytelling in games. Knowledge of narrative structures, character development, and interactive storytelling techniques.",
      },
      {
        code: "HTGP0210",
        name: "Game Concept Development",
        description:
          "Emphasizes the early stages of game creation. Methods for ideation, concept documentation, and pitching complete game concepts.",
      },
    ],
  },
  {
    title: "Game Programming & Engines",
    courses: [
      {
        code: "HTGP0270",
        name: "Advanced Game Programming",
        description:
          "Deepens programming skills used in game development. Experience with complex gameplay systems, performance considerations, and structured code design.",
      },
      {
        code: "HTGP0280",
        name: "Game Engine 2",
        description:
          "Builds on prior engine skills with deeper technical use. Experience in implementing complex functionality, programming custom components, and finalizing playable games.",
      },
      {
        code: "HTGP0290",
        name: "Mobile Game Programming",
        description:
          "Specific requirements for mobile game development and practical skills for building and optimizing games on mobile devices. Hands-on experience with game engine middleware, optimization, and mobile-specific debugging tools. Personal project: 2D platformer with movement, combat, abilities, two enemy types, and boss fight.",
      },
      {
        code: "HTGP0300",
        name: "Online Game Programming",
        description:
          "Introduces principles of networked and multiplayer games. Knowledge of client-server models, synchronization, and online gameplay logic implementation.",
      },
      {
        code: "HTGP0310",
        name: "Game Engine 3",
        description:
          "Focuses on advanced engine-level development. Experience with complex systems, optimization, and tool development for larger or more technically demanding projects.",
      },
    ],
  },
  {
    title: "Complementary Professional Studies",
    courses: [
      {
        code: "HTGP0380",
        name: "Game Testing",
        description:
          "Focuses on quality assurance in game development. Methods for test planning, bug reporting, and playtesting to evaluate game quality and usability.",
      },
      {
        code: "HTGP0490",
        name: "Advanced Content for Games",
        description:
          "Producing high-quality game content using advanced tools and workflows. Deeper exploration of asset creation, content pipelines, and integration. Personal focus: music production using Splice, Reaper, and AI-assisted workflows.",
      },
    ],
  },
  {
    title: "Complementary Skills",
    courses: [
      {
        code: "HTGP0350",
        name: "AI in Games",
        description:
          "Artificial intelligence techniques used in game development. Decision-making systems, behavior modeling, and gameplay-oriented AI solutions. Personal project: A* pathfinding system with state machine (idle, patrol, chase, combat, look around), line-of-sight verification, and sound-based investigation behaviors.",
      },
      {
        code: "HTGP0330",
        name: "Cross Reality",
        description:
          "Explores extended reality technologies including virtual, augmented, and mixed reality. XR design principles, development tools, and creating interactive immersive experiences.",
      },
      {
        code: "HTGP0340",
        name: "Game Monetization and Analytics",
        description:
          "Business and data-driven aspects of game development. Monetization models, player analytics, and performance metrics to support design decisions.",
      },
    ],
  },
  {
    title: "BIT Systems and Tools",
    courses: [
      {
        code: "ZZPP0420",
        name: "ICT Skills",
        description:
          "Foundational competencies in information and communication technology. Office software, spreadsheets, presentations, immaterial rights, information security, and data privacy.",
      },
      {
        code: "HTGP0050",
        name: "CMS Basics",
        description:
          "Introduces content management systems and their role in web-based solutions. CMS concepts, structures, and workflows for creating and publishing digital content.",
      },
      {
        code: "HTGP0060",
        name: "Collaboration Tools",
        description:
          "Digital tools used for teamwork and project collaboration. Communication tools, version control, and task management for efficient team workflows.",
      },
      {
        code: "HTGP0070",
        name: "Operating Systems",
        description:
          "Fundamentals of modern operating systems. Processes, memory management, file systems, and user environments supporting software development.",
      },
      {
        code: "HTGP0080",
        name: "Computing Infrastructure",
        description:
          "Technical foundations behind computing systems. Hardware components, networks, servers, and infrastructure services supporting applications and digital products.",
      },
      {
        code: "HTGP0090",
        name: "Software Engineering",
        description:
          "Core software development practices. Product life cycles, requirements management, quality assurance, project planning, version control, and workload estimation.",
      },
      {
        code: "HTGP0100",
        name: "Usability and User Centric Design",
        description:
          "Principles of user-centered design and usability. Methods for understanding user needs, evaluating usability, and designing interfaces for positive user experience.",
      },
      {
        code: "HTGP0110",
        name: "Basics for Digital Media",
        description:
          "Fundamental concepts of digital media production. Media formats, content creation processes, and digital publishing.",
      },
      {
        code: "HTGP0120",
        name: "Business Basics",
        description:
          "Fundamental business concepts relevant to game and ICT industries. Business operations, value creation, markets, and organizational structures.",
      },
    ],
  },
  {
    title: "FF Ticorporate",
    courses: [
      {
        code: "HTGP0460",
        name: "FF Ticorporate Demo Lab 1",
        description:
          "Project-based learning in cooperation with external partners. Collaborative development, prototyping, and presenting technical or creative solutions in teams.",
      },
      {
        code: "HTGP0470",
        name: "FF Ticorporate Demo Lab 2",
        description:
          "Deepens project-based collaboration with industry partners. Extended development cycle working on large-scale projects with professional workflows and documentation.",
      },
    ],
  },
  {
    title: "Practical Training",
    courses: [
      {
        code: "HTGP0130",
        name: "Practical Training",
        description:
          "Work-based learning in a real professional environment. Applying skills in practice, gaining industry experience, and developing professional competencies.",
      },
    ],
  },
  {
    title: "Research-Based Development",
    courses: [
      {
        code: "ZZPP0620",
        name: "Research and Development",
        description:
          "Applied research methods and development processes. Research planning, data collection, analysis, and reporting.",
      },
      {
        code: "ZZ00BL91",
        name: "Bachelor's Thesis, Planning",
        description:
          "Preparing a thesis project. Defining research objectives, planning methods, selecting sources, and creating a structured thesis plan.",
      },
      {
        code: "ZZ00BL97",
        name: "Bachelor's Thesis, Thesis Writing",
        description:
          "Academic writing phase of the bachelor's thesis. Academic writing practices, structure, referencing, and ethical use of sources.",
      },
      {
        code: "ZZ00BL92",
        name: "Bachelor's Thesis, Implementation",
        description:
          "Carrying out the practical or research component of the thesis. Data collection, analysis, and documenting outcomes.",
      },
      {
        code: "ZZ00BL93",
        name: "Bachelor's Thesis, Reporting and Assessment",
        description:
          "Reporting, presenting, and finalizing the thesis. Writing thesis reports, preparing pre-assessments, and presenting results.",
      },
      {
        code: "ZZOA0220",
        name: "Maturity Test",
        description:
          "Evaluates mastery of study field and language proficiency. Writing a structured formal bulletin summarizing the bachelor's thesis.",
      },
    ],
  },
  {
    title: "Future Factory",
    courses: [
      {
        code: "ZZPP0750",
        name: "Entrepreneurship",
        description:
          "Foundational knowledge of entrepreneurship and profitable business. Business Model Canvas, Value Proposition Canvas, customer testing, and team-based business idea development.",
      },
      {
        code: "ZZPP0740",
        name: "JAMK InnoFlash",
        description:
          "Multidisciplinary teams using user-oriented design methods for real working-life challenges. Customer-centered problem solving, innovation tools, and team collaboration.",
      },
      {
        code: "HTGP0150",
        name: "Customer Project",
        description:
          "Multidisciplinary teams on real customer-driven game development projects. Collaboration, communication, and iterative development. Personal work: level design for peers' game project.",
      },
    ],
  },
  {
    title: "Student Wellbeing & Professional Development",
    courses: [
      {
        code: "ZZPP0520",
        name: "Development as an Expert",
        description:
          "Development of professional identity and expert skills. Self-assessment, continuous learning, goal setting, and career development.",
      },
      {
        code: "HTGP0010",
        name: "Self-Leadership",
        description:
          "Personal planning, goal-setting, and time management techniques. Self-knowledge, motivation, stress management, and productivity enhancement.",
      },
      {
        code: "HTGP0020",
        name: "Business Communication",
        description:
          "Effective communication in professional contexts. Business language, presentation techniques, and pitching styles for client and stakeholder interaction.",
      },
    ],
  },
  {
    title: "Languages and Communication",
    courses: [
      {
        code: "ZZ00CD00",
        name: "English for Working Life",
        description:
          "Practical communication skills for professional international environments. Oral and written communication, field-specific terminology, and report writing.",
      },
      {
        code: "ZWPC0320",
        name: "Swedish for Working Life",
        description:
          "Professional communication skills in Swedish. Work-related language use and intercultural communication for Nordic working life.",
      },
      {
        code: "ZWPC0420",
        name: "Communication Skills for Working Life",
        description:
          "Effective communication skills for professional environments. Presentations, teamwork communication, argumentation, and interaction skills.",
      },
    ],
  },
]

export function EducationSection() {
  return (
    <section id="education" className="scroll-mt-20">
      <div className="flex items-center gap-3 mb-8">
        <GraduationCap className="w-6 h-6 text-primary" />
        <h2 className="text-2xl font-bold text-foreground">Education</h2>
      </div>

      <p className="text-muted-foreground mb-8 max-w-3xl">
        My degree combined hands-on game development with production, business, and research skills. I built AI systems,
        shipped games, and learned to work effectively in multidisciplinary teams with real clients and deadlines.
      </p>

      <div className="bg-card border border-border rounded-lg p-6">
        <div className="flex flex-col md:flex-row md:items-start gap-4 mb-4">
          <div className="flex-1">
            <h3 className="text-xl font-semibold text-foreground">Jyväskylä University of Applied Sciences</h3>
            <p className="text-muted-foreground">Business Information Technology — Game Production</p>
          </div>
          <Badge variant="secondary" className="w-fit">
            Graduated December 2025
          </Badge>
        </div>

        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="details" className="border-border">
            <AccordionTrigger className="text-sm text-muted-foreground hover:text-foreground">
              View program details
            </AccordionTrigger>
            <AccordionContent>
              <div className="space-y-4 text-foreground/90 leading-relaxed pt-2">
                <p>
                  The program provided a comprehensive set of technical, creative, and professional skills essential for
                  the modern game industry. The curriculum combined theoretical knowledge with hands-on practice,
                  covering software engineering, game programming, digital media, UX and usability, AI, cross-reality
                  technologies, mobile and online game development, content creation, and project management.
                </p>
                <p>
                  I learned to implement complex game systems, AI behaviours, multiplayer networking, and XR
                  experiences. The curriculum also emphasized professional skills, including entrepreneurship, business
                  communication, team collaboration, self-leadership, and applied research, enabling me to work
                  effectively in multidisciplinary projects with real clients.
                </p>
              </div>

              <Accordion type="single" collapsible className="w-full mt-6">
                <AccordionItem value="courses" className="border-border">
                  <AccordionTrigger className="text-sm font-medium text-primary hover:text-primary/80">
                    Courses
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="pt-2">
                      <Accordion type="multiple" className="w-full space-y-2">
                        {courseCategories.map((category, idx) => (
                          <AccordionItem
                            key={idx}
                            value={`category-${idx}`}
                            className="border border-border rounded-lg px-4 bg-muted/30"
                          >
                            <AccordionTrigger className="text-sm font-semibold text-foreground hover:no-underline py-3">
                              <span className="flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-primary" />
                                {category.title}
                                <Badge variant="outline" className="ml-2 text-xs font-normal">
                                  {category.courses.length}
                                </Badge>
                              </span>
                            </AccordionTrigger>
                            <AccordionContent>
                              <div className="space-y-3 pb-2">
                                {category.courses.map((course, courseIdx) => (
                                  <div key={courseIdx} className="bg-background border border-border rounded-md p-3">
                                    <div className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-3 mb-1">
                                      <code className="text-xs text-muted-foreground font-mono shrink-0">
                                        {course.code}
                                      </code>
                                      <h5 className="text-sm font-medium text-foreground">{course.name}</h5>
                                    </div>
                                    <p className="text-xs text-muted-foreground leading-relaxed">
                                      {course.description}
                                    </p>
                                  </div>
                                ))}
                              </div>
                            </AccordionContent>
                          </AccordionItem>
                        ))}
                      </Accordion>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      <div className="bg-card border border-border rounded-lg p-6">
        <div className="flex items-center gap-3 mb-4">
          <BookOpen className="w-5 h-5 text-primary" />
          <h3 className="text-lg font-semibold text-foreground">Bachelor's Thesis</h3>
        </div>

        <div className="space-y-4">
          <div>
            <h4 className="text-foreground font-medium mb-1">Foley sounds in indie games</h4>
            <p className="text-sm text-muted-foreground">
              Developing an Analyzing Tool to Identify Foley Requirements in Game Sound Design
              </p>
              <p>

<a
  href="https://www.theseus.fi/handle/10024/908930"
  target="_blank"
  rel="noopener noreferrer"
  className="ml-2 text-primary underline underline-offset-2 hover:text-primary/80"
>
  Link to Bachelor’s Thesis
</a>
            </p>
               </div>
          

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="abstract" className="border-border">
              <AccordionTrigger className="text-sm text-muted-foreground hover:text-foreground">
                <span className="flex items-center gap-2">
                  <FileText className="w-4 h-4" />
                  View Abstract
                </span>
              </AccordionTrigger>
              <AccordionContent>
                <div className="bg-muted/30 border border-border rounded-md p-4 mt-2">
                  <p className="text-sm text-foreground/90 leading-relaxed italic">
                    {"Foley sounds have long been established in radio and films, where it eventually evolved into the videogame\naudio production. Practical guidelines and guidance for Foley sound production requirements in indie game\nstudio settings remain fragmented, consisting mostly of interviews and blogs.\nTo identify the Foley sound production requirements for indie game studio, an analyzing tool was developed to assess whether bespoke Foley sounds was feasible for a given game project or whether sound libraries and asset banks should be prioritized. The research for the development of the analyzing tool included theoretical background from Foley sound production in academic papers, as well as three indie case\nstudies (Unpacking, Untitled Goose Game and Exsanguination). Findings from case studies focused on various levels of Foley production planning, recording conditions, tooling and production constraints. Additionally, the theoretical background represented Foley as any recorded audio, created by interacting with\nprops, for the purpose of the proposed media content.\nThe analyzing tool consisted of ten categories and point-based threshold system, giving four different recommendations: No Foley, Minimal Foley, Partial Foley or Full Foley. The results of analyzing tool implementation on the case studies reflected the findings, in midst of the fact that Foley production was best treated\nas scoped production choice rather than all-or-nothing approach. Ultimately, the feasibility depended\nmostly on the game design, available skills, recording conditions and schedule."}
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  )
}

// One object per week, newest last. The weekly 1:1 prep appends a new week here (see ONE-ON-ONE.md).
// Hours come from Claude sessions, Slack and calendar. Manual Figma time is not visible, so every number is a lower bound.
window.CATEGORIES = {
  tg:      { name: "Templates & Guidelines", color: "#5b8def" },
  plugins: { name: "Figma plugins",          color: "#e8a33d" },
  ds:      { name: "Design system",          color: "#b07cf0" },
  bh:      { name: "Brief Hub",              color: "#3dbb7a" },
  cs:      { name: "Creative Studio",        color: "#4fc3d9" },
  wow:     { name: "Ways of working",        color: "#8a8a95" },
  other:   { name: "Other",                  color: "#55555f" }
};
window.TYPES = {
  Improvement: "#5b8def", Feature: "#3dbb7a", Bug: "#d9534f", "New product": "#e8a33d", Other: "#8a8a95"
};
window.WEEKS = [
  {
    id: "2026-10-09",
    label: "2-9 Oct",
    period: "2-9 Oct",
    cutoff: "2026-10-09T09:10:00Z",
    sprint: "Sprint 1 · 28 Sep - 9 Oct",
    meeting: "Sprint planning (1 h)",
    total: 47,
    slack: 137,
    cards: [
      { name: "PF guidelines: store icons, Brand Design, fonts, Elements", cat: "tg", type: "Improvement", h: 16.1 },
      { name: "MOPO (multi-offer pop-up)", cat: "plugins", type: "New product", h: 7.1 },
      { name: "Trail Questline: build, zips, live-site check", cat: "plugins", type: "New product", h: 6.1 },
      { name: "Retro Wins file: v2, Michal's review", cat: "tg", type: "Improvement", h: 4.6 },
      { name: "Interface mockups on PF pages", cat: "tg", type: "Improvement", h: 4.1 },
      { name: "HighRoyale + McLuck files in the RW structure", cat: "tg", type: "Improvement", h: 2.6 },
      { name: "Plugin handover to an owner", cat: "plugins", type: "Other", h: 2.3 },
      { name: "SB blurry pop-up on Windows (Chain Offer)", cat: "plugins", type: "Bug", h: 1.5 },
      { name: "Skills (HighRoyale starter pack)", cat: "wow", type: "Other", h: 1.0 },
      { name: "Puzzle with Luiza", cat: "plugins", type: "New product", h: 0.8 },
      { name: "Board upkeep + Digital Design Pulse", cat: "wow", type: "Other", h: 1.3 }
    ],
    sprintPlan: {
      capacity: 60, spent: 93,
      split: [["Planned", 33, "#5b8def"], ["Added mid-sprint", 46, "#e8a33d"], ["Urgent fix", 14, "#d9534f"]],
      rows: [
        ["Trail Questline", "4 h", "27 h", "QAing, launch 3rd week of Oct"],
        ["Creative Studio test", "30 h", "1 h", "Waiting on Emmett"],
        ["TPB user guide as short videos", "12 h", "0", "Not started"],
        ["Guides for the last 2 plugins", "2 h", "0", "Not started"],
        ["Find who takes over plugin support", "1 h", "2 h", "Waiting on Tristan"],
        ["Brief Hub: hand to Danila", "1 h", "0", "Not started"]
      ]
    },
    done: [
      "Trail Questline checked on the live site for SB, HM and PF, all match the design.",
      "RW v2 is the main RW file. Guide format agreed with Michal: Key points first, 3 DO + 3 DON'T.",
      "HR file built like RW. Core Rules page on PF, RW and HR. ML started.",
      "PF: store icons, Brand Design section, fonts, Elements, mockups on 7 pages. Handed to Kingsley on 7 Oct.",
      "Plugin handover board posted in #plugin-team: about 12 requests a week, 20-25 in launch weeks."
    ],
    takeaways: [
      "Sprint 1 ran at about 155% of capacity. 2 of every 3 hours went to work nobody planned.",
      "Templates & Guidelines became the main job (58%), with no hours in the plan.",
      "Trail took 27 h against 4 h: Ops checks and fixes on 5 brands were most of it.",
      "Plugins still eat time because nobody else owns them yet."
    ],
    topics: []
  },
  {
    id: "2026-10-16",
    label: "9-16 Oct",
    period: "9-16 Oct",
    cutoff: "2026-10-16T09:57:00Z",
    sprint: "Sprint 2 · 12-23 Oct, week 1",
    meeting: "AI Systems overview (30 min)",
    total: 56,
    slack: null,
    cards: [
      { name: "One structure for the T&G files of all 6 brands", cat: "tg", type: "Improvement", h: 32.9 },
      { name: "Questline UR boards: minigame column, reward row", cat: "plugins", type: "Feature", h: 7.7 },
      { name: "RW Style Guide + DS file map for Mariusz", cat: "ds", type: "Improvement", h: 3.4 },
      { name: "Chain Offer: Snake fixes with Luiza", cat: "plugins", type: "Bug", h: 1.8 },
      { name: "Plugin ownership: Noel, Carl, Tristan", cat: "plugins", type: "Other", h: 1.5 },
      { name: "PF guidelines: Kingsley's master links", cat: "tg", type: "Improvement", h: 1.2 },
      { name: "Trail Questline: handover to Ops", cat: "plugins", type: "New product", h: 0.9 },
      { name: "MOPO: onboarding counter question", cat: "plugins", type: "Other", h: 0.4 },
      { name: "Wheel: 2 files agreed with Natalie", cat: "plugins", type: "New product", h: 0.2 },
      { name: "Path Gradient: first publish (cover, listing)", cat: "plugins", type: "Improvement", h: 0.2 },
      { name: "HM Stamp Card master", cat: "plugins", type: "New product", h: 0.1 },
      { name: "Puzzle", cat: "plugins", type: "New product", h: 0 },
      { name: "Team meetings (1:1, Pulse, Product bi-weekly)", cat: "wow", type: "Other", h: 2.0 },
      { name: "Board upkeep, planning, 15Five, 1:1 prep", cat: "wow", type: "Other", h: 1.9 },
      { name: "Not on a card (workshop reviews, skills sync)", cat: "other", type: "Other", h: 1.5 }
    ],
    sprintPlan: {
      capacity: 60, spent: null,
      split: [],
      rows: [
        ["T&G structure, all brands", "High", "33 h", "Working on"],
        ["Design system: Mariusz + DS library", "High", "3 h", "Working on, waiting on Mariusz"],
        ["Chain Offer fixes", "High", "14 h total", "Working on"],
        ["PF guidelines before Kingsley", "High", "18 h total", "Working on"],
        ["DS reward icons, all brands", "High", "-", "After SB/ML/HM T&G"],
        ["Puzzle", "High", "0 this week", "Not started"],
        ["Wheel", "Medium", "1 h", "Files agreed"],
        ["Brief Hub: hand to Danila", "Medium", "0", "Not started"]
      ]
    },
    done: [
      "HM, ML, SB, PF and HR T&G files aligned to the RW structure (pages, palettes, coins, banknotes, Flash Offer on 6 brands).",
      "RW Core Rules: Locked Feature Names, 9 names; 11 mechanic guides start with the title on the art.",
      "Knowledge sessions on how T&G works: Michal x2, Matej, Chris (about 2 h).",
      "Mariusz call on 15 Oct. RW sample built: file map + RW Style Guide (6 ramps, 18 digital colours, 109 text styles, logos, coins, icons as components).",
      "Questline UR boards: minigame column and reward row, Michal approved RW.",
      "Plugin ownership raised by Noel with Carl and Tristan. Request sources, time split and a 3-stage handover sent."
    ],
    takeaways: [
      "56 h this week, 67% on Templates & Guidelines and design system.",
      "Naming convention grew into one structure for all 6 T&G files. Brief Hub and the plugin will read from it.",
      "Puzzle, planned for Sprint 2, has not started. 1 week left.",
      "Plugins still took 13 h without new products: UR boards, Snake fixes, questions."
    ],
    topics: [
      "Finish the T&G structure first, then Puzzle and Wheel. Move Puzzle to Sprint 3?",
      "Mariusz: T&G Branding as the source for each brand's DS library. RW sample sent, waiting for his feedback.",
      "Plugin owner: what Carl and Tristan decide, and when.",
      "Brief Hub: after T&G."
    ]
  }
];

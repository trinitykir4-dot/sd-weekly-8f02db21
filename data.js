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
  Improvement: "#5b8def", Feature: "#3dbb7a", Bug: "#d9534f", "New product": "#e8a33d", "New project": "#b07cf0", Other: "#8a8a95"
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
    ],
    agreed: [
      "T&G structure stays first. Puzzle builds the old way meanwhile; Sprint 3 decided at the 23 Oct planning.",
      "Noel reviews the DS file map and the plugin request flow, and fixes where template requests go (they still reach Luiza).",
      "Kir tests Tristan's upload tool with the plugin's zips before it ships, so a plugin update does not break it.",
      "ChatGPT stays on the standard plan; talk to Noel when it hits the limit. Cursor is an option the company already pays for.",
      "Both agreed the current hours are not sustainable."
    ]
  },
  {
    id: "2026-10-23",
    label: "16-23 Oct",
    period: "16-23 Oct",
    cutoff: "2026-10-23T10:30:00Z",
    sprint: "Sprint 2 · 12-23 Oct, week 2",
    meeting: "none on Friday, Sprint planning moved to Mon 26 Oct",
    total: 75,
    slack: null,
    cards: [
      { name: "B2Spin Design Wiki: 1 handbook for all designers", cat: "wow", type: "New project", h: 32.3 },
      { name: "One structure for the T&G files of all 6 brands", cat: "tg", type: "New project", h: 19.6 },
      { name: "Chain Offer 1+3 Free: new offer type, 5 brands", cat: "plugins", type: "New product", h: 7.4 },
      { name: "Chain Offer Snake: Luiza's 23 comments, all brands", cat: "plugins", type: "Bug", h: 4.3 },
      { name: "Questline UR boards: SB and HM masters", cat: "plugins", type: "Feature", h: 3.9 },
      { name: "PF guidelines: TG pages, PF 3D header", cat: "tg", type: "Improvement", h: 1.0 },
      { name: "MOPO: RW 2-offer version, OR between offers", cat: "plugins", type: "New product", h: 0.8 },
      { name: "Path Gradient: first publish", cat: "plugins", type: "Improvement", h: 0.5 },
      { name: "RW Style Guide for Mariusz", cat: "ds", type: "Improvement", h: 0.3 },
      { name: "Plugin support questions", cat: "plugins", type: "Other", h: 0.2 },
      { name: "Team meetings (overview, Pulse, Noel sync, Tech Talk)", cat: "wow", type: "Other", h: 2.3 },
      { name: "Board upkeep, 15Five, 1:1 prep", cat: "wow", type: "Other", h: 0.4 },
      { name: "Not on a card (plugin reward icons, tool setup)", cat: "other", type: "Other", h: 1.8 }
    ],
    sprintPlan: {
      capacity: 60, spent: 118, col2: "Priority",
      split: [["Planned", 68, "#5b8def"], ["Added mid-sprint", 44, "#e8a33d"], ["Urgent fix", 6, "#d9534f"]],
      rows: [
        ["T&G structure, all brands", "High", "51 h", "Working on"],
        ["Design Wiki (added mid-sprint)", "Medium", "32 h", "Working on, ready for Noel's review"],
        ["Questline UR boards (added mid-sprint)", "Medium", "12 h", "Working on"],
        ["Chain Offer 1+3 Free", "Critical", "7 h", "Working on, with Natalie"],
        ["Chain Offer Snake and bugs", "High", "6 h", "Working on"],
        ["Design system: Mariusz + DS library", "High", "4 h", "Working on"],
        ["PF guidelines", "High", "2 h", "Working on"],
        ["DS reward icons, all brands", "High", "0", "After SB/ML/HM T&G"],
        ["Puzzle", "High", "0", "Not started"],
        ["Wheel", "Medium", "0", "Files agreed"],
        ["Brief Hub: hand to Danila", "Medium", "0", "Not started"]
      ]
    },
    done: [
      "Chain Offer 1+3 Free: new offer type, masters for PF, ML, SB, HM and RW in 2 days for the November campaign. Sent to Natalie on 23 Oct.",
      "Chain Offer Snake: Luiza's 23 comments fixed in all brands, RW handed to Michal. 1+3 and Snake follow the same design rules.",
      "MOPO: RW 2-offer version works in the plugin, with OR between the offers.",
      "T&G: colours, fonts and Usage Guides in all brands, PF texts, a lighter HM file, ML with Michal.",
      "B2Spin Design Wiki: 1 place for design rules, brands and mechanics. Own initiative, ready for Noel's review.",
      "Questline UR boards: SB v2 Main Questline masters for Saska, HM questline masters."
    ],
    takeaways: [
      "At least 75 h this week, almost 2x the 40 h contract. 32 h of it is the Design Wiki, mostly at the weekend.",
      "Sprint 2 closes at 118 h on sprint cards against 60 h capacity. 44 h went to cards added mid-sprint.",
      "T&G structure took 51 h in the sprint and is still the main job.",
      "Chain Offer 1+3 came in urgent and took 7 h in 2 days. Puzzle, Wheel and Brief Hub got 0 h again."
    ],
    topics: [
      "Sprint 3: carry over T&G (ML, HM fonts), Chain Offer 1+3 and Snake final checks, Wiki review with Noel.",
      "Puzzle and Wheel: 2nd sprint with almost 0 h. Keep them in Sprint 3 or move them out?",
      "Hours: 75 h this week. What to drop so the sprint fits 60 h?"
    ]
  },
  {
    id: "2026-10-26",
    label: "23-26 Oct (so far)",
    period: "23-26 Oct",
    cutoff: "2026-10-26T12:10:00Z",
    sprint: "Sprint 3 · 26 Oct - 6 Nov, before planning",
    meeting: "planning cancelled, async",
    total: 31,
    slack: null,
    cards: [
      { name: "B2Spin Design Wiki: business section, audit, sign-in, live edits", cat: "wow", type: "New project", h: 13.0 },
      { name: "Reward icons: same component sets in all 5 brands, linked into the masters", cat: "ds", type: "Improvement", h: 7.2 },
      { name: "Chain Offer 1+3 Free: Natalie's asks, Treasure Run header, into brand files", cat: "plugins", type: "New product", h: 4.7 },
      { name: "Chain Offer Snake: rebuilds, masters into T&G, RW copy issue", cat: "plugins", type: "Bug", h: 2.1 },
      { name: "T&G structure: HM Puzzle, Characters pages like RW", cat: "tg", type: "New project", h: 1.1 },
      { name: "Questline UR boards: RW/HR sheet", cat: "plugins", type: "Feature", h: 0.6 },
      { name: "MOPO: RW plates and header", cat: "plugins", type: "New product", h: 0.3 },
      { name: "Brief Hub: repos move to B2Spin (IT)", cat: "bh", type: "Other", h: 0.2 },
      { name: "Plugin support questions", cat: "plugins", type: "Other", h: 0.1 },
      { name: "Team meetings (Product Functional Bi-Weekly)", cat: "wow", type: "Other", h: 1.3 },
      { name: "Board upkeep, async update for Noel", cat: "wow", type: "Other", h: 0.5 }
    ],
    sprintPlan: {
      capacity: 60, spent: 0, col2: "Proposed",
      split: [],
      rows: [
        ["T&G: all assets in place in 5 brands, text styles everywhere", "24 h", "0", "Proposal, waiting for Noel"],
        ["Naming at asset level: start once T&G is complete", "6 h", "0", "Proposal"],
        ["Chain Offer 1+3 and Snake: finish, masters into every T&G, Ops handover", "8 h", "0", "Proposal"],
        ["Design Wiki: Noel's review, move to B2Spin GitHub", "6 h", "0", "Proposal"],
        ["Plugin support for designers", "6 h", "0", "Proposal"],
        ["Brief Hub: hand to Danila", "2 h", "0", "Proposal"],
        ["Meetings and board", "6 h", "0", "Proposal"],
        ["Puzzle and Wheel: out of Sprint 3, after T&G", "0", "0", "Proposal"]
      ]
    },
    done: [
      "Reward icons: the same component sets in every T&G of 5 brands, with RW as the model. Missing icons drawn, cards inside the masters are instances now, the exported JSON did not change.",
      "Chain Offer 1+3: all of Natalie's asks done in 4 brands, Treasure Run header, RW keeps Level Up. Going into the brand T&G files with usage guides.",
      "Design Wiki: business section, anatomy cards and motion on mechanic pages, full accuracy audit, sign-in with a Slack code, live edits.",
      "RW MOPO: empty freespins and wheel plates fixed."
    ],
    takeaways: [
      "At least 31 h from Friday 12:30 to Monday 13:10, most of it at the weekend.",
      "Reward icons took 7 h: 5 brands now match RW.",
      "Wiki kept growing on the weekend (13 h). It needs Noel's review before more work."
    ],
    topics: [
      "Sprint 3 proposal: 58 of 60 h, async this time.",
      "Edit rights in all T&G files and the flow for masters (sent to Noel on 26 Oct).",
      "Puzzle and Wheel: keep them in Sprint 3 or move them out?"
    ]
  }
];

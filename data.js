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
    label: "23-30 Oct",
    period: "23-30 Oct",
    cutoff: "2026-10-30T10:50:00Z",
    sprint: "Sprint 3 · 26 Oct - 6 Nov, week 1 (plan still waiting for Noel)",
    meeting: "planning cancelled 26 Oct (async), overview 30 Oct declined, Kir off on 30 Oct",
    total: 82,
    slack: null,
    cards: [
      { name: "Chain Offer 1+3 Free: zips for 5 brands to Ops, testing, critical fix on 30 Oct, RW gift boxes", cat: "plugins", type: "New product", h: 17.2 },
      { name: "Chain Offer Snake and plugin bugs: zips to Ops, SBS previews, preview fixes", cat: "plugins", type: "Bug", h: 15.0 },
      { name: "Reward icons: same sets in all 5 brands, in designers' files, HR stamp drafts", cat: "ds", type: "Improvement", h: 15.0 },
      { name: "B2Spin Design Wiki: business section, audit, sign-in, live edits", cat: "wow", type: "New project", h: 13.4 },
      { name: "T&G structure: PF characters, HR page clean-up, SB and RW fixes", cat: "tg", type: "New project", h: 10.9 },
      { name: "Questline UR boards: UR pages and board icons as 1 set, HM, ML, SB, HR, RW", cat: "plugins", type: "Feature", h: 6.9 },
      { name: "Stamp Card build fix for Sofia", cat: "plugins", type: "Bug", h: 0.9 },
      { name: "Trail Questline: preview and data checks", cat: "plugins", type: "Feature", h: 0.6 },
      { name: "MOPO: RW plates and header", cat: "plugins", type: "New product", h: 0.3 },
      { name: "Brief Hub: repos move to B2Spin (IT)", cat: "bh", type: "Other", h: 0.2 },
      { name: "Plugin support questions", cat: "plugins", type: "Other", h: 0.1 },
      { name: "Team meetings (Product Functional Bi-Weekly)", cat: "wow", type: "Other", h: 1.3 },
      { name: "Board upkeep, async update for Noel", cat: "wow", type: "Other", h: 0.7 }
    ],
    sprintPlan: {
      capacity: 60, spent: 82, col2: "Proposed",
      split: [],
      rows: [
        ["T&G: all assets in place in 5 brands, text styles everywhere", "24 h", "11 h", "Working on"],
        ["Naming at asset level: start once T&G is complete", "6 h", "0", "Not started"],
        ["Chain Offer 1+3 and Snake: finish, masters into every T&G, Ops handover", "8 h", "32 h", "Ops testing"],
        ["Design Wiki: Noel's review, move to B2Spin GitHub", "6 h", "13 h", "Waiting for Noel's review"],
        ["Plugin support for designers", "6 h", "1 h", "Stamp Card fix for Sofia"],
        ["Brief Hub: hand to Danila", "2 h", "0", "IT ask open"],
        ["Meetings and board", "6 h", "2 h", ""],
        ["Not in the proposal: reward icons", "0", "15 h", "Working on"],
        ["Not in the proposal: Questline UR boards", "0", "7 h", "Working on"]
      ]
    },
    done: [
      "Chain Offer 1+3 Free: zips for 5 brands sent to Ops on 27 Oct. Ops checked PF, SB and ML web on 29 Oct, \"1 Piece\" fits in every brand. On 30 Oct Kir found a critical error and sent new zips for all 5 brands, RW with Michal's gift boxes.",
      "Chain Offer Snake: zips to Ops on 28 Oct, Kristina tests on 30 Oct. The image preload bug sits with dev, fix in the next release (about 2 Nov), not a go-live blocker.",
      "Reward icons: the same component sets in 5 brands and in designers' files. Noel on 28 Oct: no postage stamps, align with DS (Justin, Mariusz).",
      "Questline UR boards: UR page and board icons as 1 set in HM, ML, SB and HR, RW in progress. Natalie on 30 Oct: RW and HR use 1 generic wheel, PF, HM, ML and SB keep the metal wheels.",
      "New channel #system-design-ops with Ops. Kir proposed 1 export scale per asset, worked back from the size on the site. Natalie agrees, Noel joins once the idea is agreed.",
      "Stamp Card build fix for Sofia: with Stefan, he updates Retool."
    ],
    takeaways: [
      "At least 82 h from Friday 23 Oct 12:30 to Friday 30 Oct 11:50, about 2x the 40 h contract. Kir worked part of his day off on 30 Oct.",
      "Chain Offers took 32 h against 8 h in the Sprint 3 proposal: Ops testing brought fixes and a 2nd round of zips.",
      "Reward icons (15 h) and UR boards (7 h) are not in the proposal at all.",
      "No answer from Noel on Sprint 3 since 26 Oct, so most cards still carry the Sprint 2 label."
    ],
    topics: [
      "Sprint 3 plan from 26 Oct: OK or what to change? The labels wait for this.",
      "Export scale for monetisation assets: 1 rule per asset (for example 2x), Noel's 2x agreement is the starting point.",
      "Hours: 82 h this week. Which of reward icons, UR boards, Wiki can wait?",
      "Monetisation Control: demo with Kristina on 2 Nov, then decide if it needs a card."
    ]
  },
  {
    id: "2026-11-06",
    label: "30 Oct - 6 Nov",
    period: "30 Oct - 6 Nov",
    cutoff: "2026-11-06T11:30:00Z",
    sprint: "Sprint 3 · 26 Oct - 6 Nov, week 2 (last week of the sprint)",
    meeting: "AI Sprint Planning, 6 Nov",
    total: 55,
    slack: null,
    cards: [
      { name: "T&G all brands: typography, PF characters, HM Icons and Extras, 1 export scale per asset with presets in every master", cat: "tg", type: "New project", h: 26.3 },
      { name: "Puzzle: master, plugin tab, zips for 6 brands on v1.5.9, load in Monetisation Control with no errors", cat: "plugins", type: "New product", h: 8.4 },
      { name: "Chain Offer bugs: ML captions, ML step files, Monetisation Control demo with Kristina", cat: "plugins", type: "Bug", h: 5.7 },
      { name: "Plugin support: handover docs, manuals, table templates, plugin covers", cat: "plugins", type: "Other", h: 2.9 },
      { name: "B2Spin Design Wiki: announcement, #systems-design channel", cat: "wow", type: "New project", h: 2.1 },
      { name: "Theme Popup Builder panel redesign: clear issue cards, no scroll on small screens", cat: "plugins", type: "Improvement", h: 1.9 },
      { name: "Chain Offer 1+3 Free: fixes after Ops testing", cat: "plugins", type: "New product", h: 1.4 },
      { name: "RW Header Builder: Michal's plugin restyled, tested and published", cat: "plugins", type: "New product", h: 0.9 },
      { name: "MOPO", cat: "plugins", type: "New product", h: 0.9 },
      { name: "Questline UR boards", cat: "plugins", type: "Feature", h: 0.7 },
      { name: "Reward icons: FREE ribbon versions (Natalie)", cat: "ds", type: "Improvement", h: 0.3 },
      { name: "Design system: DS library, Noel and Matej", cat: "ds", type: "Other", h: 0.3 },
      { name: "Brief Hub hand-over and Creative Studio", cat: "bh", type: "Other", h: 0.5 },
      { name: "Team meetings (Pulse, All Hands)", cat: "wow", type: "Other", h: 1.5 },
      { name: "Board upkeep", cat: "wow", type: "Other", h: 0.7 },
      { name: "Video plugins session, no card", cat: "other", type: "Other", h: 1.0 }
    ],
    sprintPlan: {
      capacity: 60, spent: 55, col2: "Proposed",
      split: [],
      rows: [
        ["T&G: finish the 6 files, naming from T&G to Retool, Monetisation Control and Brief Hub", "20 h", "", "Working on"],
        ["Puzzle: end-to-end run on dev, HR, hand to Ops", "8 h", "", "Working on"],
        ["Chain Offer 1+3 and Snake: close after Ops testing", "4 h", "", "QAing"],
        ["Reward icons: versions with and without FREE, into DS", "4 h", "", "Working on"],
        ["Design Wiki: Noel's review, announcement at the Bi-Weekly on 20 Nov", "6 h", "", "Working on"],
        ["Plugin support and panel redesign", "6 h", "", "Working on"],
        ["Brief Hub: hand to Danila", "2 h", "", "Working on"],
        ["Meetings and board", "6 h", "", ""]
      ]
    },
    done: [
      "Export scale: RW and HR masters export at 2x with 1 preset. PF, ML, HM and SB got a preset per master: pop-ups, newsletter banners and push 2x, CTA buttons in ML, HM, SB 1x. Every Usage Guide says the scale and file size.",
      "Emails stay PNG: Gmail turns WebP into JPG and Outlook on Windows does not show WebP. The Puzzle steps image ships as WebP for the site and PNG for emails.",
      "Puzzle: zips from plugin v1.5.9 load in Monetisation Control for ML, PF, HM, SB and RW, Visual QA 24/24. HR waits until it is on dev.",
      "RW Header Builder: Michal's plugin restyled, tested and published.",
      "Monetisation Control demo with Kristina on 3 Nov.",
      "Player's Pick for Matt: fixed Positions JSON for 2 and 3 Rewards."
    ],
    takeaways: [
      "At least 55 h from Friday 30 Oct 11:50 to Friday 6 Nov 12:30.",
      "Half the week went into T&G, mostly the export scale across 6 brands.",
      "Puzzle moved from 0 to almost ready in 1 week.",
      "Most cards still carry the Sprint 2 label, Sprint 3 was never confirmed."
    ],
    topics: [
      "Sprint 4 proposal: T&G and naming first, then Puzzle to Ops. OK?",
      "Puzzle on the site: who presses Save and Build Puzzles in Monetisation Control - Kir on his dev account or Tristan?",
      "Sprint labels: reset all open cards to Sprint 4 at once?",
      "Design Wiki: Noel's review before the 20 Nov announcement."
    ]
  },
  {
    id: "2026-11-13",
    label: "6-13 Nov",
    period: "6-13 Nov",
    cutoff: "2026-11-13T11:30:00Z",
    sprint: "Sprint 4 · 9-20 Nov, week 1",
    meeting: "AI Systems overview, 13 Nov - cancelled, async update",
    total: 48,
    slack: null,
    cards: [
      { name: "T&G all brands: logo sets, HR typography, art to own components, DS buttons for HM and ML, mock-up sites", cat: "tg", type: "New project", h: 18.7 },
      { name: "B2Spin Design Wiki: Noel's review, B2S look, move to B2Spin GitHub and Vercel, security review", cat: "wow", type: "New project", h: 6.9 },
      { name: "Puzzle: dev check of 5 brands, ML end to end, v1.5.18 with the new Retool names", cat: "plugins", type: "New product", h: 6.2 },
      { name: "Design system: asset texts on library styles in all T&G files", cat: "ds", type: "Other", h: 2.7 },
      { name: "Chain Offer bugs: Snake step 5 box, live proof, Scan & Export error, SB finals for Saška", cat: "plugins", type: "Bug", h: 2.4 },
      { name: "Reward icons: Loyalty Points icon in all 6 brands", cat: "ds", type: "Improvement", h: 2.0 },
      { name: "Brief Hub: security review, move to company GitHub and Vercel, OneLogin ask", cat: "bh", type: "Other", h: 1.9 },
      { name: "Plugin support: Plugin Hub and plugins in B2S look, help for Matt", cat: "plugins", type: "Other", h: 1.8 },
      { name: "Theme Popup Builder panel redesign", cat: "plugins", type: "Improvement", h: 1.4 },
      { name: "Stamp Card fix for Sofia, RW Header Builder v1.3.0", cat: "plugins", type: "Bug", h: 0.4 },
      { name: "Team meetings (Product Bi-Weekly, 1:1 and planning on 6 Nov)", cat: "wow", type: "Other", h: 2.8 },
      { name: "Board upkeep", cat: "wow", type: "Other", h: 0.3 }
    ],
    sprintPlan: {
      capacity: 60, spent: 48, col2: "Proposed",
      split: [],
      rows: [
        ["T&G: finish the 6 files, naming from T&G to Retool, Monetisation Control and Brief Hub", "20 h", "19 h in week 1", "Working on"],
        ["Puzzle: end-to-end run on dev, HR, hand to Ops", "8 h", "6 h", "Working on"],
        ["Design Wiki: Noel's review, announcement at the Bi-Weekly on 20 Nov", "6 h", "7 h", "Working on"],
        ["Plugin support and panel redesign", "6 h", "3 h", "Working on"],
        ["Chain Offer 1+3 and Snake: close after Ops testing", "4 h", "2 h", "Working on"],
        ["Reward icons: versions with and without FREE, into DS", "4 h", "2 h", "Working on"],
        ["Brief Hub: hand to Danila (this week: security and move to company Vercel)", "2 h", "2 h", "Working on"],
        ["DS library: asset texts and buttons (not in the proposal)", "-", "3 h", "Working on"],
        ["Meetings and board", "6 h", "3 h", ""]
      ]
    },
    done: [
      "Puzzle: dev check on 5 brands, ML end to end. Plugin v1.5.18 uses the new Retool names (Instructions Header Image URL, Puzzle Header Image URL), Kristina has it.",
      "Loyalty Points icon: 1 coin in Reward Icons for all 6 brands, announced in #systems-design on 12 Nov. HR uses Noel's Spark.",
      "Design Wiki and Brief Hub: moved to the B2Spin GitHub and the company Vercel, commits from the work email only, security review done.",
      "T&G: logo sets for every brand, HR typography, brand art in own components, DS Button in HM and ML assets, asset texts on library styles.",
      "Main Collectible Questline moved to the Archive in RW and HR: Natalie confirmed new brands launch with the Stamp Card only.",
      "Chain Offer: final November files (1+3, 5 steps) sent to Saška for SB."
    ],
    takeaways: [
      "At least 48 h from Friday 6 Nov 12:30 to Friday 13 Nov 12:30, Sprint 4 week 1.",
      "T&G took 19 of the 20 h planned for the whole sprint in 1 week.",
      "Wiki and Brief Hub moving to company GitHub and Vercel was not in the plan: about 3 h, done because IT asked for it.",
      "Most open cards still carry the Sprint 2 label, Sprint 4 was never set on the board."
    ],
    topics: [
      "Sprint labels: may Kir move all open cards to Sprint 4 himself?",
      "T&G is over plan already. Keep it first in week 2, or move hours to Puzzle hand-over?",
      "Reward icon size: Justin wants 1 size (DS 75x78), SB has 84x98 in prod, Daria asks Noel and Mariusz to decide.",
      "Blocked on IT and infra: OneLogin apps for Wiki and Brief Hub, Vercel GitHub approval, Neon store."
    ]
  },
  {
    id: "2026-11-19",
    label: "13-20 Nov",
    period: "13-20 Nov",
    cutoff: "2026-11-20T11:30:00Z",
    sprint: "Sprint 4 · 9-20 Nov, week 2 (Kir off on 20 Nov)",
    meeting: "AI Sprint Planning + 1:1, Thu 19 Nov (moved from Fri)",
    total: 36,
    slack: null,
    cards: [
      { name: "T&G all brands: Newsletter Banner, HR Home Page Icons, Promo Banner, Multi-Optional Offer and MOPO Side by Side in all brands, Flash Offer and Purchase Offer in 1 shape, old HM SB ML files archived", cat: "tg", type: "New project", h: 19.2 },
      { name: "Flash Offer 2 sizes: questions to Daniel (CRM export); announcements for naming, Page Status Icons and Working in This File prepared", cat: "tg", type: "New asset or product", h: 0.6 },
      { name: "Design system: HR texts on library styles, pop-up buttons and timers with the DS inside (PF done)", cat: "ds", type: "Other", h: 2.7 },
      { name: "B2Spin Design Wiki: OneLogin sign-in, bell, GitHub App from IT; opened as work in progress, Noel's 2nd review (10 points) in, Kim and Edgar asked, Ask AI cost to Slavi, SOPs started", cat: "wow", type: "New project", h: 3.6 },
      { name: "Brief Hub: OneLogin only, bell, company Neon database from Oleksandr; renewal audit started (security, logic, UX)", cat: "bh", type: "Other", h: 2.4 },
      { name: "Naming in Brief Hub: every T&G asset as a tile with picture and size for all 6 brands, brief templates, campaign blocks, HM Birthday send plan", cat: "bh", type: "Improvement", h: 2.6 },
      { name: "Stickers illustrations with colour: new covers and icons for all 18 plugins, Brief Hub pictures", cat: "wow", type: "Improvement", h: 1.5 },
      { name: "Plugin support: WebP Exporter always 2x, shown to Daniel and Eduardo for Ops", cat: "plugins", type: "Improvement", h: 1.0 },
      { name: "Team meetings (Digital Design Pulse 16 Nov, AI Sprint Planning 19 Nov)", cat: "wow", type: "Other", h: 1.3 },
      { name: "Reward icons: Match 3 mini-game icon question from Sandro", cat: "ds", type: "Other", h: 0.2 },
      { name: "Board upkeep, weekly recap in #systems-design, 1:1 prep", cat: "wow", type: "Other", h: 0.5 }
    ],
    sprintPlan: {
      capacity: 60, spent: 0, col2: "Proposed for Sprint 5",
      split: [],
      rows: [
        ["T&G all brands: Flash Offer and Purchase Offer in 1 shape, pop-up buttons with DS in HM, ML, SB", "20 h", "-", "Planned"],
        ["Design Wiki: last fixes, team announcement at the Product Functional Meeting on 4 Dec", "8 h", "-", "Planned"],
        ["DS library: HR and the rest of the pop-up parts", "6 h", "-", "Planned"],
        ["Plugin support and the plugin hand-over (after Carl)", "6 h", "-", "Planned"],
        ["Brief Hub: data into the company Neon, hand to Danila", "4 h", "-", "Planned"],
        ["Puzzle: hand to Ops with Arthur's Retool steps", "4 h", "-", "Planned"],
        ["Reward icons: 1 size for all brands", "2 h", "-", "Planned"],
        ["Meetings and board", "6 h", "-", ""]
      ]
    },
    done: [
      "Design Wiki: sign-in through OneLogin only, the Slack code is off. Bell with notifications. Site edits write to the company GitHub through IT's GitHub App.",
      "Brief Hub: OneLogin only, the same bell, connection to the company Neon database from infra.",
      "T&G: Multi-Optional Offer and MOPO Side by Side pages the same in all brands; Promo Banner Preview and Page; Newsletter Banner fixed at 600x400 (with Michal); old HM, SB and ML files archived.",
      "Flash Offer: proposal for 1 shape in all 6 brands in #brand-focused-designers; Purchase Offer follows the same structure.",
      "Design system: every HR text linked to the library styles; pop-up buttons and timers use the DS inside (PF live).",
      "Weekly recap in #systems-design: first one posted on 13 Nov, now runs every Friday."
    ],
    takeaways: [
      "At least 36 h from Friday 13 Nov 12:30 to Friday 20 Nov 12:30 (Kir off on 20 Nov, about 2 h that morning); manual Figma work is not tracked.",
      "Since the call on 6 Nov: at least 84 h in 2 weeks.",
      "Work on all 7 tasks from the 19 Nov call started the same day.",
      "Sprint 4: T&G took most of the time again; Puzzle hand-over was not touched.",
      "Wiki and Brief Hub now run only on company accounts: GitHub, Vercel, OneLogin, Neon."
    ],
    topics: [
      "Ask AI cost: top up Kir's personal key and pay back, or a company Anthropic account?",
      "Who signs off the design rules for all brands and the team rules? Who signs off compliance?",
      "Illustration style A everywhere (wiki, Brief Hub, plugins)?",
      "Wiki announcement: 4 Dec at the Product Functional Meeting, or first only to designers in #systems-design?",
      "Sprint 5 proposal: OK? And may Kir move all open cards to Sprint 5 himself?"
    ],
    agreed: [
      "Illustrations: Stickers style with colour for the Wiki, Brief Hub and plugins.",
      "Wiki: shared as work in progress, 1 week of feedback, then the official launch; legal review through Kim Alcantara in parallel.",
      "Ask AI cost: 1 estimate for the Wiki and Brief Hub with Slavi, Noel approves with Carl.",
      "T&G: align all assets in the core brands step by step. Flash Offer: 2 sizes for all brands, characters in PF, SB, HM and ML.",
      "Naming: announce to designers, use it in Brief Hub, merge with the DS naming in January.",
      "Working in This File and Page Status Icons: share with all brand designers. SOPs: go, email banner flow first."
    ]
  },
  {
    id: "2026-11-27",
    label: "20-27 Nov",
    period: "20-27 Nov",
    cutoff: "2026-11-27T10:30:00Z",
    sprint: "Sprint 5 · 23 Nov - 4 Dec, week 1",
    meeting: "AI Systems overview, Fri 27 Nov 12:00",
    total: 52,
    slack: null,
    cards: [
      { name: "Game thumbnails: call with Edgar, the flow, Tiles Playground, own tile builder (code -> assets -> 4 tiles), auto X6 screenshot, AI check with forbidden words, monthly export page for Z-Automation, December games built", cat: "other", type: "New project", h: 10.9 },
      { name: "T&G naming and structure: WebP rule in all Usage Guides, home page icons 75x78 in all brands, email body rules, banner tags", cat: "tg", type: "New project", h: 6.4 },
      { name: "Brief Hub: renewal audit fixes, 5 real December briefs end to end, sync with Danila", cat: "bh", type: "Other", h: 6.8 },
      { name: "Design Wiki: ML, HM, SB links to the new T&G files, provider logins page, write a page, AI login for ChatGPT and Claude", cat: "wow", type: "New project", h: 5.4 },
      { name: "Wiki launch as work in progress: feedback from Michal, Alison, Edgar, Yuliia, Luiza, Daria, Patricia, Pasquale; review task for 6 DDs", cat: "wow", type: "New project", h: 4.6 },
      { name: "Design Assets Exporter: zip of Slim banners for Ops, asked by Kristina", cat: "plugins", type: "Feature", h: 4.3 },
      { name: "Game provider logins: 1Password vault for designers, IT requests", cat: "wow", type: "Improvement", h: 3.1 },
      { name: "Stickers style: covers of all Systems Design files, dark FigJam canvas", cat: "wow", type: "Improvement", h: 2.2 },
      { name: "SOPs: Design Playbook flows in FigJam", cat: "wow", type: "Other", h: 2.0 },
      { name: "Plugin support: one footer for all plugins, WebP answers", cat: "plugins", type: "Improvement", h: 1.5 },
      { name: "Design system: DS library texts and General Elements", cat: "ds", type: "Other", h: 1.5 },
      { name: "Team meetings (Digital Design Pulse 23 Nov, Tech Talk 25 Nov)", cat: "wow", type: "Other", h: 1.6 },
      { name: "Puzzle: Retool checks", cat: "plugins", type: "Other", h: 0.9 },
      { name: "Board upkeep, recap, Ask AI cost, naming announcement", cat: "wow", type: "Other", h: 0.9 }
    ],
    sprintPlan: {
      capacity: 60, spent: 52, col2: "Proposed",
      split: [],
      rows: [
        ["T&G all brands", "20 h", "6 h", "Working on"],
        ["Design Wiki: fixes and launch", "8 h", "10 h", "Working on"],
        ["DS library", "6 h", "2 h", "Working on"],
        ["Plugin support and hand-over (Design Assets Exporter inside)", "6 h", "6 h", "Working on"],
        ["Brief Hub: data to the company Neon, hand to Danila", "4 h", "7 h", "Working on"],
        ["Puzzle: hand to Ops", "4 h", "1 h", "Working on"],
        ["Reward icons: 1 size for all brands", "2 h", "0 h", "Working on"],
        ["Game thumbnails with Edgar (not in the proposal)", "-", "11 h", "Working on"],
        ["Provider logins, Stickers covers, SOPs (from the 19 Nov call)", "-", "7 h", "Working on"],
        ["Meetings and board", "6 h", "3 h", ""]
      ]
    },
    tldr: [
      "Game thumbnails: about 70% done. Our own builder makes the 4 brand tiles and the X6 screenshot from a game code; 23 of 80 December games built. Blocker: provider art.",
      "Brief Hub: stable, 5 real December briefs went through. Plan with Danila: finish it by the end of the year, then move to Skeleton.",
      "Wiki: live as work in progress. Blocker: only 1 of 6 brand designers did the review (due 30 Nov). AI connector approved by security, setup with IT.",
      "Design Assets Exporter: new plugin, 1 button gives Ops a zip of all campaign assets. Reads real PF, HM, ML, SB files.",
      "Systems Design team in Figma and the Design Playbook: 19 flows in FigJam. T&G: WebP rule and home page icons in all 6 brands.",
      "Only one ask from me: the wiki push (see Wiki below). If something else gets stuck, I'll write to you."
    ],
    story: [
      {
            "title": "Game thumbnails",
        "shot": "shot-tiles",
            "h": 11,
            "state": "I think about 70% is done",
            "img": "thumbs",
            "blocker": "",
            "points": [
                  "Edgar and I had a call and mapped how tiles and screenshots are made today. I’ve started talking to Rollout, IT and the team behind the upload bot.",
                  "Our own builder works: you put in a game code and get the 4 brand tiles and the X6 screenshot, with an AI check before upload. 23 of the 80 December games are already built with no manual work.",
                  "Main blocker: getting the provider art. Most providers keep it behind a login, or we don’t know where it is yet. The IT ticket for a shared 1Password account is open, and I’m working on the providers with Rollout.",
                  "Waiting on Edgar for access to Lobby Magic, so we can compare it with our builder."
            ]
      },
      {
            "title": "Brief Hub",
            "h": 7,
            "state": "Stable, handover started",
            "img": "approved",
            "blocker": "",
            "points": [
                  "The audit fixes are in, and 5 real December briefs went through [Brief Hub](https://b2s-brief-hub.vercel.app). No blockers.",
                  "Synced with Danila today, and we'll meet again. The plan is to finish Brief Hub by the end of the year: Danila helps me with the briefers, they test it on real briefs, and I fix what they find.",
                  "Danila told me the company wants everything in Skeleton. Moving Brief Hub, the wiki and the rest into Skeleton is a big challenge of its own. I'd like to do it after Brief Hub is launched as its own project on Vercel."
            ]
      },
      {
            "title": "Wiki",
            "h": 10,
            "state": "Live as work in progress. Blocker: the designers' review is slow",
            "img": "no-briefs",
            "blocker": "",
            "points": [
                  "I made a task in monday for the 6 brand designers, due 30 Nov: [Design Wiki review](https://b2spin.monday.com/boards/7685433525/pulses/13619205245). Part 1: check your own brand pages. Part 2: check the rest of the wiki for your brand.",
                  "So far only Michal has done part 1 (RW), and all his comments are in the wiki now. Luiza, Daria, Patricia and Yuliia helped with answers and edits.",
                  "The other 5 brand designers haven't started yet. I think some product designers haven't looked yet either.",
                  "**Where I need you:** could you give them a push to do their part by 30 Nov? And could you ask Michal to help with part 2 as well? He is very precise, and editing the pages directly is the fastest way to fix them.",
                  "**AI connector:** Patricia asked if we could connect the wiki to ChatGPT and Claude, so people ask their AI tool and get the answer from the wiki. I liked the idea and built it: read only, OneLogin sign-in, and only our company workspaces can connect. Nicholas approved it from the security side this morning, and now I'm sorting out the setup with IT ([thread](https://b2spin.enterprise.slack.com/archives/C0B6RH8RRMX/p1795769678655889?thread_ts=1795629880.711409&cid=C0B6RH8RRMX))."
            ]
      },
      {
            "title": "Design Assets Exporter",
        "shot": "shot-dae",
            "h": 4,
            "state": "New plugin, my own initiative",
            "img": "welcome",
            "blocker": "",
            "points": [
                  "**The pain:** Ops export and rename every asset from our production files by hand, for Monetization campaigns and BAU tasks. They also asked for the HP icon and the inbox icon to come out together with the Theme Popup Builder pop-ups.",
                  "**The idea:** you open the campaign file, press one button and get one zip with all the assets. They come in the right format (WebP on site, PNG for email and push), with T&G names and a folder per mechanic, so Ops don't have to fix them by hand. Monetization Control will read only part of the Monetization assets, so this covers the rest, BAU included.",
                  "Kristina and Natalie said yes on 24 Nov. The plugin already reads the real campaign files of PF, HM, ML and SB. Next: a first real run with a designer, then I share the folder list with Kristina before we publish.",
                  "Still to decide with Ops: do the designers press the button, or Ops themselves. No blockers."
            ]
      },
      {
            "title": "Systems Design in Figma and the Playbook",
            "h": 4,
            "state": "19 flows in FigJam",
            "img": "no-results",
            "blocker": "",
            "points": [
                  "I made a Systems Design team in Figma. My files were spread between Digital Design and drafts, now they are all in one place, with B2S covers.",
                  "The main one is the [Design Playbook](https://www.figma.com/board/JcEF8Y1QGyvaIHWfVDINN1/B2S-Design-Playbook) in FigJam: 19 flows (our SOPs) where Systems Design takes part, one page per flow: who does what, where and when.",
                  "For example, [Flow 19](https://www.figma.com/board/JcEF8Y1QGyvaIHWfVDINN1?node-id=109-30) is the game tiles and screenshots flow with Edgar, as it works today.",
                  "I haven't checked every flow yet, so there may be mistakes. It would be great if the right people looked and left comments. Then I'd like us to approve the flows, work by them, and give each flow an owner."
            ]
      },
      {
            "title": "T&G",
            "h": 6,
            "state": "In progress",
            "img": "all-clear",
            "blocker": "",
            "points": [
                  "The WebP rule and the home page icons are in all 6 brands. Slower this sprint because thumbnails came in. No blockers."
            ]
      }
    ],
    done: [
      "Game thumbnails: own tile builder. From a game code it takes the provider art and lays out the 4 brand tiles and the X6 screenshot; 10 December games built.",
      "Design Wiki: open as work in progress, 8 people gave feedback; AI tools can read it after OneLogin sign-in.",
      "Brief Hub: audit fixes in, 5 real December briefs went through it.",
      "T&G: WebP rule and home page icons 75x78 in all 6 brands.",
      "Covers of all Systems Design files in the Stickers style, dark FigJam canvas."
    ],
    takeaways: [
      "At least 52 h from Friday 20 Nov 12:30 to Friday 27 Nov 11:30; manual Figma work is not tracked.",
      "Game thumbnails took the most time (11 h) and was not in the Sprint 5 proposal.",
      "T&G got 6 of the 20 h planned for Sprint 5."
    ],
    topics: [
      "Game thumbnails: show the system on 1 Dec; it moves hours away from T&G in week 2.",
      "Who signs off the wiki rules (asked 24 Nov)?",
      "Match 3 in T&G now, or Sandro keeps the art (asked 19 Nov)?",
      "6-month goals proposal: OK (sent 24 Nov)?"
    ]
  }
];

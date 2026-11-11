// Career, organized by team (like the CV), newest first. Each role belongs
// to a city; the Experience page shows a "postcard" for a city the first time
// one of its roles appears, so the personal side of each move is kept.
//
// PUBLIC-SAFE CONTENT RULE: only launched products, public press, and metrics
// that were already published. No internal system details (scale, latency,
// architecture), unreleased directions, internal team names, model-quality
// numbers or bonuses. When in doubt, describe the problem, not the internals.

export type CityId = "zurich" | "london" | "nyc" | "cordoba";

export type City = {
  flag: string;
  name: string;
  years: string;
  personal: string;
  photos: { src: string; alt: string }[];
};

export const CITIES: Record<CityId, City> = {
  zurich: {
    flag: "🇨🇭",
    name: "Zurich",
    years: "2024 – today",
    personal:
      "Living in Zurich has made me appreciate nature more — I actually take pictures of cows and flowers now. Running by the lake, hiking in the mountains, swimming in summer, and plenty of local cheese and chocolate.",
    photos: [
      { src: "/photos/zurich-hiking.webp", alt: "Hiking in the Swiss mountains" },
      { src: "/photos/zurich-cows.webp", alt: "Swiss cows in an alpine meadow" },
      { src: "/photos/zurich-team.webp", alt: "With the team in Zurich" },
    ],
  },
  london: {
    flag: "🇬🇧",
    name: "London",
    years: "2022 – 2024",
    personal:
      "As a Harry Potter fan, I fell in love with London — West End shows, running through the parks, \"smelly pubs\" with excellent beer, and the heavenly cream on scones at tea time.",
    photos: [
      { src: "/photos/london-bigben.webp", alt: "Big Ben, London" },
      { src: "/photos/london-pub.webp", alt: "A London pub" },
      { src: "/photos/london-hogwarts.webp", alt: "Harry Potter studio tour" },
    ],
  },
  nyc: {
    flag: "🇺🇸",
    name: "New York",
    years: "2019 – 2022",
    personal:
      "New York first felt as tough as a stale dollar slice. Then it became home — and I traded skyscraper sightseeing for the real local sport: extreme rat-watching.",
    photos: [
      { src: "/photos/nyc-graduation.webp", alt: "NYU graduation" },
      { src: "/photos/nyc-grandcanyon.webp", alt: "Grand Canyon trip" },
      { src: "/photos/nyc-family-graduation.webp", alt: "Graduation with family" },
    ],
  },
  cordoba: {
    flag: "🇦🇷",
    name: "Córdoba",
    years: "Where it started",
    personal:
      "Dressed as the Android mascot for my engineering graduation. Summers meant river trips with friends and a good fernet.",
    photos: [
      { src: "/photos/cordoba-university.webp", alt: "UTN Córdoba" },
      { src: "/photos/cordoba-graduation.webp", alt: "Engineering graduation" },
      { src: "/photos/cordoba-mcafee.webp", alt: "At Intel McAfee" },
    ],
  },
};

export type Role = {
  id: string;
  city: CityId;
  org: string;
  team: string;
  title: string;
  period: string;
  summary: string;
  highlights: string[];
  more?: { name: string; details: string }[];
  press?: { title: string; url: string }[];
};

export const ROLES: Role[] = [
  {
    id: "ai-foundations",
    city: "zurich",
    org: "Google",
    team: "AI Foundations · Context & Retrieval",
    title: "Product Manager",
    period: "Oct 2026 – Present",
    summary:
      "Product strategy for the retrieval and context infrastructure that helps Google's AI products find the right information and ground their answers in it.",
    highlights: [
      "Working with research and engineering on how retrieval and RAG building blocks serve AI products across Google.",
      "Building agentic workflows that speed up product research and synthesis for PMs.",
    ],
  },
  {
    id: "youtube-shopping",
    city: "zurich",
    org: "Google",
    team: "YouTube Shopping",
    title: "Product Manager",
    period: "Mar 2024 – Oct 2026",
    summary:
      "Made millions of YouTube videos shoppable with multimodal AI, and brought shopping to the living room.",
    highlights: [
      "Led the strategy for a Gemini-powered shopping assistant in YouTube's \"Ask\" feature, launched on mobile and web.",
      "Partnered with Google DeepMind on video understanding and product detection, growing the shoppable video corpus by 13%.",
      "Launched Gemini auto-timestamps, matching products to the exact moment they appear (+5% offer clicks).",
    ],
    more: [
      {
        name: "Shopping on Connected TV",
        details:
          "Set the TV commerce strategy and launched interactive product overlays designed for the 10-foot, lean-back screen.",
      },
      {
        name: "Mobile product overlays",
        details:
          "Designed the UX and ML triggering for timed product shelves on mobile, cutting dismissals by 44% while keeping creators and viewers happy.",
      },
      {
        name: "Evaluation design",
        details:
          "Redesigned ground-truth evaluations to combine what's said and what's shown in a video, so models are judged the way people actually watch.",
      },
    ],
    press: [
      {
        title: "TechCrunch: YouTube auto-timestamps launch",
        url: "https://techcrunch.com/2025/09/16/youtube-unveils-new-ways-for-creators-to-earn-with-brand-deals-youtube-shopping-program/",
      },
      {
        title: "TechCrunch: How YouTubers diversify revenue",
        url: "https://techcrunch.com/2026/02/10/youtubers-arent-relying-on-ad-revenue-anymore-heres-how-some-are-diversifying/",
      },
      { title: "YouTube: Improving the product experience", url: "https://www.youtube.com/watch?v=MrXoR7Tw_i8" },
    ],
  },
  {
    id: "sheets",
    city: "london",
    org: "Google",
    team: "Google Sheets · Workspace",
    title: "Product Manager",
    period: "Jul 2022 – Mar 2024",
    summary:
      "Turned spreadsheet grids into structured data, and laid the groundwork for automated workflows in Sheets.",
    highlights: [
      "Co-led the vision for Tables in Google Sheets, shifting billions of users from loose cells to structured objects.",
      "Led strategy and launch of Conditional Notifications — the pattern Workspace builds automated workflows on.",
      "Worked with a 15+ engineer team on the building blocks and controls behind Tables.",
    ],
    press: [
      {
        title: "Google Workspace: Tables in Google Sheets",
        url: "https://workspaceupdates.googleblog.com/2024/05/tables-in-google-sheets.html",
      },
      {
        title: "The Verge: Conditional Notifications",
        url: "https://www.theverge.com/2024/6/5/24172291/google-sheets-workspace-conditional-notifications-microsoft-excel-airtable",
      },
      {
        title: "Ben L Collins: Tables in Google Sheets",
        url: "https://www.benlcollins.com/spreadsheets/tables-in-google-sheets/",
      },
    ],
  },
  {
    id: "maps",
    city: "nyc",
    org: "Google",
    team: "Google Maps",
    title: "Associate Product Manager",
    period: "Jun 2021 – Jul 2022",
    summary:
      "Used computer vision to help Maps understand the real world from imagery, and grew Maps internationally. Before joining full-time, APM intern on Google Docs (2020).",
    highlights: [
      "Worked on Maps visual search: extracting real-world information from imagery so people can discover places through photos.",
      "Shipped ML photo classification that surfaces local businesses' service menus (20% interaction rate).",
      "Launched the Language Picker in India, growing regional monthly users by 12% in two months.",
    ],
    more: [
      {
        name: "Street View 15th anniversary",
        details: "Defined requirements and launched the anniversary experience: 6M+ opt-ins and 16M+ virtual trips.",
      },
    ],
    press: [
      {
        title: "Maps: discover places through photos",
        url: "https://blog.gaganghotra.com/seo/google-maps-discover-through-photos-new-feature/",
      },
      {
        title: "TechCrunch: Street View turns 15",
        url: "https://techcrunch.com/2022/05/24/google-maps-street-view-celebrates-15-years-with-historical-imagery-on-mobile-new-camera-and-more/",
      },
    ],
  },
  {
    id: "engineering",
    city: "cordoba",
    org: "Globant · Intel · NYU Furman Center",
    team: "Engineering & research",
    title: "Tech Lead, Software Engineer, Data Researcher",
    period: "2016 – 2021",
    summary: "Where I learned to build: from IoT dashboards to ticketing for Disney Parks to housing data in New York.",
    highlights: [
      "Globant for Disney Parks (2018–2019): Technical Lead for 6 developers shipping Java/Spring ticketing cart services.",
      "Intel McAfee (2016–2017): built an Angular/Node.js IoT monitoring platform adopted by 5+ engineering teams.",
      "NYU Furman Center (2021): automated housing-data pipelines for the State of New York City's Housing & Neighborhoods report (20% faster).",
    ],
  },
];

export const EDUCATION = [
  {
    school: "New York University",
    degree: "MS in Management of Technology and Innovation",
    detail: "Fulbright Scholar · 3.9 GPA · Oxford ML: GenAI & Representation Learning",
  },
  {
    school: "Universidad Tecnológica Nacional (Córdoba, Argentina)",
    degree: "BS in Systems Engineering",
    detail: "9.22/10 GPA · Bicentennial Scholarship for top engineering GPAs",
  },
];

export const AWARDS = [
  {
    name: "Fulbright Scholar",
    detail: "1 of 10 grantees selected from 500 candidates by the Argentine Fulbright Commission.",
  },
  {
    name: "NYU Research Innovation Award",
    detail: "1st of 25+ capstone teams, for computer vision with NYC DOT to detect street traffic.",
    url: "https://engineering.nyu.edu/academics/departments/technology-management-and-innovation/capstone-projects#chapter-id-48593",
  },
];

export const COMMUNITY = [
  "Girls Who Code — lead instructor and mentor teaching software fundamentals to women (2018 – present).",
  "Google APM interviewer and mentor; coordinated the Zurich APM interns (2024).",
  "NYU Design for America — led 4 social-impact product teams.",
];

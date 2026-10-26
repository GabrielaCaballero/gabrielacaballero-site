// "The Flight Path": one entry per city, newest first. Everything here is
// rendered into the static HTML (the "Dive deeper" panels use <details>, not
// JS state), so search engines and AI assistants read the full career story.

export type Era = {
  id: string;
  flag: string;
  location: string;
  period: string;
  role: string;
  summary: string;
  achievements: string[];
  personal: string;
  projects: { name: string; details: string }[];
  press?: { title: string; url: string }[];
  photos: { src: string; alt: string }[];
};

export const TIMELINE: Era[] = [
  {
    id: "zurich",
    flag: "🇨🇭",
    location: "Zurich, Switzerland",
    period: "March 2024 – Present",
    role: "Product Manager · AI Foundations (prev. YouTube Shopping)",
    summary:
      "Since October 2026, working on AI Foundations at Google — the retrieval and context systems that ground AI products in information. Before that, gave AI 'world-sensing' capabilities to make millions of videos shoppable: led the Product Detection Model and multimodal classifiers using Gemini-based models, and launched Interactive TV Shopping.",
    achievements: [
      "Expanded the shopping videos corpus by 13% and grew AI precision from 11% to 35.5%.",
      "11.5% lift in user engagement through improved detection models.",
      "Launched Interactive TV Shopping: +6000% engagement on products on TV.",
      "Solved the design challenge of making shopping feel natural on lean-back TV devices.",
    ],
    personal:
      "Living in Zurich has made her appreciate nature more — she actually takes pictures of cows and flowers now! She spends her time running, exploring the mountains, swimming in the lake during summer, and indulging in plenty of local cheese and chocolate.",
    projects: [
      {
        name: "AI Foundations: Retrieval & Context",
        details:
          "Building the retrieval and context infrastructure that helps AI systems find and serve the right information.",
      },
      {
        name: "Next-Gen Video Understanding",
        details:
          "Set the vision and strategy for the next generation of video understanding models: redefining the shopping video classifier, overhauling evaluation frameworks, and modernizing the underlying technology to scale detection.",
      },
      {
        name: "Proprietary Product Detection",
        details:
          "Led the evolution of proprietary product detection models by refining core definitions and evals, integrating Gemini and state-of-the-art visual-language models for higher precision and contextual relevance.",
      },
      {
        name: "Timed Shopping Experiences",
        details:
          "Launched the Shopping Timely Shelf on mobile (44.4% dismissal reduction) and a first-of-its-kind timed experience on TV, driving a +6000% lift in engagement.",
      },
      {
        name: "ML Roadmap: Timestamps v2",
        details:
          "Presented the auto-timestamps strategy to VPs. Increased product tag adoption from 4% to 10%+, resulting in a +5.14% lift in offer clicks.",
      },
    ],
    press: [
      {
        title: "TechCrunch: Diversifying Creator Revenue",
        url: "https://techcrunch.com/2026/02/10/youtubers-arent-relying-on-ad-revenue-anymore-heres-how-some-are-diversifying/",
      },
      { title: "YouTube: Improving Product UX", url: "https://www.youtube.com/watch?v=MrXoR7Tw_i8" },
      {
        title: "TechCrunch: Auto-Timestamps Launch",
        url: "https://techcrunch.com/2025/09/16/youtube-unveils-new-ways-for-creators-to-earn-with-brand-deals-youtube-shopping-program/",
      },
    ],
    photos: [
      { src: "/photos/zurich-hiking.webp", alt: "Hiking in the Swiss mountains" },
      { src: "/photos/zurich-cows.webp", alt: "Swiss cows in an alpine meadow" },
      { src: "/photos/zurich-team.webp", alt: "With the team in Zurich" },
    ],
  },
  {
    id: "london",
    flag: "🇬🇧",
    location: "London, UK",
    period: "July 2022 – March 2024",
    role: "Product Manager · Google Sheets",
    summary:
      "0-to-1 product design: spearheaded Tables in Google Sheets, a fundamental shift from 'cells' to 'structured objects' for billions of users.",
    achievements: [
      "+35% increase in user retention for data-heavy workflows.",
      "Navigated the tension between advanced functionality and clean, intuitive UI.",
      "Laid the foundation structure for Sheets AI features.",
    ],
    personal:
      "As a Harry Potter fan, she fell in love with London life — West End shows, Italian pasta, and running through the parks. She especially enjoyed \"smelly pubs\" with excellent beer and the heavenly cream the British put on their scones at tea time.",
    projects: [
      {
        name: "Tables in Google Sheets",
        details:
          "Led end-to-end product development of Tables from concept to launch. Managed a team of 15+ engineers with a hypothesis-driven approach, resulting in a 5% increase in the north-star metric.",
      },
      {
        name: "Conditional Notifications",
        details:
          "Defined the strategy and led execution for Sheets Conditional Notifications: 90% email open rate and 80% user satisfaction.",
      },
      {
        name: "Apps Script & GenAI",
        details:
          "Led strategy and roadmap for Apps Script, focused on bringing generative AI into the automation platform.",
      },
    ],
    press: [
      {
        title: "The Verge: Conditional Notifications",
        url: "https://www.theverge.com/2024/6/5/24172291/google-sheets-workspace-conditional-notifications-microsoft-excel-airtable",
      },
      {
        title: "Ben L Collins: Tables in Google Sheets",
        url: "https://www.benlcollins.com/spreadsheets/tables-in-google-sheets/",
      },
    ],
    photos: [
      { src: "/photos/london-bigben.webp", alt: "Big Ben, London" },
      { src: "/photos/london-pub.webp", alt: "A London pub" },
      { src: "/photos/london-hogwarts.webp", alt: "Harry Potter studio tour" },
    ],
  },
  {
    id: "nyc",
    flag: "🇺🇸",
    location: "New York City, USA",
    period: "Aug 2019 – Oct 2022",
    role: "APM · Google Maps & NYU Fulbright Scholar",
    summary:
      "Used AI for personalization and user growth. Owned the strategy for improving semantic search results using user-generated content and visual-first results on Google Maps.",
    achievements: [
      "Increased search results interaction by 5% and decreased manual refinements by 20%.",
      "MS in Management of Technology at NYU: 3.9 GPA.",
      "Data Researcher at the NYU Furman Center: reduced processing times by 20%.",
    ],
    personal:
      "Gabriela initially found NYC as tough as a stale dollar slice. As a Gossip Girl fan, she eventually learned to love the city, realizing that \"XOXO\" actually stands for \"Exhausted On X-mas, Okay?\" She made it home, trading skyscraper sightseeing for the real local sport: extreme rat-watching.",
    projects: [
      {
        name: "Maps Visual Search",
        details:
          "Launched a Language Picker promo in India (+12% MAU) and a new ML photo carousel for services 'menus' with a 20% interaction rate and a 2–5% lift in core metrics.",
      },
      {
        name: "Street View 15th Anniversary",
        details:
          "Defined requirements and launched a product experience with 6M+ opt-ins and 16M+ virtual trips taken.",
      },
      {
        name: "NYU Housing Research",
        details:
          "Research for the 'State of NYC Housing' report; data-cleaning processes that cut processing times by 20%.",
      },
      {
        name: "Research Innovation Award",
        details:
          "Won the MoT Capstone award for a computer-vision project using AI to count street traffic. Led 4 Design for America social projects.",
      },
    ],
    press: [
      {
        title: "Visual Search Launch",
        url: "https://blog.gaganghotra.com/seo/google-maps-discover-through-photos-new-feature/",
      },
      {
        title: "TechCrunch: Street View Anniversary",
        url: "https://techcrunch.com/2022/05/24/google-maps-street-view-celebrates-15-years-with-historical-imagery-on-mobile-new-camera-and-more/",
      },
    ],
    photos: [
      { src: "/photos/nyc-graduation.webp", alt: "NYU graduation" },
      { src: "/photos/nyc-grandcanyon.webp", alt: "Grand Canyon trip" },
      { src: "/photos/nyc-family-graduation.webp", alt: "Graduation with family" },
    ],
  },
  {
    id: "cordoba",
    flag: "🇦🇷",
    location: "Córdoba, Argentina",
    period: "Foundations",
    role: "Systems Engineer & Fulbright Scholar",
    summary: "Winning the Fulbright scholarship and technical leadership at Disney Parks.",
    achievements: [
      "Fulbright Scholar: selected nationwide.",
      "Tech Lead for Disney Parks at Globant: managed a team of 6.",
      "BS in Systems Engineering at UTN-FRC: 9.22/10 GPA.",
      "Girls Who Code: taught 15 young women.",
    ],
    personal:
      "Dressed as the Android mascot for graduation. Loved summer river trips and a good fernet.",
    projects: [
      {
        name: "Tech Lead @ Disney Parks (Globant)",
        details:
          "Managed a team of 6 developers. Designed and implemented chat integration and cart-sharing modules for high-usage Disney modules using Java and Spring.",
      },
      {
        name: "Internal IoT @ Intel McAfee",
        details: "Developed an internal Angular website for monitoring IoT devices across 5+ teams.",
      },
      {
        name: "Lead Instructor @ Girls Who Code",
        details: "Taught basic coding principles to young women. Freshman student mentor at UTN.",
      },
    ],
    photos: [
      { src: "/photos/cordoba-university.webp", alt: "UTN Córdoba" },
      { src: "/photos/cordoba-graduation.webp", alt: "Engineering graduation" },
      { src: "/photos/cordoba-mcafee.webp", alt: "At Intel McAfee" },
    ],
  },
];

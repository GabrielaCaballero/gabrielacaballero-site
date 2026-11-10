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
    role: "Product Manager · Context & Retrieval, AI Foundations (prev. YouTube Shopping)",
    summary:
      "Since October 2026, driving product strategy for Google's distributed hybrid and vector retrieval platform, which grounds Google Search AI experiences, Gemini and Cloud. Before that, made millions of YouTube videos shoppable with multimodal AI built alongside Google DeepMind, and brought shopping to the living room on Connected TV.",
    achievements: [
      "YouTube 'Ask' shopping companion: launched on Mobile and Web with >97% answer precision and +2% qualified offer clicks.",
      "Expanded the shoppable video corpus by 13% and scaled visual retrieval across 30x more videos with DeepMind.",
      "Gemini auto-timestamping: more than doubled timestamped product coverage, +5.1% offer clicks.",
      "Connected TV commerce: interactive product overlays (+11.5% engagement), Add to Cart and Quick Buy.",
    ],
    personal:
      "Living in Zurich has made her appreciate nature more — she actually takes pictures of cows and flowers now! She spends her time running, exploring the mountains, swimming in the lake during summer, and indulging in plenty of local cheese and chocolate.",
    projects: [
      {
        name: "Next-Gen AI Retrieval & Context Platform",
        details:
          "Product strategy for a hybrid and vector retrieval platform serving tens of millions of QPS at millisecond latency, bridging low-latency indices with modular RAG building blocks, query-side embedding adaptation, long-context LLM memory and personal context.",
      },
      {
        name: "AI Ecosystem Strategy & Agentic Tooling",
        details:
          "Competitive cloud retrieval benchmarking and developer friction analysis across internal AI clients; built agentic PM workflows for developer support synthesis and interactive system architecture mapping.",
      },
      {
        name: "Conversational AI Shopping Companion (YouTube 'Ask')",
        details:
          "Authored the 0-to-1 strategy turning YouTube's Gemini-powered video Q&A into a Shopping Graph-grounded assistant. Built SQL and Python/Gemini API classifiers to size high-intent shopping demand; >97% answer precision, +2% qualified offer clicks, neutral watch time.",
      },
      {
        name: "Multimodal Video Understanding (with Google DeepMind)",
        details:
          "Partnered with DeepMind researchers on video classification and visual product detection: +13% shoppable corpus and visual retrieval across 30x more videos (>3x coverage at high precision).",
      },
      {
        name: "Gemini Auto-Timestamping & Evaluations",
        details:
          "Matched products to exact video moments, more than doubling timestamped coverage (+5.1% offer clicks). Redesigned ground-truth evals combining audio and visual context; model tags beat manual creator tags 2.2x.",
      },
      {
        name: "Connected TV Commerce & Checkout",
        details:
          "Authored the multi-year TV commerce strategy; launched 10-foot vertical product overlays (+11.5% engagement) and led cross-device Add to Cart and Quick Buy checkout.",
      },
      {
        name: "Dynamic Mobile Product Overlays",
        details:
          "Defined UX and ML triggering across 7+ experiments, cutting banner dismissals by 44% while lifting qualified offer clicks +1.6%.",
      },
      {
        name: "Gemini Financial Reasoning Evals (20% project)",
        details:
          "Built an end-to-end benchmark suite diagnosing Gemini reasoning gaps on complex enterprise finance scenarios.",
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
      "Sheets Tables: 50% user adoption and +5% North Star metric lift.",
      "Conditional Notifications became Workspace's foundational pattern for automated and agentic workflows.",
      "Defined the multi-quarter roadmap modernizing analytical workflows for enterprise data analysts.",
    ],
    personal:
      "As a Harry Potter fan, she fell in love with London life — West End shows, Italian pasta, and running through the parks. She especially enjoyed \"smelly pubs\" with excellent beer and the heavenly cream the British put on their scones at tea time.",
    projects: [
      {
        name: "Tables in Google Sheets",
        details:
          "Co-led the product vision and PRD turning unstructured grids into structured Tables with a 15+ engineer team, shipping core building blocks and table controls (50% adoption, +5% North Star).",
      },
      {
        name: "Conditional Notifications",
        details:
          "Led strategy and launch, resolving security, group-ownership and data-governance constraints. 90% email open rate and 80% user satisfaction.",
      },
      {
        name: "Enterprise Data Analytics Strategy",
        details:
          "Defined the multi-quarter product roadmap modernizing core analytical workflows in Google Sheets for enterprise data analysts.",
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
    period: "Aug 2019 – July 2022",
    role: "APM · Google Maps & NYU Fulbright Scholar",
    summary:
      "Fulbright Scholar at NYU, APM intern on Google Docs (2020), then Associate Product Manager on Google Maps (2021–2022): used computer vision to extract structured real-world attributes from Street View imagery and grew Maps internationally.",
    achievements: [
      "Secured VP alignment for Maps Visual Search: computer vision on Street View imagery.",
      "India Language Picker launch: +12% regional monthly active users in two months.",
      "MS in Management of Technology at NYU: 3.9 GPA.",
      "Data Researcher at the NYU Furman Center: reduced processing times by 20%.",
    ],
    personal:
      "Gabriela initially found NYC as tough as a stale dollar slice. As a Gossip Girl fan, she eventually learned to love the city, realizing that \"XOXO\" actually stands for \"Exhausted On X-mas, Okay?\" She made it home, trading skyscraper sightseeing for the real local sport: extreme rat-watching.",
    projects: [
      {
        name: "Maps Visual Search",
        details:
          "Shipped ML photo classification surfacing local business service menus (20% interaction rate, +2.3% place-sheet engagement) and the India Language Picker (+12% MAU).",
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
          "Selected 1st among 25+ corporate capstone teams for computer vision with NYC DOT to detect street traffic. Led 4 Design for America social-impact teams.",
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
      "Fulbright Scholar: 1 of 10 selected from 500 candidates; Argentina's Bicentennial Scholarship.",
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

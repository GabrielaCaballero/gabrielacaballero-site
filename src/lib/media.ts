// Talks, interviews and panels. Newest first; add new ones at the top.

export type MediaItem = {
  title: string;
  url: string;
  platform: string;
  year: string;
  description: string;
  tags: string[];
  lang: "es" | "en";
};

export const MEDIA: MediaItem[] = [
  {
    title: "Entrevista con Gabriela Caballero — Cómo conseguir trabajo en el extranjero",
    url: "https://www.youtube.com/watch?v=7TF6DWTW6jg",
    platform: "YouTube",
    year: "2024",
    description: "Deep dive into the international tech landscape and relocation strategies.",
    tags: ["Career", "International"],
    lang: "es",
  },
  {
    title: "De Argentina a Londres como Product Manager",
    url: "https://www.youtube.com/watch?v=9wEfFLcN14E",
    platform: "YouTube",
    year: "2024",
    description: "Personal journey from Córdoba to London's tech scene.",
    tags: ["Personal journey", "PM"],
    lang: "es",
  },
  {
    title: "Beyond SWE: Exploring Non-Engineering Roles in Tech",
    url: "https://careersonair.withgoogle.com/events/beyond-swe",
    platform: "Google OnAir",
    year: "2024",
    description: "Panel discussion about product and strategy roles at Google.",
    tags: ["Google", "Career"],
    lang: "en",
  },
  {
    title: "Product Manager Interview",
    url: "https://www.youtube.com/watch?v=8NieLyKCrbM",
    platform: "YouTube",
    year: "2024",
    description: "In-depth interview about the PM craft and breaking into tech.",
    tags: ["PM", "Interview"],
    lang: "en",
  },
  {
    title: "Taller de Proyectos Personales",
    url: "https://careersonair.withgoogle.com/events/taller-de-proyectos-personales",
    platform: "Google OnAir",
    year: "2024",
    description: "Workshop on building impactful personal projects for your career.",
    tags: ["Workshop", "Projects"],
    lang: "es",
  },
];

export type Project = {
  id: string;
  title: string;
  description: string;
  href: string;
  image: string;
  live?: boolean;
  inProgress?: boolean;
  featured?: boolean;
};

/** Teslim edilmiş veya teslim sürecindeki müşteri işleri */
export const DELIVERED_PROJECTS: Project[] = [
  {
    id: "srnoto",
    title: "SRNoto",
    description: "Kurumsal web sitesi · Canlı müşteri projesi",
    href: "https://www.srnoto.com/",
    image: "/projects/srnoto.png",
    live: true,
    featured: true,
  },
  {
    id: "klnk-psk",
    title: "Zeynep — Klinik Psikolog",
    description: "Klinik psikolog web sitesi · Yapım aşamasında",
    href: "https://klnk-psk.vercel.app/",
    image: "/projects/klnk-psk.png",
    inProgress: true,
  },
];

export const DEMO_PROJECTS: Project[] = [
  {
    id: "nexora",
    title: "Nexora",
    description: "Full-stack e-ticaret · MongoDB, Stripe, NextAuth, Groq",
    href: "https://nexora-six-wheat.vercel.app/",
    image: "/projects/nexora.png",
  },
  {
    id: "cv-analyzer",
    title: "CV Analyzer",
    description: "AI CV analizi · Next.js, Groq API, TypeScript",
    href: "https://cv-analyzer-kohl.vercel.app/",
    image: "/projects/cv-analyzer.png",
  },
  {
    id: "shopbot",
    title: "ShopBot",
    description: "E-ticaret AI chatbot · Groq API",
    href: "https://chatbot-demo-seven-lovat.vercel.app/",
    image: "/projects/shopbot.png",
  },
  {
    id: "saglik-demo",
    title: "Sağlık Demo",
    description: "Evde sağlık hizmetleri landing page konsepti",
    href: "https://avil-saglik.vercel.app/",
    image: "/projects/saglik-demo.png",
  },
  {
    id: "sanatci-portfolio",
    title: "Sanatçı Portfolio",
    description: "Kişisel portfolio konsepti",
    href: "https://mustafa-bardakcioglu-portfolio.vercel.app/",
    image: "/projects/sanatci-portfolio.png",
  },
  {
    id: "lezzet-house",
    title: "Lezzet House",
    description: "Restoran landing page konsepti",
    href: "https://restoran-sitesi.vercel.app/",
    image: "/projects/lezzet-house.png",
  },
];

export function formatDomain(href: string): string {
  return href.replace(/^https?:\/\//, "").replace(/\/$/, "") + "/";
}

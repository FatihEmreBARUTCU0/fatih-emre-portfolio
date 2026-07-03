"use client";

import FeatureStat from "./FeatureStat";
import ProjectCard from "./ProjectCard";
import { DELIVERED_PROJECTS, DEMO_PROJECTS } from "./projects";

const TECHNOLOGIES = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Node.js",
  "Express.js",
  "MongoDB",
  "PostgreSQL",
  "REST API",
  "Socket.IO",
  "JWT",
  "Stripe",
  "Supabase",
  "Groq AI",
  "Three.js",
  "Vercel",
];

export default function ScrollSections() {
  return (
    <>
      {/* 1. HERO */}
      <section id="hero" data-section="hero" className="section relative">
        <div className="max-w-[640px] md:max-w-[52%] text-center lg:text-left mx-auto lg:mx-0">
          <p className="eyebrow mb-6" data-hero-text>
            Full Stack Developer — İzmir
          </p>
          <h1 className="headline" data-hero-text>
            Fatih Emre
            <br />
            Barutçu
          </h1>
          <p
            className="mt-6 max-w-md mx-auto lg:mx-0 text-sm md:text-base text-muted leading-relaxed"
            data-hero-text
          >
            Üretime hazır, modern web deneyimleri geliştiriyorum. Next.js ile
            full-stack e-ticaret, AI entegrasyonları ve temiz frontend sistemleri
            inşa ediyorum.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start" data-hero-text>
            <a href="#yapilmis-isler" className="cta">
              Projeler
            </a>
            <a href="#iletisim" className="cta-outline">
              İletişim
            </a>
          </div>
        </div>
        <div className="hidden lg:flex absolute bottom-10 left-1/2 -translate-x-1/2 flex-col items-center gap-2 text-xs tracking-wider" style={{ color: "var(--warm-muted)" }}>
          <span>Keşfetmek için kaydır</span>
          <span className="block w-px h-8" style={{ background: "rgba(232, 160, 80, 0.35)" }} />
        </div>
      </section>

      {/* 2. HAKKIMDA */}
      <section id="hakkimda" data-section="closeup" className="section relative justify-end">
        <div className="max-w-[480px] text-right md:text-left md:max-w-[42%] md:ml-auto lg:mt-[6vh]">
          <p className="eyebrow mb-4">01 — Hakkımda</p>
          <h2 className="headline-md">
            Dijital ürünleri
            <br />
            özenle inşa ediyorum.
          </h2>
          <p className="mt-5 text-sm md:text-base text-muted leading-relaxed">
            İzmir merkezli Full Stack Developer&apos;ım. Next.js ve React ile arayüz;
            Node.js, Express ve MongoDB/PostgreSQL ile API ve veri katmanı
            geliştiriyorum. E-ticaret, gerçek zamanlı uygulamalar ve AI
            entegrasyonlarında üretim ortamına hazır projeler teslim ettim.
          </p>
          <div className="mt-5 info-card">
            <p className="text-[10px] uppercase tracking-[0.16em] text-subtle mb-2">Eğitim</p>
            <p className="text-sm font-medium leading-snug">
              Bilgisayar Mühendisliği — Süleyman Demirel Üniversitesi · 2025
            </p>
            <p className="mt-1.5 text-sm text-muted">
              Konya Teknik Üniversitesi&apos;nde 2 yıl; ardından SDÜ&apos;ye yatay geçiş
            </p>
          </div>
        </div>
      </section>

      {/* 3. TEKNOLOJİLER + STATS */}
      <section id="teknolojiler" data-section="front" className="section relative">
        <div className="lg:absolute lg:bottom-[18vh] lg:left-[10vw] max-w-[480px]">
          <p className="eyebrow mb-3">Teknolojiler</p>
          <h2 className="section-title">
            Üretime hazır,
            <br />
            ölçeklenebilir sistemler.
          </h2>
          <div className="mt-6 flex flex-wrap gap-2 max-w-md">
            {TECHNOLOGIES.map((tech) => (
              <span key={tech} className="tech-pill">
                {tech}
              </span>
            ))}
          </div>
        </div>
        <div className="mt-6 lg:mt-0 lg:absolute lg:top-[22vh] lg:right-[10vw] flex flex-row lg:flex-col gap-5 lg:gap-7 items-start lg:items-end">
          <FeatureStat label="Tamamlanan proje" value="9" />
          <FeatureStat label="Teknoloji" value="16+" />
          <FeatureStat label="Canlı müşteri" value="2" />
        </div>
      </section>

      {/* 4. YAPILMIŞ İŞLER */}
      <section id="yapilmis-isler" data-section="top" className="section section--projects relative">
        <div className="projects-panel">
          <p className="eyebrow mb-3">Yapılmış İşler</p>
          <h2 className="section-title mb-2">Teslim edilen projeler.</h2>
          <p className="text-sm text-muted mb-5 max-w-lg">
            Anlaşma sağlanmış müşteri işleri. Canlıya alınmış veya teslim sürecindeki projeler.
          </p>
          <div className="project-grid project-grid--delivered">
            {DELIVERED_PROJECTS.map((project) => (
              <ProjectCard key={project.id} {...project} compact />
            ))}
          </div>
        </div>
      </section>

      {/* 5. DEMO SİTELER */}
      <section id="demo-siteler" data-section="back" className="section section--projects relative">
        <div className="projects-panel">
          <p className="eyebrow mb-3">Demo Siteler</p>
          <h2 className="section-title mb-2">Kişisel projeler.</h2>
          <p className="text-sm text-muted mb-5 max-w-lg">
            Kişisel projeler ve sektörel ön çalışma konseptleri. Gerçek marka isimleri kullanılmadan sunulmuştur.
          </p>
          <div className="project-grid">
            {DEMO_PROJECTS.map((project) => (
              <ProjectCard key={project.id} {...project} compact />
            ))}
          </div>
        </div>
      </section>

      {/* 6. İLETİŞİM */}
      <section id="iletisim" data-section="final" className="section relative">
        <div className="w-full flex items-center justify-center lg:justify-end">
          <div className="text-center lg:text-right max-w-[85%] lg:max-w-[min(520px,46vw)] w-full">
            <p className="eyebrow mb-4">03 — İletişim</p>
            <h2 className="final-title">
              Birlikte üretelim
              <br />
              <em>bir şeyler.</em>
            </h2>
            <p className="contact-lead mt-5 text-sm text-muted leading-relaxed max-w-sm mx-auto lg:ml-auto lg:mr-0">
              Freelance projeler ve tam zamanlı fırsatlara açığım.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-end items-center">
              <a href="mailto:emrecompbarutcu@gmail.com" className="cta cta--email">
                emrecompbarutcu@gmail.com
              </a>
              <a href="tel:+905331490251" className="contact-link">
                0533 149 02 51
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

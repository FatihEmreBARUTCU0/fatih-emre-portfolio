"use client";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-[6vw] md:px-[8vw] py-6 flex items-center justify-between pointer-events-none">
      <a href="#hero" className="pointer-events-auto font-semibold text-[15px] tracking-tight" style={{ color: "var(--ink)" }}>
        F. Emre Barutçu
      </a>
      <nav className="pointer-events-auto hidden md:flex items-center gap-10 text-sm">
        <a href="#hakkimda" className="nav-link">Hakkımda</a>
        <a href="#yapilmis-isler" className="nav-link">Projeler</a>
        <a href="#iletisim" className="nav-link nav-link--active">İletişime Geç</a>
      </nav>
      <button
        type="button"
        aria-label="Open menu"
        className="pointer-events-auto md:hidden flex flex-col gap-1.5 p-2"
      >
        <span className="block h-[2px] w-6" style={{ background: "var(--warm-muted)" }} />
        <span className="block h-[2px] w-6" style={{ background: "var(--warm-muted)" }} />
      </button>
    </header>
  );
}

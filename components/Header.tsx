"use client";

import { useEffect, useState } from "react";

const NAV_LINKS = [
  { href: "#hakkimda", label: "Hakkımda" },
  { href: "#yapilmis-isler", label: "Projeler" },
  { href: "#iletisim", label: "İletişime Geç" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 px-[6vw] md:px-[8vw] py-6 flex items-center justify-between pointer-events-none">
        <a
          href="#hero"
          className="pointer-events-auto font-semibold text-[15px] tracking-tight"
          style={{ color: "var(--ink)" }}
          onClick={close}
        >
          F. Emre Barutçu
        </a>
        <nav className="pointer-events-auto hidden md:flex items-center gap-10 text-sm">
          {NAV_LINKS.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              className={`nav-link${i === NAV_LINKS.length - 1 ? " nav-link--active" : ""}`}
            >
              {link.label}
            </a>
          ))}
        </nav>
        <button
          type="button"
          aria-label={open ? "Menüyü kapat" : "Menüyü aç"}
          aria-expanded={open}
          aria-controls="mobile-nav"
          className="pointer-events-auto md:hidden flex flex-col justify-center gap-1.5 p-2 -mr-2"
          onClick={() => setOpen((v) => !v)}
        >
          <span
            className={`block h-[2px] w-6 transition-transform duration-300 origin-center ${open ? "translate-y-[5px] rotate-45" : ""}`}
            style={{ background: "var(--warm-muted)" }}
          />
          <span
            className={`block h-[2px] w-6 transition-opacity duration-200 ${open ? "opacity-0" : ""}`}
            style={{ background: "var(--warm-muted)" }}
          />
          <span
            className={`block h-[2px] w-6 transition-transform duration-300 origin-center ${open ? "-translate-y-[5px] -rotate-45" : ""}`}
            style={{ background: "var(--warm-muted)" }}
          />
        </button>
      </header>

      <div
        id="mobile-nav"
        className={`mobile-nav md:hidden${open ? " mobile-nav--open" : ""}`}
        aria-hidden={!open}
      >
        <button
          type="button"
          className="mobile-nav__backdrop"
          aria-label="Menüyü kapat"
          onClick={close}
        />
        <nav className="mobile-nav__panel">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="mobile-nav__link"
              onClick={close}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </>
  );
}

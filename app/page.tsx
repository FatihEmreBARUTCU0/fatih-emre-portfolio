import Header from "@/components/Header";
import LoadingScreen from "@/components/LoadingScreen";
import SceneClient from "@/components/SceneClient";
import ScrollSections from "@/components/ScrollSections";

export default function Page() {
  return (
    <>
      {/* main = ScrollTrigger trigger. Footer DELIBERATELY outside main
          so ScrollTrigger end "bottom bottom" lands on section 6's bottom
          (when state 5 is fully active in the viewport). */}
      <main className="relative">
        <LoadingScreen />
        <Header />
        <div className="scene-fixed">
          <SceneClient />
        </div>
        <div className="section-stack">
          <ScrollSections />
        </div>
      </main>
      <footer className="relative z-10 py-10 px-[8vw] text-xs text-subtle flex flex-col md:flex-row md:items-center md:justify-between gap-2 border-t border-white/[0.06]">
        <span>© 2026 Fatih Emre Barutcu — Tüm hakları saklıdır.</span>
        <span>3D model: &quot;Sci Fi Laptop alternative 90s&quot; by holgcool (CC-BY-4.0)</span>
      </footer>
    </>
  );
}

"use client";

import { useEffect, useState } from "react";
import { lockScroll, onTexturesReady, markIntroStart, resetSceneSession } from "@/lib/sceneReady";

// CRITICAL: do NOT import anything from @react-three/drei here. drei would
// transitively pull all of three.js into the initial JS bundle and undo
// the code-splitting performed by SceneClient. The authoritative "ready"
// signal is the texturesReady event from CameraModel; the bar is a pure
// CSS keyframe loop (loading-bar), not a real progress indicator.
export default function LoadingScreen() {
  const [texturesReady, setTexturesReady] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    resetSceneSession();
    lockScroll();
  }, []);

  useEffect(() => onTexturesReady(() => setTexturesReady(true)), []);

  // Safety net — never leave the user on a dead loading screen.
  useEffect(() => {
    const fallback = window.setTimeout(() => setTexturesReady(true), 12000);
    return () => window.clearTimeout(fallback);
  }, []);

  useEffect(() => {
    if (!texturesReady || hidden) return;

    const hold = window.setTimeout(() => {
      setHidden(true);
      // 520ms ≈ matches the CSS opacity transition (0.5s) so introStart
      // fires the instant the overlay is fully transparent.
      window.setTimeout(() => markIntroStart(), 520);
    }, 280);

    return () => window.clearTimeout(hold);
  }, [texturesReady, hidden]);

  return (
    <div
      className={`loading-screen${hidden ? " loading-screen--hidden" : ""}`}
      aria-hidden={hidden}
      role="status"
      aria-live="polite"
    >
      <div className="loading-screen__inner">
        <div className="loading-screen__logo">F. Emre Barutçu</div>
        <div className="loading-screen__caption">Portföy yükleniyor</div>
        <div className="loading-screen__bar" aria-hidden>
          <div className="loading-screen__bar-fill" />
        </div>
        <span className="sr-only">Portföy yükleniyor</span>
      </div>
    </div>
  );
}

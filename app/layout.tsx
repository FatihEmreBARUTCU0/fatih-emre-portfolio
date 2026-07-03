import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Fatih Emre Barutcu — Full Stack Developer",
  description:
    "İzmir merkezli Full Stack Developer. Next.js, React ve Node.js ile üretime hazır web deneyimleri geliştiriyorum.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr">
      <head>
        {/* Inline script BEFORE React hydrates — disables browser scroll
            restoration so every refresh starts at the hero. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if ('scrollRestoration' in history) {
                history.scrollRestoration = 'manual';
              }
              window.scrollTo(0, 0);
            `,
          }}
        />
        {/* GLB preload — starts downloading the model in parallel with
            JS bundles, cuts mobile LCP significantly. */}
        <link
          rel="preload"
          href="/models/camera.glb"
          as="fetch"
          crossOrigin="anonymous"
          type="model/gltf-binary"
        />
      </head>
      <body className="font-sans">{children}</body>
    </html>
  );
}

"use client";

import Image from "next/image";
import { useState } from "react";
import { formatDomain } from "./projects";

type ProjectCardProps = {
  title: string;
  description: string;
  href: string;
  image: string;
  featured?: boolean;
  live?: boolean;
  inProgress?: boolean;
  compact?: boolean;
};

export default function ProjectCard({
  title,
  description,
  href,
  image,
  featured = false,
  live = false,
  inProgress = false,
  compact = false,
}: ProjectCardProps) {
  const [imgError, setImgError] = useState(false);
  const domain = formatDomain(href);

  const className = [
    "browser-card group block",
    featured ? "browser-card--featured" : "",
    compact ? "browser-card--compact" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <a href={href} target="_blank" rel="noreferrer" className={className}>
      <div className="browser-card__chrome">
        <div className="browser-card__dots" aria-hidden>
          <span className="browser-card__dot browser-card__dot--red" />
          <span className="browser-card__dot browser-card__dot--yellow" />
          <span className="browser-card__dot browser-card__dot--green" />
        </div>
        <div className="browser-card__url">
          <span>{domain}</span>
        </div>
      </div>

      <div className="browser-card__preview">
        {!imgError ? (
          <Image
            src={image}
            alt={`${title} önizleme`}
            fill
            unoptimized
            sizes={compact ? "(max-width: 768px) 45vw, 220px" : "(max-width: 768px) 90vw, 320px"}
            className="browser-card__img"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="browser-card__placeholder" aria-hidden />
        )}
      </div>

      <div className="browser-card__body">
        <div className="browser-card__title-row">
          <h3 className="browser-card__title">{title}</h3>
          {live && <span className="browser-card__badge">Canlı</span>}
          {inProgress && <span className="browser-card__badge browser-card__badge--progress">Yapım aşamasında</span>}
        </div>
        <p className="browser-card__desc">{description}</p>
        <span className="browser-card__cta">
          Ziyaret Et
          <span aria-hidden className="browser-card__arrow">↗</span>
        </span>
      </div>
    </a>
  );
}

type FeatureStatProps = {
  label: string;
  value: string;
  unit?: string;
};

export default function FeatureStat({ label, value, unit }: FeatureStatProps) {
  return (
    <div className="flex flex-col items-end text-right">
      <span
        className="text-[10px] uppercase tracking-[0.16em] leading-tight"
        style={{ color: "var(--warm-muted)" }}
      >
        {label}
      </span>
      <span
        className="mt-1 text-2xl md:text-3xl font-semibold tracking-tight leading-none"
        style={{ color: "var(--ink)" }}
      >
        {value}
        {unit && (
          <span
            className="text-sm md:text-base ml-1 align-top"
            style={{ color: "var(--ink-muted)" }}
          >
            {unit}
          </span>
        )}
      </span>
    </div>
  );
}

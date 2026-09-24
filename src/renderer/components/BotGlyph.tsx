export type BotGlyphWeight = "thin" | "light" | "regular" | "bold" | "fill" | "duotone";

export interface BotGlyphProps {
  size?: string | number;
  weight?: BotGlyphWeight;
  className?: string;
  "aria-label"?: string;
  strokeWidth?: string | number;
}

export function BotGlyph({
  size = 16,
  className,
  "aria-label": ariaLabel,
}: BotGlyphProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 256 256"
      className={className}
      aria-label={ariaLabel}
      aria-hidden={ariaLabel ? undefined : true}
    >
      <rect width="256" height="256" fill="none" />
      <circle cx="100" cy="80" r="12" />
      <circle cx="156" cy="80" r="12" />
      <path d="M48 120h160v76a16 16 0 0 1-16 16H64a16 16 0 0 1-16-16Z" fill="none" stroke="currentColor" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="128" y1="120" x2="128" y2="176" stroke="currentColor" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

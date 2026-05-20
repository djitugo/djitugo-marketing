import { cn } from "@/lib/cn";

type Props = {
  className?: string;
  title?: string;
};

/**
 * Djitugo monogram: a stylised D with three horizontal "wing" cuts on the
 * left spine. Renders with currentColor so it inverts cleanly on the
 * paper-background portfolio section. Edit the path / cut rectangles
 * below to tighten the mark.
 */
export function Logo({ className, title = "Djitugo" }: Props) {
  return (
    <svg
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label={title}
      className={cn("inline-block align-middle", className)}
    >
      <title>{title}</title>
      <defs>
        <mask id="djitugo-d-cuts">
          <rect width="100" height="100" fill="black" />
          <path
            d="M 12 14 L 50 14 A 26 36 0 0 1 50 86 L 12 86 Z"
            fill="white"
          />
          <rect x="0" y="33" width="58" height="6" fill="black" />
          <rect x="0" y="57" width="58" height="6" fill="black" />
        </mask>
      </defs>
      <rect
        width="100"
        height="100"
        mask="url(#djitugo-d-cuts)"
        fill="currentColor"
      />
    </svg>
  );
}

import Image from "next/image";
import { cn } from "@/lib/cn";

type Props = {
  className?: string;
  size?: number;
  priority?: boolean;
  square?: boolean;
};

/**
 * Djitugo brand mark. Cropped to a circle by default so the PNG's black
 * square doesn't read as a hard tile. Pass square to keep the original
 * rectangle (used by Open Graph and the favicon).
 */
export function Logo({
  className,
  size = 64,
  priority = false,
  square = false
}: Props) {
  return (
    <span
      className={cn(
        "relative inline-block bg-ink-0",
        square ? "" : "overflow-hidden rounded-full",
        className
      )}
    >
      <Image
        src="/logo.png"
        alt="Djitugo"
        width={size * 4}
        height={size * 4}
        priority={priority}
        sizes="128px"
        className="size-full object-cover"
      />
    </span>
  );
}

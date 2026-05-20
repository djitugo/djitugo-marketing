import Image from "next/image";
import { cn } from "@/lib/cn";

type Props = {
  className?: string;
  size?: number;
  priority?: boolean;
};

/**
 * Djitugo brand mark. The asset lives at /logo.png so it can be swapped
 * without touching code. Sized via Tailwind className (h-* w-*); the
 * width/height props below are just the intrinsic resolution hint.
 */
export function Logo({ className, size = 64, priority = false }: Props) {
  return (
    <Image
      src="/logo.png"
      alt="Djitugo"
      width={size * 4}
      height={size * 4}
      priority={priority}
      sizes="128px"
      className={cn("inline-block h-auto w-auto", className)}
    />
  );
}

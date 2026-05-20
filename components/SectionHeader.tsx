import { cn } from "@/lib/cn";

type Props = {
  number: string;
  label: string;
  className?: string;
};

export function SectionHeader({ number, label, className }: Props) {
  return (
    <div
      className={cn(
        "flex items-center gap-3 font-mono text-mono-label uppercase opacity-70",
        className
      )}
    >
      <span>{number}</span>
      <span className="h-px w-8 bg-current opacity-40" />
      <span>{label}</span>
    </div>
  );
}

interface WordmarkProps {
  size?: "sm" | "md";
  className?: string;
  light?: boolean;
}

export default function Wordmark({
  size = "sm",
  className = "",
  light = false,
}: WordmarkProps) {
  const sizeClass = size === "md" ? "text-[28px]" : "text-[20px]";
  const colorClass = light ? "text-snow" : "text-ink";
  const dotColor = light
    ? "after:text-verdant"
    : "after:text-verdant-deep";

  return (
    <div className={`leading-none inline-block ${className}`}>
      <div
        className={`font-sans font-bold tracking-[-0.02em] ${sizeClass} ${colorClass} after:content-['.'] ${dotColor}`}
      >
        Snowdrop
      </div>
    </div>
  );
}

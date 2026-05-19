type TagListProps = {
  items: string[];
  variant?: "light" | "dark";
};

export function TagList({ items, variant = "light" }: TagListProps) {
  return (
    <ul className="flex flex-wrap gap-2" aria-label="标签">
      {items.map((item) => (
        <li
          key={item}
          className={
            variant === "dark"
              ? "rounded-full bg-emerald-400/10 px-3 py-1 text-xs font-semibold text-emerald-300"
              : "rounded-md border border-stone-200 bg-white px-2.5 py-1 text-xs font-medium text-stone-700"
          }
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

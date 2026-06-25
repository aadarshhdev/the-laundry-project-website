import BrandLogo from "./BrandLogo";

type BrandMarkProps = {
  logoSize?: number;
  showTagline?: boolean;
  variant?: "light" | "dark";
  layout?: "row" | "stack";
};

export default function BrandMark({
  logoSize = 36,
  showTagline = false,
  variant = "dark",
  layout = "row",
}: BrandMarkProps) {
  const isLight = variant === "light";
  const isStack = layout === "stack";

  return (
    <div className={`flex items-center gap-2.5 ${isStack ? "flex-col text-center" : ""}`}>
      <div
        className={`shrink-0 rounded-full overflow-hidden shadow-md ${
          isLight ? "ring-2 ring-white/20" : "ring-2 ring-primary-100"
        }`}
      >
        <BrandLogo size={logoSize} />
      </div>
      <div className={isStack ? "text-center" : ""}>
        <span
          className={`font-display font-bold leading-tight block ${
            isLight ? "text-white" : "text-secondary"
          } ${logoSize >= 48 ? "text-xl" : "text-lg"}`}
        >
          <span className="block">The Laundry</span>
          <span className={`block ${isLight ? "text-primary-300" : "text-primary-600"}`}>Project</span>
        </span>
        {showTagline && (
          <p className={`text-xs mt-0.5 ${isLight ? "text-primary-200" : "text-tlp-text-muted"}`}>
            Pure. Gentle. Clean.
          </p>
        )}
      </div>
    </div>
  );
}

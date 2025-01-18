import React from "react";

interface ProductBadgeProps {
  badge?: string;
}

export function ProductBadge({ badge }: ProductBadgeProps) {
  if (!badge) return null;

  return (
    <div className="absolute top-2 left-2">
      {badge && (
        <span
          className={`${badge === "New" ? "bg-green-500" : "bg-orange-500"} text-white text-xs font-semibold px-2.5 py-0.5 rounded`}
        >
          {badge}
        </span>
      )}
    </div>
  );
}

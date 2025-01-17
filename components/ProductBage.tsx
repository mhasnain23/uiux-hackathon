import React from "react";

interface ProductBadgeProps {
  tags: string;
}

export function ProductBadge({ tags }: ProductBadgeProps) {
  if (!tags) return null;

  return (
    <div className="absolute top-2 left-2">
      {tags && (
        <span
          className={`${tags.includes("new") ? "bg-green-500" : "bg-orange-500"} text-white text-xs font-semibold px-2.5 py-0.5 rounded`}
        >
          {tags === "New" ? "New" : "Sale"}
        </span>
      )}
    </div>
  );
}

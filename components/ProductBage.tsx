import React from "react";

interface ProductBadgeProps {
  isNew?: boolean;
  isSale?: boolean;
}

export function ProductBadge({ isNew, isSale }: ProductBadgeProps) {
  if (!isNew && !isSale) return null;

  return (
    <div className="absolute top-2 left-2">
      {isNew && (
        <span className="bg-green-500 text-white text-xs font-semibold px-2.5 py-0.5 rounded">
          New
        </span>
      )}
      {isSale && (
        <span className="bg-orange-500 text-white text-xs font-semibold px-2.5 py-0.5 rounded">
          Sales
        </span>
      )}
    </div>
  );
}

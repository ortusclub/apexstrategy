"use client";

import { Children, useState } from "react";
import { ChevronRightIcon } from "@/components/icons";

/**
 * A card grid that shows the first `initialCount` items and reveals the rest
 * in place when asked. No control is rendered when there is nothing hidden.
 *
 * Every card is rendered server-side regardless; the ones past the cut are
 * wrapped in a `display: none` element rather than left out of the markup, so
 * they are present for search engines and revealing them costs no request.
 * The wrapper uses `display: contents` when visible, which keeps each card a
 * direct child of the grid as far as layout is concerned.
 */
export default function ExpandableGrid({
  initialCount,
  moreLabel,
  className,
  children,
}: {
  initialCount: number;
  /** Button copy, e.g. "View more events". */
  moreLabel: string;
  /** Grid classes — the caller owns the column and gap rules. */
  className: string;
  children: React.ReactNode;
}) {
  const items = Children.toArray(children);
  const [expanded, setExpanded] = useState(false);
  const hasMore = items.length > initialCount;

  return (
    <>
      <div className={className}>
        {items.map((item, i) => {
          const hidden = hasMore && !expanded && i >= initialCount;
          return (
            <div key={i} className={hidden ? "hidden" : "contents"}>
              {item}
            </div>
          );
        })}
      </div>

      {hasMore && !expanded && (
        <div className="mt-10 text-center">
          <button
            type="button"
            onClick={() => setExpanded(true)}
            aria-expanded={false}
            className="text-accent hover:text-accent-hover text-sm font-semibold inline-flex items-center gap-2 rounded-sm transition-colors"
          >
            {moreLabel}
            <ChevronRightIcon className="w-4 h-4 rotate-90" />
            <span className="sr-only">
              {" "}
              — {items.length - initialCount} more
            </span>
          </button>
        </div>
      )}
    </>
  );
}

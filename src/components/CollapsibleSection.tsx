"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronRightIcon } from "@/components/icons";

/**
 * A disclosure: a labelled toggle over a region that animates open.
 *
 * The height transition uses the grid-template-rows 0fr → 1fr technique, so
 * the content animates to its natural height without anyone measuring pixels.
 * While closed the region is `inert`, which keeps anything inside it out of
 * the tab order and the accessibility tree — a zero-height overflow-hidden box
 * is invisible but would otherwise still be focusable.
 *
 * Motion is dropped for visitors who ask for reduced motion; the disclosure
 * still works, it just snaps.
 */
export default function CollapsibleSection({
  id,
  showLabel,
  hideLabel,
  defaultOpen = false,
  open: controlledOpen,
  onToggle,
  triggerClassName,
  wrapperClassName = "mt-8",
  chevronClassName = "w-4 h-4",
  children,
}: {
  /** Region id, referenced by the toggle's aria-controls. */
  id: string;
  /** Text, or any node when the trigger needs to be a card rather than a link. */
  showLabel: React.ReactNode;
  hideLabel: React.ReactNode;
  defaultOpen?: boolean;
  /**
   * Pass `open` (with `onToggle`) to drive the disclosure from the parent —
   * needed when something outside the toggle, such as a URL hash, has to open
   * it. Omit both to let the component hold its own state.
   */
  open?: boolean;
  onToggle?: () => void;
  /** Replaces the default link styling on the toggle. */
  triggerClassName?: string;
  wrapperClassName?: string;
  chevronClassName?: string;
  children: React.ReactNode;
}) {
  const [uncontrolledOpen, setUncontrolledOpen] = useState(defaultOpen);
  const open = controlledOpen ?? uncontrolledOpen;
  const toggle = () =>
    controlledOpen === undefined
      ? setUncontrolledOpen((wasOpen) => !wasOpen)
      : onToggle?.();

  const regionRef = useRef<HTMLDivElement>(null);

  // ScrollReveal fades `.reveal` elements in when they scroll into view, but a
  // collapsed region has no height, so its cards may never trip that observer
  // and would expand into what looks like empty space. Reveal them here the
  // moment the region opens; ScrollReveal is idempotent, so a later fire from
  // the observer changes nothing.
  useEffect(() => {
    if (!open) return;
    regionRef.current
      ?.querySelectorAll(".reveal")
      .forEach((el) => el.classList.add("visible"));
  }, [open]);

  return (
    <>
      <div className={wrapperClassName}>
        <button
          type="button"
          onClick={toggle}
          aria-expanded={open}
          aria-controls={id}
          className={
            triggerClassName ??
            "text-accent hover:text-accent-hover text-sm font-semibold inline-flex items-center gap-2 rounded-sm transition-colors"
          }
        >
          {open ? hideLabel : showLabel}
          <ChevronRightIcon
            className={`${chevronClassName} flex-shrink-0 transition-transform duration-300 motion-reduce:transition-none ${
              open ? "-rotate-90" : "rotate-90"
            }`}
          />
        </button>
      </div>

      <div
        id={id}
        ref={regionRef}
        inert={!open}
        className={`grid transition-[grid-template-rows] duration-500 ease-out motion-reduce:transition-none ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">{children}</div>
      </div>
    </>
  );
}

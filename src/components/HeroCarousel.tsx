"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeftIcon, ChevronRightIcon } from "@/components/icons";
import type { RoundtableSlide } from "@/content/roundtables";

const AUTOPLAY_MS = 6000;
/** Horizontal travel, in px, before a drag counts as a swipe. */
const SWIPE_THRESHOLD = 50;

/**
 * Hero image carousel — drag/swipe, subtle arrows, pagination dots and a slow
 * auto-advance that stops permanently as soon as the visitor takes control.
 *
 * With a single slide it renders as a plain image: no controls, no autoplay,
 * no drag handlers. That keeps the hero honest while the remaining executive
 * roundtable images are still being produced (see @/content/roundtables).
 *
 * `children` are layered over the image — the gradient scrim and stat boxes
 * the hero already had.
 */
export default function HeroCarousel({
  slides,
  children,
}: {
  slides: RoundtableSlide[];
  children?: React.ReactNode;
}) {
  const count = slides.length;
  const isCarousel = count > 1;

  const [index, setIndex] = useState(0);
  const [dragX, setDragX] = useState(0);
  const [dragging, setDragging] = useState(false);
  /** Set once the visitor interacts; auto-advance never resumes after that. */
  const [userEngaged, setUserEngaged] = useState(false);
  const [hovered, setHovered] = useState(false);

  const startX = useRef(0);

  const go = useCallback(
    (next: number) => setIndex(((next % count) + count) % count),
    [count],
  );

  const engage = useCallback(() => setUserEngaged(true), []);

  // Auto-advance, unless the visitor has taken over, is hovering, or has asked
  // the operating system for reduced motion.
  useEffect(() => {
    if (!isCarousel || userEngaged || hovered) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const id = window.setInterval(
      () => setIndex((i) => (i + 1) % count),
      AUTOPLAY_MS,
    );
    return () => window.clearInterval(id);
  }, [isCarousel, userEngaged, hovered, count]);

  const onPointerDown = (e: React.PointerEvent) => {
    if (!isCarousel || e.button !== 0) return;
    startX.current = e.clientX;
    setDragging(true);
    engage();
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!dragging) return;
    setDragX(e.clientX - startX.current);
  };

  const endDrag = () => {
    if (!dragging) return;
    if (Math.abs(dragX) > SWIPE_THRESHOLD) go(index + (dragX < 0 ? 1 : -1));
    setDragging(false);
    setDragX(0);
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (!isCarousel) return;
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      engage();
      go(index - 1);
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      engage();
      go(index + 1);
    }
  };

  const frame = (
    <div className="relative rounded-2xl overflow-hidden border border-border shadow-2xl">
      <div
        className="flex"
        style={{
          transform: `translate3d(calc(${-index * 100}% + ${dragX}px), 0, 0)`,
          transition: dragging ? "none" : "transform 600ms ease",
        }}
      >
        {slides.map((slide, i) => (
          <Image
            key={slide.src}
            src={slide.src}
            alt={slide.alt}
            width={slide.width}
            height={slide.height}
            sizes="(max-width: 1024px) 100vw, 45vw"
            priority={i === 0}
            loading={i === 0 ? undefined : "lazy"}
            draggable={false}
            className="w-full flex-shrink-0 object-cover select-none"
            style={{ aspectRatio: "4/3" }}
          />
        ))}
      </div>

      {children}

      {isCarousel && (
        <>
          <button
            type="button"
            onClick={() => {
              engage();
              go(index - 1);
            }}
            aria-label="Previous image"
            className="absolute left-3 top-1/2 -translate-y-1/2 w-11 h-11 flex items-center justify-center rounded-full bg-bg-card/80 backdrop-blur-sm border border-border text-text-light hover:text-white hover:border-[rgba(146,212,205,0.4)] transition-colors"
          >
            <ChevronLeftIcon className="w-5 h-5" />
          </button>
          <button
            type="button"
            onClick={() => {
              engage();
              go(index + 1);
            }}
            aria-label="Next image"
            className="absolute right-3 top-1/2 -translate-y-1/2 w-11 h-11 flex items-center justify-center rounded-full bg-bg-card/80 backdrop-blur-sm border border-border text-text-light hover:text-white hover:border-[rgba(146,212,205,0.4)] transition-colors"
          >
            <ChevronRightIcon className="w-5 h-5" />
          </button>
        </>
      )}
    </div>
  );

  if (!isCarousel) return frame;

  return (
    <div
      role="group"
      aria-roledescription="carousel"
      aria-label="Executive events we have delivered delegates for"
      onKeyDown={onKeyDown}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={engage}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={endDrag}
      onPointerCancel={endDrag}
      onPointerLeave={endDrag}
      className={`relative touch-pan-y ${dragging ? "cursor-grabbing" : "cursor-grab"}`}
    >
      {frame}

      {/* Pagination */}
      <div className="flex items-center justify-center gap-2.5 mt-5">
        {slides.map((slide, i) => (
          <button
            key={slide.src}
            type="button"
            onClick={() => {
              engage();
              go(i);
            }}
            aria-label={`Go to image ${i + 1} of ${count}`}
            aria-current={i === index ? "true" : undefined}
            className="p-2 -m-1 rounded-full"
          >
            <span
              className={`block w-2 h-2 rounded-full transition-colors ${
                i === index ? "bg-accent" : "bg-[rgba(146,212,205,0.3)]"
              }`}
            />
          </button>
        ))}
      </div>

      <p className="sr-only" aria-live="polite">
        Image {index + 1} of {count}: {slides[index].alt}
      </p>
    </div>
  );
}

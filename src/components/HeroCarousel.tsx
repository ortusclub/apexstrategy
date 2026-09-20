"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeftIcon, ChevronRightIcon } from "@/components/icons";
import type { HeroSlide } from "@/content/hero-slides";

const AUTOPLAY_MS = 6000;
/**
 * How long autoplay stays paused after the visitor takes control. Long enough
 * to read the slide they chose, short enough that an idle page always returns
 * to rotating on its own — nobody has to click to see the set.
 */
const RESUME_MS = 12000;
/** Horizontal travel, in px, before a drag counts as a swipe. */
const SWIPE_THRESHOLD = 50;

/**
 * Hero image carousel. Rotating is the default state and the primary
 * experience: it advances on its own, loops forever, and needs no clicks. The
 * arrows, dots and swipe are secondary — using one pauses the rotation, and it
 * resumes by itself RESUME_MS later, so the carousel can never be left
 * stranded on one slide.
 *
 * With a single slide it renders as a plain image: no controls, no autoplay,
 * no drag handlers, so the component degrades to a static hero image if the
 * slide list is ever cut back to one (see @/content/hero-slides).
 *
 * Each slide carries a caption naming the event format it stands for. The
 * caption is real text, not an overlay baked into the artwork, so the point
 * of the sequence survives with motion disabled or images unloaded.
 *
 * `children` are layered over the image — the gradient scrim and stat boxes
 * the hero already had.
 */
export default function HeroCarousel({
  slides,
  label,
  children,
}: {
  slides: HeroSlide[];
  /** Describes the set for screen readers. */
  label: string;
  children?: React.ReactNode;
}) {
  const count = slides.length;
  const isCarousel = count > 1;

  const [index, setIndex] = useState(0);
  const [dragX, setDragX] = useState(0);
  const [dragging, setDragging] = useState(false);
  /** Temporarily true after an interaction; cleared by the resume timer. */
  const [paused, setPaused] = useState(false);
  const [hovered, setHovered] = useState(false);
  /**
   * Honoured for the slide transition as well as autoplay: a visitor who asks
   * for reduced motion still gets a working carousel, it just cuts between
   * slides instead of sliding.
   */
  const [reducedMotion, setReducedMotion] = useState(false);
  /**
   * Touch browsers fire mouseenter on tap and often never fire the matching
   * mouseleave, which would leave `hovered` stuck true and stall rotation on
   * phones. Hover-to-pause is therefore only honoured where hover is real.
   */
  const [canHover, setCanHover] = useState(false);

  const startX = useRef(0);
  const resumeTimer = useRef<number | undefined>(undefined);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReducedMotion(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    const mq = window.matchMedia("(hover: hover)");
    const sync = () => setCanHover(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  const go = useCallback(
    (next: number) => setIndex(((next % count) + count) % count),
    [count],
  );

  /**
   * Called on any manual control. Pauses rotation and re-arms the timer that
   * turns it back on, so repeated clicks keep extending the pause rather than
   * ending autoplay for good.
   */
  const engage = useCallback(() => {
    setPaused(true);
    window.clearTimeout(resumeTimer.current);
    resumeTimer.current = window.setTimeout(() => setPaused(false), RESUME_MS);
  }, []);

  useEffect(() => () => window.clearTimeout(resumeTimer.current), []);

  // Auto-advance unless the visitor just took control, is hovering, or has
  // asked the operating system for reduced motion.
  useEffect(() => {
    if (!isCarousel || paused || reducedMotion) return;
    if (canHover && hovered) return;

    const id = window.setInterval(
      () => setIndex((i) => (i + 1) % count),
      AUTOPLAY_MS,
    );
    return () => window.clearInterval(id);
  }, [isCarousel, paused, hovered, canHover, reducedMotion, count]);

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
          transition:
            dragging || reducedMotion
              ? "none"
              : "transform 700ms cubic-bezier(0.4, 0, 0.2, 1)",
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
            style={{ aspectRatio: "4/3", objectPosition: slide.position }}
          />
        ))}
      </div>

      {/* Names the format on screen, so the sequence is not the only thing
          carrying the message. */}
      <div className="absolute top-4 left-4 bg-bg-card/90 backdrop-blur-sm border border-border rounded-full px-3.5 py-1.5 pointer-events-none">
        <span className="text-text-light text-xs font-semibold tracking-wide">
          {slides[index].caption}
        </span>
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
      aria-label={label}
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
        Slide {index + 1} of {count}: {slides[index].caption}. {slides[index].alt}
      </p>
    </div>
  );
}

"use client";

import { useId, useState } from "react";
import {
  AttendanceIcon,
  CheckIcon,
  DataIcon,
  FollowUpIcon,
  MailIcon,
  TargetIcon,
  TimingIcon,
} from "@/components/icons";
import {
  FAILURE_MODES,
  type FailureModeIcon,
} from "@/content/delegate-acquisition";

const ICONS: Record<
  FailureModeIcon,
  (props: { className?: string }) => React.ReactElement
> = {
  outreach: MailIcon,
  targeting: TargetIcon,
  timing: TimingIcon,
  followUp: FollowUpIcon,
  data: DataIcon,
  attendance: AttendanceIcon,
};

export default function WhyCampaignsFail() {
  // null = all collapsed. Only one index is ever held, so only one opens.
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const id = useId();

  return (
    <div className="mt-14 border-t border-border">
      {FAILURE_MODES.map((mode, i) => {
        const Icon = ICONS[mode.icon];
        const isOpen = openIndex === i;
        const headerId = `${id}-h-${i}`;
        const panelId = `${id}-p-${i}`;

        return (
          <div
            key={mode.problem}
            className={`relative border-b border-border transition-colors duration-300 ${
              isOpen ? "bg-bg-card/60" : "hover:bg-bg-card/30"
            }`}
          >
            {/* Accent bar that animates in on the active item */}
            <span
              aria-hidden="true"
              className={`absolute left-0 top-0 bottom-0 w-0.5 bg-accent origin-top transition-transform duration-300 ease-out ${
                isOpen ? "scale-y-100" : "scale-y-0"
              }`}
            />

            <h3>
              <button
                type="button"
                id={headerId}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenIndex(isOpen ? null : i)}
                className="w-full flex items-center gap-5 text-left px-5 md:px-7 py-6 cursor-pointer group"
              >
                <Icon
                  className={`w-6 h-6 flex-shrink-0 transition-colors duration-300 ${
                    isOpen
                      ? "text-accent"
                      : "text-text-muted group-hover:text-text-light"
                  }`}
                />

                <span className="flex-1 min-w-0">
                  <span
                    className={`block font-semibold transition-colors duration-300 ${
                      isOpen ? "text-white" : "text-text-light group-hover:text-white"
                    }`}
                  >
                    {mode.problem}
                  </span>
                  <span className="block text-text-muted text-sm mt-1">
                    {mode.summary}
                  </span>
                </span>

                {/* Plus that rotates into a minus */}
                <span
                  aria-hidden="true"
                  className={`relative w-5 h-5 flex-shrink-0 transition-transform duration-300 ease-out ${
                    isOpen ? "rotate-180 text-accent" : "text-text-muted group-hover:text-text-light"
                  }`}
                >
                  <span className="absolute top-1/2 left-0 w-5 h-0.5 -mt-px bg-current" />
                  <span
                    className={`absolute left-1/2 top-0 h-5 w-0.5 -ml-px bg-current transition-opacity duration-300 ${
                      isOpen ? "opacity-0" : "opacity-100"
                    }`}
                  />
                </span>
              </button>
            </h3>

            {/* 0fr → 1fr animates height without needing a measured pixel value */}
            <div
              id={panelId}
              role="region"
              aria-labelledby={headerId}
              // Collapsed panels stay in the HTML for crawlers, but `inert`
              // keeps them out of the tab order and the accessibility tree —
              // without it, a screen reader would read all six at once.
              inert={!isOpen}
              className={`grid transition-all duration-300 ease-out ${
                isOpen
                  ? "grid-rows-[1fr] opacity-100"
                  : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <div className="grid md:grid-cols-2 gap-6 md:gap-10 px-5 md:px-7 pb-8 pt-1 pl-[3.25rem] md:pl-[4.25rem]">
                  <div>
                    <p className="text-text-muted text-xs font-semibold tracking-widest uppercase mb-2">
                      Problem
                    </p>
                    <p className="text-text-light text-[0.95rem] leading-relaxed">
                      {mode.why}
                    </p>
                  </div>

                  <div className="md:border-l md:border-border md:pl-10">
                    <p className="text-accent text-xs font-semibold tracking-widest uppercase mb-2 flex items-center gap-1.5">
                      <CheckIcon
                        className={`w-3.5 h-3.5 transition-all duration-500 ${
                          isOpen ? "opacity-100 scale-100" : "opacity-0 scale-50"
                        }`}
                      />
                      How Apex solves it
                    </p>
                    <p className="text-text-light text-[0.95rem] leading-relaxed">
                      {mode.fix}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

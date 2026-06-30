"use client";

import { useState } from "react";
import { Trophy } from "lucide-react";
import { sscToppers, hscToppers } from "@/lib/data";
import { TopperCard } from "@/components/shared/TopperCard";
import { Reveal } from "@/components/shared/Reveal";
import { cn } from "@/lib/utils";

type Tab = "ssc" | "hsc";

export function ResultsTabs() {
  const [tab, setTab] = useState<Tab>("ssc");
  const list = tab === "ssc" ? sscToppers : hscToppers;

  return (
    <div className="container">
      <div className="mx-auto mb-10 flex w-full max-w-sm rounded-full border border-line bg-white p-1 shadow-card">
        {([["ssc", "SSC 2026"], ["hsc", "HSC 2026"]] as [Tab, string][]).map(([key, label]) => (
          <button
            key={key}
            onClick={() => setTab(key)}
            className={cn(
              "flex flex-1 items-center justify-center gap-2 rounded-full px-4 py-2.5 text-sm font-bold transition",
              tab === key ? "bg-brand-700 text-white shadow" : "text-brand-700 hover:bg-brand-50",
            )}
          >
            <Trophy className="h-4 w-4" /> {label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
        {list.map((t, i) => (
          <Reveal key={`${t.name}-${i}`} delay={(i % 4) * 0.06}>
            <TopperCard topper={t} rank={i + 1} />
          </Reveal>
        ))}
      </div>

      <p className="mt-10 text-center text-sm text-ink/60">
        Showing {list.length} {tab.toUpperCase()} toppers for 2026.
      </p>
    </div>
  );
}

// components/insights/MicroDisclaimer.tsx
import * as React from "react";
import { Info, ShieldAlert } from "lucide-react";

type Props = {
  variant?: "subtle" | "notice";
  className?: string;
  title?: string;
};

/**
 * MicroDisclaimer
 * - visually reads like a disclaimer/notice
 * - accessible (role + aria)
 * - matches CSTL premium/quiet style (uses your theme tokens)
 */
export default function MicroDisclaimer({
  variant = "subtle",
  className,
  title,
}: Props) {
  const isNotice = variant === "notice";

  return (
    <aside
      role="note"
      aria-label="Disclaimer"
      className={[
        "mt-10 rounded-2xl border p-4 sm:p-5",
        "bg-card/70 border-border",
        "backdrop-blur-sm",
        isNotice ? "shadow-sm" : "",
        className ?? "",
      ].join(" ")}
    >
      <div className="flex items-start gap-3">
        <span
          className={[
            "mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-xl border",
            "border-border bg-background",
          ].join(" ")}
          aria-hidden="true"
        >
          {isNotice ? (
            <ShieldAlert className="h-5 w-5 text-[color:var(--accent)]" />
          ) : (
            <Info className="h-5 w-5 text-[color:var(--accent)]" />
          )}
        </span>

        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-2">
            <p className="text-xs font-semibold tracking-widest uppercase text-muted-foreground">
              {title ?? (isNotice ? "Important Notice" : "Disclaimer")}
            </p>
            <span
              className="h-1.5 w-1.5 rounded-full bg-[color:var(--accent)]"
              aria-hidden="true"
            />
            <p className="text-xs text-muted-foreground">
              Advisory & documentation support
            </p>
          </div>

          <p className="mt-2 text-sm leading-relaxed text-foreground/80">
            We provide advisory and documentation systems support. Where legal representation is
            required, clients may engage licensed counsel.
          </p>

          {/* Optional small “confidence” line */}
          <p className="mt-3 text-xs text-muted-foreground">
            Confidential intake • Documentation-first delivery
          </p>
        </div>
      </div>
    </aside>
  );
}

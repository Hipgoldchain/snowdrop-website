import type { Metadata } from "next";
import Wordmark from "@/components/Wordmark";
import BookedLeadEvent from "./BookedLeadEvent";

const CALENDLY_AUDIT_URL =
  process.env.NEXT_PUBLIC_CALENDLY_AUDIT_URL || "#";

export const metadata: Metadata = {
  title: "You're booked | Snowdrop",
  robots: { index: false, follow: false },
};

export default function BookedPage() {
  return (
    <main className="min-h-screen bg-snow flex flex-col items-center justify-center px-6 text-center">
      <Wordmark size="md" className="mb-10" />
      <h1 className="font-sans font-bold text-[clamp(32px,5vw,56px)] tracking-[-0.03em] text-ink leading-[1.1] mb-4">
        Your 15 minute call is booked.
      </h1>
      <p className="text-lg text-ink/70 max-w-[440px] leading-[1.6] mb-8">
        Check your inbox for the calendar invite.
      </p>
      <ul className="text-left text-ink/80 max-w-[440px] space-y-4 mb-10 text-base leading-[1.6]">
        <li>
          We&apos;ll talk through where time is going in the business and what
          could be automated.
        </li>
        <li>
          You&apos;ll leave knowing your biggest bottleneck, and whether the
          audit is worth it.
        </li>
        <li>No obligation to buy anything.</li>
      </ul>
      <a
        href={CALENDLY_AUDIT_URL}
        className="text-sm text-ink/50 underline underline-offset-4 hover:text-ink/70 transition-colors"
      >
        Already sold? Skip ahead and book the audit.
      </a>
      <BookedLeadEvent />
    </main>
  );
}

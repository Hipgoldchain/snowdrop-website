import type { Metadata } from "next";
import Wordmark from "@/components/Wordmark";
import BookedAuditEvent from "./BookedAuditEvent";

export const metadata: Metadata = {
  title: "Audit booked | Snowdrop",
  robots: { index: false, follow: false },
};

export default function BookedAuditPage() {
  return (
    <main className="min-h-screen bg-snow flex flex-col items-center justify-center px-6 text-center">
      <Wordmark size="md" className="mb-10" />
      <h1 className="font-sans font-bold text-[clamp(32px,5vw,56px)] tracking-[-0.03em] text-ink leading-[1.1] mb-4">
        Your audit call is booked.
      </h1>
      <p className="text-lg text-ink/70 max-w-[440px] leading-[1.6] mb-8">
        Check your inbox for the calendar invite and payment receipt.
      </p>
      <ul className="text-left text-ink/80 max-w-[440px] space-y-4 text-base leading-[1.6]">
        <li>
          Think about which tasks eat the most hours each week, those are the
          ones we look at first.
        </li>
        <li>
          Have a rough idea of team size and the tools you use day to day.
        </li>
        <li>
          Expect the roadmap and your first built fix within a week of the call.
        </li>
      </ul>
      <BookedAuditEvent />
    </main>
  );
}

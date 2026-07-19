import type { Metadata } from "next";
import Wordmark from "@/components/Wordmark";
import BookedLeadEvent from "./BookedLeadEvent";

export const metadata: Metadata = {
  title: "You're booked — Snowdrop",
  robots: { index: false, follow: false },
};

export default function BookedPage() {
  return (
    <main className="min-h-screen bg-snow flex flex-col items-center justify-center px-6 text-center">
      <Wordmark size="md" className="mb-10" />
      <h1 className="font-sans font-bold text-[clamp(32px,5vw,56px)] tracking-[-0.03em] text-ink leading-[1.1] mb-4">
        You&apos;re booked.
      </h1>
      <p className="text-lg text-ink/70 max-w-[440px] leading-[1.6]">
        Check your inbox for the invite — no prep needed, just bring coffee.
      </p>
      <BookedLeadEvent />
    </main>
  );
}

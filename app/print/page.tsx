"use client";

import { QRCodeSVG } from "qrcode.react";

const QUIZ_URL = "https://cc4e-coffeecourse.vercel.app";

export default function PrintPage() {
  return (
    <main
      className="min-h-screen bg-white flex items-center justify-center p-10"
      style={{ fontFamily: "var(--font-body)" }}
    >
      <div className="text-center max-w-sm">

        {/* Top label */}
        <p className="text-xs uppercase tracking-widest text-caramel mb-2">
          Basecamp Coffee
        </p>

        {/* Heading */}
        <h1
          className="text-3xl text-espresso mb-2 leading-tight"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          What&apos;s your coffee personality?
        </h1>

        <p className="text-espresso/60 text-sm mb-8">
          Scan to take the quiz and find your perfect drink.
        </p>

        {/* QR Code */}
        <div className="flex justify-center mb-8">
          <div className="p-4 border-2 border-tan rounded-2xl inline-block">
            <QRCodeSVG
              value={QUIZ_URL}
              size={200}
              fgColor="#3D2B1F"
              bgColor="#ffffff"
              level="M"
            />
          </div>
        </div>

        {/* URL */}
        <p className="text-espresso/40 text-xs mb-10">
          {QUIZ_URL}
        </p>

        {/* Print button — hidden when printing */}
        <button
          onClick={() => window.print()}
          className="border-2 border-caramel text-caramel text-sm font-semibold px-6 py-2.5 rounded-full hover:bg-caramel hover:text-white transition-all cursor-pointer print:hidden"
        >
          Print this page
        </button>

      </div>
    </main>
  );
}

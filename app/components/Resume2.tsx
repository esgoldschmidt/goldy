'use client';
import React, { useState } from 'react';

type Props = {};

function Resume2({}: Props) {
  const [showInlineMobile, setShowInlineMobile] = useState(false);

  const pdfUrl = '/resources/2026_ESG_Resume.pdf';

  return (
    <section id="resume" className="w-full px-4 pt-8 scroll-mt-2">
      <div className="flex items-end justify-between gap-3 mb-4">
        <h1 className="text-2xl text-gold uppercase">Resume</h1>

        {/* Desktop quick actions (optional) */}
        <div className="hidden sm:flex gap-2">
          <a
            href={pdfUrl}
            target="_blank"
            rel="noreferrer"
            className="px-3 py-2 rounded bg-gold/10 text-gold hover:bg-gold/20 transition"
          >
            Open
          </a>
          <a
            href={pdfUrl}
            download
            className="px-3 py-2 rounded bg-gold text-black hover:opacity-90 transition"
          >
            Download
          </a>
        </div>
      </div>

      {/* Mobile: hide inline viewer by default */}
      <div className="sm:hidden">
        <div className="rounded bg-white/80 dark:bg-gray-800/80 p-4">
          <p className="text-sm text-gray-700 dark:text-gray-200 mb-3">
            Viewing PDFs on mobile is rough — use a full-screen viewer or download for easy reading.
          </p>

          <div className="flex gap-2">
            <a
              href={pdfUrl}
              target="_blank"
              rel="noreferrer"
              className="flex-1 text-center px-3 py-2 rounded bg-gold/10 text-gold hover:bg-gold/20 transition"
            >
              Open Full Screen
            </a>
            <a
              href={pdfUrl}
              download
              className="flex-1 text-center flex justify-center items-center px-3 py-2 rounded bg-gold text-black hover:opacity-90 transition"
            >
              Download
            </a>
          </div>

          <button
            type="button"
            onClick={() => setShowInlineMobile((v) => !v)}
            className="mt-3 w-full text-center px-3 py-2 rounded border border-gold/30 text-gold hover:bg-gold/10 transition"
          >
            {showInlineMobile ? 'Hide Inline Preview' : 'Show Inline Preview'}
          </button>
        </div>

        {showInlineMobile && (
          <div className="mt-4 mx-auto w-full overflow-hidden rounded bg-white/80 dark:bg-gray-800/80">
            <embed src={pdfUrl} type="application/pdf" className="w-full h-[80svh]" />
          </div>
        )}
      </div>

      {/* Desktop/tablet: show embed viewer */}
      <div className="hidden sm:block">
        <div className="mx-auto w-full max-w-5xl overflow-hidden rounded bg-white/80 dark:bg-gray-800/80">
          <embed
            src={pdfUrl}
            type="application/pdf"
            className="w-full h-[85svh] md:h-[90vh]"
          />
        </div>
      </div>
    </section>
  );
}

export default Resume2;

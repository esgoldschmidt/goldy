'use client';
import React from 'react';

type Props = {}

function Resume2({}: Props) {
  return (
    <div className="min-h-48 scroll-pt-2 p-4 w-full relative pt-8" id="resume">
      <h1 className="text-2xl text-gold uppercase">Resume</h1>
      <div className="flex justify-center items-center p-4 my-4 bg-white/80 dark:bg-gray-800/80">
        {/* Embed the PDF directly */}
        <embed
          src="/resources/2026_ESG_Resume.pdf"
          type="application/pdf"
          className="w-full h-screen"
        />
      </div>
    </div>
  );
}

export default Resume2;
import React from 'react';
import { MdEventAvailable } from 'react-icons/md';

const Hero = () => {
  return (
    <section id="home" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2">
              <img
                src="https://framerusercontent.com/images/0bCFAnAEGTJhETKvjR39PAetyUs.webp"
                alt="Bart Szabaciuk"
                className="w-14 h-14 rounded-full object-cover border border-gray-700"
              />
              <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm font-medium bg-green-500/10 text-green-400 border border-green-500/20">
                <MdEventAvailable className="w-2 h-2" aria-hidden="true" />
                <span>Dostępny do zatrudnienia</span>
              </div>
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
              Wzmacniam biznesy poprzez
              <span className="text-blue-400"> intuicyjne projekty UI/UX</span>
            </h1>

            <p className="text-xl text-gray-300 leading-relaxed">
              Cześć, Krystian Ostrowski z tej strony - Twój potencjalny partner w projektowaniu i programowaniu. Łączę doświadczenie, dogłębną znajomość potrzeb użytkowników oraz znajomość najnowszych trendów, aby dostarczać rozwiązania, które angażują odbiorców i przynoszą realne rezultaty.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#work"
                className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
              >
                Zobacz projekty
              </a>
              <a
                href="https://calendly.com/kryki1999/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 bg-green-500/30 text-green-400 font-medium rounded-lg border border-green-500/20 hover:bg-green-500/50 transition-colors"
              >
                Zamów darmową rozmowę
              </a>
            </div>
          </div>

          <div className="flex justify-center self-center">
            <svg
              viewBox="0 0 600 400"
              className="w-full max-w-xl rounded-lg text-blue-400/60"
              role="img"
              aria-label="UI Components Illustration"
            >
              <defs>
                <linearGradient id="g1" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="currentColor" stopOpacity="0.35" />
                  <stop offset="100%" stopColor="currentColor" stopOpacity="0.1" />
                </linearGradient>
              </defs>
              <rect x="20" y="20" width="170" height="110" rx="16" fill="none" stroke="currentColor" strokeWidth="2" />
              <rect x="215" y="20" width="170" height="110" rx="16" fill="none" stroke="currentColor" strokeWidth="2" />
              <rect x="410" y="20" width="170" height="110" rx="16" fill="none" stroke="currentColor" strokeWidth="2" />
              <rect x="20" y="150" width="260" height="110" rx="16" fill="none" stroke="currentColor" strokeWidth="2" />
              <rect x="300" y="150" width="280" height="110" rx="16" fill="none" stroke="currentColor" strokeWidth="2" />
              <rect x="20" y="280" width="560" height="90" rx="16" fill="url(#g1)" stroke="currentColor" strokeOpacity="0.3" strokeWidth="2" />
              <circle cx="70" cy="70" r="14" fill="currentColor" opacity="0.35" />
              <rect x="100" y="58" width="70" height="8" rx="4" fill="currentColor" opacity="0.35" />
              <rect x="100" y="74" width="50" height="8" rx="4" fill="currentColor" opacity="0.25" />
              <circle cx="265" cy="70" r="14" fill="currentColor" opacity="0.35" />
              <rect x="295" y="58" width="70" height="8" rx="4" fill="currentColor" opacity="0.35" />
              <rect x="295" y="74" width="50" height="8" rx="4" fill="currentColor" opacity="0.25" />
              <circle cx="460" cy="70" r="14" fill="currentColor" opacity="0.35" />
              <rect x="490" y="58" width="70" height="8" rx="4" fill="currentColor" opacity="0.35" />
              <rect x="490" y="74" width="50" height="8" rx="4" fill="currentColor" opacity="0.25" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

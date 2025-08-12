import React from 'react';
import { MdEventAvailable } from 'react-icons/md';
import { FiArrowDownRight } from "react-icons/fi";


const Hero = () => {
  return (
    <section id="home" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2">
              <img
                src="https://framerusercontent.com/images/0bCFAnAEGTJhETKvjR39PAetyUs.webp"
                alt="Krystian Ostrowski"
                className="w-14 h-14 rounded-full object-cover border border-gray-700"
              />
              <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm font-medium">
                <span className="dot"></span>
                <span>Dostępny do zatrudnienia</span>
              </div>
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
              Wzmacniam biznesy poprzez
              <span className="text-blue-400"> nowoczesne strony WWW</span>
            </h1>

            <p className="text-lg text-gray-300 leading-relaxed">
              Cześć, Krystian Ostrowski z tej strony - Twój potencjalny partner w projektowaniu i programowaniu. Łączę doświadczenie, dogłębną znajomość potrzeb użytkowników oraz znajomość najnowszych trendów, aby dostarczać rozwiązania, które angażują odbiorców i przynoszą realne rezultaty.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#work"
                className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
              >
                Zobacz projekty&nbsp;<FiArrowDownRight className="w-6 h-6" aria-hidden="true" />

              </a>
              <a
                href="https://calendly.com/kryki1999/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 bg-green-500 text-white font-medium rounded-lg border border-green-500/20 hover:bg-green-500/50 transition-colors"
              >
                Zamów darmową rozmowę&nbsp;<MdEventAvailable className="w-6 h-6" aria-hidden="true" />
              </a>
            </div>
          </div>

          <div className="flex justify-center self-center hidden md:block">
            <div>
              <img
                src="https://framerusercontent.com/images/uWPSwoVkflaTDYFcKaiRVArSJwc.svg"
                alt="UI Components Showcase"
                className="w-full rounded-lg"
              />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

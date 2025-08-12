import React from 'react';
import { MdEventAvailable } from 'react-icons/md';
const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">Zamów darmową rozmowę</h2>
        <p className="text-xl text-gray-300 mb-8">
          Gotowy do wzmacniania swojego biznesu? Porozmawiajmy o swoim projekcie
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://calendly.com/kryki1999/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 bg-green-500 text-white font-medium rounded-lg border border-green-500/20 hover:bg-green-500/50 transition-colors"
          >
            Zamów darmową rozmowę&nbsp;<MdEventAvailable className="w-6 h-6" aria-hidden="true" />
          </a>
          <a
            href="mailto:kryki1999@gmail.com"
            className="inline-flex items-center justify-center px-8 py-4 border border-gray-700 text-white font-medium rounded-lg hover:bg-gray-800 transition-colors"
          >
            Wyślij email
          </a>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-8 text-center">
          <div>
            <h3 className="text-lg font-semibold mb-2">Email</h3>
            <p className="text-gray-400">kryki1999@gmail.com</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Lokalizacja</h3>
            <p className="text-gray-400">Polska (Zdalnie)</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Czas odpowiedzi</h3>
            <p className="text-gray-400">W ciągu 24 godzin</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
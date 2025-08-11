import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">O mnie</h2>
          <p className="text-xl text-gray-300">Tworzę cyfrowe doświadczenia, które mają znaczenie</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://framerusercontent.com/images/uWPSwoVkflaTDYFcKaiRVArSJwc.svg"
              alt="UI Components Showcase"
              className="w-full rounded-lg"
            />
          </div>

          <div className="space-y-6">
            <p className="text-lg text-gray-300">
              Prezentacja komponentów UI
              Jako pasjonat projektowania UI/UX z wieloletnim doświadczeniem specjalizuję się w tworzeniu intuicyjnych, estetycznych i funkcjonalnych rozwiązań cyfrowych, które przekładają się na realne rezultaty biznesowe.

            </p>

            <p className="text-lg text-gray-300">
              Moje podejście łączy zasady projektowania zorientowanego na użytkownika z nowoczesną estetyką, dbając o to, aby każdy piksel miał swoje zadanie, a każda interakcja była naturalna i przyjemna.
            </p>

            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="text-center p-4 bg-gray-800 rounded-lg">
                <div className="text-3xl font-bold text-blue-400">20+</div>
                <div className="text-sm text-gray-400">Wykonane projekty</div>
              </div>
              <div className="text-center p-4 bg-gray-800 rounded-lg">
                <div className="text-3xl font-bold text-blue-400">4+</div>
                <div className="text-sm text-gray-400">Lata doświadczenia</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
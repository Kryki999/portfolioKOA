import React from 'react';
import gastropro from '@/assets/gastropro.webp';
import medilink from '@/assets/doctor.png';
import luxestate from '@/assets/luxestate.jpg';
import ticketflow from '@/assets/ticketflow.jpg';
import shopwise from '@/assets/shopwise.jpeg';


const Projects = () => {
  const projects = [
    {
      title: "GastroPro - Platforma Zamówień Online",
      date: "Aug 2025",
      image: gastropro,
      slug: "gastropro"
    },
    {
      title: "MediLink - Portal Rezerwacji Wizyt Lekarskich",
      date: "Jul 2025",
      image: medilink,
      slug: "medilink"
    },
    {
      title: "LuxEstate - Strona Sprzedaży Nieruchomości Premium",
      date: "May 2025",
      image: luxestate,
      slug: "luxestate"
    },
    {
      title: "TicketFlow - Platforma Sprzedaży Biletów Online",
      date: "Apr 2025",
      image: ticketflow,
      slug: "ticketflow"
    },
    {
      title: "ShopWise - Sklep Internetowy z AI Rekomendacjami",
      date: "Feb 2025",
      image: shopwise,
      slug: "shopwise"
    }
  ];

  return (
    <section id="work" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Wybrane Projekty</h2>
          <p className="text-xl text-gray-300">Obejrzyj moje ostatnie realizacje</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <a
              key={index}
              href={`/project/${project.slug}`}
              className="group block"
            >
              <div className="relative overflow-hidden rounded-lg hover:transform hover:scale-105 transition-all duration-300">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-80 md:h-[500px] object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  <p className="text-sm text-gray-300 mt-1">{project.date}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
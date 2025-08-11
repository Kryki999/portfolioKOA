import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: "Crypto Wallet Mobile App",
      date: "Feb 2025",
      image: "https://framerusercontent.com/images/HTFUlTpbcv1iT2PDq0AQDTHq1Xw.jpg?lossless=1",
      slug: "wallie"
    },
    {
      title: "Netcomm Brand Identity",
      date: "Jun 2024",
      image: "https://framerusercontent.com/images/fYZvdHNASZ5aC1zHhjrQdE4SKY.png",
      slug: "netcomm"
    },
    {
      title: "CRM for a big logistics company",
      date: "Nov 2024",
      image: "https://framerusercontent.com/images/QCy1DWq7fuOVKHUkKR2g70I4Cg.jpg",
      slug: "crm"
    },
    {
      title: "Modern UI Components",
      date: "Nov 2023",
      image: "https://framerusercontent.com/images/tcqZCoWG3QnRgnfwRbS9vwCErI.jpg",
      slug: "components"
    },
    {
      title: "Next-gen Trading Platform",
      date: "Nov 2022",
      image: "https://framerusercontent.com/images/d6Wn1VsncKotCFdMMuxzcrAXI.png",
      slug: "trading"
    },
    {
      title: "Kubernetes Data Plan Managing App",
      date: "Aug 2021",
      image: "https://framerusercontent.com/images/mOQtZBOIyXaaa6xGNRdrZEtZGKE.png",
      slug: "ondat"
    }
  ];

  return (
    <section id="work" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Selected Work</h2>
          <p className="text-xl text-gray-300">Explore my recent projects</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <a
              key={index}
              href={`/project/${project.slug}`}
              className="group block"
            >
              <div className="relative overflow-hidden rounded-lg bg-gray-800 hover:transform hover:scale-105 transition-all duration-300">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-sm text-gray-300">{project.date}</p>
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="flex flex-wrap justify-center gap-8">
            <a
              href="https://www.szabaciuk.com/project-codi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 transition-colors"
            >
              <span className="font-bold">UI Animations</span>
              <span className="block text-sm text-gray-400">June 2024</span>
            </a>
            <a
              href="https://www.szabaciuk.com/project-logos"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 transition-colors"
            >
              <span className="font-bold">Logo Showcase</span>
              <span className="block text-sm text-gray-400">2015-2024</span>
            </a>
            <a
              href="https://www.szabaciuk.com/project-remi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 transition-colors"
            >
              <span className="font-bold">Remi - AI Language Teacher</span>
              <span className="block text-sm text-gray-400">Dec 2015</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
import React from 'react';
import { useParams, Link } from 'react-router-dom';

const projects = [
    {
        slug: 'wallie',
        title: 'Crypto Wallet Mobile App',
        date: 'Feb 2025',
        cover: 'https://framerusercontent.com/images/HTFUlTpbcv1iT2PDq0AQDTHq1Xw.jpg?lossless=1',
        summary: 'Mobile crypto wallet with clean UI, dark theme and smooth interactions.'
    },
    {
        slug: 'netcomm',
        title: 'Netcomm Brand Identity',
        date: 'Jun 2024',
        cover: 'https://framerusercontent.com/images/fYZvdHNASZ5aC1zHhjrQdE4SKY.png',
        summary: 'Brand identity system and UI kit in a sleek, modern aesthetic.'
    },
    {
        slug: 'crm',
        title: 'CRM for a big logistics company',
        date: 'Nov 2024',
        cover: 'https://framerusercontent.com/images/QCy1DWq7fuOVKHUkKR2g70I4Cg.jpg',
        summary: 'Complex enterprise CRM with data-heavy screens and clear information hierarchy.'
    },
    {
        slug: 'components',
        title: 'Modern UI Components',
        date: 'Nov 2023',
        cover: 'https://framerusercontent.com/images/tcqZCoWG3QnRgnfwRbS9vwCErI.jpg',
        summary: 'Reusable component library for rapid prototyping in dark mode.'
    },
    {
        slug: 'trading',
        title: 'Next-gen Trading Platform',
        date: 'Nov 2022',
        cover: 'https://framerusercontent.com/images/d6Wn1VsncKotCFdMMuxzcrAXI.png',
        summary: 'High-performance trading dashboard with advanced charts and real-time data.'
    },
    {
        slug: 'ondat',
        title: 'Kubernetes Data Plan Managing App',
        date: 'Aug 2021',
        cover: 'https://framerusercontent.com/images/mOQtZBOIyXaaa6xGNRdrZEtZGKE.png',
        summary: 'Kubernetes data management UI with clear navigation and focused workflows.'
    },
];

export default function ProjectDetail() {
    const { slug } = useParams();
    const project = projects.find(p => p.slug === slug);

    if (!project) {
        return (
            <div className="min-h-screen w-full bg-[#0a0a0a] text-white pt-24 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <h1 className="text-3xl font-bold mb-4">Projekt nie znaleziony</h1>
                    <Link to="/" className="text-blue-400 hover:text-blue-300">Wróć na stronę główną</Link>
                </div>
            </div>
        );
    }

    return (
        <main className="min-h-screen w-full bg-[#0a0a0a] text-white relative overflow-hidden">
            <div
                className="absolute inset-0 z-0 pointer-events-none"
                style={{
                    backgroundImage: `
            radial-gradient(ellipse at 20% 30%, rgba(56, 189, 248, 0.2) 0%, transparent 60%),
            radial-gradient(ellipse at 80% 70%, rgba(139, 92, 246, 0.15) 0%, transparent 70%),
            radial-gradient(ellipse at 60% 20%, rgba(236, 72, 153, 0.12) 0%, transparent 50%),
            radial-gradient(ellipse at 40% 80%, rgba(34, 197, 94, 0.12) 0%, transparent 65%)
          `,
                }}
            />
            <section className="relative z-10 pt-28 pb-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <nav className="mb-6 text-sm">
                        <Link to="/" className="text-gray-400 hover:text-white transition-colors">← Wróć</Link>
                    </nav>
                    <h1 className="text-4xl sm:text-5xl font-bold mb-4">{project.title}</h1>
                    <p className="text-gray-400">{project.date}</p>

                    <div className="mt-10 grid md:grid-cols-3 gap-8 items-stretch">
                        <div className="md:col-span-2 space-y-6">
                            <h2 className="text-2xl font-semibold">Opis</h2>
                            <p className="text-gray-300 leading-relaxed">{project.summary}</p>

                            <h3 className="text-xl font-semibold mt-8">Cele projektu</h3>
                            <ul className="list-disc list-inside text-gray-300 space-y-2">
                                <li>Nowoczesny, czytelny interfejs</li>
                                <li>Responsywny układ i świetna wydajność</li>
                                <li>Spójna ciemna stylistyka z akcentami</li>
                            </ul>
                        </div>
                        <aside className="space-y-4 self-center">
                            <div className="bg-gray-800/60 border border-gray-700 rounded-lg p-4">
                                <h4 className="font-semibold mb-2">Rola</h4>
                                <p className="text-gray-300">UI/UX, Frontend</p>
                            </div>
                            <div className="bg-gray-800/60 border border-gray-700 rounded-lg p-4">
                                <h4 className="font-semibold mb-2">Narzędzia</h4>
                                <p className="text-gray-300">Figma, React, Tailwind</p>
                            </div>
                        </aside>
                    </div>

                    <div className="mt-12 rounded-xl overflow-hidden bg-gray-800/50 border border-gray-700">
                        <img src={project.cover} alt={project.title} className="w-full h-auto object-cover" />
                    </div>
                </div>
            </section>
        </main>
    );
}



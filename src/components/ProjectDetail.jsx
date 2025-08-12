import React from 'react';
import { useParams, Link } from 'react-router-dom';
import gastropro from '@/assets/gastropro.webp';
import medilink from '@/assets/doctor.png';
import luxestate from '@/assets/luxestate.jpg';
import ticketflow from '@/assets/ticketflow.jpg';
import shopwise from '@/assets/shopwise.jpeg';

const projects = [
    {
        slug: 'gastropro',
        title: 'GastroPro - Platforma Zamówień Online',
        date: 'Aug 2025',
        cover: gastropro,
        summary: 'Nowoczesna aplikacja PWA dla restauracji z obsługą zamówień online i rezerwacji stolików.',
        goals: [
            'Zwiększenie liczby zamówień dzięki zoptymalizowanemu procesowi checkout',
            'Pełna responsywność i UX zaprojektowany dla urządzeń mobilnych',
            'Integracja z systemami płatności i kurierów'
        ],
        role: 'Product Design, Frontend, Backend',
        tools: ['Next.js', 'TypeScript', 'Tailwind', 'MongoDB', 'Stripe API']
    },
    {
        slug: 'medilink',
        title: 'MediLink - Portal Rezerwacji Wizyt Lekarskich',
        date: 'Jul 2025',
        cover: medilink,
        summary: 'Platforma umożliwiająca pacjentom szybkie umawianie wizyt online z lekarzami.',
        goals: [
            'Łatwe filtrowanie lekarzy i specjalizacji',
            'Integracja z kalendarzem Google i iCal',
            'Wysoka wydajność i niezawodność dzięki SSR w Next.js'
        ],
        role: 'Frontend, Backend',
        tools: ['Next.js', 'TypeScript', 'PostgreSQL', 'Tailwind', 'Strapi CMS']
    },
    {
        slug: 'luxestate',
        title: 'LuxEstate - Strona Sprzedaży Nieruchomości Premium',
        date: 'May 2025',
        cover: luxestate,
        summary: 'Serwis ogłoszeniowy z interaktywną mapą i wirtualnymi spacerami 3D po nieruchomościach.',
        goals: [
            'Zwiększenie konwersji dzięki wideo i spacerom VR',
            'Filtrowanie ogłoszeń w czasie rzeczywistym',
            'Integracja z systemami CRM po stronie klienta'
        ],
        role: 'Fullstack Development',
        tools: ['React.js', 'TypeScript', 'Vite', 'MongoDB', 'Mapbox API']
    },
    {
        slug: 'ticketflow',
        title: 'TicketFlow - Platforma Sprzedaży Biletów i Rezerwacji Miejsc',
        date: 'Apr 2025',
        cover: ticketflow,
        summary: 'Nowoczesna aplikacja webowa do obsługi wydarzeń kulturalnych i sportowych, sprzedaży biletów oraz rezerwacji miejsc w czasie rzeczywistym.',
        goals: [
            'Błyskawiczny proces zakupu zoptymalizowany pod urządzenia mobilne',
            'Wizualny podgląd sali z możliwością wyboru miejsc',
            'Integracja z systemami płatności, fakturowaniem oraz kodami QR przy wejściu'
        ],
        role: 'Product Design, Frontend, Backend',
        tools: ['Next.js', 'TypeScript', 'Strapi', 'PostgreSQL', 'Tailwind']
    },
    {
        slug: 'shopwise',
        title: 'ShopWise - Sklep Internetowy z AI Rekomendacjami',
        date: 'Feb 2025',
        cover: shopwise,
        summary: 'E-commerce z inteligentnym systemem rekomendacji produktów opartym o AI.',
        goals: [
            'Zwiększenie średniej wartości koszyka poprzez personalizację',
            'Błyskawiczne ładowanie dzięki optymalizacji Vite i SSR',
            'Pełna optymalizacja SEO dla lepszej widoczności w Google'
        ],
        role: 'Fullstack Development',
        tools: ['Next.js', 'TypeScript', 'Strapi', 'MongoDB', 'Tailwind', 'OpenAI API']
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
                                {(project.goals || []).map((goal, idx) => (
                                    <li key={idx}>{goal}</li>
                                ))}
                            </ul>
                        </div>
                        <aside className="space-y-4 self-center">
                            <div className="bg-gray-800/60 border border-gray-700 rounded-lg p-4">
                                <h4 className="font-semibold mb-2">Rola</h4>
                                <p className="text-gray-300">{project.role}</p>
                            </div>
                            <div className="bg-gray-800/60 border border-gray-700 rounded-lg p-4">
                                <h4 className="font-semibold mb-2">Narzędzia</h4>
                                <p className="text-gray-300">{Array.isArray(project.tools) ? project.tools.join(', ') : project.tools}</p>
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



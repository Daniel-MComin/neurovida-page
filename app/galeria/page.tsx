"use client";

import { useEffect, useState } from "react";

type SelectedImage = { src: string; alt: string; label: string } | null;

export function GaleriaPage() {
  const [selected, setSelected] = useState<SelectedImage>(null);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelected(null);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const images = [
    {
      src: "https://img.usecurling.com/p/800/600?q=child%20therapy%20office%20colorful&dpr=2",
      alt: "Consultório Principal",
      label: "Consultório Principal",
    },
    {
      src: "https://img.usecurling.com/p/800/600?q=educational%20toys%20shelf&dpr=2",
      alt: "Recursos Lúdicos",
      label: "Recursos Lúdicos",
    },
    {
      src: "https://img.usecurling.com/p/800/600?q=sensory%20room%20kids&dpr=2",
      alt: "Sala de Integração Sensorial",
      label: "Sala de Integração Sensorial",
    },
    {
      src: "https://img.usecurling.com/p/800/600?q=child%20playing%20blocks%20happy&dpr=2",
      alt: "Atividade de Construção",
      label: "Atividade de Construção",
    },
    {
      src: "https://img.usecurling.com/p/800/600?q=kids%20waiting%20room%20cozy&dpr=2",
      alt: "Recepção Acolhedora",
      label: "Recepção Acolhedora",
    },
    {
      src: "https://img.usecurling.com/p/800/600?q=child%20drawing%20therapy&dpr=2",
      alt: "Atividade Artística",
      label: "Atividade Artística",
    },
  ];

  return (
    <div className="min-h-screen py-18 container mx-auto px-4 mt-10">
      <div className="text-center max-w-3xl mx-auto mb-16 bg-pastel-blue/30 py-12 rounded-[3rem]">
        <h1 className="font-heading font-bold text-4xl text-charcoal mb-6">Conheça Nosso Espaço</h1>
        <p className="text-xl text-charcoal/80 max-w-2xl mx-auto px-4">
          Um ambiente planejado para ser seguro, estimulante e acolhedor para as crianças.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((img) => (
          <div
            key={img.src}
            className="group relative cursor-pointer overflow-hidden rounded-2xl shadow-md aspect-[4/3] bg-gray-100 border-4 border-pastel-blue/20"
            role="button"
            tabIndex={0}
            aria-label={`Abrir imagem: ${img.alt}`}
            onClick={() => setSelected(img)}
            onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && setSelected(img)}
          >
            <img
              alt={img.alt}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              src={img.src}
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-pastel-blue/40 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
              <div className="bg-white/90 p-3 rounded-full text-charcoal shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="lucide lucide-zoom-in w-6 h-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                  <line x1="11" y1="8" x2="11" y2="14"></line>
                  <line x1="8" y1="11" x2="14" y2="11"></line>
                </svg>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-white font-medium text-sm">{img.label}</p>
            </div>
          </div>
        ))}
      </div>

      {selected && (
        <div
          className="fixed inset-0 z-[60] bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          onClick={(e) => e.target === e.currentTarget && setSelected(null)}
        >
          <div className="relative max-w-5xl w-full">
            <button
              type="button"
              onClick={() => setSelected(null)}
              aria-label="Fechar modal"
              className="absolute -top-2 -right-2 bg-white text-charcoal rounded-full p-2 shadow-md hover:shadow-lg hover:scale-105 transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="lucide lucide-x w-5 h-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M18 6 6 18"></path>
                <path d="M6 6l12 12"></path>
              </svg>
            </button>
            <img
              src={selected.src}
              alt={selected.alt}
              className="w-full h-auto max-h-[80vh] object-contain bg-black/50 rounded-2xl shadow-2xl border-4 border-white/20"
            />
            <div className="mt-3 text-center text-white/90">
              <span className="inline-block bg-black/40 px-3 py-1 rounded-full text-sm">{selected.label}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default GaleriaPage;
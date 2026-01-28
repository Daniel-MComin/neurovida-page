"use client";

import Link from "next/link";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden pt-24 md:pt-34 pb-12">
      <div className="absolute top-0 right-0 -z-10 w-full h-full overflow-hidden opacity-80 pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-vivid-mint/20 rounded-full mix-blend-multiply blur-3xl animate-blob"></div>
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-vivid-lavender/20 rounded-full mix-blend-multiply blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-32 left-[20%] w-[600px] h-[600px] bg-vivid-peach/20 rounded-full mix-blend-multiply blur-3xl animate-blob animation-delay-4000"></div>
        <div className="absolute bottom-[20%] right-[10%] w-[400px] h-[400px] bg-vivid-blue/20 rounded-full mix-blend-multiply blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute top-[40%] left-[40%] w-[300px] h-[300px] bg-vivid-yellow/20 rounded-full mix-blend-multiply blur-3xl animate-blob"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-24">
          <div className="flex-1 space-y-8 text-center md:text-left">
            <div className="inline-block px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-sm text-vivid-lavender text-sm font-bold border border-vivid-lavender/30 shadow-sm mb-4">
              NeuroVida - Clínica Especializada
            </div>

            <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-charcoal leading-tight">
              Transformando o aprendizado com{" "}
              <span className="text-vivid-lavender relative inline-block z-10 px-2">
                afeto
                <span className="absolute inset-0 bg-pastel-lavender -z-10 rounded-lg -rotate-2 opacity-50 transform scale-105"></span>
              </span>{" "}
              e ciência
            </h1>

            <p className="text-lg md:text-xl text-charcoal/80 leading-relaxed max-w-xl mx-auto md:mx-0">
              Bem-vindo à NeuroVida. Acolhimento e intervenções especializadas
              para crianças com TDAH, Autismo e dificuldades de aprendizagem.
              Vamos juntos desenvolver o potencial do seu filho.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link
                href="/contato"
                data-discover="true"
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-vivid-peach text-white hover:bg-vivid-peach/90 text-lg px-8 h-14 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border-2 border-white/20"
              >
                Agendar Consulta
              </Link>
              <Link
                href="/sobre"
                data-discover="true"
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border bg-white/80 border-vivid-blue/30 text-vivid-blue hover:bg-vivid-blue hover:text-white hover:border-transparent text-lg px-8 h-14 rounded-full backdrop-blur-sm transition-all"
              >
                Conhecer a Profissional
              </Link>
            </div>
          </div>

          <div className="flex-1 relative">
            <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-elevation border-[10px] border-white/60">
              <Image
                alt="Profissional interagindo com criança"
                src="https://img.usecurling.com/p/600/600?q=child%20psychologist%20playing%20happy&dpr=2"
                width={600}
                height={600}
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
                priority
              />
            </div>

            <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-pastel-mint/80 rounded-full flex items-center justify-center shadow-lg z-20 animate-float border-4 border-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-sparkles w-10 h-10 text-vivid-mint"
                aria-hidden="true"
              >
                <path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path>
                <path d="M20 2v4"></path>
                <path d="M22 4h-4"></path>
                <circle cx="4" cy="20" r="2"></circle>
              </svg>
            </div>

            <div className="absolute -top-8 -right-8 w-20 h-20 bg-pastel-lavender/80 rounded-full flex items-center justify-center shadow-lg z-20 animate-float animation-delay-2000 border-4 border-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-brain w-8 h-8 text-vivid-lavender"
                aria-hidden="true"
              >
                <path d="M12 18V5"></path>
                <path d="M15 13a4.17 4.17 0 0 1-3-4 4.17 4.17 0 0 1-3 4"></path>
                <path d="M17.598 6.5A3 3 0 1 0 12 5a3 3 0 1 0-5.598 1.5"></path>
                <path d="M17.997 5.125a4 4 0 0 1 2.526 5.77"></path>
                <path d="M18 18a4 4 0 0 0 2-7.464"></path>
                <path d="M19.967 17.483A4 4 0 1 1 12 18a4 4 0 1 1-7.967-.517"></path>
                <path d="M6 18a4 4 0 0 1-2-7.464"></path>
                <path d="M6.003 5.125a4 4 0 0 0-2.526 5.77"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;

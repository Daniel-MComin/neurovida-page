import Image from "next/image"
import Link from "next/link"

export function AboutPage() {
  return (
    <div className="bg-white min-h-screen pt-16">
      <div className="bg-pastel-peach/30 pt-16 pb-24 rounded-b-[3rem] mb-12">
        <div className="container mx-auto px-4 text-center animate-fade-in-up">
          <h1 className="font-heading font-bold text-4xl md:text-5xl text-charcoal mb-4">Sobre Mim</h1>
          <p className="text-xl text-charcoal/70 max-w-2xl mx-auto">
            Paixão por desenvolver potenciais e transformar histórias através da educação e neurociência.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 pb-8">
        <div className="grid md:grid-cols-2 gap-12 items-start mb-24">
          <div className="relative group">
            <div className="absolute inset-0 bg-pastel-peach rounded-3xl rotate-3 transition-transform group-hover:rotate-6 opacity-60"></div>
            <div className="absolute inset-0 bg-pastel-yellow rounded-3xl -rotate-2 transition-transform group-hover:-rotate-4 opacity-40 -z-10"></div>
            <Image
              alt="Dra. Ana Silva"
              src="https://img.usecurling.com/p/600/400?q=child%20test%20learning&dpr=2"
              width={800}
              height={800}
              className="relative rounded-3xl shadow-elevation w-full object-cover aspect-[4/5] border-4 border-white"
              priority
            />
          </div>

          <div className="space-y-8 animate-fade-in-up animation-delay-200">
            <div>
              <h2 className="font-heading font-bold text-2xl text-charcoal mb-4 flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="lucide lucide-heart text-pastel-peach fill-pastel-peach w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path>
                </svg>
                Minha Missão
              </h2>
              <p className="text-charcoal/80 leading-relaxed text-lg">
                Acredito que cada criança tem um universo único de potencialidades. Meu trabalho não é apenas sobre diagnósticos, mas sobre encontrar as chaves que abrem as portas para o aprendizado e para a autoestima. Trabalho com uma abordagem humanizada, onde a família é parte essencial do processo.
              </p>
            </div>

            <div>
              <h2 className="font-heading font-bold text-2xl text-charcoal mb-4 flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="lucide lucide-graduation-cap text-primary w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"></path>
                  <path d="M22 10v6"></path>
                  <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"></path>
                </svg>
                Formação Acadêmica
              </h2>
              <ul className="space-y-3">
                <li className="p-4 bg-pastel-lavender/30 rounded-xl border border-pastel-lavender/50 shadow-sm">
                  <p className="font-bold text-charcoal">Pós-Graduação em Neuropsicopedagogia Clínica</p>
                  <p className="text-sm text-charcoal/60">Censope (2018)</p>
                </li>
                <li className="p-4 bg-pastel-mint/30 rounded-xl border border-pastel-mint/50 shadow-sm">
                  <p className="font-bold text-charcoal">Especialização em Análise do Comportamento Aplicada (ABA)</p>
                  <p className="text-sm text-charcoal/60">Instituto Neuro (2016)</p>
                </li>
                <li className="p-4 bg-pastel-blue/30 rounded-xl border border-pastel-blue/50 shadow-sm">
                  <p className="font-bold text-charcoal">Graduação em Pedagogia</p>
                  <p className="text-sm text-charcoal/60">Universidade Federal (2012)</p>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="font-heading font-bold text-2xl text-charcoal mb-4 flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="lucide lucide-award text-emerald-500 w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path>
                  <circle cx="12" cy="8" r="6"></circle>
                </svg>
                Áreas de Atuação
              </h2>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-pastel-mint/60 text-charcoal/80 rounded-full text-sm font-medium border border-white/50">TDAH</span>
                <span className="px-3 py-1 bg-pastel-blue/60 text-charcoal/80 rounded-full text-sm font-medium border border-white/50">Autismo</span>
                <span className="px-3 py-1 bg-pastel-yellow/60 text-charcoal/80 rounded-full text-sm font-medium border border-white/50">Dislexia</span>
                <span className="px-3 py-1 bg-pastel-lavender/60 text-charcoal/80 rounded-full text-sm font-medium border border-white/50">Dificuldades de Aprendizagem</span>
                <span className="px-3 py-1 bg-pastel-pink/60 text-charcoal/80 rounded-full text-sm font-medium border border-white/50">Alfabetização</span>
                <span className="px-3 py-1 bg-pastel-peach/60 text-charcoal/80 rounded-full text-sm font-medium border border-white/50">Orientação Parental</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-pastel-peach/40 via-pastel-pink/30 to-pastel-lavender/30 rounded-3xl p-12 text-center relative overflow-hidden shadow-lg border border-white">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/40 rounded-full mix-blend-overlay blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2"></div>
        <div className="relative z-10">
          <h2 className="font-heading font-bold text-3xl text-charcoal mb-6">Vamos conversar sobre o seu filho?</h2>
          <Link
            href="/contato"
            data-discover="true"
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-charcoal text-white hover:bg-charcoal/80 h-12 px-8 rounded-full shadow-lg"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="lucide lucide-calendar w-4 h-4 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M8 2v4"></path>
              <path d="M16 2v4"></path>
              <rect width="18" height="18" x="3" y="4" rx="2"></rect>
              <path d="M3 10h18"></path>
            </svg>
            Agendar uma visita
          </Link>
        </div>
      </div>
    </div>
  )
}

export default AboutPage;
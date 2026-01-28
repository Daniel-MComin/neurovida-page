import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-pastel-blue/30 via-white/50 to-pastel-lavender/30 pt-16 pb-8 border-t border-white/60 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-vivid-peach/10 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-vivid-mint/10 rounded-full blur-3xl -z-10 -translate-x-1/2 translate-y-1/2" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12 justify-items-center md:justify-items-start">
          <div className="space-y-4 max-w-sm">
            <Link className="flex items-center gap-2 mb-4 group" href="/" data-discover="true">
              <div className="bg-white p-2 rounded-full shadow-sm group-hover:scale-110 transition-transform">
                <svg xmlns="http://www.w3.org/2000/svg" className="lucide lucide-brain w-6 h-6 text-vivid-lavender" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
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
              <span className="font-heading font-bold text-2xl text-charcoal">Neuro<span className="font-bold text-vivid-peach group-hover:text-vivid-peach">
              Vida
            </span></span>
            </Link>

            <p className="text-sm text-charcoal/80 leading-relaxed">
              Transformando o aprendizado com afeto e ciência. Um espaço acolhedor para o desenvolvimento do seu filho, focado em resultados reais e bem-estar.
            </p>

            <div className="pt-2">
              <p className="text-xs text-vivid-blue font-bold bg-white/70 inline-block px-3 py-1.5 rounded-full border border-pastel-blue shadow-sm">
                CRP: 06/12345
              </p>
            </div>
          </div>

          <div className="space-y-4 w-full md:w-auto hidden md:block">
            <h3 className="font-heading font-bold text-lg text-charcoal border-b-2 border-vivid-mint/30 inline-block pb-1">Links Rápidos</h3>
            <ul className="space-y-2.5">
              <li><Link className="text-sm text-charcoal/80 hover:text-vivid-lavender hover:font-medium transition-all hover:pl-2 flex items-center gap-1" href="/sobre" data-discover="true"><span className="w-1.5 h-1.5 rounded-full bg-pastel-lavender transition-colors"></span>Sobre Mim</Link></li>
              <li><Link className="text-sm text-charcoal/80 hover:text-vivid-lavender hover:font-medium transition-all hover:pl-2 flex items-center gap-1" href="/servicos" data-discover="true"><span className="w-1.5 h-1.5 rounded-full bg-pastel-lavender transition-colors"></span>Avaliação Neuro</Link></li>
              <li><Link className="text-sm text-charcoal/80 hover:text-vivid-lavender hover:font-medium transition-all hover:pl-2 flex items-center gap-1" href="/galeria" data-discover="true"><span className="w-1.5 h-1.5 rounded-full bg-pastel-lavender transition-colors"></span>Galeria</Link></li>
              <li><Link className="text-sm text-charcoal/80 hover:text-vivid-lavender hover:font-medium transition-all hover:pl-2 flex items-center gap-1" href="/contato" data-discover="true"><span className="w-1.5 h-1.5 rounded-full bg-pastel-lavender transition-colors"></span>Contato</Link></li>
            </ul>
          </div>

          <div className="space-y-4 w-full md:w-auto">
            <h3 className="font-heading font-bold text-lg text-charcoal border-b-2 border-vivid-peach/30 inline-block pb-1">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-charcoal/80">
                <div className="bg-pastel-lavender p-2 rounded-full shrink-0 text-vivid-lavender">
                  <svg xmlns="http://www.w3.org/2000/svg" className="lucide lucide-map-pin w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
                <span>Rua das Flores, 123<br />Sala 404 - Centro<br />São Paulo, SP</span>
              </li>

              <li className="flex items-center gap-3 text-sm text-charcoal/80">
                <div className="bg-pastel-mint p-2 rounded-full shrink-0 text-vivid-mint">
                  <svg xmlns="http://www.w3.org/2000/svg" className="lucide lucide-phone w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path>
                  </svg>
                </div>
                <span>(11) 99999-9999</span>
              </li>

              <li className="flex items-center gap-3 text-sm text-charcoal/80">
                <div className="bg-pastel-peach p-2 rounded-full shrink-0 text-vivid-peach">
                  <svg xmlns="http://www.w3.org/2000/svg" className="lucide lucide-mail w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
                    <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                  </svg>
                </div>
                <span>contato@neurovida.com.br</span>
              </li>
            </ul>

            <div className="flex gap-4 pt-4">
              <a href="#" className="p-2.5 bg-white rounded-full transition-all text-charcoal/70 shadow-sm border border-transparent hover:scale-110 hover:bg-vivid-pink hover:text-white" aria-label="Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" className="lucide lucide-instagram w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                </svg>
              </a>              
            </div>
          </div>
        </div>

        <div className="border-t border-charcoal/10 pt-8 text-center">
          <p className="text-xs text-charcoal/50">© {new Date().getFullYear()} NeuroVida Clínica. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
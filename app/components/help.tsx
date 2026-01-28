import Link from "next/link";
import type { SVGProps } from "react";

function BrainIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 18V5"></path>
      <path d="M15 13a4.17 4.17 0 0 1-3-4 4.17 4.17 0 0 1-3 4"></path>
      <path d="M17.598 6.5A3 3 0 1 0 12 5a3 3 0 1 0-5.598 1.5"></path>
      <path d="M17.997 5.125a4 4 0 0 1 2.526 5.77"></path>
      <path d="M18 18a4 4 0 0 0 2-7.464"></path>
      <path d="M19.967 17.483A4 4 0 1 1 12 18a4 4 0 1 1-7.967-.517"></path>
      <path d="M6 18a4 4 0 0 1-2-7.464"></path>
      <path d="M6.003 5.125a4 4 0 0 0-2.526 5.77"></path>
    </svg>
  );
}

function SparklesIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path>
      <path d="M20 2v4"></path>
      <path d="M22 4h-4"></path>
      <circle cx="4" cy="20" r="2"></circle>
    </svg>
  );
}

function PuzzleIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M15.39 4.39a1 1 0 0 0 1.68-.474 2.5 2.5 0 1 1 3.014 3.015 1 1 0 0 0-.474 1.68l1.683 1.682a2.414 2.414 0 0 1 0 3.414L19.61 15.39a1 1 0 0 1-1.68-.474 2.5 2.5 0 1 0-3.014 3.015 1 1 0 0 1 .474 1.68l-1.683 1.682a2.414 2.414 0 0 1-3.414 0L8.61 19.61a1 1 0 0 0-1.68.474 2.5 2.5 0 1 1-3.014-3.015 1 1 0 0 0 .474-1.68l-1.683-1.682a2.414 2.414 0 0 1 0-3.414L4.39 8.61a1 1 0 0 1 1.68.474 2.5 2.5 0 1 0 3.014-3.015 1 1 0 0 1-.474-1.68l1.683-1.682a2.414 2.414 0 0 1 3.414 0z"></path>
    </svg>
  );
}

export default function Help() {
  const cards = [
    {
      key: "avaliacao",
      title: "Avaliação Clínica",
      desc: "Investigação detalhada das dificuldades de aprendizagem para identificar causas e traçar o melhor caminho.",
      href: "/servicos",
      gradient: "bg-gradient-to-br from-white to-pastel-yellow/30",
      border: "border-vivid-yellow/30 hover:border-vivid-yellow",
      Icon: (cls: string) => <BrainIcon className={cls + " text-vivid-yellow"} />,
      hoverTitle: "group-hover:text-vivid-yellow",
      delay: "animation-delay-0",
    },
    {
      key: "tdah",
      title: "Intervenção no TDAH",
      desc: "Estratégias lúdicas para melhorar a atenção, organização e controle dos impulsos.",
      href: "/servicos",
      gradient: "bg-gradient-to-br from-white to-pastel-lavender/30",
      border: "border-vivid-lavender/30 hover:border-vivid-lavender",
      Icon: (cls: string) => <SparklesIcon className={cls + " text-vivid-lavender"} />,
      hoverTitle: "group-hover:text-vivid-lavender",
      delay: "animation-delay-200",
    },
    {
      key: "tea",
      title: "Apoio no Autismo (TEA)",
      desc: "Desenvolvimento de habilidades sociais, comunicação e autonomia através de práticas baseadas em evidências.",
      href: "/servicos",
      gradient: "bg-gradient-to-br from-white to-pastel-mint/30",
      border: "border-vivid-mint/30 hover:border-vivid-mint",
      Icon: (cls: string) => <PuzzleIcon className={cls + " text-vivid-mint"} />,
      hoverTitle: "group-hover:text-vivid-mint",
      delay: "animation-delay-400",
    },
  ];

  return (
    <section className="relative pt-24 md:pt-28 pb-28">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-charcoal mb-4">Como posso ajudar?</h2>
          <p className="text-charcoal/70 text-lg">Atendimento personalizado focado nas necessidades únicas de cada criança e família.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map(({ key, title, desc, href, gradient, border, Icon, hoverTitle, delay }) => (
            <div
              key={key}
              className={`rounded-lg bg-card text-card-foreground shadow-sm glass-card overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-elevation group opacity-0 animate-fade-in-up border-2 h-full flex flex-col ${gradient} ${border} ${delay}`}
            >
              <div className="flex flex-col space-y-1.5 p-6 pt-8">
                <div className="mb-4 w-14 h-14 rounded-2xl flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300 border border-white/50 bg-white">
                  {Icon("w-8 h-8")}
                </div>
                <div className={`font-semibold tracking-tight font-heading text-xl text-charcoal transition-colors ${hoverTitle}`}>{title}</div>
              </div>

              <div className="p-6 pt-0 flex-grow">
                <div className="text-charcoal/80 text-base leading-relaxed">{desc}</div>
              </div>

              <div className="flex items-center p-6 pt-0">
                <Link
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 p-0 text-charcoal/80 hover:bg-transparent font-semibold flex items-center gap-2 group/btn"
                  href={href}
                  data-discover="true"
                >
                  Saiba mais
                  <span className="bg-white/50 rounded-full p-1 group-hover/btn:bg-primary/20 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="lucide lucide-chevron-right w-4 h-4 transition-transform group-hover/btn:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="m9 18 6-6-6-6"></path>
                    </svg>
                  </span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
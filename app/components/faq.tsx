"use client"

import { useState } from "react"

type FAQItem = { q: string; a: string }

const items: FAQItem[] = [
  {
    q: "Qual a diferença entre Psicopedagogia e Neuropsicopedagogia?",
    a: "A Psicopedagogia atua no processo de aprendizagem; a Neuropsicopedagogia integra conhecimentos da neurociência para avaliar e intervir considerando funções cognitivas.",
  },
  {
    q: "A partir de que idade posso levar meu filho?",
    a: "O acompanhamento pode começar na educação infantil. A avaliação inicial define as estratégias adequadas para cada faixa etária.",
  },
  {
    q: "Aceitam convênio médico?",
    a: "O atendimento é particular. Emitimos recibos/notas que podem ser usados para reembolso conforme o seu plano.",
  },
  {
    q: "Quantas sessões são necessárias?",
    a: "Varia conforme a avaliação inicial e objetivos. Em geral, iniciamos com um plano de 8–12 sessões e reavaliamos o progresso.",
  },
]

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section className="py-24 bg-gradient-to-t from-pastel-lavender/40 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-charcoal mb-4">Dúvidas Frequentes</h2>
          <p className="text-charcoal/70">Entenda melhor como funciona o acompanhamento na NeuroVida.</p>
        </div>

        <div className="w-full max-w-3xl mx-auto">
          <div className="w-full space-y-4">
            {items.map((item, i) => {
              const isOpen = open === i
              return (
                <div key={i} className="bg-white/50 backdrop-blur-sm rounded-2xl px-6 shadow-sm border-b border-none">
                  <h3 className="flex">
                    <button
                      type="button"
                      id={`faq-btn-${i}`}
                      aria-controls={`faq-panel-${i}`}
                      aria-expanded={isOpen}
                      onClick={() => setOpen(isOpen ? null : i)}
                      className="flex flex-1 items-center justify-between text-left text-charcoal font-heading font-semibold hover:text-primary transition-colors py-4"
                    >
                      {item.q}
                      <svg xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 shrink-0 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="m6 9 6 6 6-6"></path>
                      </svg>
                    </button>
                  </h3>

                  <div
                    id={`faq-panel-${i}`}
                    role="region"
                    aria-labelledby={`faq-btn-${i}`}
                    className={`overflow-hidden text-sm transition-all ${isOpen ? "block" : "hidden"}`}
                  >
                    <p className="pb-4 text-charcoal/80">{item.a}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
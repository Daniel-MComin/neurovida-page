export function MetodologiaPage() {
  return (
    <div className="min-h-screen bg-white pt-14">
      <div className="py-16 container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="font-heading font-bold text-4xl text-charcoal mb-6">Minha Metodologia</h1>
          <p className="text-xl text-charcoal/80">
            Unindo o rigor da ciência com a delicadeza do afeto. Entenda como transformamos dificuldades em potências.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <div className="bg-pastel-lavender/40 p-10 rounded-[3rem] rounded-tl-none">
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
              className="lucide lucide-microscope w-12 h-12 text-primary mb-6"
              aria-hidden="true"
            >
              <path d="M6 18h8"></path>
              <path d="M3 22h18"></path>
              <path d="M14 22a7 7 0 1 0 0-14h-1"></path>
              <path d="M9 14h2"></path>
              <path d="M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z"></path>
              <path d="M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3"></path>
            </svg>
            <h3 className="font-heading font-bold text-2xl text-charcoal mb-4">Baseada em Evidências</h3>
            <p className="text-charcoal/80 leading-relaxed">
              Todas as intervenções são fundamentadas na Neurociência Cognitiva e na Pedagogia. Não utilizamos "receitas de bolo";
              cada estratégia é selecionada com base no que a literatura científica aponta como eficaz para o perfil cognitivo da criança.
            </p>
          </div>

          <div className="bg-pastel-mint/40 p-10 rounded-[3rem] rounded-tr-none">
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
              className="lucide lucide-puzzle w-12 h-12 text-emerald-600 mb-6"
              aria-hidden="true"
            >
              <path d="M15.39 4.39a1 1 0 0 0 1.68-.474 2.5 2.5 0 1 1 3.014 3.015 1 1 0 0 0-.474 1.68l1.683 1.682a2.414 2.414 0 0 1 0 3.414L19.61 15.39a1 1 0 0 1-1.68-.474 2.5 2.5 0 1 0-3.014 3.015 1 1 0 0 1 .474 1.68l-1.683 1.682a2.414 2.414 0 0 1-3.414 0L8.61 19.61a1 1 0 0 0-1.68.474 2.5 2.5 0 1 1-3.014-3.015 1 1 0 0 0 .474-1.68l-1.683-1.682a2.414 2.414 0 0 1 0-3.414L4.39 8.61a1 1 0 0 1 1.68.474 2.5 2.5 0 1 0 3.014-3.015 1 1 0 0 1-.474-1.68l1.683-1.682a2.414 2.414 0 0 1 3.414 0z"></path>
            </svg>
            <h3 className="font-heading font-bold text-2xl text-charcoal mb-4">Ludicidade Séria</h3>
            <p className="text-charcoal/80 leading-relaxed">
              Para a criança, é brincadeira. Para nós, é estimulação. O brincar é a linguagem natural da infância e a ferramenta mais poderosa
              para engajar o cérebro, reduzir a ansiedade e promover plasticidade neural.
            </p>
          </div>

          <div className="bg-pastel-peach/40 p-10 rounded-[3rem] rounded-bl-none">
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
              className="lucide lucide-heart-handshake w-12 h-12 text-orange-500 mb-6"
              aria-hidden="true"
            >
              <path d="M19.414 14.414C21 12.828 22 11.5 22 9.5a5.5 5.5 0 0 0-9.591-3.676.6.6 0 0 1-.818.001A5.5 5.5 0 0 0 2 9.5c0 2.3 1.5 4 3 5.5l5.535 5.362a2 2 0 0 0 2.879.052 2.12 2.12 0 0 0-.004-3 2.124 2.124 0 1 0 3-3 2.124 2.124 0 0 0 3.004 0 2 2 0 0 0 0-2.828l-1.881-1.882a2.41 2.41 0 0 0-3.409 0l-1.71 1.71a2 2 0 0 1-2.828 0 2 2 0 0 1 0-2.828l2.823-2.762"></path>
            </svg>
            <h3 className="font-heading font-bold text-2xl text-charcoal mb-4">Olhar Sistêmico</h3>
            <p className="text-charcoal/80 leading-relaxed">
              A criança não existe isolada. Minha metodologia envolve ativamente a família e a escola, criando uma rede de apoio coerente.
              Realizamos visitas escolares e reuniões periódicas para alinhar estratégias.
            </p>
          </div>

          <div className="bg-white p-10 rounded-[3rem] rounded-br-none shadow-subtle border border-gray-100">
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
              className="lucide lucide-lightbulb w-12 h-12 text-yellow-500 mb-6"
              aria-hidden="true"
            >
              <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"></path>
              <path d="M9 18h6"></path>
              <path d="M10 22h4"></path>
            </svg>
            <h3 className="font-heading font-bold text-2xl text-charcoal mb-4">Personalização Total</h3>
            <p className="text-charcoal/80 leading-relaxed">
              Respeitamos o tempo e o jeito de ser de cada aprendente. O Plano de Intervenção Individualizado (PEI) é desenhado
              exclusivamente para atender as demandas específicas mapeadas na avaliação.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MetodologiaPage;
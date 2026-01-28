import Link from "next/link";

export function ServicosPage() {
    return (
        <>
            <div className="min-h-screen pt-14 pb-8 bg-white">
                <div className="bg-pastel-yellow/40 py-10 relative overflow-hidden">
                    <div className="absolute top-10 left-10 w-40 h-40 bg-white/50 rounded-full blur-2xl"></div>
                    <div className="absolute bottom-10 right-10 w-60 h-60 bg-pastel-lavender/30 rounded-full blur-3xl"></div>
                    <div className="container mx-auto px-4 text-center relative z-10">
                        <div className="inline-flex items-center justify-center p-4 bg-white rounded-full shadow-sm mb-6 animate-fade-in-up">
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
                                className="lucide lucide-brain w-8 h-8 text-yellow-600 fill-yellow-100"
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
                        <h1 className="font-heading font-bold text-4xl md:text-5xl text-charcoal mb-6 animate-fade-in-up animation-delay-0">
                            Avaliação Neuropsicopedagógica
                        </h1>
                        <p className="text-xl text-charcoal/80 max-w-3xl mx-auto leading-relaxed animate-fade-in-up animation-delay-200">
                            Uma investigação detalhada e afetuosa para compreender como seu filho aprende e identificar as melhores estratégias de desenvolvimento.
                        </p>
                    </div>
                </div>

                <div className="container mx-auto px-4 mt-16">
                    <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
                        <div className="space-y-6">
                            <h2 className="font-heading font-bold text-3xl text-charcoal">O que é a avaliação?</h2>
                            <p className="text-charcoal/80 leading-relaxed text-lg">
                                É um processo clínico estruturado que visa mapear o funcionamento cognitivo da criança. Na NeuroVida, investigamos funções como atenção, memória, linguagem, raciocínio lógico e funções executivas para entender a origem das dificuldades escolares ou comportamentais.
                            </p>
                            <p className="text-charcoal/80 leading-relaxed text-lg">
                                Mais do que um diagnóstico, nosso objetivo é descobrir o potencial de aprendizado e traçar um plano de intervenção personalizado.
                            </p>
                        </div>
                        <div className="rounded-3xl overflow-hidden shadow-elevation border-8 border-pastel-yellow/40 -rotate-1 hover:rotate-0 transition-transform duration-500 hover:border-vivid-peach/50">
                            <img
                                alt="Criança realizando atividades de avaliação"
                                className="w-full h-full object-cover"
                                src="https://img.usecurling.com/p/600/400?q=child%20test%20learning&dpr=2"
                            />
                        </div>
                    </div>

                    <div className="mb-14">
                        <h2 className="font-heading font-bold text-3xl text-center text-charcoal mb-16">Etapas do Processo</h2>
                        <div className="grid md:grid-cols-4 gap-8">
                            <div className="bg-white p-8 rounded-3xl shadow-subtle border border-pastel-yellow/30 flex flex-col items-center text-center hover:-translate-y-2 transition-transform duration-300 hover:shadow-lg hover:border-pastel-yellow">
                                <div className="mb-6 p-4 bg-pastel-yellow/50 rounded-full shadow-inner">
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
                                        className="lucide lucide-file-text w-8 h-8 text-yellow-600"
                                        aria-hidden="true"
                                    >
                                        <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path>
                                        <path d="M14 2v5a1 1 0 0 0 1 1h5"></path>
                                        <path d="M10 9H8"></path>
                                        <path d="M16 13H8"></path>
                                        <path d="M16 17H8"></path>
                                    </svg>
                                </div>
                                <h3 className="font-heading font-bold text-xl text-charcoal mb-3">1. Anamnese</h3>
                                <p className="text-charcoal/70">Entrevista detalhada com a família para conhecer o histórico de vida e escolar.</p>
                            </div>

                            <div className="bg-white p-8 rounded-3xl shadow-subtle border border-pastel-yellow/30 flex flex-col items-center text-center hover:-translate-y-2 transition-transform duration-300 hover:shadow-lg hover:border-pastel-yellow">
                                <div className="mb-6 p-4 bg-pastel-yellow/50 rounded-full shadow-inner">
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
                                        className="lucide lucide-search w-8 h-8 text-yellow-600"
                                        aria-hidden="true"
                                    >
                                        <path d="m21 21-4.34-4.34"></path>
                                        <circle cx="11" cy="11" r="8"></circle>
                                    </svg>
                                </div>
                                <h3 className="font-heading font-bold text-xl text-charcoal mb-3">2. Sessões Lúdicas</h3>
                                <p className="text-charcoal/70">Aplicação de testes padronizados e atividades lúdicas (EOCA) com a criança.</p>
                            </div>

                            <div className="bg-white p-8 rounded-3xl shadow-subtle border border-pastel-yellow/30 flex flex-col items-center text-center hover:-translate-y-2 transition-transform duration-300 hover:shadow-lg hover:border-pastel-yellow">
                                <div className="mb-6 p-4 bg-pastel-yellow/50 rounded-full shadow-inner">
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
                                        className="lucide lucide-clipboard-check w-8 h-8 text-yellow-600"
                                        aria-hidden="true"
                                    >
                                        <rect width="8" height="4" x="8" y="2" rx="1" ry="1"></rect>
                                        <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
                                        <path d="m9 14 2 2 4-4"></path>
                                    </svg>
                                </div>
                                <h3 className="font-heading font-bold text-xl text-charcoal mb-3">3. Visita Escolar</h3>
                                <p className="text-charcoal/70">Contato com a escola (quando necessário) para compreender o ambiente de aprendizagem.</p>
                            </div>

                            <div className="bg-white p-8 rounded-3xl shadow-subtle border border-pastel-yellow/30 flex flex-col items-center text-center hover:-translate-y-2 transition-transform duration-300 hover:shadow-lg hover:border-pastel-yellow">
                                <div className="mb-6 p-4 bg-pastel-yellow/50 rounded-full shadow-inner">
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
                                        className="lucide lucide-check w-8 h-8 text-yellow-600"
                                        aria-hidden="true"
                                    >
                                        <path d="M20 6 9 17l-5-5"></path>
                                    </svg>
                                </div>
                                <h3 className="font-heading font-bold text-xl text-charcoal mb-3">4. Devolutiva</h3>
                                <p className="text-charcoal/70">Entrega do relatório técnico com os resultados e orientações para família e escola.</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gradient-to-br from-pastel-yellow/20 to-pastel-lavender/10 rounded-[3rem] p-12 mb-4 border border-white">
                        <h2 className="font-heading font-bold text-3xl text-center text-charcoal mb-12">O que investigamos?</h2>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            <div className="flex items-center gap-4 bg-white/80 p-4 rounded-xl shadow-sm hover:scale-105 transition-transform">
                                <div className="w-3 h-3 rounded-full bg-pastel-mint shadow-sm"></div>
                                <span className="text-charcoal/80 font-medium">Atenção e Concentração</span>
                            </div>
                            <div className="flex items-center gap-4 bg-white/80 p-4 rounded-xl shadow-sm hover:scale-105 transition-transform">
                                <div className="w-3 h-3 rounded-full bg-pastel-blue shadow-sm"></div>
                                <span className="text-charcoal/80 font-medium">Memória Operacional</span>
                            </div>
                            <div className="flex items-center gap-4 bg-white/80 p-4 rounded-xl shadow-sm hover:scale-105 transition-transform">
                                <div className="w-3 h-3 rounded-full bg-pastel-peach shadow-sm"></div>
                                <span className="text-charcoal/80 font-medium">Linguagem e Vocabulário</span>
                            </div>
                            <div className="flex items-center gap-4 bg-white/80 p-4 rounded-xl shadow-sm hover:scale-105 transition-transform">
                                <div className="w-3 h-3 rounded-full bg-pastel-yellow shadow-sm"></div>
                                <span className="text-charcoal/80 font-medium">Coordenação Motora</span>
                            </div>
                            <div className="flex items-center gap-4 bg-white/80 p-4 rounded-xl shadow-sm hover:scale-105 transition-transform">
                                <div className="w-3 h-3 rounded-full bg-pastel-lavender shadow-sm"></div>
                                <span className="text-charcoal/80 font-medium">Habilidades Matemáticas</span>
                            </div>
                            <div className="flex items-center gap-4 bg-white/80 p-4 rounded-xl shadow-sm hover:scale-105 transition-transform">
                                <div className="w-3 h-3 rounded-full bg-pastel-pink shadow-sm"></div>
                                <span className="text-charcoal/80 font-medium">Leitura e Escrita</span>
                            </div>
                            <div className="flex items-center gap-4 bg-white/80 p-4 rounded-xl shadow-sm hover:scale-105 transition-transform">
                                <div className="w-3 h-3 rounded-full bg-pastel-mint shadow-sm"></div>
                                <span className="text-charcoal/80 font-medium">Funções Executivas</span>
                            </div>
                            <div className="flex items-center gap-4 bg-white/80 p-4 rounded-xl shadow-sm hover:scale-105 transition-transform">
                                <div className="w-3 h-3 rounded-full bg-pastel-blue shadow-sm"></div>
                                <span className="text-charcoal/80 font-medium">Habilidades Sociais</span>
                            </div>
                            <div className="flex items-center gap-4 bg-white/80 p-4 rounded-xl shadow-sm hover:scale-105 transition-transform">
                                <div className="w-3 h-3 rounded-full bg-pastel-peach shadow-sm"></div>
                                <span className="text-charcoal/80 font-medium">Processamento Visual</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="min-h-screen pb-14 bg-white">
                <div className="bg-gradient-to-b from-pastel-lavender/40 to-white py-20 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-vivid-lavender/30 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2"></div>
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-vivid-mint/20 rounded-full blur-3xl opacity-50 translate-y-1/2 -translate-x-1/2"></div>
                    <div className="container mx-auto px-4 text-center relative z-10">
                        <div className="inline-flex items-center justify-center p-4 bg-white rounded-full shadow-md mb-6 animate-fade-in-up border border-vivid-lavender/20">
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
                                className="lucide lucide-zap w-10 h-10 text-vivid-lavender fill-pastel-lavender/40"
                                aria-hidden="true"
                            >
                                <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
                            </svg>
                        </div>
                        <h1 className="font-heading font-bold text-4xl md:text-5xl text-charcoal mb-6 animate-fade-in-up animation-delay-0">
                            Intervenção no TDAH
                        </h1>
                        <p className="text-xl text-charcoal/80 max-w-3xl mx-auto leading-relaxed animate-fade-in-up animation-delay-200">
                            Estratégias para melhorar a atenção, organização e controle dos impulsos, transformando a agitação em criatividade e foco.
                        </p>
                    </div>
                </div>

                <div className="container mx-auto px-4 mt-8">
                    <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
                        <div className="space-y-6">
                            <h2 className="font-heading font-bold text-2xl text-charcoal border-l-4 border-vivid-lavender pl-4">
                                Como funciona o acompanhamento?
                            </h2>
                            <p className="text-charcoal/80 leading-relaxed text-lg">
                                O Transtorno do Déficit de Atenção com Hiperatividade (TDAH) demanda uma abordagem multifacetada. Nas sessões da NeuroVida,
                                utilizamos jogos cognitivos e atividades estruturadas que desafiam o cérebro a manter o foco por períodos cada vez maiores,
                                além de trabalhar o planejamento de tarefas.
                            </p>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3 bg-pastel-lavender/20 border border-pastel-lavender p-3 rounded-xl hover:bg-pastel-lavender/40 transition-colors">
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
                                        className="lucide lucide-circle-check w-5 h-5 text-vivid-lavender mt-0.5 shrink-0"
                                        aria-hidden="true"
                                    >
                                        <circle cx="12" cy="12" r="10"></circle>
                                        <path d="m9 12 2 2 4-4"></path>
                                    </svg>
                                    <span className="text-charcoal/80 font-medium">Treino de Funções Executivas (planejamento e memória)</span>
                                </li>
                                <li className="flex items-start gap-3 bg-pastel-lavender/20 border border-pastel-lavender p-3 rounded-xl hover:bg-pastel-lavender/40 transition-colors">
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
                                        className="lucide lucide-circle-check w-5 h-5 text-vivid-lavender mt-0.5 shrink-0"
                                        aria-hidden="true"
                                    >
                                        <circle cx="12" cy="12" r="10"></circle>
                                        <path d="m9 12 2 2 4-4"></path>
                                    </svg>
                                    <span className="text-charcoal/80 font-medium">Estratégias de auto-regulação emocional</span>
                                </li>
                                <li className="flex items-start gap-3 bg-pastel-lavender/20 border border-pastel-lavender p-3 rounded-xl hover:bg-pastel-lavender/40 transition-colors">
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
                                        className="lucide lucide-circle-check w-5 h-5 text-vivid-lavender mt-0.5 shrink-0"
                                        aria-hidden="true"
                                    >
                                        <circle cx="12" cy="12" r="10"></circle>
                                        <path d="m9 12 2 2 4-4"></path>
                                    </svg>
                                    <span className="text-charcoal/80 font-medium">Organização da rotina escolar e doméstica</span>
                                </li>
                                <li className="flex items-start gap-3 bg-pastel-lavender/20 border border-pastel-lavender p-3 rounded-xl hover:bg-pastel-lavender/40 transition-colors">
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
                                        className="lucide lucide-circle-check w-5 h-5 text-vivid-lavender mt-0.5 shrink-0"
                                        aria-hidden="true"
                                    >
                                        <circle cx="12" cy="12" r="10"></circle>
                                        <path d="m9 12 2 2 4-4"></path>
                                    </svg>
                                    <span className="text-charcoal/80 font-medium">Orientação para pais e escola</span>
                                </li>
                            </ul>
                        </div>

                        <div className="rounded-3xl overflow-hidden shadow-elevation border-8 border-pastel-lavender rotate-2 hover:rotate-0 transition-transform duration-500 hover:border-vivid-lavender/50">
                            <img
                                alt="Criança focada em atividade"
                                className="w-full h-full object-cover"
                                src="https://img.usecurling.com/p/600/400?q=child%20focusing%20puzzle&dpr=2"
                            />
                        </div>
                    </div>

                    <div className="mb-20">
                        <h2 className="font-heading font-bold text-3xl text-center text-charcoal mb-12">O Processo Terapêutico</h2>
                        <div className="grid md:grid-cols-4 gap-6">
                            <div className="relative p-6 bg-white border-2 border-vivid-lavender/30 rounded-2xl shadow-subtle text-center group hover:-translate-y-2 transition-transform duration-300">
                                <div className="w-14 h-14 mx-auto bg-pastel-lavender/30 rounded-full flex items-center justify-center text-vivid-lavender mb-4 group-hover:scale-110 transition-transform shadow-inner">
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
                                        className="lucide lucide-clock w-6 h-6"
                                        aria-hidden="true"
                                    >
                                        <path d="M12 6v6l4 2"></path>
                                        <circle cx="12" cy="12" r="10"></circle>
                                    </svg>
                                </div>
                                <h3 className="font-heading font-bold text-lg text-charcoal mb-2">Entrevista</h3>
                                <p className="text-sm text-charcoal/70">Conversa inicial com os pais para entender a história.</p>
                                <div className="hidden md:block absolute top-12 -right-3 w-6 h-1 bg-gradient-to-r from-gray-200 to-transparent"></div>
                            </div>

                            <div className="relative p-6 bg-white border-2 border-vivid-mint/30 rounded-2xl shadow-subtle text-center group hover:-translate-y-2 transition-transform duration-300">
                                <div className="w-14 h-14 mx-auto bg-pastel-mint/30 rounded-full flex items-center justify-center text-vivid-mint mb-4 group-hover:scale-110 transition-transform shadow-inner">
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
                                        className="lucide lucide-brain w-6 h-6"
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
                                <h3 className="font-heading font-bold text-lg text-charcoal mb-2">Avaliação</h3>
                                <p className="text-sm text-charcoal/70">Sessões lúdicas para mapear habilidades e dificuldades.</p>
                                <div className="hidden md:block absolute top-12 -right-3 w-6 h-1 bg-gradient-to-r from-gray-200 to-transparent"></div>
                            </div>

                            <div className="relative p-6 bg-white border-2 border-vivid-lavender/30 rounded-2xl shadow-subtle text-center group hover:-translate-y-2 transition-transform duration-300">
                                <div className="w-14 h-14 mx-auto bg-pastel-lavender/30 rounded-full flex items-center justify-center text-vivid-lavender mb-4 group-hover:scale-110 transition-transform shadow-inner">
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
                                        className="lucide lucide-circle-check w-6 h-6"
                                        aria-hidden="true"
                                    >
                                        <circle cx="12" cy="12" r="10"></circle>
                                        <path d="m9 12 2 2 4-4"></path>
                                    </svg>
                                </div>
                                <h3 className="font-heading font-bold text-lg text-charcoal mb-2">Devolutiva</h3>
                                <p className="text-sm text-charcoal/70">Entrega do relatório e plano de intervenção.</p>
                                <div className="hidden md:block absolute top-12 -right-3 w-6 h-1 bg-gradient-to-r from-gray-200 to-transparent"></div>
                            </div>

                            <div className="relative p-6 bg-white border-2 border-vivid-mint/30 rounded-2xl shadow-subtle text-center group hover:-translate-y-2 transition-transform duration-300">
                                <div className="w-14 h-14 mx-auto bg-pastel-mint/30 rounded-full flex items-center justify-center text-vivid-mint mb-4 group-hover:scale-110 transition-transform shadow-inner">
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
                                        className="lucide lucide-target w-6 h-6"
                                        aria-hidden="true"
                                    >
                                        <circle cx="12" cy="12" r="10"></circle>
                                        <circle cx="12" cy="12" r="6"></circle>
                                        <circle cx="12" cy="12" r="2"></circle>
                                    </svg>
                                </div>
                                <h3 className="font-heading font-bold text-lg text-charcoal mb-2">Intervenção</h3>
                                <p className="text-sm text-charcoal/70">Sessões semanais com atividades direcionadas.</p>
                            </div>
                        </div>
                    </div>

                    <div className="text-center">
                        <Link
                            className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-vivid-lavender text-white hover:bg-vivid-lavender/90 h-14 px-10 text-lg rounded-full shadow-lg hover:shadow-lavender-200/50 transition-all border-2 border-transparent hover:border-white/20"
                            href="/contato"
                            data-discover="true"
                        >
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
                                className="lucide lucide-calendar w-5 h-5 mr-2"
                                aria-hidden="true"
                            >
                                <path d="M8 2v4"></path>
                                <path d="M16 2v4"></path>
                                <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                                <path d="M3 10h18"></path>
                            </svg>
                            Agendar Avaliação Inicial
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ServicosPage;
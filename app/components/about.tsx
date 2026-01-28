import Link from "next/link"
import Image from "next/image"

export default function About() {
  return (
    <div className="bg-white/90 backdrop-blur-md rounded-[5rem] p-8 md:p-14 mx-8 shadow-lg flex flex-col md:flex-row items-center gap-12 border border-vivid-peach/20 hover:border-vivid-peach/50 transition-colors duration-500 mb-18">
      <div className="w-48 h-48 md:w-64 md:h-64 shrink-0 rounded-full overflow-hidden border-[6px] border-vivid-peach/30 shadow-md relative">
        <div className="absolute inset-0 bg-vivid-peach/10 mix-blend-overlay" />
        <Image
          alt="Foto da Profissional"
          src="https://img.usecurling.com/p/600/400?q=child%20test%20learning&dpr=2"
          width={256}
          height={256}
          className="w-full h-full object-cover"
          priority
        />
      </div>

      <div className="flex-1 text-center md:text-left space-y-6">
        <h2 className="font-heading font-bold text-3xl md:text-4xl text-charcoal">Olá, sou Angelis Maciel Comin</h2>
        <p className="text-charcoal/80 text-lg leading-relaxed">
          Especialista em Neuropsicopedagogia com mais de 10 anos de experiência clínica. Na NeuroVida, minha missão é acolher famílias e mostrar que todo desenvolvimento é possível com o olhar certo, afeto e estratégias baseadas na ciência.
        </p>
        <Link
          href="/sobre"
          data-discover="true"
          className="inline-flex items-center justify-center gap-2 whitespace-nowrap ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 text-lg font-semibold text-charcoal hover:bg-vivid-peach hover:text-white px-8 py-6 rounded-full transition-all border border-charcoal/10"
        >
          Conheça minha trajetória
          <svg xmlns="http://www.w3.org/2000/svg" className="lucide lucide-arrow-right w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M5 12h14"></path>
            <path d="m12 5 7 7-7 7"></path>
          </svg>
        </Link>
      </div>
    </div>
  )
}
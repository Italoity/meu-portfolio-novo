import imgFoto from '../assets/imgFoto.jpg'

function Hero() {
    return (
        <section id="hero" className="
        bg-gray-950 text-gray-100 font-sans antialiased selection:bg-emerald-500 selection:text-gray-950
        mx-auto px-6 py-24 md:py-32 flex flex-col md:flex-row items-center justify-center gap-12 min-h-[70vh]">
            <div className=" flex flex-col justify-center text-left">
                <p className="font-mono text-emerald-400 text-sm mb-3 tracking-wide">
                    Olá , meu nome é
                </p>
                <h1 className="text-4xl md:text-6xl font-extrabold text-gray-100 tracking-tight mb-4">
                    Italo Santos
                </h1>
                <h2 className="text-3xl md:text-5xl font-bold text-gray-400 mb-6">
                    Desenvolvedor de Software
                </h2>
                <p className="max-w-xl text-gray-400 leading-relaxed text-base md:text-lg mb-8">
                    Especializado em construir bases sólidas, seguras e eficientes para sistemas, transformando regras de negócio em APIs robustas.
                </p>
                <div>
                    <a href="#projetos" className="inline-flex items-center justify-center px-6 py-3 border border-emerald-500 text-emerald-400 font-medium text-sm rounded hover:bg-emerald-500/10 transition-all duration-300">
                        Ver Meus Projetos
                    </a>
                </div>
            </div>

            <div className="flex justify-center shrink-0 order-first md:order-last">
                <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-r transition-all duration-500 from-emerald-500 to-teal-500 rounded-full blur opacity-25 group-hover:opacity-40"></div>
                    <img 
                     src={imgFoto} 
                     alt="Foto do Italo Santos" 
                     className='relative rounded-full w-48 h-48 md:w-69 md:h-65 object-cover border-2 border-emerald-500/30 object-center grayscale hover:grayscale-0 transition-all duration-500'/>
                </div>
            </div>
        </section>
    )
}

export default Hero;
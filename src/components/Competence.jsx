function Competence() {
    return (
        <section id="competencias" className="py-20 border-t bg-gray-950">
            <div className="max-w-5xl mx-auto px-6">
                <div className="flex items-center gap-4 mb-12">
                    <h3 className="text-2xl font-bold tracking-tight text-gray-100">Principais competências</h3>
                    <div className="h-[1px] bg-gray-800 flex-grow"></div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="p-6 bg-gray-900/50 border border-gray-900 rounded-lg hover:border-emerald-800 transition-colors">
                        <div className="flex items-center gap-3 mb-3 text-emerald-400">
                            <i className="fa-brands fa-java text-xl"></i>
                            <h4 className="font-bold text-gray-200">Java e Spring Boot</h4>
                        </div>
                        <p className="text-sm text-gray-400 leading-relaxed">
                            Desenvolvimento de aplicações back-end, APIs RESTful e integração de sistemas.
                        </p>
                    </div>
                    <div className="p-6 bg-gray-900/50 border border-gray-900 rounded-lg hover:border-emerald-800 transition-colors">
                        <div className="flex items-center gap-3 mb-3 text-emerald-400">
                            <i className="fa-solid fa-shield-halved text-lg"></i>
                            <h4 className="font-bold text-gray-200">Spring Security</h4>
                        </div>
                        <p className="text-sm text-gray-400 leading-relaxed">
                            Implementação de autenticação, autorização e mecanismos de segurança.
                        </p>
                    </div>
                    <div className="p-6 bg-gray-900/50 border border-gray-900 rounded-lg hover:border-emerald-800 transition-colors">
                        <div className="flex items-center gap-3 mb-3 text-emerald-400">
                            <i className="fa-solid fa-shield-halved text-lg"></i>
                            <h4 className="font-bold text-gray-200">MariaDB e Mysql</h4>
                        </div>
                        <p className="text-sm text-gray-400 leading-relaxed">
                            Modelagem, administração e consulta de bancos de dados relacionais.
                        </p>
                    </div>
                    <div className="p-6 bg-gray-900/50 border border-gray-900 rounded-lg hover:border-emerald-800 transition-colors">
                        <div className="flex items-center gap-3 mb-3 text-emerald-400">
                            <i className="fa-solid fa-shield-halved text-lg"></i>
                            <h4 className="font-bold text-gray-200">Cybersegurança</h4>
                        </div>
                        <p className="text-sm text-gray-400 leading-relaxed">
                            Conhecimento em criptografia, Bash Script, análise de vulnerabilidades e segurança aplicada ao ciclo de desenvolvimento de software.
                        </p>
                    </div>
                    <div className="p-6 bg-gray-900/50 border border-gray-900 rounded-lg hover:border-emerald-800 transition-colors">
                        <div className="flex items-center gap-3 mb-3 text-emerald-400">
                            <i className="fa-solid fa-shield-halved text-lg"></i>
                            <h4 className="font-bold text-gray-200">Front-end</h4>
                        </div>
                        <p className="text-sm text-gray-400 leading-relaxed">
                            Desenvolvimento de aplicação telas responsivas usando React.js com JavaScirpt ou TypeScript para lógica de negócios.
                        </p>
                    </div>
                    
                </div>
            </div>

        </section>
    )
}

export default Competence;
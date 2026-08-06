function Projects() {
    return (
        <section id="projetos" className="bg-gray-950 border-t border-gray-900 py-20">
            <div className="max-w-5xl mx-auto px-6">
                <div className="flex flex-center gap-4 mb-12">
                    <h3 className="text-2xl font-bold tracking-tight">Projetos em Destaques</h3>
                    <div className="h-[1px] bg-gray-800 flex-grow"></div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-gray-950 border border-gray-900 rounded-xl overflow-hidden flex flex-col justify-between hover:border-emerald-500/30 transition-all duration-300 group">
                        <div className="p-6">
                            <div className="flex justify-between items-start mb-4">
                                <span className="text-xs font-mono text-emerald-400 bg-emerald-500/5 px-2.5 py-1 rounded-full border border-emerald-500/10">
                                    Back-end API
                                </span>
                                <div className="flex gap-3 text-gray-400 text-lg">
                                    <a href="https://github.com/Italoity/CRUD-springboot" className="hover:text-emerald-400 transition-colors"><i className="fa-brands fa-github"></i></a>
                                </div>
                            </div>
                            <h4 className="text-xl font-bold text-gray-100 group-hover:text-emerald-400 transition-colors mb-2">CRUD REST API</h4>
                            <p className="text-sm text-gray-400 leading-relaxed mb-4">
                                API robusta para gerenciamento de e-commecer,contendo controle de estoque,processamento de pedidos e relatórios de vendas.Conta com tratamento global de exceções.
                            </p>
                        </div>
                        <div className="px-6 pb-6 pt-2 flex flex-wrap gap-2 text-xs font-mono text-gray-400">
                            <span className="bg-gray-900 px-2 py-1 rounded">Java</span>
                            <span className="bg-gray-900 px-2 py-1 rounded">Spring Boot</span>
                            <span className="bg-gray-900 px-2 py-1 rounded">MariaDB</span>
                        </div>
                    </div>

                    <div className="bg-gray-950 border border-gray-900 rounded-xl overflow-hidden flex flex-col justify-between hover:border-emerald-500/30 transition-all duration-300 group">
                        <div className="p-6">
                            <div className="flex justify-between items-start mb-4">
                                <span className="text-xs font-mono text-emerald-400 bg-emerald-500/5 px-2.5 py-1 rounded-full border border-emerald-500/10">
                                    Segurança & Automação
                                </span>
                                <div className="flex gap-3 text-gray-400 text-lg">
                                    <a href="#" className="hover:text-emerald-400 transition-colors"><i className="fa-brands fa-github"></i></a>
                                </div>
                            </div>
                            <h4 className="text-xl font-bold text-gray-100 group-hover:text-emerald-400 transition-colors mb-2">Security Hardening & Auth Service</h4>
                            <p className="text-sm text-gray-400 leading-relaxed mb-4">
                                Microsserviço de autenticação centralizado.Utilizado com Spring Security para controle rígido de acessos via JWT e criptografia de dados confidenciais.
                            </p>
                        </div>
                        <div className="px-6 pb-6 pt-2 flex flex-wrap gap-2 text-xs font-mono text-gray-400">
                            <span className="bg-gray-900 px-2 py-1 rounded">Java</span>
                            <span className="bg-gray-900 px-2 py-1 rounded">Spring Boot</span>
                            <span className="bg-gray-900 px-2 py-1 rounded">MariaDB</span>
                        </div>
                    </div>

                    
                </div>
            </div>

        </section>
    )
}

export default Projects;
function Contact() {
    return(
        <footer id="contato" className="border-t bg-gray-950 py-16 text-center">
            <div className="max-w-5xl mx-auto px-6">
                <h3 className="text-xl font-bold text-gray-200 mb-3">Vamos nos conectar?</h3>
                <p className="text-sm text-gray-400 max-w-sm mx-auto mb-6">
                    Estou sempre aberto a novas oportunidades no mercado de desenvolvimento e troca de experiência técnicas.
                </p>

                <div className="flex justify-center gap-6 text-xl text-gray-400 mb-10">
                    <a href="https://github.com/Italoity" className="hover:text-emerald-400 transition-colors" title="GitHub"><i className="fa-brands fa-github"></i></a>
                    <a href="https://www.linkedin.com/in/italo-santos-0ba2b6305/" className="hover:text-emerald-400 transition-colors" title="LinkedIn"><i className="fa-brands fa-linkedin"></i></a>
                    <a href="malito:seu-email@provedor.com" className="hover:text-emerald-400 transition-colors" title="E-mail"><i className="fa-solid fa-envelope"></i></a>
                </div>

                <p className="text-sm font-mono text-gray-600">
                    &copy;2026 Desenvolvido por Italo Santos.
                </p>
            </div>

        </footer>
    )
}

export default Contact;
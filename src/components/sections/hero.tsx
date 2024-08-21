export function Hero() {
  return (
    <section className="px-0 md:px-8 flex items-center h-screen text-neutral-100 bg-[url('https://i.ibb.co/yNHZ6Yh/hero.png')] bg-cover bg-center">
      <div className="container">
        <h2 className="text-2xl md:text-6xl font-semibold md:text-bold">
          Simplifique a Gestão de Licitações e Tarefas em Equipe
        </h2>
        <p className="text-lg md:text-2xl my-8 md:my-12">
          O Projeto Caixa Vazia é uma solução completa para 
          acompanhar licitações e gerenciar tarefas em equipe de forma
          eficiente e organizada.
        </p>

        <a
          href="#"
          className="py-3 px-8 rounded-full bg-neutral-50 text-neutral-800 hover:bg-neutral-300 duration-300"
        >
          Comece agora
        </a>
      </div>
    </section>
  );
}

export function About() {
  return (
    <section
      id="about"
      className="bg-neutral-900 flex flex-col-reverse md:flex-row items-center justify-between text-neutral-100 overflow-hidden"
    >
      <div>
        <p className="px-4 py-8 md:px-20 font-light md:text-lg">
          O Projeto Caixa Vazia foi pensado e desenvolvido para atender as
          necessidades de gestão de licitações e tarefas em ambientes
          corporativos e governamentais. Nossa missão é facilitar o
          gerenciamento de processos complexos com uma interface intuitiva e
          funcionalidades robustas. Com o Caixa Vazia, você tem uma visão
          completa e organizada das licitações em andamento e das tarefas em
          equipe, garantindo que tudo seja realizado de forma eficiente e
          coordenada.
        </p>
      </div>
      <div className="overflow-hidden flex-shrink-0">
        <img
          src="https://i.ibb.co/Pm6wCKp/building.png"
          alt="Prédio"
          className="transform transition-transform duration-500 hover:scale-110 object-cover"
          style={{ transformOrigin: 'center' }}
        />
      </div>
    </section>
  );
}

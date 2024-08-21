import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

export function About() {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    triggerOnce: true, // Dispara apenas uma vez
    threshold: 0.1, // Proporção de visibilidade necessária para disparar a animação
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <section
      id="about"
      ref={ref}
      className="bg-neutral-900 flex flex-col-reverse md:flex-row items-center justify-between text-neutral-100 overflow-hidden"
    >
      <motion.div
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0, x: -100 },
          visible: { opacity: 1, x: 0 },
        }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <motion.p
          className="px-4 py-8 md:px-20 font-light md:text-lg"
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
          }}
          transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
        >
          O Projeto Caixa Vazia foi pensado e desenvolvido para atender as
          necessidades de gestão de licitações e tarefas em ambientes
          corporativos e governamentais. Nossa missão é facilitar o
          gerenciamento de processos complexos com uma interface intuitiva e
          funcionalidades robustas. Com o Caixa Vazia, você tem uma visão
          completa e organizada das licitações em andamento e das tarefas em
          equipe, garantindo que tudo seja realizado de forma eficiente e
          coordenada.
        </motion.p>
      </motion.div>

      <motion.div
        className="overflow-hidden flex-shrink-0"
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0, x: 100 },
          visible: { opacity: 1, x: 0 },
        }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <motion.img
          src="https://i.ibb.co/Pm6wCKp/building.png"
          alt="Prédio"
          className="transform transition-transform duration-500 hover:scale-110 object-cover"
          style={{ transformOrigin: "center" }}
        />
      </motion.div>
    </section>
  );
}

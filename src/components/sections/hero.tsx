import { motion } from "framer-motion";

export function Hero() {
  return (
    <section
      className={`px-0 md:px-8 flex items-center h-screen text-neutral-100 bg-hero bg-cover bg-center`}
    >
      <motion.div
        className="container"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <motion.h2
          className="text-2xl md:text-6xl font-semibold md:text-bold"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
        >
          Simplifique a Gestão de Licitações e Tarefas em Equipe
        </motion.h2>

        <motion.p
          className="text-lg md:text-2xl my-8 md:my-12"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1, duration: 0.8, ease: "easeOut" }}
        >
          O Projeto Caixa Vazia é uma solução completa para acompanhar
          licitações e gerenciar tarefas em equipe de forma eficiente e
          organizada.
        </motion.p>

        <motion.a
          href="#"
          className="py-3 px-8 rounded-full bg-neutral-50 text-neutral-800 hover:bg-neutral-300 duration-300"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.5, duration: 0.5, ease: "easeOut" }}
        >
          Comece agora
        </motion.a>
      </motion.div>
    </section>
  );
}

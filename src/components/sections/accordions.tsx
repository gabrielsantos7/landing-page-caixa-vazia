import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useMemo } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export function Accordions() {
  const FAQs = useMemo(
    () => [
      {
        question: 'Para quem é o Projeto Caixa Vazia?',
        answer:
          'O Projeto Caixa Vazia é voltado para equipes de licitações corporativas ou governamentais. Pode englobar setores como controladoria e contabilidade.',
      },
      {
        question: 'A quem pertence o Projeto Caixa Vazia?',
        answer:
          'O Projeto Caixa Vazia é de uso exclusivo da Prefeitura Municipal de Dom Basílio, que incentivou a criação e adotou o uso do software.',
      },
      {
        question: 'Quem pode fazer uso do sistema?',
        answer:
          'Qualquer funcionário que tenha vínculos com o município e atue no setor administrativo.',
      },
    ],
    []
  );

  const controls = useAnimation();
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <section id="faq" ref={ref} className="bg-neutral-50 p-4 md:p-12">
      <motion.div
        className="container"
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 },
        }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <h3 className="uppercase text-xl mb-6 font-semibold">
          Perguntas Frequentes
        </h3>
        {FAQs.map((FAQ, index) => (
          <Accordion type="single" collapsible key={index}>
            <AccordionItem value={`item-${index}`}>
              <AccordionTrigger>{FAQ.question}</AccordionTrigger>
              <AccordionContent>{FAQ.answer}</AccordionContent>
            </AccordionItem>
          </Accordion>
        ))}
      </motion.div>
    </section>
  );
}

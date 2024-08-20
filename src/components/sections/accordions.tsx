import { useMemo } from 'react';
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
  return (
    <section id="faq" className="bg-neutral-50 p-4 md:p-12">
      <div className="container">
        <h3 className="uppercase text-xl mb-6 font-semibold">
          Perguntas Frequentes
        </h3>
        {FAQs.map((FAQ, index) => (
          <Accordion type="single" collapsible key={index}>
            <AccordionItem value="item-1">
              <AccordionTrigger>{FAQ.question}</AccordionTrigger>
              <AccordionContent>{FAQ.answer}</AccordionContent>
            </AccordionItem>
          </Accordion>
        ))}
      </div>
    </section>
  );
}

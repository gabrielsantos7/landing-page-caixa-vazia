import { HiOutlineSpeakerphone } from 'react-icons/hi';
import { LuBookMarked, LuClipboardList } from 'react-icons/lu';
import { FiUsers } from 'react-icons/fi';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useMemo } from 'react';

export function Cards() {
  const cards = useMemo(
    () => [
      {
        icon: <LuBookMarked size={30} />,
        title: 'Licitações',
        content:
          'Acompanhe cada etapa de licitação com eficiência e organização. Simplifique processos complexos com uma visão clara.',
      },
      {
        icon: <LuClipboardList size={30} />,
        title: 'Tarefas',
        content:
          'Atribua responsabilidades, acompanhe o progresso e mantenha sua equipe alinhada para atingir os objetivos no prazo.',
      },
      {
        icon: <HiOutlineSpeakerphone size={30} />,
        title: 'Avisos Internos',
        content:
          'Comunique-se instantaneamente. Publique avisos importantes e mantenha todos informados sobre as atualizações recentes.',
      },
      {
        icon: <FiUsers size={30} />,
        title: 'Níveis de Usuário',
        content:
          'Controle de acesso personalizado para cada tipo de usuário. Garanta segurança e eficiência na gestão diária.',
      },
    ],
    []
  );

  return (
    <section
      id="features"
      className="md:py-12 py-4 bg-gradient-to-br from-emerald-400 to-teal-600"
    >
      <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 md:gap-12 md:px-12 gap-4 px-4 group">
        {cards.map((card, index) => (
          <Card key={index}>
            <CardHeader>
              {card.icon}
              <CardTitle>
                <span>{card.title}</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>{card.content}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}

import React, { ReactNode } from 'react';
import { Card } from './Card';

interface SectionProps {
  sectionTitle: string;
  cards: {
    title: string;
    icon: ReactNode;
    description: string;
    link: string;
  }[];
}

export const Section: React.FC<SectionProps> = ({ sectionTitle, cards }) => (
  <section className="mb-10 w-full">
    <h2 className="text-xxl font-semibold mb-4 text-left sm:pl-4 lg:pl-24">
      {sectionTitle}
    </h2>
    <div className="flex flex-wrap justify-start sm:pl-4 lg:pl-24">
      {cards.map((card, index) => (
        <Card
          key={index}
          title={card.title}
          icon={card.icon}
          description={card.description}
          link={card.link}
        />
      ))}
    </div>
  </section>
);

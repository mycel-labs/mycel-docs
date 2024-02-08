import React, { ReactNode } from 'react';
import Link from '@docusaurus/Link';

interface CardProps {
  icon: ReactNode;
  title: string;
  description: string;
  link: string;
}

export const Card: React.FC<CardProps> = ({
  icon,
  title,
  description,
  link,
}) => (
  <div
    className="card flex flex-col justify-between m-4 p-4 bg-white rounded shadow-md"
    style={{ width: '400px' }}
  >
    <div>
      <h3 className="flex justify-center">
        <div className="mr-2">{icon}</div>
        {title}
      </h3>
      <p className="card-text">{description}</p>
    </div>
    <Link to={link} className="button button--secondary">
      Read More
    </Link>
  </div>
);

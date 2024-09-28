import React from 'react';
import Layout from '@theme/Layout';
import { Hero } from '../components/Hero';
import { Section } from '../components/Section';
import {
  Bolt,
  Key,
  Box,
  Waypoints,
  ChevronRightSquare,
  CheckCheck,
  PcCase,
} from 'lucide-react';

export default function Home(): JSX.Element {
  return (
    <Layout title="Home" description="Welcome to Mycel Documentation ">
      <main>
        <Hero />
        <div className="container py-12">
          <Section
            sectionTitle="Learn more about Mycel"
            cards={[
              {
                title: 'Mycel Overview',
                icon: <Bolt />,
                description:
                  'Discover Mycel, a decentralized infrastructure designed to synchronize state machines across a diverse array of blockchain platforms.',
                link: '/overview',
              },
              {
                title: 'Concepts',
                icon: <Key />,
                description:
                  'Learn about the transferable account, a specialized account structure on the Mycel platform that facilitates secure, cross-chain asset management and transfer.',
                link: '/overview/concepts',
              },
            ]}
          />
          <Section
            sectionTitle="Developers"
            cards={[
              {
                title: 'Get Started',
                icon: <Box />,
                description: 'Start building a cross-chain dApps with Mycel.',
                link: '/develop/astraeus/get-started',
              },
              {
                title: 'API Reference',
                icon: <Box />,
                description:
                  'Explore the Mycel API reference to learn how to interact with the Mycel.',
                link: '/develop/astraeus/spec',
              },
            ]}
          />
        </div>
      </main>
    </Layout>
  );
}

import React from 'react';
import Layout from '@theme/Layout';
import { Hero } from '../components/Hero';
import { Section } from '../components/Section';
import {
  Bolt,
  Fingerprint,
  Repeat2,
  Box,
  Waypoints,
  ChevronRightSquare,
  CheckCheck,
  PcCase,
  LayoutDashboard,
} from 'lucide-react';

export default function Home(): JSX.Element {
  return (
    <Layout
      title="Home"
      description="Welcome to Mycel Documentation - Bridging Web2 and Web3 through Seamless ID Infrastructure"
    >
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
                  'Discover the innovative bridge Mycel creates between Web2 and Web3, offering a seamless ID infrastructure for digital identity management.',
                link: '/overview',
              },
              {
                title: 'Register Domain',
                icon: <LayoutDashboard />,
                description:
                  'Use the dashboard to easily register and manage your Mycel domain, streamlining your digital identity across platforms.',
                link: '/overview/dashboard',
              },
              {
                title: 'Mycel ID',
                icon: <Fingerprint />,
                description:
                  'Learn how Mycel ID revolutionizes digital identity with seamless integration across Web2 and Web3 platforms, enhancing user experience and privacy.',
                link: '/overview/mycel-id',
              },
              {
                title: 'Domain-based Transfer',
                icon: <Repeat2 />,
                description:
                  "Explore the benefits of domain-based transactions, enhancing privacy and user experience in the digital space with Mycel's innovative technology.",
                link: '/overview/domain-based-transfer',
              },
            ]}
          />
          <Section
            sectionTitle="Developers"
            cards={[
              {
                title: 'CosmWasm Guide',
                icon: <Box />,
                description:
                  'Start building on Mycel with CosmWasm, the perfect toolkit for smart contract development, enabling seamless integration and high performance.',
                link: '/develop/cosmwasm',
              },
              {
                title: 'CLI Docs',
                icon: <ChevronRightSquare />,
                description:
                  'Dive into the command-line interface documentation to effectively manage and interact with the Mycel network, enhancing your development workflow.',
                link: '/develop/cli',
              },
              {
                title: 'Endpoints & Network',
                icon: <Waypoints />,
                description:
                  "Access Mycel's RPC and LCD endpoints for seamless blockchain operations, enabling data queries and transaction execution.",
                link: '/develop/network',
              },
            ]}
          />
          <Section
            sectionTitle="Validators & Run Node"
            cards={[
              {
                title: 'Learn about Validator',
                icon: <CheckCheck />,
                description:
                  'Understand the critical role validators play in the Mycel network and how you can contribute to its security and efficiency by becoming a validator.',
                link: '/validate',
              },
              {
                title: 'Validator Setup',
                icon: <PcCase />,
                description:
                  'Get all the information you need to set up and run a node on the Mycel network, becoming a key player in securing and operating the blockchain.',
                link: '/validate/setup',
              },
            ]}
          />
        </div>
      </main>
    </Layout>
  );
}

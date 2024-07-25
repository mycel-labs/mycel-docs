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
                  'Discover Mycel, a decentralized platform that enables the transfer, management, and trading of various account across different blockchain platforms. ',
                link: '/overview',
              },
              {
                title: 'Transferable Account',
                icon: <Key />,
                description:
                  'Learn about the transferable account, a specialized account structure on the Mycel platform that facilitates secure, cross-chain asset management and transfer.',
                link: '/overview/concepts/transferable-account',
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

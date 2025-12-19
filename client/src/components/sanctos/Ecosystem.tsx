import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  ChevronDown,
  Github,
  Twitter,
  FileText,
  Server,
  Cpu,
  HardDrive,
  Lock,
  Users,
  EyeOff,
  Wallet,
} from "lucide-react";
import nodeHardware from "@assets/generated_images/futuristic_node_hardware.png";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SanctOSOrb } from "./Hero";
import { Link as WouterLink } from "wouter";

const APP_URL = "https://messenger.sanctos.app";

export function Nodes() {
  return (
    <section id="nodes" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <div className="inline-block px-3 py-1 mb-6 text-xs font-mono border border-sanctos-violet/50 text-sanctos-violet rounded">
              HARDWARE_V1
            </div>
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">
              Run the Network. <br />
              <span className="text-gradient">Own the Data.</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-10">
              Power the SanctOS privacy layer by running a node. Earn points,
              relay encrypted messages, and secure the network.
            </p>

            <div className="space-y-4 mb-8">
              {[
                {
                  title: "Lite Node",
                  icon: <Cpu />,
                  desc: "Run locally on your machine. (Coming Soon)",
                },
                {
                  title: "Home Node",
                  icon: <Server />,
                  desc: "Dedicated Raspberry Pi or mini-PC.",
                },
                {
                  title: "SanctOS Hardware",
                  icon: <HardDrive />,
                  desc: "Premium dedicated privacy server.",
                },
              ].map((node, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-primary/50 transition-colors cursor-pointer group"
                >
                  <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center text-white border border-white/10 group-hover:text-primary transition-colors">
                    {node.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-white">{node.title}</h4>
                    <p className="text-sm text-muted-foreground">{node.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <WouterLink href="/nodes">
              <Button
                variant="outline"
                className="rounded-full border-white/20 hover:bg-white/5 cursor-pointer"
              >
                Explore Node Infrastructure
              </Button>
            </WouterLink>
          </div>

          <div className="lg:w-1/2 relative">
            <div className="absolute inset-0 bg-sanctos-violet/20 blur-[100px] rounded-full" />
            <motion.img
              src={nodeHardware}
              alt="SanctOS Hardware Node"
              className="relative z-10 w-full drop-shadow-2xl"
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export function GroupChatTeaser() {
  return (
    <section className="py-24 relative bg-black/50 border-y border-white/5">
      <div className="container mx-auto px-6 text-center mb-16">
        <div className="inline-block px-3 py-1 mb-4 text-xs font-bold tracking-wider border border-primary/30 bg-primary/10 text-primary rounded-full uppercase">
          Phase 2 Preview
        </div>
        <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
          Encrypted Group Chats
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Shared symmetric group keys individually encrypted per device. Zero
          metadata. Total privacy for your squad.
        </p>
      </div>

      <div className="container mx-auto px-6">
        <div className="relative max-w-3xl mx-auto bg-[#0c0c12] border border-white/10 rounded-2xl p-8 shadow-2xl overflow-hidden">
          {/* Glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />

          <div className="flex flex-col items-center gap-8">
            {/* Diagram */}
            <div className="flex items-center justify-center gap-4 md:gap-12 relative w-full">
              {[1, 2, 3].map((i) => (
                <div key={i} className="relative flex flex-col items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                    <Users className="w-5 h-5 text-muted-foreground" />
                  </div>
                  <div className="h-12 w-0.5 bg-gradient-to-b from-white/10 to-primary/50" />
                </div>
              ))}

              {/* Central Node */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-8 md:translate-y-0">
                <div className="w-16 h-16 rounded-full bg-primary/20 border border-primary flex items-center justify-center shadow-[0_0_30px_rgba(167,92,255,0.2)] z-10 relative bg-[#0c0c12]">
                  <Lock className="w-6 h-6 text-primary" />
                </div>
              </div>
            </div>

            <div className="text-center mt-4">
              <div className="text-sm font-bold text-white mb-1">
                Group Key Rotation
              </div>
              <div className="text-xs text-muted-foreground">
                Zero-Knowledge Distribution
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Roadmap() {
  const phases = [
    {
      phase: "Phase 1",
      status: "Live Now",
      statusColor: "text-green-400",
      title: "MVP Foundation",
      items: [
        "Encrypted 1:1 messaging",
        "SanctOS Embedded Wallet",
        "On-chain PDA messaging",
        "Kill-switch identity",
        "XSalsa20 client-side encryption",
        "Basic UI",
        "Local conversation vault",
        "Auto-clear logic",
        "Micro-node caching (browser)",
        "Mainnet migration",
      ],
    },
    {
      phase: "Phase 2",
      status: "In Progress",
      statusColor: "text-sanctos-blue",
      title: "Advanced Features",
      items: [
        {
          title: "Private DeFi Mode",
          desc: "Private transaction relay, IP/device metadata hiding.",
        },
        { title: "RPC Rotation", desc: "Via Light Nodes." },
        {
          title: "Light Node Release",
          desc: "Encrypted persistent local cache, automatic IP rotation.",
        },
        { title: "Private RPC Shield", desc: "Start of Points Program." },
        {
          title: "Encrypted Group Chats",
          desc: "Symmetric group keys, key rotation, zero metadata delivery.",
        },
      ],
    },
    {
      phase: "Phase 3",
      status: "Upcoming",
      statusColor: "text-sanctos-lilac",
      title: "Decentralized Network Layer",
      items: [
        "Encrypted Media Nodes (Local Vault)",
        "Node Relays (Message pre-fetch)",
        "Always-on background sync",
        "File Sharding (Encrypted shard splitting)",
        "Advanced Lite/Full Nodes",
      ],
    },
    {
      phase: "Phase 4",
      status: "Future",
      statusColor: "text-muted-foreground",
      title: "Ghost Layer (Full Privacy Network)",
      items: [
        "CoinJoin (Ghost Send)",
        "Multi-party coordination",
        "Obfuscated transaction graph",
        "Multi-Hop Private Relay (Metadata-less routing)",
        "Stealth Addresses (Private receiving keys)",
        "Distributed Encrypted Storage",
        "Hardware Nodes (Optional)",
      ],
    },
  ];

  return (
    <section id="roadmap" className="py-32 bg-[#08080c]">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-display font-bold text-center mb-20">
          Roadmap (2025 Edition)
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connecting Line */}
          <div className="hidden lg:block absolute top-8 left-0 w-full h-0.5 bg-gradient-to-r from-sanctos-violet via-sanctos-blue to-transparent opacity-30" />

          {phases.map((phase, i) => (
            <div key={i} className="relative group">
              <div
                className={`w-4 h-4 rounded-full mb-6 relative z-10 shadow-[0_0_10px_currentColor] ${
                  i === 0
                    ? "bg-green-400 text-green-400"
                    : "bg-sanctos-violet text-sanctos-violet"
                }`}
              />

              <div className="flex items-center justify-between mb-2">
                <div className="text-xs font-mono text-muted-foreground">
                  {phase.phase}
                </div>
                <div
                  className={`text-xs font-bold uppercase tracking-wider ${phase.statusColor}`}
                >
                  {phase.status}
                </div>
              </div>

              <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors">
                {phase.title}
              </h3>

              <ul className="space-y-3">
                {phase.items.map((item, j) => {
                  const isComplex = typeof item === "object";
                  return (
                    <li
                      key={j}
                      className="text-sm text-muted-foreground flex items-start gap-2"
                    >
                      <div className="w-1 h-1 bg-white/30 rounded-full mt-2 shrink-0" />
                      <div>
                        {isComplex ? (
                          <>
                            <span className="text-white block mb-0.5">
                              {(item as any).title}
                            </span>
                            <span className="text-xs opacity-70">
                              {(item as any).desc}
                            </span>
                          </>
                        ) : (
                          item
                        )}
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FAQ() {
  return (
    <section className="py-24 max-w-3xl mx-auto px-6">
      <h2 className="text-3xl font-display font-bold mb-12 text-center">
        Frequent Questions
      </h2>
      <Accordion type="single" collapsible className="w-full">
        {[
          {
            q: "Is SanctOS really private?",
            a: "Yes. SanctOS uses end-to-end XSalsa20 encryption. We do not collect phone numbers, emails, or IP addresses. All metadata is stripped via our node relay network.",
          },
          {
            q: "How does encryption work?",
            a: "Messages are encrypted locally on your device using your wallet's derived keys. Only the recipient can decrypt the message.",
          },
          {
            q: "Do I need a specific wallet?",
            a: "SanctOS works with any standard Solana wallet (Phantom, Solflare), but for maximum privacy, we recommend generating a fresh wallet within the SanctOS app.",
          },
          {
            q: "Does SanctOS store metadata?",
            a: "No. Our architecture is designed to be metadata-free. We don't know who is talking to whom, or when.",
          },
        ].map((item, i) => (
          <AccordionItem key={i} value={`item-${i}`} className="border-white/10">
            <AccordionTrigger className="text-lg hover:text-primary">
              {item.q}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              {item.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}

export function Download() {
  return (
    <section className="py-32 text-center">
      <div className="container mx-auto px-6">
        <div className="glass-card max-w-4xl mx-auto p-12 rounded-3xl border border-primary/30 relative overflow-hidden">
          <div className="absolute inset-0 bg-primary/10 blur-[100px]" />
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">
              Take Back Your Privacy
            </h2>
            <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              Join the thousands of users reclaiming their digital sovereignty
              on Solana.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              {/* Link added here */}
              <Button
                asChild
                size="lg"
                className="h-14 px-10 text-lg rounded-full bg-primary hover:bg-primary/90 shadow-[0_0_30px_rgba(167,92,255,0.4)]"
              >
                <a href={APP_URL} target="_blank" rel="noopener noreferrer">
                  Launch Web App
                </a>
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="h-14 px-10 text-lg rounded-full border-white/20 hover:bg-white/5"
              >
                Download Node
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="bg-[#020204] py-12 border-t border-white/5 relative overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
          <div className="flex items-center gap-3">
            <div className="scale-50 origin-left">
              <SanctOSOrb />
            </div>
            <span className="font-bold font-display text-xl">SanctOS</span>
          </div>

          <div className="flex flex-wrap justify-center gap-8 text-sm text-muted-foreground">
            <WouterLink
              href="/comparison"
              className="hover:text-white transition-colors cursor-pointer"
            >
              SanctOS vs. Others
            </WouterLink>
            <WouterLink
              href="/nodes"
              className="hover:text-white transition-colors cursor-pointer"
            >
              Nodes
            </WouterLink>
            <WouterLink
              href="/docs"
              className="hover:text-white transition-colors cursor-pointer"
            >
              Docs
            </WouterLink>
          </div>

          <div className="flex gap-4">
            <a
              href="#"
              className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-white transition-colors"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-white transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-12">
          {/* Link added here */}
          <Button
            asChild
            className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 shadow-[0_0_20px_rgba(167,92,255,0.3)]"
          >
            <a href={APP_URL} target="_blank" rel="noopener noreferrer">
              Launch App
            </a>
          </Button>

          <WouterLink href="/docs">
            <Button
              variant="outline"
              className="rounded-full px-8 border-white/20 hover:bg-white/5 cursor-pointer"
            >
              Read the Docs
            </Button>
          </WouterLink>
        </div>

        <div className="text-center text-xs text-muted-foreground opacity-50 border-t border-white/5 pt-8">
          © 2025 SanctOS — A Sovereign Privacy Layer for Solana
        </div>
      </div>
    </footer>
  );
}

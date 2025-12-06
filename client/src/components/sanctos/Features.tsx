import { motion } from "framer-motion";
import { Shield, EyeOff, Server, Zap, Lock, Wallet } from "lucide-react";
import { SanctOSOrb } from "@/components/sanctos/Hero";

export function Overview() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Absolute Privacy <br/>
              <span className="text-muted-foreground">No Compromises.</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              SanctOS is an encrypted messaging platform and private Solana wallet built on a decentralized privacy network. No phone numbers, no servers, no metadata. All encrypted. All yours.
            </p>
            <div className="flex gap-4 text-sm font-medium text-primary">
              <span className="px-3 py-1 rounded-full bg-primary/10 border border-primary/20">Zero Metadata</span>
              <span className="px-3 py-1 rounded-full bg-primary/10 border border-primary/20">On-Chain</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center items-center min-h-[300px]"
          >
            <div className="absolute inset-0 bg-primary/20 blur-[120px] rounded-full opacity-50" />
            
            {/* Creative Orb Container */}
            <div className="relative z-10 scale-[1.8] md:scale-[2.2]">
              <SanctOSOrb />
              
              {/* Orbiting Rings */}
              <div className="absolute inset-0 -m-8 border border-white/5 rounded-full animate-[spin_10s_linear_infinite]" />
              <div className="absolute inset-0 -m-16 border border-white/5 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

const features = [
  {
    icon: <Lock className="w-6 h-6 text-sanctos-violet" />,
    title: "Encrypted Messaging",
    desc: "End-to-end XSalsa20 encryption with wallet-based identity."
  },
  {
    icon: <EyeOff className="w-6 h-6 text-sanctos-blue" />,
    title: "Private DeFi Mode",
    desc: "Hide your IP, device, and metadata on every dApp."
  },
  {
    icon: <Server className="w-6 h-6 text-sanctos-lilac" />,
    title: "SanctOS Nodes",
    desc: "Decentralized private relays and encrypted storage."
  },
  {
    icon: <Zap className="w-6 h-6 text-sanctos-fuchsia" />,
    title: "Kill-Switch Identity",
    desc: "Burn your old identity forever with one tap."
  },
  {
    icon: <Shield className="w-6 h-6 text-sanctos-violet" />,
    title: "On-Chain PDAs",
    desc: "Serverless, censorship-resistant communication."
  },
  {
    icon: <Wallet className="w-6 h-6 text-sanctos-blue" />,
    title: "SanctOS Wallet",
    desc: "Fast, private, auto-signed transactions."
  }
];

export function FeaturesGrid() {
  return (
    <section id="features" className="py-24 bg-black/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">Core Capabilities</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">Built for the sovereign individual.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-8 rounded-2xl hover:bg-white/[0.05] transition-colors group border border-white/5 hover:border-primary/30"
            >
              <div className="mb-6 p-3 rounded-xl bg-white/5 w-fit group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function PrivateDeFi() {
  return (
    <section className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 text-center">
        <div className="inline-block mb-6 px-4 py-1 rounded-full border border-sanctos-blue/30 bg-sanctos-blue/10 text-sanctos-blue text-sm font-medium">
          Private DeFi Mode
        </div>
        <h2 className="text-4xl md:text-6xl font-display font-bold mb-8">
          Trade in the <span className="text-sanctos-blue drop-shadow-[0_0_15px_rgba(95,206,255,0.5)]">Dark</span>
        </h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-16">
          Access any Solana dApp privately. SanctOS routes all transactions through your personal node relay, hiding your IP, device, timing, and metadata.
        </p>

        <div className="relative max-w-4xl mx-auto p-1 rounded-3xl bg-gradient-to-b from-white/10 to-transparent">
          <div className="bg-background/90 backdrop-blur-xl rounded-[22px] p-8 md:p-12 border border-white/5">
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
              {/* Diagram */}
              <div className="flex flex-col items-center gap-4">
                <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10">
                  <Wallet className="text-white" />
                </div>
                <span className="text-sm text-muted-foreground">Your Wallet</span>
              </div>

              <div className="h-px w-16 md:w-32 bg-gradient-to-r from-transparent via-sanctos-blue to-transparent relative">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-sanctos-blue rounded-full shadow-[0_0_10px_#5fceff]" />
              </div>

              <div className="flex flex-col items-center gap-4">
                <div className="w-20 h-20 rounded-full bg-sanctos-blue/10 flex items-center justify-center border border-sanctos-blue/30 shadow-[0_0_30px_rgba(95,206,255,0.1)]">
                  <Shield className="w-8 h-8 text-sanctos-blue" />
                </div>
                <span className="text-sm font-bold text-sanctos-blue">SanctOS Node</span>
              </div>

              <div className="h-px w-16 md:w-32 bg-gradient-to-r from-transparent via-sanctos-blue to-transparent relative">
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-sanctos-blue rounded-full shadow-[0_0_10px_#5fceff]" />
              </div>

              <div className="flex flex-col items-center gap-4">
                <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10">
                  <Server className="text-white" />
                </div>
                <span className="text-sm text-muted-foreground">Public RPC</span>
              </div>
            </div>
            
            <div className="grid grid-cols-3 gap-4 mt-12 pt-12 border-t border-white/5">
               <div className="text-center">
                 <div className="text-sanctos-blue font-bold mb-1">IP Masking</div>
                 <div className="text-xs text-muted-foreground">Zero Leaks</div>
               </div>
               <div className="text-center">
                 <div className="text-sanctos-blue font-bold mb-1">RPC Rotation</div>
                 <div className="text-xs text-muted-foreground">Dynamic Pathing</div>
               </div>
               <div className="text-center">
                 <div className="text-sanctos-blue font-bold mb-1">Timing Noise</div>
                 <div className="text-xs text-muted-foreground">Pattern Obfuscation</div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

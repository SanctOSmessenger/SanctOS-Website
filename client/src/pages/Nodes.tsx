import { Navbar } from "@/components/sanctos/Hero";
import { Footer } from "@/components/sanctos/Ecosystem";
import { motion } from "framer-motion";
import { Server, Shield, Zap, HardDrive, Share2, Award, Clock, Database } from "lucide-react";

export default function Nodes() {
  return (
    <div className="min-h-screen bg-[#050508] text-foreground selection:bg-primary selection:text-white">
      <Navbar />
      
      <div className="container mx-auto px-6 pt-32 pb-20">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-block px-3 py-1 mb-6 text-xs font-mono border border-sanctos-blue/50 text-sanctos-blue rounded">
            NETWORK INFRASTRUCTURE
          </div>
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
            SanctOS Nodes
          </h1>
          <p className="text-xl text-muted-foreground">
            Nodes are optional components that enhance privacy, performance, and decentralization. SanctOS works without them—but nodes unlock the ecosystem's full power.
          </p>
        </div>

        <div className="grid gap-24">
          {/* 1. Private RPC */}
          <section className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                 <div className="p-2 bg-sanctos-blue/10 rounded-lg">
                   <Shield className="w-6 h-6 text-sanctos-blue" />
                 </div>
                 <h2 className="text-3xl font-bold">Private RPC / Metadata Shield</h2>
              </div>
              <div className="inline-block px-2 py-1 mb-6 text-[10px] font-bold bg-white/10 rounded text-muted-foreground uppercase">Coming in Phase 2</div>
              <p className="text-muted-foreground mb-6">
                Nodes provide a privacy firewall between the user and public RPC endpoints, hiding your IP address and request timing.
              </p>
              <ul className="space-y-2">
                {["Hides IP Address", "Hides Request Timing", "Masks Messaging Activity", "Routes All Solana RPC Traffic"].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm">
                    <div className="w-1.5 h-1.5 bg-sanctos-blue rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 flex items-center justify-center h-[300px] relative overflow-hidden">
               <div className="absolute inset-0 bg-sanctos-blue/5 blur-[80px]" />
               {/* Diagram Placeholder */}
               <div className="relative z-10 flex items-center gap-4 font-mono text-xs">
                 <div className="p-3 border border-white/20 rounded bg-black">User</div>
                 <div className="w-8 h-px bg-white/20" />
                 <div className="p-3 border border-sanctos-blue rounded bg-sanctos-blue/10 text-sanctos-blue font-bold shadow-[0_0_15px_rgba(95,206,255,0.3)]">NODE</div>
                 <div className="w-8 h-px bg-white/20" />
                 <div className="p-3 border border-white/20 rounded bg-black">Public RPC</div>
               </div>
            </div>
          </section>

          {/* 2. Performance */}
          <section className="grid md:grid-cols-2 gap-12 items-center md:flex-row-reverse">
            <div className="md:order-2">
              <div className="flex items-center gap-3 mb-4">
                 <div className="p-2 bg-sanctos-violet/10 rounded-lg">
                   <Zap className="w-6 h-6 text-sanctos-violet" />
                 </div>
                 <h2 className="text-3xl font-bold">Performance & Caching</h2>
              </div>
              <div className="flex gap-2 mb-6">
                <span className="px-2 py-1 text-[10px] font-bold bg-green-500/10 text-green-400 rounded uppercase">Basic: Live Phase 1</span>
                <span className="px-2 py-1 text-[10px] font-bold bg-white/10 text-muted-foreground rounded uppercase">Encrypted: Phase 2</span>
              </div>
              <p className="text-muted-foreground mb-6">
                Nodes reduce latency by caching conversation indexes and message search results, resulting in faster sync and lower RPC costs.
              </p>
              <ul className="space-y-2">
                {["Conversation Indexes", "Message Search Results", "Signature Lookups", "Account Data"].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm">
                    <div className="w-1.5 h-1.5 bg-sanctos-violet rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="md:order-1 bg-white/5 border border-white/10 rounded-2xl p-8 flex items-center justify-center h-[300px] relative overflow-hidden">
               <div className="absolute inset-0 bg-sanctos-violet/5 blur-[80px]" />
               <div className="grid grid-cols-2 gap-4 relative z-10">
                 <div className="p-4 bg-black border border-white/10 rounded flex flex-col items-center gap-2 w-32">
                   <Clock className="w-6 h-6 text-muted-foreground" />
                   <span className="text-xs text-muted-foreground">Standard Sync</span>
                 </div>
                 <div className="p-4 bg-sanctos-violet/10 border border-sanctos-violet rounded flex flex-col items-center gap-2 w-32 shadow-[0_0_15px_rgba(167,92,255,0.2)]">
                   <Zap className="w-6 h-6 text-sanctos-violet" />
                   <span className="text-xs text-sanctos-violet font-bold">Node Sync</span>
                 </div>
               </div>
            </div>
          </section>

          {/* 3. Media Storage */}
          <section className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                 <div className="p-2 bg-sanctos-fuchsia/10 rounded-lg">
                   <HardDrive className="w-6 h-6 text-sanctos-fuchsia" />
                 </div>
                 <h2 className="text-3xl font-bold">Encrypted Media Storage</h2>
              </div>
              <div className="flex gap-2 mb-6">
                <span className="px-2 py-1 text-[10px] font-bold bg-white/10 text-muted-foreground rounded uppercase">Local: Phase 3</span>
                <span className="px-2 py-1 text-[10px] font-bold bg-white/10 text-muted-foreground rounded uppercase">Distributed: Phase 4</span>
              </div>
              <p className="text-muted-foreground mb-6">
                Enables encrypted photos, voice notes, documents, and media vaults without centralized servers.
              </p>
              <ul className="space-y-2">
                {["Encrypted Photos", "Voice Notes", "Documents", "Media Vaults"].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm">
                    <div className="w-1.5 h-1.5 bg-sanctos-fuchsia rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 flex items-center justify-center h-[300px] relative overflow-hidden">
               <div className="absolute inset-0 bg-sanctos-fuchsia/5 blur-[80px]" />
               <div className="relative z-10">
                 <div className="w-32 h-40 border-2 border-dashed border-sanctos-fuchsia/50 rounded-xl flex items-center justify-center bg-sanctos-fuchsia/5">
                   <Database className="w-10 h-10 text-sanctos-fuchsia" />
                 </div>
                 <div className="absolute -bottom-2 -right-2 bg-black border border-white/20 px-2 py-1 text-[10px] rounded font-mono">ENCRYPTED</div>
               </div>
            </div>
          </section>

          {/* 4. Relay & Mix */}
          <section className="grid md:grid-cols-2 gap-12 items-center md:flex-row-reverse">
            <div className="md:order-2">
              <div className="flex items-center gap-3 mb-4">
                 <div className="p-2 bg-sanctos-lilac/10 rounded-lg">
                   <Share2 className="w-6 h-6 text-sanctos-lilac" />
                 </div>
                 <h2 className="text-3xl font-bold">Relay & Mix Coordination</h2>
              </div>
              <div className="flex gap-2 mb-6">
                <span className="px-2 py-1 text-[10px] font-bold bg-white/10 text-muted-foreground rounded uppercase">Relays: Phase 3</span>
                <span className="px-2 py-1 text-[10px] font-bold bg-white/10 text-muted-foreground rounded uppercase">Mixnet: Phase 4</span>
              </div>
              <p className="text-muted-foreground mb-6">
                Nodes will eventually relay encrypted packets, coordinate timing obfuscation, and perform multi-hop routing.
              </p>
            </div>
            <div className="md:order-1 bg-white/5 border border-white/10 rounded-2xl p-8 flex items-center justify-center h-[300px] relative overflow-hidden">
               <div className="absolute inset-0 bg-sanctos-lilac/5 blur-[80px]" />
               <div className="relative z-10 w-full max-w-xs">
                  <div className="flex justify-between mb-8">
                    <div className="w-3 h-3 rounded-full bg-white/50" />
                    <div className="w-3 h-3 rounded-full bg-white/50" />
                    <div className="w-3 h-3 rounded-full bg-white/50" />
                  </div>
                  <div className="h-px bg-gradient-to-r from-transparent via-sanctos-lilac to-transparent w-full relative">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-sanctos-lilac rounded-full shadow-[0_0_10px_currentColor]" />
                  </div>
               </div>
            </div>
          </section>

          {/* 5. Points */}
          <section className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                 <div className="p-2 bg-yellow-500/10 rounded-lg">
                   <Award className="w-6 h-6 text-yellow-500" />
                 </div>
                 <h2 className="text-3xl font-bold">Points & Incentives</h2>
              </div>
              <div className="inline-block px-2 py-1 mb-6 text-[10px] font-bold bg-white/10 rounded text-muted-foreground uppercase">Starts in Phase 2</div>
              <p className="text-muted-foreground mb-6">
                Early Light Node users earn points for uptime, caching contributions, relaying, and storing encrypted media.
              </p>
              <div className="p-4 bg-yellow-500/5 border border-yellow-500/20 rounded-xl">
                <div className="text-sm font-bold text-yellow-500 mb-1">Phase 4 Evolution</div>
                <div className="text-xs text-yellow-500/70">Points → Credits → Token rewards.</div>
              </div>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 flex items-center justify-center h-[300px] relative overflow-hidden">
               <div className="absolute inset-0 bg-yellow-500/5 blur-[80px]" />
               <div className="text-6xl font-display font-bold text-yellow-500 drop-shadow-[0_0_30px_rgba(234,179,8,0.4)]">
                 +100
               </div>
            </div>
          </section>
        </div>

      </div>
      <Footer />
    </div>
  );
}

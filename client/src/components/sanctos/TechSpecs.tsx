import { motion } from "framer-motion";
import { Lock, Network, Smartphone, Database, ArrowRight, RefreshCw } from "lucide-react";

export function PrivacyArchitecture() {
  return (
    <section id="privacy" className="py-32 bg-[#050508] border-y border-white/5">
      <div className="container mx-auto px-6">
        <div className="mb-20">
           <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">Engineered for Absolute Privacy</h2>
           <p className="text-muted-foreground">Zero-knowledge architecture from the ground up.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
           {/* Diagram Area */}
           <div className="relative rounded-3xl bg-white/[0.02] border border-white/10 p-8 md:p-12 flex items-center justify-center min-h-[400px]">
             {/* Abstract Schematic */}
             <div className="relative w-full max-w-md aspect-square">
                {/* Center Hub */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full border-2 border-primary/30 flex items-center justify-center bg-primary/5 z-10">
                   <Lock className="w-12 h-12 text-primary" />
                </div>
                
                {/* Orbiting Nodes */}
                {[0, 1, 2, 3].map((i) => (
                  <motion.div
                    key={i}
                    className="absolute top-1/2 left-1/2 w-4 h-4 bg-sanctos-blue rounded-full shadow-[0_0_10px_#5fceff]"
                    style={{ x: '-50%', y: '-50%' }}
                    animate={{ rotate: 360 }}
                    transition={{ duration: 10 + i * 5, repeat: Infinity, ease: "linear" }}
                  >
                    <div className="absolute top-0 left-0 w-full h-full" style={{ transform: `translate(${100 + i * 20}px)` }} />
                  </motion.div>
                ))}
                
                {/* Connecting Lines */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20">
                   <circle cx="50%" cy="50%" r="100" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
                   <circle cx="50%" cy="50%" r="160" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
                </svg>
             </div>
             
             <div className="absolute bottom-8 left-8 text-xs font-mono text-primary/70">
               ARCHITECTURE_V1.0 <br/> NO_METADATA_FOUND
             </div>
           </div>

           {/* Spec List */}
           <div className="space-y-8">
             {[
               { label: "Device Keys", val: "Local Generation Only" },
               { label: "Identity", val: "Wallet Key (Ed25519)" },
               { label: "Encryption", val: "XSalsa20 Poly1305" },
               { label: "Key Exchange", val: "ECDH Shared Secret" },
               { label: "Storage", val: "PDA (Program Derived Address)" },
               { label: "Relay", val: "Decentralized Gossip" },
             ].map((item, i) => (
               <div key={i} className="flex items-center justify-between border-b border-white/10 pb-4">
                 <span className="text-muted-foreground font-mono">{item.label}</span>
                 <span className="text-white font-bold font-display">{item.val}</span>
               </div>
             ))}
           </div>
        </div>
      </div>
    </section>
  );
}

export function EncryptedMessaging() {
  return (
    <section className="py-32 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
           <div>
             <h2 className="text-4xl md:text-6xl font-display font-bold mb-8">Silent Communication</h2>
             <ul className="space-y-6 mb-10">
               {["No phone numbers", "No email required", "No central server", "No metadata stored"].map((item, i) => (
                 <li key={i} className="flex items-center gap-4 text-xl text-muted-foreground">
                   <div className="w-2 h-2 bg-primary rounded-full" />
                   {item}
                 </li>
               ))}
             </ul>
             <div className="p-6 rounded-2xl bg-primary/5 border border-primary/20 inline-block">
               <div className="flex items-center gap-3 text-primary mb-2">
                 <Lock className="w-5 h-5" />
                 <span className="font-bold">End-to-End Encrypted</span>
               </div>
               <p className="text-sm text-primary/80">Messages are encrypted on your device before they ever touch the network.</p>
             </div>
           </div>

           {/* Chat UI Mockup */}
           <div className="relative">
              <div className="absolute -inset-10 bg-primary/10 blur-[80px] rounded-full" />
              <div className="relative bg-[#0a0a0f] border border-white/10 rounded-[32px] p-6 shadow-2xl max-w-sm mx-auto lg:ml-auto rotate-[-2deg] hover:rotate-0 transition-transform duration-500">
                 {/* Header */}
                 <div className="flex items-center justify-between mb-6 border-b border-white/5 pb-4">
                    <div className="flex items-center gap-3">
                       <div className="w-10 h-10 rounded-full bg-gradient-to-br from-sanctos-violet to-sanctos-blue" />
                       <div>
                         <div className="font-bold text-sm">0x72...9A2</div>
                         <div className="text-xs text-green-400 flex items-center gap-1">
                           <div className="w-1.5 h-1.5 bg-green-400 rounded-full" /> Online
                         </div>
                       </div>
                    </div>
                 </div>
                 
                 {/* Messages */}
                 <div className="space-y-4 mb-6">
                   <div className="bg-white/5 p-3 rounded-2xl rounded-tl-none text-sm text-gray-300 max-w-[80%]">
                     Hey, did you get the seed phrase?
                   </div>
                   <div className="bg-primary p-3 rounded-2xl rounded-tr-none text-sm text-white max-w-[80%] ml-auto">
                     <div className="flex items-center gap-2 mb-1 text-xs opacity-70">
                        <Lock className="w-3 h-3" /> Encrypted Message
                     </div>
                     <div className="blur-[2px]">Wait, let me send it via secure note.</div>
                   </div>
                   <div className="bg-white/5 p-3 rounded-2xl rounded-tl-none text-sm text-gray-300 max-w-[80%]">
                     Got it. Node confirms receipt.
                   </div>
                 </div>

                 {/* Input */}
                 <div className="h-12 bg-white/5 rounded-full border border-white/10 flex items-center px-4 gap-2">
                    <div className="w-full text-xs text-muted-foreground">Type a message...</div>
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center shrink-0">
                       <ArrowRight className="w-4 h-4 text-white" />
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
}

export function GhostSend() {
  return (
    <section className="py-32 bg-black relative">
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-sanctos-blue/20 via-transparent to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
           <div className="inline-flex items-center gap-2 text-sanctos-blue mb-4 border border-sanctos-blue/30 px-4 py-1 rounded-full bg-sanctos-blue/5">
             <RefreshCw className="w-4 h-4 animate-spin-slow" />
             <span className="text-sm font-bold tracking-wider uppercase">Ghost Send Protocol</span>
           </div>
           <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">Break the Link</h2>
           <p className="text-xl text-muted-foreground">
             SanctOS mixes your transactions with others in a decentralized pool, making on-chain tracing mathematically impossible without custodial risk.
           </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
           {[
             { step: "01", title: "Input Masking", desc: "Users submit masked inputs into the pool." },
             { step: "02", title: "Zero-Knowledge Mix", desc: "SanctOS node builds the combined transaction." },
             { step: "03", title: "Trace Destruction", desc: "Metadata self-destructs. Links are broken." },
           ].map((card, i) => (
             <div key={i} className="bg-[#0f0f15] border border-white/10 p-8 rounded-xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 text-6xl font-display font-bold text-white/5 group-hover:text-sanctos-blue/10 transition-colors">
                  {card.step}
                </div>
                <h3 className="text-xl font-bold mb-2">{card.title}</h3>
                <p className="text-muted-foreground text-sm">{card.desc}</p>
                <div className="mt-6 h-1 w-12 bg-sanctos-blue/30 group-hover:w-full transition-all duration-500" />
             </div>
           ))}
        </div>
      </div>
    </section>
  );
}

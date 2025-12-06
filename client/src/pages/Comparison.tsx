import { Navbar } from "@/components/sanctos/Hero";
import { Footer } from "@/components/sanctos/Ecosystem";
import { Check, X, Minus, Shield, Lock, Server, Database, EyeOff, Globe, Users } from "lucide-react";

export default function Comparison() {
  return (
    <div className="min-h-screen bg-[#050508] text-foreground selection:bg-primary selection:text-white">
      <Navbar />
      
      <div className="container mx-auto px-6 pt-32 pb-20">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-3 py-1 mb-6 text-xs font-mono border border-sanctos-violet/50 text-sanctos-violet rounded">
            PRIVACY BENCHMARK
          </div>
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
            SanctOS vs The World
          </h1>
          <p className="text-xl text-muted-foreground">
            A factual, technical comparison of privacy, architecture, and security.
          </p>
        </div>

        {/* High-Level Comparison Table */}
        <div className="overflow-x-auto mb-20">
          <table className="w-full min-w-[800px] border-collapse text-left">
            <thead>
              <tr className="border-b border-white/10">
                <th className="py-4 px-6 font-display font-bold text-white">Feature</th>
                <th className="py-4 px-6 font-display font-bold text-primary bg-primary/5 border-t border-x border-primary/20 rounded-t-xl">SanctOS</th>
                <th className="py-4 px-6 font-display font-bold text-muted-foreground">Signal</th>
                <th className="py-4 px-6 font-display font-bold text-muted-foreground">Session</th>
                <th className="py-4 px-6 font-display font-bold text-muted-foreground">Telegram</th>
                <th className="py-4 px-6 font-display font-bold text-muted-foreground">WhatsApp</th>
              </tr>
            </thead>
            <tbody>
              {[
                { feat: "Identity", sanctos: "Wallet + Device Keys", signal: "Phone Number", session: "Session ID", telegram: "Phone Number", whatsapp: "Phone Number" },
                { feat: "Server Dependence", sanctos: "None (On-Chain)", signal: "Full Server Infra", session: "Service Nodes", telegram: "Centralized", whatsapp: "Centralized (Meta)" },
                { feat: "Message Storage", sanctos: "On-Chain Encrypted", signal: "Signal Servers", session: "Swarm Nodes", telegram: "Cloud Servers", whatsapp: "Meta Servers" },
                { feat: "Encryption", sanctos: "XSalsa20 (NaCl)", signal: "Signal Protocol", session: "Modified Signal", telegram: "Optional/Partial", whatsapp: "Signal Protocol" },
                { feat: "Metadata Exposure", sanctos: "Lowest", signal: "Medium", session: "Medium", telegram: "High", whatsapp: "High" },
                { feat: "Multi-Device", sanctos: "Stateless, Key-Based", signal: "Limited", session: "Complex", telegram: "Cloud-Sync", whatsapp: "Cloud-Sync" },
                { feat: "Censorship Resistance", sanctos: "Highest", signal: "Low", session: "Medium", telegram: "Low", whatsapp: "Low" },
                { feat: "Open Source", sanctos: "Yes", signal: "Yes", session: "Yes", telegram: "Partial", whatsapp: "No" },
                { feat: "On-Chain Features", sanctos: "Yes", signal: "No", session: "No", telegram: "No", whatsapp: "No" },
                { feat: "Phone Required", sanctos: "No", signal: "Yes", session: "No", telegram: "Yes", whatsapp: "Yes" },
              ].map((row, i) => (
                <tr key={i} className="border-b border-white/5 hover:bg-white/[0.02]">
                  <td className="py-4 px-6 font-medium text-white">{row.feat}</td>
                  <td className="py-4 px-6 text-primary font-bold bg-primary/5 border-x border-primary/20">{row.sanctos}</td>
                  <td className="py-4 px-6 text-muted-foreground">{row.signal}</td>
                  <td className="py-4 px-6 text-muted-foreground">{row.session}</td>
                  <td className="py-4 px-6 text-muted-foreground">{row.telegram}</td>
                  <td className="py-4 px-6 text-muted-foreground">{row.whatsapp}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Category Breakdown */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
           {/* 1. Identity */}
           <div className="bg-white/5 border border-white/10 p-8 rounded-2xl">
             <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
               <Users className="w-6 h-6 text-primary" />
             </div>
             <h3 className="text-xl font-bold mb-4">1. Identity & Account Setup</h3>
             <ul className="space-y-3 text-sm text-muted-foreground">
               <li className="text-white font-medium"><span className="text-primary">SanctOS:</span> Wallet-based, no phone, no email, device-level keys.</li>
               <li><span className="text-white">Signal:</span> Phone number required, tied to real identity.</li>
               <li><span className="text-white">Session:</span> Anonymous Session ID.</li>
               <li><span className="text-white">Telegram/WhatsApp:</span> Phone number required.</li>
             </ul>
           </div>

           {/* 2. Transport */}
           <div className="bg-white/5 border border-white/10 p-8 rounded-2xl">
             <div className="w-12 h-12 bg-sanctos-blue/10 rounded-lg flex items-center justify-center mb-6">
               <Globe className="w-6 h-6 text-sanctos-blue" />
             </div>
             <h3 className="text-xl font-bold mb-4">2. Message Transport</h3>
             <ul className="space-y-3 text-sm text-muted-foreground">
               <li className="text-white font-medium"><span className="text-sanctos-blue">SanctOS:</span> Blockchain-based (Solana). No servers, no routing hops.</li>
               <li><span className="text-white">Signal:</span> Centralized Signal servers.</li>
               <li><span className="text-white">Session:</span> Mixnet + service nodes.</li>
               <li><span className="text-white">Telegram/WhatsApp:</span> Fully centralized cloud servers.</li>
             </ul>
           </div>

           {/* 3. Encryption */}
           <div className="bg-white/5 border border-white/10 p-8 rounded-2xl">
             <div className="w-12 h-12 bg-sanctos-lilac/10 rounded-lg flex items-center justify-center mb-6">
               <Lock className="w-6 h-6 text-sanctos-lilac" />
             </div>
             <h3 className="text-xl font-bold mb-4">3. Encryption Model</h3>
             <ul className="space-y-3 text-sm text-muted-foreground">
               <li className="text-white font-medium"><span className="text-sanctos-lilac">SanctOS:</span> XSalsa20-Poly1305 + ephemeral keys, minimal and auditable.</li>
               <li><span className="text-white">Signal:</span> Robust Double Ratchet protocol.</li>
               <li><span className="text-white">Telegram:</span> Default chats NOT E2EE.</li>
               <li><span className="text-white">WhatsApp:</span> Uses Signal protocol.</li>
             </ul>
           </div>

           {/* 4. Metadata */}
           <div className="bg-white/5 border border-white/10 p-8 rounded-2xl">
             <div className="w-12 h-12 bg-sanctos-fuchsia/10 rounded-lg flex items-center justify-center mb-6">
               <EyeOff className="w-6 h-6 text-sanctos-fuchsia" />
             </div>
             <h3 className="text-xl font-bold mb-4">4. Metadata Protection</h3>
             <ul className="space-y-3 text-sm text-muted-foreground">
               <li className="text-white font-medium"><span className="text-sanctos-fuchsia">SanctOS:</span> No IP logs, no routing metadata, no servers, no timestamps stored.</li>
               <li><span className="text-white">Signal:</span> IP/timing metadata visible to servers.</li>
               <li><span className="text-white">Session:</span> Mixnets reduce metadata but storage nodes see pull patterns.</li>
               <li><span className="text-white">Others:</span> High metadata exposure.</li>
             </ul>
           </div>

           {/* 5. Censorship */}
           <div className="bg-white/5 border border-white/10 p-8 rounded-2xl">
             <div className="w-12 h-12 bg-red-500/10 rounded-lg flex items-center justify-center mb-6">
               <Shield className="w-6 h-6 text-red-500" />
             </div>
             <h3 className="text-xl font-bold mb-4">5. Censorship Resistance</h3>
             <ul className="space-y-3 text-sm text-muted-foreground">
               <li className="text-white font-medium"><span className="text-red-500">SanctOS:</span> Cannot be censored; messages live on-chain permanently.</li>
               <li><span className="text-white">All Others:</span> Can be blocked at the server or network level (DNS/IP blocking).</li>
             </ul>
           </div>

           {/* 6. Web3 */}
           <div className="bg-white/5 border border-white/10 p-8 rounded-2xl">
             <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center mb-6">
               <Database className="w-6 h-6 text-green-500" />
             </div>
             <h3 className="text-xl font-bold mb-4">6. Web3 Integration</h3>
             <ul className="space-y-3 text-sm text-muted-foreground">
               <li className="text-white font-medium"><span className="text-green-500">SanctOS:</span> Built for Web3, private DeFi mode, wallet-native messaging.</li>
               <li><span className="text-white">All Others:</span> No on-chain features, no wallet identity, no private DeFi.</li>
             </ul>
           </div>
        </div>

        {/* Summary */}
        <div className="bg-gradient-to-br from-white/5 to-transparent border border-white/10 rounded-3xl p-12 text-center">
          <h2 className="text-3xl font-display font-bold mb-6">The Verdict</h2>
          <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8 text-left">
             <div className="p-6 bg-black/40 rounded-xl">
               <div className="text-primary font-bold mb-2">SanctOS</div>
               <p className="text-sm text-muted-foreground">Eliminates servers entirely. The only fully censorship-resistant, wallet-native messenger with Private DeFi.</p>
             </div>
             <div className="p-6 bg-black/40 rounded-xl">
               <div className="text-white font-bold mb-2">Signal / Session</div>
               <p className="text-sm text-muted-foreground">Signal protects content well. Session decentralizes servers. Both still rely on dedicated infrastructure.</p>
             </div>
             <div className="p-6 bg-black/40 rounded-xl">
               <div className="text-white font-bold mb-2">Telegram / WhatsApp</div>
               <p className="text-sm text-muted-foreground">Prioritize convenience over privacy. High metadata exposure and centralized control.</p>
             </div>
          </div>
        </div>

      </div>
      <Footer />
    </div>
  );
}

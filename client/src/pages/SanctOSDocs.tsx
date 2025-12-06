import { Navbar } from "@/components/sanctos/Hero";
import { Footer } from "@/components/sanctos/Ecosystem";
import { Terminal, Shield, Key, Database, Lock, Zap, Users, Wallet, Server, AlertTriangle, Layers } from "lucide-react";

export default function SanctOSDocs() {
  return (
    <div className="min-h-screen bg-[#050508] text-foreground selection:bg-primary selection:text-white">
      <Navbar />
      
      <div className="container mx-auto px-6 pt-32 pb-20">
        <div className="grid lg:grid-cols-[250px_1fr] gap-12">
          {/* Sidebar */}
          <div className="hidden lg:block sticky top-32 h-[calc(100vh-8rem)] overflow-y-auto pr-4">
             <div className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-6">Documentation</div>
             <ul className="space-y-4 text-sm border-l border-white/10 pl-4">
                <li><a href="#overview" className="text-white font-medium hover:text-primary block">Overview</a></li>
                <li><a href="#identity" className="text-muted-foreground hover:text-primary block">Identity Architecture</a></li>
                <li><a href="#device-keys" className="text-muted-foreground hover:text-primary block">Device Keys</a></li>
                <li><a href="#encryption" className="text-muted-foreground hover:text-primary block">Encryption Model</a></li>
                <li><a href="#pda" className="text-muted-foreground hover:text-primary block">PDA Messaging</a></li>
                <li><a href="#kill-switch" className="text-muted-foreground hover:text-primary block">Kill-Switch</a></li>
                <li><a href="#session-wallet" className="text-muted-foreground hover:text-primary block">Session Wallet</a></li>
                <li><a href="#group-chats" className="text-muted-foreground hover:text-primary block">Group Chats</a></li>
                <li><a href="#defi" className="text-muted-foreground hover:text-primary block">Private DeFi</a></li>
                <li><a href="#nodes" className="text-muted-foreground hover:text-primary block">Node Network</a></li>
                <li><a href="#security" className="text-muted-foreground hover:text-primary block">Security Summary</a></li>
             </ul>
          </div>
          
          {/* Content */}
          <div className="max-w-3xl">
             <div className="mb-12">
               <div className="inline-flex items-center gap-2 text-primary bg-primary/10 px-3 py-1 rounded-full text-xs font-bold mb-6">
                 <Terminal className="w-3 h-3" /> Developer Documentation
               </div>
               <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">SanctOS Architecture</h1>
               <p className="text-xl text-muted-foreground leading-relaxed">
                 SanctOS is a privacy-first operating layer built on Solana: a combination of encrypted messaging, a private wallet, and a decentralized node network that eliminates metadata, central servers, and surveillance vectors.
               </p>
             </div>

             {/* 1. Overview */}
             <section id="overview" className="mb-16 border-b border-white/5 pb-12">
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <Shield className="w-5 h-5 text-primary" /> SanctOS Overview
                </h2>
                <div className="prose prose-invert max-w-none text-muted-foreground">
                  <p>
                    It’s designed to function as:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mb-4">
                    <li>A secure messenger</li>
                    <li>A private Solana wallet & relay system</li>
                    <li>A metadata-hiding node network</li>
                  </ul>
                  <p className="text-white font-medium">
                    Everything encrypted. Everything local. Everything under your control.
                  </p>
                </div>
             </section>

             {/* 2. Identity Architecture */}
             <section id="identity" className="mb-16 border-b border-white/5 pb-12">
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <Wallet className="w-5 h-5 text-primary" /> Identity Architecture
                </h2>
                <div className="bg-white/5 border border-white/10 p-6 rounded-xl mb-6">
                   <h3 className="text-lg font-bold text-white mb-2">Wallet = Identity</h3>
                   <p className="text-sm text-muted-foreground mb-4">Your Solana wallet is your SanctOS identity.</p>
                   <ul className="space-y-2 text-sm text-muted-foreground">
                     <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-primary rounded-full"/> Public key = username</li>
                     <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-primary rounded-full"/> Used to sign permissions</li>
                     <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-primary rounded-full"/> Used to authenticate sessions</li>
                   </ul>
                </div>
                <div className="p-4 bg-primary/5 border border-primary/20 rounded-lg">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <div>
                      <span className="text-white font-bold block text-sm mb-1">Wallet ≠ Encryption Key</span>
                      <p className="text-sm text-muted-foreground">Private messaging is not encrypted using your wallet. This is a major safety upgrade over typical blockchain messaging.</p>
                    </div>
                  </div>
                </div>
             </section>

             {/* 3. Device Key Architecture */}
             <section id="device-keys" className="mb-16 border-b border-white/5 pb-12">
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <Key className="w-5 h-5 text-primary" /> Device Key Architecture
                </h2>
                <p className="text-muted-foreground mb-6">
                  Every device generates its own dedicated Ed25519 encryption keypair, separate from your wallet.
                </p>
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <div className="bg-[#0a0a0f] border border-white/10 p-4 rounded-lg">
                    <h4 className="text-white font-bold text-sm mb-2">Storage Model</h4>
                    <ul className="text-xs text-muted-foreground space-y-1">
                      <li>• Stored locally</li>
                      <li>• Never uploaded</li>
                      <li>• Never in PDA storage</li>
                      <li>• Never transmitted in plaintext</li>
                    </ul>
                  </div>
                  <div className="bg-[#0a0a0f] border border-white/10 p-4 rounded-lg">
                    <h4 className="text-white font-bold text-sm mb-2">Advantages</h4>
                    <ul className="text-xs text-muted-foreground space-y-1">
                      <li>• Wallet compromise ≠ leak</li>
                      <li>• Full kill-switch wipe possible</li>
                      <li>• Per-device trust domains</li>
                    </ul>
                  </div>
                </div>
             </section>

             {/* 4. Encryption Model */}
             <section id="encryption" className="mb-16 border-b border-white/5 pb-12">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <Lock className="w-5 h-5 text-primary" /> Encryption Model (ECDH + XSalsa20)
                </h2>
                
                <div className="space-y-4 relative">
                   {/* Line connector */}
                   <div className="absolute left-[19px] top-4 bottom-4 w-0.5 bg-white/10" />
                   
                   {[
                     { title: "Key Exchange", desc: "Device A (Private Key) + Device B (Public Key) compute an identical ECDH shared secret." },
                     { title: "Encryption", desc: "SanctOS uses XSalsa20-Poly1305 to encrypt outbound messages." },
                     { title: "Decryption", desc: "Only the receiving device can decrypt. Protocol, RPCs, and Nodes cannot see plaintext." },
                     { title: "Storage", desc: "Encrypted payload is stored on-chain in PDAs." }
                   ].map((step, i) => (
                     <div key={i} className="relative flex gap-4 bg-[#0a0a0f] p-4 rounded-xl border border-white/5 z-10">
                        <div className="w-10 h-10 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center text-primary font-mono font-bold text-sm shrink-0">
                          0{i+1}
                        </div>
                        <div>
                           <h4 className="font-bold text-white mb-1">{step.title}</h4>
                           <p className="text-sm text-muted-foreground">{step.desc}</p>
                        </div>
                     </div>
                   ))}
                </div>
             </section>

             {/* 5. PDA Messaging Layer */}
             <section id="pda" className="mb-16 border-b border-white/5 pb-12">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <Database className="w-5 h-5 text-primary" /> PDA Messaging Layer
                </h2>
                <p className="text-muted-foreground mb-6">
                  Every conversation has a Program Derived Address: Immutable, Serverless, Append-only.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                   <div className="p-4 rounded-lg bg-white/5 border border-white/10 font-mono text-xs">
                      <div className="text-primary mb-2">// Stored Content</div>
                      <div className="text-white">
                        {`{`}
                        <div className="pl-4 text-muted-foreground">
                          encrypted_message,<br/>
                          sender_address,<br/>
                          sender_device_pubkey,<br/>
                          timestamp
                        </div>
                        {`}`}
                      </div>
                   </div>
                   <div className="flex flex-col justify-center gap-2">
                      <div className="text-sm font-bold text-white">SanctOS does NOT use:</div>
                      <ul className="space-y-2 text-sm text-red-400/80">
                        <li className="flex items-center gap-2"><AlertTriangle className="w-4 h-4"/> Servers</li>
                        <li className="flex items-center gap-2"><AlertTriangle className="w-4 h-4"/> Firebase</li>
                        <li className="flex items-center gap-2"><AlertTriangle className="w-4 h-4"/> Chat Backends</li>
                        <li className="flex items-center gap-2"><AlertTriangle className="w-4 h-4"/> Centralized Storage</li>
                      </ul>
                   </div>
                </div>
             </section>

             {/* 6. Kill-Switch */}
             <section id="kill-switch" className="mb-16 border-b border-white/5 pb-12">
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <Zap className="w-5 h-5 text-primary" /> Kill-Switch Identity System
                </h2>
                <p className="text-muted-foreground mb-4">
                  The SanctOS kill-switch permanently prevents decrypting old messages by deleting all local keys, cache, and preferences.
                </p>
                <div className="bg-red-500/5 border border-red-500/20 p-6 rounded-xl">
                  <h3 className="text-red-400 font-bold mb-2">True Burnability</h3>
                  <p className="text-sm text-red-400/70">Even you cannot recover old conversations. No backups. No plaintext stored anywhere. Privacy in the strongest sense.</p>
                </div>
             </section>

             {/* 7. Session Wallet */}
             <section id="session-wallet" className="mb-16 border-b border-white/5 pb-12">
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <Wallet className="w-5 h-5 text-primary" /> Session Wallet (Auto-Sign)
                </h2>
                <div className="grid md:grid-cols-2 gap-8 items-center">
                   <div className="text-muted-foreground text-sm space-y-4">
                      <p>To allow single-tap messaging without constant wallet pop-ups:</p>
                      <ul className="space-y-2 list-disc pl-4">
                        <li>SanctOS creates an ephemeral session wallet</li>
                        <li>User authorizes it once</li>
                        <li>It signs outgoing messaging transactions</li>
                        <li>Auto-top-ups ensure continuous posting</li>
                      </ul>
                   </div>
                   <div className="bg-green-500/5 border border-green-500/20 p-4 rounded-lg text-center">
                      <div className="text-green-400 font-bold mb-1">Result</div>
                      <div className="text-xs text-green-400/70">Real-time chat UX on-chain without compromising main wallet security.</div>
                   </div>
                </div>
             </section>

             {/* 8. Group Chats */}
             <section id="group-chats" className="mb-16 border-b border-white/5 pb-12">
                <div className="flex items-center gap-3 mb-4">
                   <h2 className="text-2xl font-bold flex items-center gap-2">
                     <Users className="w-5 h-5 text-primary" /> Group Chats
                   </h2>
                   <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-sanctos-blue/20 text-sanctos-blue border border-sanctos-blue/30">PHASE 2</span>
                </div>
                <p className="text-muted-foreground mb-4">
                   Encrypted group conversations use a shared group symmetric key distributed via encrypted device-to-device delivery.
                </p>
                <div className="grid md:grid-cols-3 gap-4 text-center">
                   {["Shared Symmetric Key", "Key Rotation on Join/Leave", "Zero Metadata"].map((item, i) => (
                     <div key={i} className="p-3 bg-white/5 rounded border border-white/10 text-sm font-medium text-white">{item}</div>
                   ))}
                </div>
             </section>

             {/* 9. Private DeFi */}
             <section id="defi" className="mb-16 border-b border-white/5 pb-12">
                <div className="flex items-center gap-3 mb-4">
                   <h2 className="text-2xl font-bold flex items-center gap-2">
                     <Shield className="w-5 h-5 text-primary" /> Private DeFi Mode
                   </h2>
                   <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-sanctos-blue/20 text-sanctos-blue border border-sanctos-blue/30">PHASE 2</span>
                </div>
                <p className="text-muted-foreground mb-6">
                  A major SanctOS upgrade allowing private interactions with any Solana dApp.
                </p>
                <div className="flex items-center justify-center gap-4 font-mono text-sm mb-8 bg-black p-4 rounded-lg border border-white/10">
                   <span className="text-white">Your Device</span>
                   <span className="text-primary">→</span>
                   <span className="text-sanctos-blue">SanctOS Node</span>
                   <span className="text-primary">→</span>
                   <span className="text-white">Randomized RPC</span>
                   <span className="text-primary">→</span>
                   <span className="text-white">Solana</span>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                   <div>
                      <h4 className="text-white font-bold mb-2 text-sm">Hides</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Your IP & Device Fingerprint</li>
                        <li>• Browser Metadata</li>
                        <li>• RPC Provider Identity</li>
                        <li>• Timing Signals</li>
                      </ul>
                   </div>
                   <div>
                      <h4 className="text-white font-bold mb-2 text-sm">Enables</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Private Swaps & DeFi Activity</li>
                        <li>• Private NFT Mints</li>
                        <li>• Private Token Management</li>
                      </ul>
                   </div>
                </div>
             </section>

             {/* 10. Node Network */}
             <section id="nodes" className="mb-16 border-b border-white/5 pb-12">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                   <Server className="w-5 h-5 text-primary" /> SanctOS Node Network
                </h2>
                <div className="grid md:grid-cols-3 gap-6">
                   <div className="bg-[#0a0a0f] border border-white/10 p-5 rounded-xl">
                      <h3 className="text-white font-bold mb-2">Lite Node</h3>
                      <p className="text-xs text-muted-foreground mb-2">Small binaries functioning as:</p>
                      <ul className="text-xs text-muted-foreground list-disc pl-4 space-y-1">
                         <li>Private RPC gateway</li>
                         <li>Metadata stripper</li>
                         <li>Timing obfuscator</li>
                         <li>RPC cloud randomizer</li>
                      </ul>
                   </div>
                   <div className="bg-[#0a0a0f] border border-white/10 p-5 rounded-xl">
                      <h3 className="text-white font-bold mb-2">Home Node</h3>
                      <div className="text-[10px] text-primary mb-2 uppercase font-bold">Planned</div>
                      <ul className="text-xs text-muted-foreground list-disc pl-4 space-y-1">
                         <li>Persistent uptime</li>
                         <li>Message caching</li>
                         <li>Encrypted media storage</li>
                         <li>Network relays</li>
                      </ul>
                   </div>
                   <div className="bg-[#0a0a0f] border border-white/10 p-5 rounded-xl">
                      <h3 className="text-white font-bold mb-2">Hardware Node</h3>
                      <div className="text-[10px] text-primary mb-2 uppercase font-bold">Planned</div>
                      <ul className="text-xs text-muted-foreground list-disc pl-4 space-y-1">
                         <li>SanctOS-branded or DIY Pi</li>
                         <li>Ultra-private always-on relay</li>
                         <li>Local storage blobs</li>
                         <li>Highest points multiplier</li>
                      </ul>
                   </div>
                </div>
                <div className="mt-6 text-center text-sm text-muted-foreground italic">
                   "Everything is a relay or cache — never a custodian."
                </div>
             </section>

             {/* 11. Points & Security */}
             <section id="security" className="mb-16">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                   <Layers className="w-5 h-5 text-primary" /> Security Summary
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                   <div className="bg-green-500/5 border border-green-500/20 p-6 rounded-xl">
                      <h3 className="text-green-400 font-bold mb-4">Protects Against</h3>
                      <ul className="space-y-2 text-sm text-green-400/80">
                         <li className="flex items-center gap-2"><Shield className="w-3 h-3"/> Chain analytics</li>
                         <li className="flex items-center gap-2"><Shield className="w-3 h-3"/> RPC-level surveillance</li>
                         <li className="flex items-center gap-2"><Shield className="w-3 h-3"/> Device metadata leaks</li>
                         <li className="flex items-center gap-2"><Shield className="w-3 h-3"/> IP-based identity inference</li>
                         <li className="flex items-center gap-2"><Shield className="w-3 h-3"/> Message interception</li>
                      </ul>
                   </div>
                   <div className="bg-red-500/5 border border-red-500/20 p-6 rounded-xl">
                      <h3 className="text-red-400 font-bold mb-4">Does Not Protect Against</h3>
                      <ul className="space-y-2 text-sm text-red-400/80">
                         <li className="flex items-center gap-2"><AlertTriangle className="w-3 h-3"/> Malware on the device</li>
                         <li className="flex items-center gap-2"><AlertTriangle className="w-3 h-3"/> User revealing keys</li>
                         <li className="flex items-center gap-2"><AlertTriangle className="w-3 h-3"/> Social engineering</li>
                      </ul>
                   </div>
                </div>
             </section>

             {/* Future */}
             <section id="future" className="p-8 rounded-2xl border border-dashed border-white/20 text-center">
                <h3 className="text-lg font-bold mb-4">Future Expansions</h3>
                <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
                   Realistic and safe evolutions without touching coin-mixing: Private DeFi Mode, Group chats, Encrypted media support, Multi-hop relays, and Decentralized encrypted storage.
                </p>
             </section>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}

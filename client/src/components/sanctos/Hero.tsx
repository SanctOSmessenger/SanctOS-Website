import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import heroBg from "@assets/generated_images/hero_background_for_sanctos.png";
import { Menu, X, Link, ArrowRight } from "lucide-react";
import { useState } from "react";
import { Link as WouterLink } from "wouter";

export function SanctOSOrb() {
  return (
    <div className="sanctos-orb-wrap">
      <div className="sanctos-orb"></div>
      <div className="sanctos-particles">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
}

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/[0.05] bg-background/80 backdrop-blur-md">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <WouterLink href="/" className="flex items-center gap-3 cursor-pointer">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-sanctos-violet to-sanctos-blue shadow-[0_0_10px_rgba(167,92,255,0.5)]" />
          <span className="text-xl font-display font-bold tracking-tight text-white">SanctOS</span>
        </WouterLink>

        <div className="hidden md:flex items-center gap-8">
          <WouterLink href="/" className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer">Home</WouterLink>
          <a href="/#features" className="text-sm text-muted-foreground hover:text-primary transition-colors">Features</a>
          <WouterLink href="/nodes" className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer">Nodes</WouterLink>
          <WouterLink href="/comparison" className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer">Comparison</WouterLink>
          <a href="/#roadmap" className="text-sm text-muted-foreground hover:text-primary transition-colors">Roadmap</a>
          <WouterLink href="/docs" className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer">Docs</WouterLink>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <Button variant="ghost" className="text-white hover:text-primary hover:bg-white/5 opacity-50 cursor-not-allowed" disabled>Download Node</Button>
          <Button className="bg-primary hover:bg-primary/90 text-white rounded-full px-6 shadow-[0_0_20px_rgba(167,92,255,0.3)]">
            Launch App
          </Button>
        </div>

        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white">
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 right-0 bg-background border-b border-white/10 p-6 flex flex-col gap-4">
          <WouterLink href="/" className="text-white py-2 cursor-pointer">Home</WouterLink>
          <a href="/#features" className="text-white py-2">Features</a>
          <WouterLink href="/nodes" className="text-white py-2 cursor-pointer">Nodes</WouterLink>
          <WouterLink href="/comparison" className="text-white py-2 cursor-pointer">Comparison</WouterLink>
          <a href="/#roadmap" className="text-white py-2">Roadmap</a>
          <WouterLink href="/docs" className="text-white py-2 cursor-pointer">Docs</WouterLink>
          <Button className="w-full bg-primary text-white rounded-full">Launch App</Button>
        </div>
      )}
    </nav>
  );
}

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBg} 
          alt="Background" 
          className="w-full h-full object-cover opacity-40" 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-background/50 to-background" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
        
        {/* Matrix Pattern */}
        <div className="absolute inset-0 opacity-[0.03]" 
          style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '30px 30px' }} 
        />
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center"
        >
          <div className="mb-8 scale-125 md:scale-150">
            <SanctOSOrb />
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold tracking-tight mb-6 leading-[1.1]">
            SanctOS <br/>
            <span className="text-gradient">The Privacy OS for Solana</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 leading-relaxed">
            Encrypted messaging. Private DeFi. Decentralized nodes. <br/>
            A sovereign communication layer for the next web.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Button size="lg" className="h-14 px-8 text-lg rounded-full bg-primary hover:bg-primary/90 text-white shadow-[0_0_30px_rgba(167,92,255,0.4)] transition-all hover:scale-105">
              Launch App
            </Button>
            <WouterLink href="/docs">
              <Button size="lg" variant="outline" className="h-14 px-8 text-lg rounded-full border-white/20 text-white hover:bg-white/5 backdrop-blur-sm transition-all cursor-pointer">
                Read Docs
              </Button>
            </WouterLink>
          </div>
        </motion.div>
      </div>
      
      {/* Floating Particles */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-primary rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -100],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: Math.random() * 5 + 5,
            repeat: Infinity,
            ease: "linear",
            delay: Math.random() * 5,
          }}
        />
      ))}
    </section>
  );
}

export function PhaseOneReady() {
  return (
    <section className="py-12 bg-primary/5 border-y border-primary/10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
           <div className="flex items-center gap-4">
             <div className="relative">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                <div className="absolute inset-0 w-3 h-3 bg-green-400 rounded-full animate-ping opacity-50" />
             </div>
             <span className="text-lg font-bold tracking-wide uppercase font-display text-green-400">Phase 1 Live Now</span>
           </div>
           
           <div className="flex flex-wrap justify-center gap-2 md:gap-8 text-sm font-medium">
              {["Encrypted Messaging", "Wallet Identity", "Kill-Switch", "Local Encryption"].map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-white/80">
                   <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                   {item}
                </div>
              ))}
           </div>

           <Button size="sm" variant="outline" className="rounded-full border-primary/30 hover:bg-primary/10 text-primary">
             Start Using <ArrowRight className="ml-2 w-4 h-4" />
           </Button>
        </div>
      </div>
    </section>
  );
}

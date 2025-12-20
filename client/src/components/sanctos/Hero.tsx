import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import heroBg from "@assets/generated_images/hero_background_for_sanctos.png";
import { Menu, X, ArrowRight, ChevronDown, Github, Twitter } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Link as WouterLink } from "wouter";

const APP_URL = "https://messenger.sanctos.app";
const GITHUB_URL = "https://github.com/SanctOSmessenger";
const TWITTER_URL = "https://x.com/AutisticIcarus";

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
  const [socialsOpen, setSocialsOpen] = useState(false);
  const socialsRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function onDocClick(e: MouseEvent) {
      if (!socialsRef.current) return;
      if (!socialsRef.current.contains(e.target as Node)) setSocialsOpen(false);
    }
    function onEsc(e: KeyboardEvent) {
      if (e.key === "Escape") setSocialsOpen(false);
    }
    document.addEventListener("mousedown", onDocClick);
    document.addEventListener("keydown", onEsc);
    return () => {
      document.removeEventListener("mousedown", onDocClick);
      document.removeEventListener("keydown", onEsc);
    };
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/[0.05] bg-background/80 backdrop-blur-md">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <WouterLink href="/" className="flex items-center gap-3 cursor-pointer">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-sanctos-violet to-sanctos-blue shadow-[0_0_10px_rgba(167,92,255,0.5)]" />
          <span className="text-xl font-display font-bold tracking-tight text-white">
            SanctOS
          </span>
        </WouterLink>

        <div className="hidden lg:flex items-center gap-6">

          <WouterLink
            href="/"
            className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer"
          >
            Home
          </WouterLink>

          <a
            href="/#features"
            className="text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            Features
          </a>

          <WouterLink
            href="/nodes"
            className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer"
          >
            Nodes
          </WouterLink>

          <WouterLink
            href="/comparison"
            className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer"
          >
            Comparison
          </WouterLink>

          <a
            href="/#roadmap"
            className="text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            Roadmap
          </a>

          <WouterLink
            href="/docs"
            className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer"
          >
            Docs
          </WouterLink>

          {/* Socials dropdown (desktop) */}
          <div ref={socialsRef} className="relative">
            <button
              type="button"
              onClick={() => setSocialsOpen((v) => !v)}
              className="text-sm text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-1"
              aria-haspopup="menu"
              aria-expanded={socialsOpen}
            >
              Socials
              <ChevronDown className="w-4 h-4 opacity-80" />
            </button>

            {socialsOpen && (
              <div
                className="absolute right-0 mt-3 w-44 rounded-xl border border-white/10 bg-background/95 backdrop-blur-md shadow-lg overflow-hidden"
                role="menu"
              >
                <a
                  href={GITHUB_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-2 text-sm text-white/80 hover:text-white hover:bg-white/5 transition-colors"
                  role="menuitem"
                  onClick={() => setSocialsOpen(false)}
                >
                  <Github className="w-4 h-4" />
                  GitHub
                </a>

                <a
                  href={TWITTER_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-2 text-sm text-white/80 hover:text-white hover:bg-white/5 transition-colors"
                  role="menuitem"
                  onClick={() => setSocialsOpen(false)}
                >
                  <Twitter className="w-4 h-4" />
                  Twitter
                </a>
              </div>
            )}
          </div>
        </div>

        <div className="hidden md:flex items-center gap-4">
        <Button
  variant="ghost"
  className="hidden xl:inline-flex text-white hover:text-primary hover:bg-white/5 opacity-50 cursor-not-allowed"
  disabled
>
  Download Node
</Button>


          {/* Launch App (external) */}
          <Button
            asChild
            className="bg-primary hover:bg-primary/90 text-white rounded-full px-6 shadow-[0_0_20px_rgba(167,92,255,0.3)]"
          >
            <a href={APP_URL} target="_blank" rel="noopener noreferrer">
              Launch App
            </a>
          </Button>
        </div>

        <button
  onClick={() => setIsOpen(!isOpen)}
  className="lg:hidden text-white"
>

          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 right-0 bg-background border-b border-white/10 p-6 flex flex-col gap-4">
          <WouterLink
            href="/"
            className="text-white py-2 cursor-pointer"
            onClick={() => setIsOpen(false)}
          >
            Home
          </WouterLink>

          <a href="/#features" className="text-white py-2" onClick={() => setIsOpen(false)}>
            Features
          </a>

          <WouterLink
            href="/nodes"
            className="text-white py-2 cursor-pointer"
            onClick={() => setIsOpen(false)}
          >
            Nodes
          </WouterLink>

          <WouterLink
            href="/comparison"
            className="text-white py-2 cursor-pointer"
            onClick={() => setIsOpen(false)}
          >
            Comparison
          </WouterLink>

          <a href="/#roadmap" className="text-white py-2" onClick={() => setIsOpen(false)}>
            Roadmap
          </a>

          <WouterLink
            href="/docs"
            className="text-white py-2 cursor-pointer"
            onClick={() => setIsOpen(false)}
          >
            Docs
          </WouterLink>

          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white py-2"
            onClick={() => setIsOpen(false)}
          >
            GitHub
          </a>

          <a
            href={TWITTER_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white py-2"
            onClick={() => setIsOpen(false)}
          >
            Twitter
          </a>

          {/* Launch App (external) */}
          <Button asChild className="w-full bg-primary text-white rounded-full">
            <a href={APP_URL} target="_blank" rel="noopener noreferrer">
              Launch App
            </a>
          </Button>
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
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "radial-gradient(#fff 1px, transparent 1px)",
            backgroundSize: "30px 30px",
          }}
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
            SanctOS <br />
            <span className="text-gradient">The Privacy OS for Solana</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 leading-relaxed">
            Encrypted messaging. Private DeFi. Decentralized nodes. <br />
            A sovereign communication layer for the next web.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            {/* Launch App (external) */}
            <Button
              asChild
              size="lg"
              className="h-14 px-8 text-lg rounded-full bg-primary hover:bg-primary/90 text-white shadow-[0_0_30px_rgba(167,92,255,0.4)] transition-all hover:scale-105"
            >
              <a href={APP_URL} target="_blank" rel="noopener noreferrer">
                Launch App
              </a>
            </Button>

            <WouterLink href="/docs">
              <Button
                size="lg"
                variant="outline"
                className="h-14 px-8 text-lg rounded-full border-white/20 text-white hover:bg-white/5 backdrop-blur-sm transition-all cursor-pointer"
              >
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
            <span className="text-lg font-bold tracking-wide uppercase font-display text-green-400">
              Phase 1 Live Now
            </span>
          </div>

          <div className="flex flex-wrap justify-center gap-2 md:gap-8 text-sm font-medium">
            {["Encrypted Messaging", "Wallet Identity", "Kill-Switch", "Local Encryption"].map(
              (item, i) => (
                <div key={i} className="flex items-center gap-2 text-white/80">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                  {item}
                </div>
              )
            )}
          </div>

          {/* Start Using (external) */}
          <Button
            asChild
            size="sm"
            variant="outline"
            className="rounded-full border-primary/30 hover:bg-primary/10 text-primary"
          >
            <a href={APP_URL} target="_blank" rel="noopener noreferrer">
              Start Using <ArrowRight className="ml-2 w-4 h-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}

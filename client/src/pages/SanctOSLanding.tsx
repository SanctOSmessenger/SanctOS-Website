import { Navbar, Hero, PhaseOneReady } from "@/components/sanctos/Hero";
import { Overview, FeaturesGrid, PrivateDeFi } from "@/components/sanctos/Features";
import { PrivacyArchitecture, EncryptedMessaging, GhostSend } from "@/components/sanctos/TechSpecs";
import { Nodes, GroupChatTeaser, Roadmap, Download, FAQ, Footer } from "@/components/sanctos/Ecosystem";

export default function SanctOSLanding() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-white">
      <Navbar />
      <Hero />
      <PhaseOneReady />
      <Overview />
      <FeaturesGrid />
      <GroupChatTeaser />
      <PrivacyArchitecture />
      <PrivateDeFi />
      <EncryptedMessaging />
      <Nodes />
      <GhostSend />
      <Roadmap />
      <Download />
      <FAQ />
      <Footer />
    </div>
  );
}

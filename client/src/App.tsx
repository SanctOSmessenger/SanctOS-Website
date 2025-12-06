import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import SanctOSLanding from "@/pages/SanctOSLanding";
import SanctOSDocs from "@/pages/SanctOSDocs";
import Comparison from "@/pages/Comparison";
import Nodes from "@/pages/Nodes";

function Router() {
  return (
    <Switch>
      <Route path="/" component={SanctOSLanding}/>
      <Route path="/docs" component={SanctOSDocs}/>
      <Route path="/comparison" component={Comparison}/>
      <Route path="/nodes" component={Nodes}/>
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;

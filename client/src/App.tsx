import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import CV from "@/pages/CV";
import NotFound from "@/pages/not-found";
import About from "@/pages/About";
import Publications from "@/pages/Publications";
import Projects from "@/pages/Projects";

function Router() {
  return (
    <Switch>
      <Route path="/" component={About} />
      <Route path="/publications" component={Publications} />
      <Route path="/projects" component={Projects} />
      <Route path="/cv" component={CV} />
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

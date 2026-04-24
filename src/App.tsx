
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Landing from "./pages/Landing";
import Infinita from "./pages/Infinita";
import Ilumina from "./pages/Ilumina";
import Index from "./pages/Index";
import ProjectView from "./pages/ProjectView";
import About from "./pages/About";
import Sketchbook from "./pages/Sketchbook";
import Substack from "./pages/Substack";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/infinita" element={<Infinita />} />
          <Route path="/ilumina" element={<Ilumina />} />
          <Route path="/all-projects" element={<Index />} />
          <Route path="/projects" element={<Navigate to="/all-projects" replace />} />
          <Route path="/projects/:slug" element={<ProjectView />} />
          <Route path="/about" element={<About />} />
          <Route path="/photodiary" element={<Sketchbook />} />
          <Route path="/sketchbook" element={<Sketchbook />} />
          <Route path="/substack" element={<Substack />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

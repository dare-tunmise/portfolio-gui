import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import { ProtectedRoute } from "./components/ProtectedRoute";
import Index from "./pages/Index";
import Writings from "./pages/Writings";
import Projects from "./pages/Projects";
import Book from "./pages/Book";
import About from "./pages/About";
import BlogPost from "./pages/BlogPost";
import ProjectPost from "./pages/ProjectPost";
import NotFound from "./pages/NotFound";
import Login from "./pages/dashboard/Login";
import Dashboard from "./pages/dashboard/Dashboard";
import BlogList from "./pages/dashboard/BlogList";
import BlogEditor from "./pages/dashboard/BlogEditor";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/writings" element={<Writings />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/book" element={<Book />} />
            <Route path="/about" element={<About />} />
            <Route path="/writing/:slug" element={<BlogPost />} />
            <Route path="/project/:slug" element={<ProjectPost />} />
            
            <Route path="/admin/login" element={<Login />} />
            <Route path="/admin/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>}>
              <Route index element={<BlogList />} />
              <Route path="new" element={<BlogEditor />} />
              <Route path="edit/:id" element={<BlogEditor />} />
            </Route>
            
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;

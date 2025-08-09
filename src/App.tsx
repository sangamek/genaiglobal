import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import Community from "./pages/Community";
import Events from "./pages/Events";
import Resources from "./pages/Resources";
import GetInvolved from "./pages/GetInvolved";
import Spotlight from "./pages/Spotlight";
import Login from "./pages/Login";
import Blog from "./pages/Blog";
import BlogPostDetail from "./pages/BlogPostDetail";
import DevelopmentProcess from "./pages/DevelopmentProcess";
import TechDetails from "./pages/TechDetails";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Placeholder from "./pages/Placeholder"; // Terms of Service placeholder

const App = () => {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/community" element={<Community />} />
          <Route path="/events" element={<Events />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/get-involved" element={<GetInvolved />} />
          <Route path="/spotlight" element={<Spotlight />} />
          <Route path="/login" element={<Login />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPostDetail />} />
          <Route path="/development-process" element={<DevelopmentProcess />} />
          <Route path="/tech-details" element={<TechDetails />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<Placeholder />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default App;

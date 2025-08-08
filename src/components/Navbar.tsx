
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <motion.nav className={cn("fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full", isScrolled ? "bg-background shadow-sm" : "bg-primary") } initial={{
      opacity: 1,
      y: 0
    }} animate={{
      opacity: 1,
      y: 0
    }}>
      <div className="w-full px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <img src="/lovable-uploads/eed53564-63d3-42ef-ba27-84f9b10a41b0.png" alt="Gen AI Global Logo" className={cn("h-8 w-auto", isScrolled ? "" : "brightness-0 invert-0") } />
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <NavigationMenu className={cn(isScrolled ? "" : "text-primary-foreground") }>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link to="/">
                    <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), isScrolled ? "text-foreground hover:text-foreground" : "text-white bg-transparent hover:bg-white/10")}>
                      Home
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link to="/about">
                    <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), isScrolled ? "text-foreground hover:text-foreground" : "text-white bg-transparent hover:bg-white/10")}>About Us</NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link to="/community">
                    <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), isScrolled ? "text-foreground hover:text-foreground" : "text-white bg-transparent hover:bg-white/10")}>Community</NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link to="/events">
                    <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), isScrolled ? "text-foreground hover:text-foreground" : "text-white bg-transparent hover:bg-white/10")}>Events</NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link to="/resources">
                    <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), isScrolled ? "text-foreground hover:text-foreground" : "text-white bg-transparent hover:bg-white/10")}>Resources</NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link to="/get-involved">
                    <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), isScrolled ? "text-foreground hover:text-foreground" : "text-white bg-transparent hover:bg-white/10")}>Get Involved</NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link to="/spotlight">
                    <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), isScrolled ? "text-foreground hover:text-foreground" : "text-white bg-transparent hover:bg-white/10")}>Spotlight</NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link to="/login">
                    <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), isScrolled ? "text-foreground hover:text-foreground" : "text-white bg-transparent hover:bg-white/10")}>Log In</NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className={cn("focus:outline-none", isScrolled ? "text-gray-700" : "text-white")}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div className={cn("md:hidden transition-all duration-300 overflow-hidden w-full", isMenuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0")}> 
        <div className={cn("px-3 pt-2 pb-3 space-y-1 shadow-sm overflow-y-auto max-h-80", isScrolled ? "bg-background" : "bg-primary")}> 
          {[
            { to: '/', label: 'Home' },
            { to: '/about', label: 'About Us' },
            { to: '/community', label: 'Community' },
            { to: '/events', label: 'Events' },
            { to: '/resources', label: 'Resources' },
            { to: '/get-involved', label: 'Get Involved' },
            { to: '/spotlight', label: 'Spotlight' },
            { to: '/login', label: 'Log In' },
          ].map((item) => (
            <Link key={item.to} to={item.to} className={cn("block px-3 py-1.5 rounded-md text-sm", isScrolled ? "text-foreground hover:bg-secondary" : "text-white hover:bg-white/10")} onClick={() => { setIsMenuOpen(false); window.scrollTo(0,0); }}>
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;

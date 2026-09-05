import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Shield } from "lucide-react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Services", href: "#services" },
  { name: "Solutions", href: "#solutions" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#portfolio" },
  { name: "Careers", href: "#careers" },
  { name: "Contact", href: "#contact" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollTo = (id) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      {/* 🌿 Top Header (Logo + CTA) */}
      <header
        className={`fixed w-full z-50 transition-all duration-500 ${
          scrolled
            ? "bg-ink/95 backdrop-blur-md shadow-lg"
            : "bg-ink/80 backdrop-blur-sm"
        }`}
      >
        <div className="container mx-auto px-6 md:px-10 flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div
            onClick={() => handleScrollTo("#home")}
            className="flex items-center gap-2 cursor-pointer"
          >
            <motion.div
              initial={{ rotate: 0 }}
              whileHover={{ rotate: 15 }}
              className="p-2 rounded-full bg-signal text-white shadow-md"
            >
              <Shield className="h-5 w-5" />
            </motion.div>
            <span className="text-xl md:text-2xl font-bold text-white tracking-wide">
              TRICORE TECHNOLOGY SOLUTIONS
            </span>
          </motion.div>

          {/* CTA Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            onClick={() => handleScrollTo("#contact")}
            className="bg-signal hover:bg-signalDark text-white 
                       px-4 py-1.5 md:px-5 md:py-2 
                       rounded-full md:rounded-md 
                       text-sm md:text-base 
                       font-semibold shadow-md transition-colors duration-300"
          >
            Get a Quote
          </motion.button>
        </div>

        {/* Desktop Navigation */}
        <div
          className={`hidden md:flex justify-center items-center space-x-10 py-3 transition-all duration-500 ${
            scrolled
              ? "bg-forestDark/70 backdrop-blur-md border-t border-white/10"
              : "bg-transparent"
          }`}
        >
          {navLinks.map((link) => (
            <motion.button
              key={link.name}
              onClick={() => handleScrollTo(link.href)}
              whileHover={{ scale: 1.08 }}
              className="text-white/75 hover:text-white font-medium transition-colors duration-200"
            >
              {link.name}
            </motion.button>
          ))}
        </div>
      </header>

      {/* 🔹 Mobile Bottom Navigation */}
      <motion.nav
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        exit={{ y: 100 }}
        transition={{ duration: 0.4 }}
        className="fixed bottom-0 left-0 right-0 z-40 bg-ink/95 backdrop-blur-md border-t border-white/10 md:hidden"
      >
        <div className="flex justify-around py-2">
          {navLinks.map((link) => (
            <motion.button
              key={link.name}
              onClick={() => handleScrollTo(link.href)}
              whileTap={{ scale: 0.9 }}
              className="text-white/75 hover:text-white font-medium text-sm transition-colors duration-200"
            >
              {link.name}
            </motion.button>
          ))}
        </div>
      </motion.nav>
    </>
  );
};

export default Header;

'use client';

import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Me' },
    { href: '/experience', label: 'Experience' },
    { 
      href: 'https://prateek-portfolio.notion.site/Product-Portfolio-1a4fba86851c803b9088db0ae03129de?pvs=4',
      label: 'My Work',
      isExternal: true 
    },
  ];

  return (
    <>
      {/* Dark background ribbon */}
      <div className="fixed top-0 left-0 right-0 h-24 bg-[#141311] z-40" />
      
      <nav className="fixed top-0 left-0 right-0 z-50 p-6">
        {/* Desktop Navigation */}
        <div className="max-w-screen-xl mx-auto hidden md:flex justify-center gap-6">
          {navLinks.map((link) => (
            link.isExternal ? (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`font-medium transition-colors text-white hover:text-[#CCFF00]`}
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className={`font-medium transition-colors ${
                  pathname === link.href ? 'text-[#CCFF00]' : 'text-white hover:text-[#CCFF00]'
                }`}
              >
                {link.label}
              </Link>
            )
          ))}
        </div>

        {/* Mobile Hamburger */}
        <button 
          className="fixed top-6 right-6 z-50 w-10 h-10 flex md:hidden flex-col justify-center items-center"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-1'}`}></span>
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-1'}`}></span>
        </button>

        {/* Mobile Menu Overlay */}
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: isMenuOpen ? 0 : "100%" }}
          transition={{ type: "tween", duration: 0.3 }}
          className="fixed inset-0 bg-[#141311] z-40 flex md:hidden flex-col items-center justify-center"
        >
          <div className="flex flex-col items-center gap-8 text-xl">
            {navLinks.map((link) => (
              link.isExternal ? (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium transition-colors text-white hover:text-[#CCFF00]"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`font-medium transition-colors ${
                    pathname === link.href ? 'text-[#CCFF00]' : 'text-white hover:text-[#CCFF00]'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              )
            ))}
          </div>
        </motion.div>
      </nav>
    </>
  );
} 
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX, FiPhone } from "react-icons/fi";
import ThemeToggle from "@/components/ThemeToggle";
import BrandLogo from "@/components/brand/BrandLogo";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Pricing", href: "/pricing" },
  { label: "Contact", href: "/contact" },
];

type NavbarProps = {
  onBooking: () => void;
};

export default function Navbar({ onBooking }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  const showSolid = scrolled || open || !isHome;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        showSolid ? "backdrop-blur-xl shadow-lg border-b" : "bg-transparent"
      }`}
      style={
        showSolid
          ? {
              backgroundColor: "var(--site-nav-solid)",
              borderColor: "var(--site-border)",
            }
          : undefined
      }
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[4.25rem] lg:h-[5.25rem]">
          <Link href="/" className="flex items-center gap-3.5 group">
            <div className="shrink-0 rounded-full overflow-hidden shadow-lg shadow-primary-600/20 ring-2 ring-white/20 group-hover:shadow-primary-600/40 transition-shadow">
              <BrandLogo size={52} />
            </div>
            <div>
              <span
                className={`font-display font-bold text-xl leading-tight block ${showSolid ? "text-secondary" : "text-white"}`}
              >
                The Laundry
              </span>
              <span
                className={`font-display font-bold text-xl leading-tight block -mt-0.5 ${
                  showSolid ? "text-primary-600" : "text-primary-300"
                }`}
              >
                Project
              </span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  pathname === href
                    ? showSolid
                      ? "text-primary-600 bg-primary-50"
                      : "text-white bg-white/15"
                    : showSolid
                      ? "text-secondary-700 hover:text-primary-600 hover:bg-primary-50/60"
                      : "text-gray-200 hover:text-white hover:bg-white/10"
                }`}
              >
                {label}
              </Link>
            ))}
          </nav>

          <div
            className="hidden lg:flex items-center gap-6 ml-6 pl-6 border-l shrink-0"
            style={{
              borderColor: showSolid ? "var(--site-border)" : "rgba(255, 255, 255, 0.15)",
            }}
          >
            <ThemeToggle className={showSolid ? "" : "theme-toggle--on-dark"} />
            <a
              href="tel:+919752217713"
              className={`flex items-center gap-2 text-sm font-medium whitespace-nowrap transition-colors ${
                showSolid ? "text-secondary-700 hover:text-primary-600" : "text-gray-200 hover:text-white"
              }`}
            >
              <FiPhone className="w-4 h-4 shrink-0" />
              +91 97522 17713
            </a>
            <button onClick={onBooking} className="btn-primary text-sm px-6 py-2.5 shrink-0">
              Book Pickup
            </button>
          </div>

          <button
            onClick={() => setOpen((v) => !v)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              showSolid ? "hover:opacity-80" : "text-white hover:bg-white/10"
            }`}
            style={showSolid ? { color: "var(--site-text)" } : undefined}
            aria-label="Toggle menu"
          >
            {open ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="lg:hidden overflow-hidden border-t shadow-xl"
            style={{
              backgroundColor: "var(--site-surface)",
              borderColor: "var(--site-border)",
            }}
          >
            <nav className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
              <div className="flex items-center justify-between px-4 pb-3 mb-1 border-b" style={{ borderColor: "var(--site-border)" }}>
                <span className="text-sm font-medium" style={{ color: "var(--site-text-muted)" }}>
                  Appearance
                </span>
                <ThemeToggle />
              </div>
              {navLinks.map(({ label, href }) => (
                <Link
                  key={href}
                  href={href}
                  className={`px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                    pathname === href
                      ? "text-primary-600 bg-primary-50"
                      : "text-secondary-700 hover:text-primary-600 hover:bg-gray-50"
                  }`}
                >
                  {label}
                </Link>
              ))}
              <div className="pt-4 border-t border-tlp-border flex flex-col gap-3 mt-2">
                <a
                  href="tel:+919752217713"
                  className="flex items-center gap-2 px-4 py-3 text-sm font-medium text-secondary-700"
                >
                  <FiPhone className="w-4 h-4 text-primary-600" />
                  +91 97522 17713
                </a>
                <button onClick={onBooking} className="btn-primary w-full justify-center">
                  Book Pickup
                </button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

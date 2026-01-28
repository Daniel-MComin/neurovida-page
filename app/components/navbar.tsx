"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const headerClasses =
    "fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full py-5 " +
    (scrolled
      ? "bg-white/95"
      : "bg-white/100");

  const navItems = [
    { label: "Home", href: "/", primary: true },
    { label: "Sobre Mim", href: "/sobre" },
    { label: "Serviços", href: "/servicos" },
    { label: "Metodologia", href: "/metodologias" },
    { label: "Galeria", href: "/galeria" },
  ];

  return (
    <header className={headerClasses}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2 group"
          data-discover="true"
        >
          <div className="bg-pastel-lavender p-2 rounded-full group-hover:scale-110 transition-transform shadow-sm border border-vivid-lavender/20">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-brain w-6 h-6 text-vivid-lavender"
              aria-hidden="true"
            >
              <path d="M12 18V5"></path>
              <path d="M15 13a4.17 4.17 0 0 1-3-4 4.17 4.17 0 0 1-3 4"></path>
              <path d="M17.598 6.5A3 3 0 1 0 12 5a3 3 0 1 0-5.598 1.5"></path>
              <path d="M17.997 5.125a4 4 0 0 1 2.526 5.77"></path>
              <path d="M18 18a4 4 0 0 0 2-7.464"></path>
              <path d="M19.967 17.483A4 4 0 1 1 12 18a4 4 0 1 1-7.967-.517"></path>
              <path d="M6 18a4 4 0 0 1-2-7.464"></path>
              <path d="M6.003 5.125a4 4 0 0 0-2.526 5.77"></path>
            </svg>
          </div>
          <span className="font-heading font-bold text-xl text-charcoal tracking-tight group-hover:text-vivid-lavender transition-colors">
            Neuro
            <span className="font-bold text-vivid-peach group-hover:text-vivid-peach">
              Vida
            </span>
          </span>
        </Link>

       <nav className="hidden xl:flex items-center gap-6">
          {navItems.map(({ label, href }) => {
            const active = pathname === href || (href !== "/" && pathname.startsWith(href));
            return (
              <Link
                key={href}
                href={href}
                data-discover="true"
                aria-current={active ? "page" : undefined}
                className={
                  active
                    ? "text-sm transition-all hover:scale-105 text-white font-bold bg-vivid-lavender px-4 py-1.5 rounded-full shadow-md"
                    : "text-sm font-medium transition-all hover:scale-105 text-charcoal hover:text-vivid-lavender"
                }
              >
                {label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-4">
          <div className="hidden md:block">
            <Link
              href="/contato"
              data-discover="true"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-10 px-4 py-2 bg-vivid-peach text-white hover:bg-vivid-peach/90 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl border-2 border-white/20"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-calendar w-4 h-4 mr-2"
                aria-hidden="true"
              >
                <path d="M8 2v4"></path>
                <path d="M16 2v4"></path>
                <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                <path d="M3 10h18"></path>
              </svg>
              Agendar
            </Link>
          </div>

          <div className="xl:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:text-accent-foreground h-10 w-10 text-charcoal hover:bg-pastel-lavender/30 cursor-pointer"
              aria-haspopup="dialog"
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
              onClick={() => setMobileOpen((o) => !o)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-menu w-6 h-6"
                aria-hidden="true"
              >
                <path d="M4 5h16"></path>
                <path d="M4 12h16"></path>
                <path d="M4 19h16"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div
        id="mobile-menu"
        className={`${mobileOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"} xl:hidden transition-opacity duration-200`}
      >
        <div className="absolute top-full left-0 right-0 bg-white shadow-lg border-t border-pastel-lavender/40">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-2">
            {navItems.map(({ label, href, primary }) => (
              <Link
                key={href}
                href={href}
                data-discover="true"
                className={
                  primary
                    ? "text-sm font-bold text-white bg-vivid-lavender px-4 py-2 rounded-md shadow-md"
                    : "text-sm font-medium text-charcoal hover:text-vivid-lavender px-2 py-2 rounded-md"
                }
                onClick={() => setMobileOpen(false)}
              >
                {label}
              </Link>
            ))}
            <Link
              href="/contato"
              data-discover="true"
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium h-10 px-4 py-2 bg-vivid-peach text-white hover:bg-vivid-peach/90 transition-colors shadow"
              onClick={() => setMobileOpen(false)}
            >
              Agendar
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;

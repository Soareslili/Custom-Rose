import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Início", href: "/" },
    { name: "Sobre", href: "/about" },
    { name: "Artistas", href: "/artists" },
    { name: "Portfólio", href: "/portfolio" },
    { name: "Contato", href: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-smooth duration-300 ${
        isScrolled
          ? "bg-background/85 backdrop-blur-md border-b border-border"
          : "bg-gradient-to-b from-background/70 to-transparent"
      }`}
    >
      <div className="container-custom flex items-center justify-between py-4">
        
        {/* LOGO */}
        <Link
          to="/"
          className="flex items-center gap-2 group"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <span className="font-display text-xl tracking-widest text-foreground group-hover:text-primary transition-smooth">
            CUSTOM <span className="text-primary">ROSE</span>
          </span>
        </Link>

        {/* MENU DESKTOP */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className="text-sm uppercase tracking-widest text-muted-foreground hover:text-primary transition-smooth"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* BOTÃO DESKTOP */}
        <Link
          to="/contact"
          className="hidden lg:inline-flex items-center bg-primary text-primary-foreground px-6 py-2.5 text-xs uppercase tracking-widest font-semibold hover:opacity-90 transition-smooth shadow-red"
        >
        Faça um Orçamento
        </Link>

        {/* MENU MOBILE BUTTON */}
        <button
          aria-label="Menu"
          className="lg:hidden text-foreground"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* MENU MOBILE */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-background/95 backdrop-blur-md border-t border-border">
          <nav className="container-custom flex flex-col gap-1 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="py-3 text-sm uppercase tracking-widest text-muted-foreground hover:text-primary transition-smooth"
              >
                {link.name}
              </Link>
            ))}

            <Link
              to="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="mt-2 bg-primary text-primary-foreground px-6 py-3 text-xs uppercase tracking-widest font-semibold text-center"
            >
              Faça um Orçamento
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
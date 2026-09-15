import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Moon, Sun, Terminal } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";
import { siteConfig } from "@/data/siteConfig";

interface NavItem {
  label: string;
  href: string; // "/#about" style anchors, or a plain route like "/projects"
}

const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/#top" },
  { label: "About", href: "/#about" },
  { label: "Skills", href: "/#skills" },
  { label: "Education", href: "/#education" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  // Close the mobile menu whenever the route changes.
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-ink-900/10 dark:border-paper-100/10 bg-paper-100/85 dark:bg-ink-900/85 backdrop-blur-md">
      <nav className="container-page flex h-16 items-center justify-between" aria-label="Primary">
        <Link
          to="/#top"
          className="flex items-center gap-2 font-mono text-sm font-semibold text-ink-900 dark:text-paper-50"
        >
          <Terminal className="h-4 w-4 text-cobalt-500" aria-hidden="true" />
          <span>{siteConfig.name}</span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-1">
          {NAV_ITEMS.map((item) => (
            <li key={item.label}>
              <Link
                to={item.href}
                className="rounded-md px-3 py-2 text-sm font-medium text-ink-900/80 dark:text-paper-100/80 hover:text-cobalt-500 dark:hover:text-cobalt-400 transition-colors"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-2">
          <ThemeToggleButton theme={theme} onToggle={toggleTheme} />
        </div>

        {/* Mobile controls */}
        <div className="flex items-center gap-1 md:hidden">
          <ThemeToggleButton theme={theme} onToggle={toggleTheme} />
          <button
            type="button"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            onClick={() => setIsOpen((v) => !v)}
            className="rounded-md p-2 text-ink-900 dark:text-paper-100 hover:bg-ink-900/5 dark:hover:bg-paper-100/10"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {isOpen && (
        <ul className="md:hidden border-t border-ink-900/10 dark:border-paper-100/10 bg-paper-100 dark:bg-ink-900 px-5 py-3 space-y-1">
          {NAV_ITEMS.map((item) => (
            <li key={item.label}>
              <Link
                to={item.href}
                className="block rounded-md px-3 py-2.5 text-base font-medium text-ink-900 dark:text-paper-100 hover:bg-ink-900/5 dark:hover:bg-paper-100/10"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}

function ThemeToggleButton({ theme, onToggle }: { theme: "light" | "dark"; onToggle: () => void }) {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
      className="rounded-md p-2 text-ink-900 dark:text-paper-100 hover:bg-ink-900/5 dark:hover:bg-paper-100/10 transition-colors"
    >
      {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </button>
  );
}

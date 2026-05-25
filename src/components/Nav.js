"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

export default function Nav() {
  const path = usePathname();
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  const linkStyle = (href) => ({
    color: path === href || (href !== "/" && path?.startsWith(href)) ? "var(--terracotta)" : "var(--text-secondary)",
    textDecoration: "none",
    fontWeight: path === href || (href !== "/" && path?.startsWith(href)) ? 600 : 400,
    fontSize: 15,
    letterSpacing: "0.01em",
    transition: "color 0.2s ease",
  });

  return (
    <nav style={{
      position: "sticky", top: 0, zIndex: 100,
      background: "rgba(245,240,232,0.85)",
      backdropFilter: "blur(16px)",
      WebkitBackdropFilter: "blur(16px)",
      borderBottom: "1px solid var(--border-light)",
    }}>
      <div style={{
        maxWidth: 1200, margin: "0 auto", padding: "16px 32px",
        display: "flex", justifyContent: "space-between", alignItems: "center",
      }}>
        <Link href="/" style={{
          fontFamily: "'Playfair Display', serif",
          fontWeight: 700, fontSize: 22, color: "var(--charcoal)",
          textDecoration: "none", letterSpacing: "-0.02em",
        }}>
          Pack or Pass
        </Link>

        {/* Desktop links */}
        <div style={{ display: "flex", gap: 32, alignItems: "center" }}
          className="nav-desktop"
        >
          <Link href="/" style={linkStyle("/")}>Home</Link>
          <Link href="/calculator" style={linkStyle("/calculator")}>Calculator</Link>
          <Link href="/blog" style={linkStyle("/blog")}>Articles</Link>
          <Link href="/calculator" style={{
            background: "var(--charcoal)",
            color: "var(--cream)",
            padding: "10px 24px",
            borderRadius: 100,
            fontSize: 14,
            fontWeight: 600,
            textDecoration: "none",
            transition: "all 0.25s ease",
            letterSpacing: "0.02em",
          }}>
            Evaluate My Offer
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="nav-mobile-btn"
          style={{
            display: "none", background: "none", border: "none",
            cursor: "pointer", padding: 8, color: "var(--charcoal)",
          }}
          aria-label="Menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {menuOpen ? (
              <path d="M6 6l12 12M6 18L18 6" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="nav-mobile-menu" style={{
          padding: "8px 32px 24px",
          display: "flex", flexDirection: "column", gap: 16,
          borderTop: "1px solid var(--border-light)",
          background: "rgba(245,240,232,0.95)",
        }}>
          <Link href="/" style={linkStyle("/")} onClick={() => setMenuOpen(false)}>Home</Link>
          <Link href="/calculator" style={linkStyle("/calculator")} onClick={() => setMenuOpen(false)}>Calculator</Link>
          <Link href="/blog" style={linkStyle("/blog")} onClick={() => setMenuOpen(false)}>Articles</Link>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .nav-mobile-btn { display: block !important; }
        }
      `}</style>
    </nav>
  );
}

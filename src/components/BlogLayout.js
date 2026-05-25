"use client";
import Nav from "./Nav";
import Footer from "./Footer";
import Link from "next/link";

export default function BlogLayout({ title, date, readTime, heroImage, children }) {
  return (
    <div style={{ minHeight: "100vh", position: "relative", zIndex: 1 }}>
      <Nav />

      {/* Hero image */}
      {heroImage && (
        <div style={{
          width: "100%", maxWidth: 900, margin: "0 auto",
          height: "clamp(220px, 40vw, 420px)",
          borderRadius: "0 0 24px 24px", overflow: "hidden",
          position: "relative",
        }}>
          <img src={heroImage} alt="" style={{
            width: "100%", height: "100%", objectFit: "cover",
            filter: "saturate(0.8) brightness(0.9)",
          }} />
          <div style={{
            position: "absolute", inset: 0,
            background: "linear-gradient(180deg, transparent 40%, rgba(26,26,26,0.5) 100%)",
          }} />
        </div>
      )}

      <article style={{
        maxWidth: 720, margin: "0 auto",
        padding: heroImage ? "40px 32px 80px" : "60px 32px 80px",
        animation: "fadeUp 0.7s cubic-bezier(0.16,1,0.3,1) both",
      }}>
        {/* Breadcrumb */}
        <div style={{ marginBottom: 24, display: "flex", gap: 8, alignItems: "center", fontSize: 13 }}>
          <Link href="/" style={{ color: "var(--text-muted)", textDecoration: "none" }}>Home</Link>
          <span style={{ color: "var(--border)" }}>/</span>
          <Link href="/blog" style={{ color: "var(--text-muted)", textDecoration: "none" }}>Articles</Link>
          <span style={{ color: "var(--border)" }}>/</span>
          <span style={{ color: "var(--terracotta)" }}>This Article</span>
        </div>

        {/* Title block */}
        <div style={{ marginBottom: 40 }}>
          <div style={{
            display: "flex", gap: 16, alignItems: "center",
            fontSize: 13, color: "var(--text-muted)", marginBottom: 16,
          }}>
            <span>{date}</span>
            <span style={{ width: 4, height: 4, borderRadius: "50%", background: "var(--border)" }} />
            <span>{readTime} min read</span>
          </div>
          <h1 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(28px, 5vw, 44px)",
            fontWeight: 700, lineHeight: 1.15,
            color: "var(--charcoal)",
            letterSpacing: "-0.02em",
          }}>
            {title}
          </h1>
        </div>

        {/* Article body */}
        <div className="article-body">
          {children}
        </div>

        {/* CTA */}
        <div style={{
          marginTop: 56, padding: "36px 32px",
          background: "var(--charcoal)", borderRadius: 20,
          textAlign: "center",
        }}>
          <h3 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 24, fontWeight: 700, color: "var(--cream)",
            marginBottom: 12,
          }}>
            Ready to run the numbers?
          </h3>
          <p style={{ color: "rgba(245,240,232,0.6)", fontSize: 14, marginBottom: 24, lineHeight: 1.6 }}>
            Compare your actual purchasing power with our free calculator. No signup, no data collected.
          </p>
          <Link href="/calculator" style={{
            display: "inline-block",
            background: "var(--cream)", color: "var(--charcoal)",
            fontWeight: 600, fontSize: 15,
            padding: "14px 36px", borderRadius: 100,
            textDecoration: "none",
          }}>
            Evaluate My Offer
          </Link>
        </div>
      </article>

      {/* Article body styles */}
      <style>{`
        @keyframes fadeUp{from{opacity:0;transform:translateY(28px)}to{opacity:1;transform:translateY(0)}}
        .article-body { font-size: 16px; line-height: 1.8; color: var(--text-secondary); }
        .article-body h2 {
          font-family: 'Playfair Display', serif;
          font-size: 26px; font-weight: 700; color: var(--charcoal);
          margin-top: 48px; margin-bottom: 16px; letter-spacing: -0.01em;
        }
        .article-body h3 {
          font-family: 'Playfair Display', serif;
          font-size: 20px; font-weight: 600; color: var(--charcoal);
          margin-top: 32px; margin-bottom: 12px;
        }
        .article-body p { margin-bottom: 20px; }
        .article-body a { color: var(--terracotta); text-decoration: underline; text-underline-offset: 3px; }
        .article-body table {
          width: 100%; border-collapse: collapse; margin: 24px 0;
          font-size: 14px; background: var(--card); border-radius: 12px;
          overflow: hidden; border: 1px solid var(--border-light);
        }
        .article-body th {
          text-align: left; padding: 14px 16px;
          background: var(--input-bg); color: var(--text-muted);
          font-weight: 600; font-size: 12px; text-transform: uppercase;
          letter-spacing: 1px; border-bottom: 1px solid var(--border-light);
        }
        .article-body td {
          padding: 12px 16px; border-bottom: 1px solid var(--border-light);
          color: var(--text-secondary);
        }
        .article-body tr:last-child td { border-bottom: none; }
        .article-body img {
          width: 100%; border-radius: 16px; margin: 32px 0;
          box-shadow: var(--shadow-md);
        }
      `}</style>

      <Footer />
    </div>
  );
}

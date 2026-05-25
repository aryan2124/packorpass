import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Relocation Guides & Salary Insights",
  description: "Research-backed guides on salaries, cost of living, and making the move abroad. Dubai, London, Mumbai, Singapore and more.",
};

const POSTS = [
  {
    slug: "is-20000-aed-good-salary-dubai",
    title: "Is AED 20,000 a Good Salary in Dubai?",
    desc: "The real math behind what 20K AED gets you monthly. Rent, groceries, savings, and whether it is enough for your situation.",
    date: "May 2026", readTime: 7,
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=600&q=80",
    color: "#C4694A",
  },
  {
    slug: "dubai-vs-london-salary-comparison",
    title: "Dubai vs London: Real Salary Comparison 2026",
    desc: "Side-by-side breakdown of take-home pay, cost of living, and quality of life in both cities.",
    date: "May 2026", readTime: 8,
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=600&q=80",
    color: "#6B7F6B",
  },
  {
    slug: "dubai-vs-mumbai-salary-comparison",
    title: "Dubai vs Mumbai: Should You Take That Offer?",
    desc: "What a Dubai salary package actually means compared to your Mumbai income after tax and living costs.",
    date: "May 2026", readTime: 7,
    image: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=600&q=80",
    color: "#B8954A",
  },
  {
    slug: "cheapest-way-transfer-money-dubai",
    title: "Cheapest Way to Transfer Money to Dubai",
    desc: "We compared bank wires, Wise, Remitly, and Western Union. Here is what actually saves you the most.",
    date: "May 2026", readTime: 6,
    image: "https://images.unsplash.com/photo-1580519542036-c47de6196ba5?w=600&q=80",
    color: "#7A6B8A",
  },
  {
    slug: "hidden-costs-moving-dubai",
    title: "The Hidden Costs of Moving to Dubai Nobody Tells You",
    desc: "Security deposits, DEWA, Emirates ID, medical tests. The expenses that catch every new expat off guard.",
    date: "May 2026", readTime: 8,
    image: "https://images.unsplash.com/photo-1582672060674-bc2bd808a8b5?w=600&q=80",
    color: "#C4694A",
  },
];

export default function BlogIndex() {
  return (
    <div style={{ minHeight: "100vh", position: "relative", zIndex: 1 }}>
      <Nav />
      <div style={{ maxWidth: 900, margin: "0 auto", padding: "60px 32px 80px" }}>
        <div style={{ marginBottom: 48 }}>
          <div style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: 11, letterSpacing: 3, textTransform: "uppercase",
            color: "var(--terracotta)", marginBottom: 12,
          }}>
            The Journal
          </div>
          <h1 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(32px, 5vw, 48px)",
            fontWeight: 700, marginBottom: 12,
            color: "var(--charcoal)", letterSpacing: "-0.02em",
          }}>Relocation Guides</h1>
          <p style={{ color: "var(--text-secondary)", fontSize: 16, lineHeight: 1.7, maxWidth: 520 }}>
            Research-backed guides to help you make informed decisions about moving abroad.
          </p>
        </div>

        <div style={{ display: "grid", gap: 24 }}>
          {POSTS.map((post, i) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} style={{
              display: "grid", gridTemplateColumns: "240px 1fr",
              background: "var(--card)", border: "1px solid var(--border-light)",
              borderRadius: 16, overflow: "hidden",
              textDecoration: "none", color: "inherit",
              transition: "all 0.35s cubic-bezier(0.16,1,0.3,1)",
              boxShadow: "var(--shadow-sm)",
            }}>
              <div style={{
                position: "relative", overflow: "hidden",
                background: post.color,
              }}>
                <img src={post.image} alt="" style={{
                  width: "100%", height: "100%", objectFit: "cover",
                  filter: "saturate(0.7) brightness(0.85)",
                  minHeight: 180,
                }} />
                <div style={{
                  position: "absolute", inset: 0,
                  background: `linear-gradient(135deg, ${post.color}55 0%, transparent 100%)`,
                }} />
              </div>
              <div style={{ padding: "28px 32px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                <div style={{
                  display: "flex", gap: 12, fontSize: 12, color: "var(--text-muted)",
                  marginBottom: 10,
                }}>
                  <span>{post.date}</span>
                  <span style={{ color: "var(--border)" }}>&middot;</span>
                  <span>{post.readTime} min read</span>
                </div>
                <h2 style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: 22, fontWeight: 600, color: "var(--charcoal)",
                  marginBottom: 8, lineHeight: 1.25,
                }}>{post.title}</h2>
                <p style={{ fontSize: 14, color: "var(--text-secondary)", lineHeight: 1.6, marginBottom: 14 }}>{post.desc}</p>
                <span style={{
                  fontSize: 13, color: "var(--terracotta)", fontWeight: 600,
                  display: "inline-flex", alignItems: "center", gap: 6,
                }}>
                  Read article <span style={{ fontSize: 16 }}>&rarr;</span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          a[style*="grid-template-columns: 240px"] { grid-template-columns: 1fr !important; }
        }
      `}</style>

      <Footer />
    </div>
  );
}

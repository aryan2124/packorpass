import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{
      background: "var(--charcoal)",
      color: "var(--cream)",
      padding: "64px 32px 40px",
      marginTop: 80,
    }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: 48, marginBottom: 48 }}>
          <div style={{ maxWidth: 360 }}>
            <div style={{
              fontFamily: "'Playfair Display', serif",
              fontWeight: 700, fontSize: 24, marginBottom: 16,
              color: "var(--cream)",
            }}>
              Pack or Pass
            </div>
            <p style={{ color: "rgba(245,240,232,0.6)", fontSize: 14, lineHeight: 1.7 }}>
              A free relocation offer evaluator that compares your real purchasing power, not just the headline salary. Built for expats, by research.
            </p>
          </div>

          <div style={{ display: "flex", gap: 64, flexWrap: "wrap" }}>
            <div>
              <div style={{
                fontSize: 11, fontWeight: 700, color: "rgba(245,240,232,0.4)",
                marginBottom: 16, textTransform: "uppercase", letterSpacing: 2,
              }}>Tools</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                <Link href="/calculator" style={{ color: "rgba(245,240,232,0.7)", fontSize: 14, textDecoration: "none" }}>
                  Offer Calculator
                </Link>
              </div>
            </div>
            <div>
              <div style={{
                fontSize: 11, fontWeight: 700, color: "rgba(245,240,232,0.4)",
                marginBottom: 16, textTransform: "uppercase", letterSpacing: 2,
              }}>Read</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                <Link href="/blog" style={{ color: "rgba(245,240,232,0.7)", fontSize: 14, textDecoration: "none" }}>All Articles</Link>
                <Link href="/blog/is-20000-aed-good-salary-dubai" style={{ color: "rgba(245,240,232,0.7)", fontSize: 14, textDecoration: "none" }}>Dubai Salary Guide</Link>
                <Link href="/blog/hidden-costs-moving-dubai" style={{ color: "rgba(245,240,232,0.7)", fontSize: 14, textDecoration: "none" }}>Hidden Costs</Link>
              </div>
            </div>
          </div>
        </div>

        <div style={{
          borderTop: "1px solid rgba(245,240,232,0.1)",
          paddingTop: 24,
          display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: 16,
        }}>
          <p style={{ color: "rgba(245,240,232,0.3)", fontSize: 12, lineHeight: 1.7, maxWidth: 600 }}>
            &copy; {new Date().getFullYear()} Pack or Pass. Free informational tool, not financial or legal advice.
            Cost of living data is approximate. Some links are affiliate links.
          </p>
          <p style={{ color: "rgba(245,240,232,0.3)", fontSize: 12 }}>
            Made with research, not guesses.
          </p>
        </div>
      </div>
    </footer>
  );
}

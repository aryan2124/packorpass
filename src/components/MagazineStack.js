"use client";
import Link from "next/link";
import { useState } from "react";

const ROTATIONS = [-1.2, 0.8, -0.5, 1.1, -0.9];
const OFFSETS_X = [0, 12, -8, 16, -4];

export default function MagazineStack({ posts }) {
  const [hoveredIdx, setHoveredIdx] = useState(null);

  return (
    <div style={{ position: "relative", maxWidth: 900, margin: "0 auto" }}>
      {posts.map((post, i) => {
        const isHovered = hoveredIdx === i;
        const baseRotation = ROTATIONS[i % ROTATIONS.length];
        const offsetX = OFFSETS_X[i % OFFSETS_X.length];

        return (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            style={{
              display: "block",
              position: "relative",
              zIndex: isHovered ? 50 : posts.length - i,
              marginTop: i === 0 ? 0 : -40,
              marginLeft: offsetX,
              textDecoration: "none",
              color: "inherit",
              transform: isHovered
                ? `rotate(0deg) translateY(-16px) scale(1.02)`
                : `rotate(${baseRotation}deg)`,
              transition: "all 0.45s cubic-bezier(0.16, 1, 0.3, 1)",
              filter: isHovered ? "none" : "none",
              cursor: "pointer",
            }}
            onMouseEnter={() => setHoveredIdx(i)}
            onMouseLeave={() => setHoveredIdx(null)}
          >
            <div style={{
              background: "var(--card)",
              borderRadius: 12,
              overflow: "hidden",
              boxShadow: isHovered ? "var(--shadow-xl)" : "var(--shadow-md)",
              border: "1px solid var(--border-light)",
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              minHeight: 220,
              transition: "box-shadow 0.45s ease",
            }}>
              {/* Left side: colored panel with title */}
              <div style={{
                background: post.color || "var(--charcoal)",
                padding: "36px 32px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                position: "relative",
                overflow: "hidden",
              }}>
                {/* Subtle pattern overlay */}
                <div style={{
                  position: "absolute", inset: 0, opacity: 0.06,
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }} />
                <div style={{ position: "relative", zIndex: 1 }}>
                  <div style={{
                    fontFamily: "'Space Mono', monospace",
                    fontSize: 10, letterSpacing: 2, textTransform: "uppercase",
                    color: "rgba(255,255,255,0.5)", marginBottom: 16,
                  }}>
                    Pack or Pass
                  </div>
                  <h3 style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "clamp(20px, 2.5vw, 28px)",
                    fontWeight: 700, color: "white",
                    lineHeight: 1.2,
                  }}>
                    {post.title}
                  </h3>
                </div>
                <div style={{
                  fontFamily: "'Space Mono', monospace",
                  fontSize: 10, color: "rgba(255,255,255,0.4)",
                  letterSpacing: 1,
                }}>
                  May 2026
                </div>
              </div>

              {/* Right side: image + description */}
              <div style={{ position: "relative" }}>
                <div style={{
                  position: "absolute", inset: 0,
                  overflow: "hidden",
                }}>
                  <img
                    src={post.image}
                    alt=""
                    style={{
                      width: "100%", height: "100%",
                      objectFit: "cover",
                      filter: "saturate(0.6) brightness(0.85)",
                      transform: isHovered ? "scale(1.05)" : "scale(1)",
                      transition: "transform 0.6s cubic-bezier(0.16,1,0.3,1)",
                    }}
                  />
                  <div style={{
                    position: "absolute", inset: 0,
                    background: "linear-gradient(180deg, rgba(26,26,26,0.1) 0%, rgba(26,26,26,0.7) 100%)",
                  }} />
                </div>
                <div style={{
                  position: "relative", zIndex: 1,
                  padding: "36px 28px", height: "100%",
                  display: "flex", flexDirection: "column", justifyContent: "flex-end",
                }}>
                  <p style={{
                    fontSize: 13, color: "rgba(255,255,255,0.85)",
                    lineHeight: 1.6, marginBottom: 20,
                  }}>
                    {post.desc}
                  </p>
                  <span style={{
                    display: "inline-flex", alignItems: "center", gap: 8,
                    fontSize: 12, fontWeight: 600, color: "white",
                    padding: "8px 20px",
                    border: "1px solid rgba(255,255,255,0.3)",
                    borderRadius: 100,
                    width: "fit-content",
                    transition: "all 0.3s ease",
                    background: isHovered ? "rgba(255,255,255,0.15)" : "transparent",
                  }}>
                    Read More
                  </span>
                </div>
              </div>
            </div>
          </Link>
        );
      })}

      <style>{`
        @media (max-width: 640px) {
          .mag-card-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}

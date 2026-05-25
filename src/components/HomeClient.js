"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import ScrollReveal from "./ScrollReveal";
import MagazineStack from "./MagazineStack";

export default function HomeClient({ posts }) {
  return (
    <>
      {/* ═══ HERO ═══ */}
      <section style={{
        padding: "100px 32px 80px",
        maxWidth: 1200, margin: "0 auto",
        position: "relative",
      }}>
        <div style={{ maxWidth: 720, animation: "fadeUp 0.8s cubic-bezier(0.16,1,0.3,1) both" }}>
          <div style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: 12, letterSpacing: 3, textTransform: "uppercase",
            color: "var(--terracotta)", marginBottom: 24, fontWeight: 700,
          }}>
            Free Relocation Offer Evaluator
          </div>
          <h1 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(42px, 7vw, 80px)",
            fontWeight: 700, lineHeight: 1.05, marginBottom: 28,
            color: "var(--charcoal)", letterSpacing: "-0.02em",
          }}>
            Is that job offer{" "}
            <em style={{ fontStyle: "italic", color: "var(--terracotta)" }}>actually</em>{" "}
            worth it?
          </h1>
          <p style={{
            fontSize: 19, color: "var(--text-secondary)",
            lineHeight: 1.7, maxWidth: 520, marginBottom: 40,
          }}>
            Compare your real purchasing power, not just the headline salary. Tax savings, cost of living, benefits, gratuity. The full picture in 60 seconds.
          </p>
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap", alignItems: "center" }}>
            <Link href="/calculator" style={{
              display: "inline-block",
              background: "var(--charcoal)",
              color: "var(--cream)",
              fontWeight: 600, fontSize: 16,
              padding: "16px 40px", borderRadius: 100,
              textDecoration: "none",
              transition: "all 0.3s cubic-bezier(0.16,1,0.3,1)",
              boxShadow: "var(--shadow-md)",
              letterSpacing: "0.02em",
            }}>
              Evaluate My Offer
            </Link>
            <span style={{ fontSize: 13, color: "var(--text-muted)" }}>
              No signup. 100% free. Data stays in your browser.
            </span>
          </div>
        </div>

        {/* Decorative image */}
        <div style={{
          position: "absolute", right: 0, top: 60,
          width: "clamp(200px, 30vw, 400px)",
          height: "clamp(280px, 40vw, 520px)",
          borderRadius: 20,
          overflow: "hidden",
          boxShadow: "var(--shadow-xl)",
          animation: "fadeIn 1.2s cubic-bezier(0.16,1,0.3,1) 0.3s both",
          display: "block",
        }} className="hero-img-wrap">
          <img
            src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=600&q=80"
            alt="Dubai skyline"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
          <div style={{
            position: "absolute", inset: 0,
            background: "linear-gradient(180deg, transparent 50%, rgba(26,26,26,0.3))",
          }} />
        </div>

        <style>{`
          @media (max-width: 900px) {
            .hero-img-wrap { display: none !important; }
          }
        `}</style>
      </section>

      {/* ═══ HOW IT WORKS ═══ */}
      <section style={{ maxWidth: 1200, margin: "0 auto", padding: "0 32px 100px" }}>
        <ScrollReveal>
          <div style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: 11, letterSpacing: 3, textTransform: "uppercase",
            color: "var(--text-muted)", marginBottom: 12,
          }}>
            How it works
          </div>
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(28px, 4vw, 42px)",
            fontWeight: 700, marginBottom: 48,
            color: "var(--charcoal)", letterSpacing: "-0.01em",
          }}>
            Three steps to clarity
          </h2>
        </ScrollReveal>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24 }}>
          {[
            {
              num: "01",
              title: "Your current situation",
              desc: "Pick a preset city or enter your own. We calculate your real take-home after tax and deductions.",
              icon: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&q=80",
            },
            {
              num: "02",
              title: "The job offer",
              desc: "Base salary, housing, transport, flights, school. Every component of the package, broken down.",
              icon: "https://images.unsplash.com/photo-1568992687947-868a62a9f521?w=400&q=80",
            },
            {
              num: "03",
              title: "The verdict",
              desc: "A clear percentage showing whether you'd save more or less, with a full monthly comparison.",
              icon: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&q=80",
            },
          ].map((item, i) => (
            <ScrollReveal key={i} delay={i * 120}>
              <div style={{
                background: "var(--card)",
                border: "1px solid var(--border-light)",
                borderRadius: 20, overflow: "hidden",
                transition: "transform 0.35s cubic-bezier(0.16,1,0.3,1), box-shadow 0.35s ease",
                cursor: "default",
              }}
                onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "var(--shadow-lg)"; }}
                onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}
              >
                <div style={{ height: 160, overflow: "hidden" }}>
                  <img src={item.icon} alt="" style={{
                    width: "100%", height: "100%", objectFit: "cover",
                    filter: "saturate(0.7)",
                    transition: "transform 0.5s ease",
                  }} />
                </div>
                <div style={{ padding: "28px 28px 32px" }}>
                  <div style={{
                    fontFamily: "'Space Mono', monospace",
                    fontSize: 12, color: "var(--terracotta)", fontWeight: 700,
                    marginBottom: 8,
                  }}>{item.num}</div>
                  <h3 style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: 22, fontWeight: 600, marginBottom: 10,
                    color: "var(--charcoal)",
                  }}>{item.title}</h3>
                  <p style={{ color: "var(--text-secondary)", fontSize: 14, lineHeight: 1.65 }}>{item.desc}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ═══ MAGAZINE STACK ARTICLES ═══ */}
      <section style={{ maxWidth: 1200, margin: "0 auto", padding: "0 32px 100px" }}>
        <ScrollReveal>
          <div style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: 11, letterSpacing: 3, textTransform: "uppercase",
            color: "var(--text-muted)", marginBottom: 12,
          }}>
            Relocation Guides
          </div>
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(28px, 4vw, 42px)",
            fontWeight: 700, marginBottom: 56,
            color: "var(--charcoal)", letterSpacing: "-0.01em",
          }}>
            The reading list
          </h2>
        </ScrollReveal>
        <MagazineStack posts={posts} />
      </section>

      {/* ═══ CITIES RIBBON ═══ */}
      <section style={{
        background: "var(--charcoal)", color: "var(--cream)",
        padding: "80px 32px", marginTop: 0,
      }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", textAlign: "center" }}>
          <ScrollReveal>
            <h2 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(26px, 4vw, 38px)",
              fontWeight: 700, marginBottom: 16,
            }}>
              16 cities. Any custom city. One clear answer.
            </h2>
            <p style={{ color: "rgba(245,240,232,0.6)", fontSize: 16, marginBottom: 40, maxWidth: 500, margin: "0 auto 40px" }}>
              Preset data for major origin and destination cities, or enter your own costs manually.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={150}>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 10, justifyContent: "center", marginBottom: 40 }}>
              {["Dubai", "Abu Dhabi", "Singapore", "London", "Manchester", "Mumbai", "Delhi NCR", "Bangalore", "New York", "San Francisco", "Toronto", "Sydney", "Karachi", "Lahore", "Cairo", "Manila", "Nairobi"].map(city => (
                <span key={city} style={{
                  border: "1px solid rgba(245,240,232,0.15)",
                  borderRadius: 100, padding: "8px 20px", fontSize: 13,
                  color: "rgba(245,240,232,0.7)",
                  transition: "all 0.2s ease",
                }}>
                  {city}
                </span>
              ))}
              <span style={{
                border: "1px solid var(--terracotta)",
                borderRadius: 100, padding: "8px 20px", fontSize: 13,
                color: "var(--terracotta)", fontWeight: 600,
              }}>
                + Your City
              </span>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={250}>
            <Link href="/calculator" style={{
              display: "inline-block",
              background: "var(--cream)", color: "var(--charcoal)",
              fontWeight: 600, fontSize: 16,
              padding: "16px 40px", borderRadius: 100,
              textDecoration: "none",
              transition: "all 0.3s ease",
              letterSpacing: "0.02em",
            }}>
              Try the Calculator
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}

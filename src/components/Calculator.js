"use client";
import { useState, useRef, useEffect } from "react";
import Nav from "./Nav";
import Footer from "./Footer";

// ─── PRESET CITY DATA ───
const CITIES = {
  "Dubai, UAE": {
    currency: "USD", currencySymbol: "$", taxRate: 0, socialContrib: 0,
    rent1BR: 2314, rent3BR: 4493, groceries: 408, transport: 218, utilities: 191,
    dining: 163, internet: 109, schoolPerYear: 12252, healthInsurance: 136,
    isDestination: true, country: "UAE",
    emoji: "\u{1F3D9}", vibe: "Tax-free skyline living",
  },
  "Abu Dhabi, UAE": {
    currency: "USD", currencySymbol: "$", taxRate: 0, socialContrib: 0,
    rent1BR: 1906, rent3BR: 3812, groceries: 381, transport: 191, utilities: 177,
    dining: 136, internet: 103, schoolPerYear: 10893, healthInsurance: 122,
    isDestination: true, country: "UAE",
    emoji: "\u{1F54C}", vibe: "Culture meets ambition",
  },
  "Singapore": {
    currency: "USD", currencySymbol: "$", taxRate: 0.07, socialContrib: 0.20,
    rent1BR: 2400, rent3BR: 4350, groceries: 375, transport: 113, utilities: 150,
    dining: 300, internet: 45, schoolPerYear: 22500, healthInsurance: 150,
    isDestination: true, country: "Singapore",
    emoji: "\u{1F1F8}\u{1F1EC}", vibe: "The garden city hustle",
  },
  "London, UK": {
    currency: "USD", currencySymbol: "$", taxRate: 0.27, socialContrib: 0.08,
    rent1BR: 2794, rent3BR: 4826, groceries: 508, transport: 229, utilities: 254,
    dining: 445, internet: 51, schoolPerYear: 0, healthInsurance: 0,
    isDestination: false, country: "UK",
    emoji: "\u{1F1EC}\u{1F1E7}", vibe: "History and grey skies",
  },
  "Manchester, UK": {
    currency: "USD", currencySymbol: "$", taxRate: 0.22, socialContrib: 0.08,
    rent1BR: 1397, rent3BR: 2286, groceries: 445, transport: 152, utilities: 229,
    dining: 318, internet: 44, schoolPerYear: 0, healthInsurance: 0,
    isDestination: false, country: "UK",
    emoji: "\u{26BD}", vibe: "Northern spirit",
  },
  "Mumbai, India": {
    currency: "USD", currencySymbol: "$", taxRate: 0.18, socialContrib: 0.12,
    rent1BR: 536, rent3BR: 1071, groceries: 95, transport: 48, utilities: 36,
    dining: 60, internet: 12, schoolPerYear: 2380, healthInsurance: 24,
    isDestination: false, country: "India",
    emoji: "\u{1F1EE}\u{1F1F3}", vibe: "Maximum city energy",
  },
  "Delhi NCR, India": {
    currency: "USD", currencySymbol: "$", taxRate: 0.18, socialContrib: 0.12,
    rent1BR: 357, rent3BR: 774, groceries: 83, transport: 42, utilities: 30,
    dining: 48, internet: 11, schoolPerYear: 2142, healthInsurance: 21,
    isDestination: false, country: "India",
    emoji: "\u{1F1EE}\u{1F1F3}", vibe: "Capital ambitions",
  },
  "Bangalore, India": {
    currency: "USD", currencySymbol: "$", taxRate: 0.18, socialContrib: 0.12,
    rent1BR: 333, rent3BR: 655, groceries: 83, transport: 36, utilities: 26,
    dining: 48, internet: 10, schoolPerYear: 2083, healthInsurance: 18,
    isDestination: false, country: "India",
    emoji: "\u{1F4BB}", vibe: "India's tech capital",
  },
  "New York, USA": {
    currency: "USD", currencySymbol: "$", taxRate: 0.30, socialContrib: 0.0765,
    rent1BR: 3500, rent3BR: 6500, groceries: 600, transport: 130, utilities: 200,
    dining: 500, internet: 70, schoolPerYear: 0, healthInsurance: 400,
    isDestination: false, country: "USA",
    emoji: "\u{1F5FD}", vibe: "The city that never sleeps",
  },
  "San Francisco, USA": {
    currency: "USD", currencySymbol: "$", taxRate: 0.32, socialContrib: 0.0765,
    rent1BR: 3200, rent3BR: 5800, groceries: 550, transport: 100, utilities: 180,
    dining: 450, internet: 65, schoolPerYear: 0, healthInsurance: 450,
    isDestination: false, country: "USA",
    emoji: "\u{1F309}", vibe: "Tech meets the bay",
  },
  "Toronto, Canada": {
    currency: "USD", currencySymbol: "$", taxRate: 0.25, socialContrib: 0.05,
    rent1BR: 1776, rent3BR: 3108, groceries: 333, transport: 118, utilities: 133,
    dining: 222, internet: 59, schoolPerYear: 0, healthInsurance: 0,
    isDestination: false, country: "Canada",
    emoji: "\u{1F1E8}\u{1F1E6}", vibe: "Polite and expensive",
  },
  "Sydney, Australia": {
    currency: "USD", currencySymbol: "$", taxRate: 0.24, socialContrib: 0,
    rent1BR: 1848, rent3BR: 2970, groceries: 330, transport: 132, utilities: 145,
    dining: 231, internet: 53, schoolPerYear: 0, healthInsurance: 0,
    isDestination: false, country: "Australia",
    emoji: "\u{1F1E6}\u{1F1FA}", vibe: "Harbour views and flat whites",
  },
  "Karachi, Pakistan": {
    currency: "USD", currencySymbol: "$", taxRate: 0.15, socialContrib: 0.05,
    rent1BR: 216, rent3BR: 432, groceries: 90, transport: 36, utilities: 29,
    dining: 43, internet: 11, schoolPerYear: 1080, healthInsurance: 18,
    isDestination: false, country: "Pakistan",
    emoji: "\u{1F1F5}\u{1F1F0}", vibe: "Port city resilience",
  },
  "Lahore, Pakistan": {
    currency: "USD", currencySymbol: "$", taxRate: 0.15, socialContrib: 0.05,
    rent1BR: 180, rent3BR: 360, groceries: 79, transport: 29, utilities: 25,
    dining: 36, internet: 10, schoolPerYear: 900, healthInsurance: 14,
    isDestination: false, country: "Pakistan",
    emoji: "\u{1F1F5}\u{1F1F0}", vibe: "Heart of Punjab",
  },
  "Cairo, Egypt": {
    currency: "USD", currencySymbol: "$", taxRate: 0.15, socialContrib: 0.11,
    rent1BR: 309, rent3BR: 618, groceries: 103, transport: 41, utilities: 31,
    dining: 62, internet: 10, schoolPerYear: 2060, healthInsurance: 21,
    isDestination: false, country: "Egypt",
    emoji: "\u{1F1EA}\u{1F1EC}", vibe: "Ancient meets modern",
  },
  "Manila, Philippines": {
    currency: "USD", currencySymbol: "$", taxRate: 0.20, socialContrib: 0.045,
    rent1BR: 445, rent3BR: 979, groceries: 178, transport: 53, utilities: 89,
    dining: 107, internet: 36, schoolPerYear: 2670, healthInsurance: 53,
    isDestination: false, country: "Philippines",
    emoji: "\u{1F1F5}\u{1F1ED}", vibe: "Island nation hustle",
  },
  "Nairobi, Kenya": {
    currency: "USD", currencySymbol: "$", taxRate: 0.20, socialContrib: 0.06,
    rent1BR: 385, rent3BR: 770, groceries: 116, transport: 39, utilities: 39,
    dining: 62, internet: 31, schoolPerYear: 3080, healthInsurance: 39,
    isDestination: false, country: "Kenya",
    emoji: "\u{1F1F0}\u{1F1EA}", vibe: "Safari and startups",
  },
};

const FAMILY_MULTIPLIERS = { single: 1, couple: 1.5, family: 2.2 };

const FAMILY_VISUALS = {
  single: { emoji: "\u{1F9CD}", label: "Solo adventurer" },
  couple: { emoji: "\u{1F46B}", label: "Two of you" },
  family: { emoji: "\u{1F46A}", label: "The whole crew" },
};

function calcGratuity(monthlyBasicUSD, years) {
  if (years <= 0) return 0;
  const dailyWage = monthlyBasicUSD / 30;
  if (years <= 5) return dailyWage * 21 * years;
  return (dailyWage * 21 * 5) + (dailyWage * 30 * (years - 5));
}

function fmt(n, d = 0) {
  return new Intl.NumberFormat('en-US', { maximumFractionDigits: d, minimumFractionDigits: d }).format(n);
}

function buildCustomCity(custom) {
  return {
    currency: "USD", currencySymbol: "$",
    taxRate: (parseFloat(custom.taxRate) || 0) / 100,
    socialContrib: 0,
    rent1BR: parseFloat(custom.rent) || 0,
    rent3BR: (parseFloat(custom.rent) || 0) * 1.8,
    groceries: parseFloat(custom.groceries) || 0,
    transport: parseFloat(custom.transport) || 0,
    utilities: parseFloat(custom.utilities) || 0,
    dining: parseFloat(custom.dining) || 0,
    internet: parseFloat(custom.internet) || 0,
    schoolPerYear: (parseFloat(custom.school) || 0) * 12,
    healthInsurance: parseFloat(custom.health) || 0,
    isDestination: false,
    country: custom.name || "Custom",
    emoji: "\u{1F30D}", vibe: "Your home base",
  };
}

// ─── Animated choice pill ───
function ChoicePill({ selected, children, visual, onClick, style: extraStyle }) {
  return (
    <button onClick={onClick} style={{
      position: "relative", overflow: "hidden",
      flex: 1, padding: "16px 12px",
      border: selected ? "2px solid var(--terracotta)" : "1px solid var(--border)",
      borderRadius: 14,
      background: selected ? "rgba(196,105,74,0.06)" : "var(--card)",
      color: selected ? "var(--charcoal)" : "var(--text-secondary)",
      cursor: "pointer",
      fontSize: 14, fontWeight: selected ? 600 : 400,
      fontFamily: "'DM Sans', sans-serif",
      transition: "all 0.3s cubic-bezier(0.16,1,0.3,1)",
      textAlign: "center",
      transform: selected ? "scale(1.03)" : "scale(1)",
      boxShadow: selected ? "var(--shadow-sm)" : "none",
      ...extraStyle,
    }}>
      {visual && selected && (
        <span style={{
          display: "block", fontSize: 24, marginBottom: 4,
          animation: "scaleIn 0.35s cubic-bezier(0.16,1,0.3,1)",
        }}>
          {visual}
        </span>
      )}
      {children}
    </button>
  );
}

// ═══ MAIN CALCULATOR ═══
export default function ReloCalc({ startAtForm = false }) {
  const [step, setStep] = useState(startAtForm ? 1 : 0);
  const [formData, setFormData] = useState({
    currentCity: "", useCustomOrigin: false,
    customOrigin: { name: "", taxRate: "", rent: "", groceries: "", transport: "", utilities: "", dining: "", internet: "", school: "", health: "" },
    currentSalary: "",
    offerCity: "Dubai, UAE",
    offerBasic: "",
    housingAllowance: "", transportAllowance: "",
    flightsPerYear: "0", schoolAllowance: "",
    insuranceCovered: true,
    familySize: "single", kids: "0",
  });
  const [results, setResults] = useState(null);
  const resultsRef = useRef(null);

  const originCities = Object.entries(CITIES).filter(([,v]) => !v.isDestination).map(([k]) => k);
  const destCities = Object.entries(CITIES).filter(([,v]) => v.isDestination).map(([k]) => k);

  function set(field, value) {
    setFormData(prev => ({ ...prev, [field]: value }));
  }
  function setCustom(field, value) {
    setFormData(prev => ({ ...prev, customOrigin: { ...prev.customOrigin, [field]: value } }));
  }

  function calculate() {
    const current = formData.useCustomOrigin ? buildCustomCity(formData.customOrigin) : CITIES[formData.currentCity];
    const offer = CITIES[formData.offerCity];
    if (!current || !offer) return;

    const salaryUSD = parseFloat(formData.currentSalary) || 0;
    const offerBasicUSD = parseFloat(formData.offerBasic) || 0;
    const housingUSD = parseFloat(formData.housingAllowance) || 0;
    const transportUSD = parseFloat(formData.transportAllowance) || 0;
    const flights = parseFloat(formData.flightsPerYear) || 0;
    const schoolAllowUSD = parseFloat(formData.schoolAllowance) || 0;
    const kids = parseInt(formData.kids) || 0;
    const fm = FAMILY_MULTIPLIERS[formData.familySize] || 1;

    const curAnnual = salaryUSD * 12;
    const curTax = curAnnual * (current.taxRate + current.socialContrib);
    const curNetMo = (curAnnual - curTax) / 12;

    const curRent = formData.familySize === 'family' ? current.rent3BR : current.rent1BR;
    const curGrc = current.groceries * fm;
    const curTrn = current.transport;
    const curUtl = current.utilities;
    const curDin = current.dining * fm;
    const curNet = current.internet;
    const curSch = kids > 0 ? (current.schoolPerYear * kids / 12) : 0;
    const curHlt = current.healthInsurance;
    const curExp = curRent + curGrc + curTrn + curUtl + curDin + curNet + curSch + curHlt;

    const offTotal = offerBasicUSD + housingUSD + transportUSD;
    const offAnnual = offTotal * 12;
    const offTax = offAnnual * (offer.taxRate + offer.socialContrib);
    const offNetMo = (offAnnual - offTax) / 12;

    const offRent = housingUSD > 0 ? 0 : (formData.familySize === 'family' ? offer.rent3BR : offer.rent1BR);
    const offGrc = offer.groceries * fm;
    const offTrn = transportUSD > 0 ? 0 : offer.transport;
    const offUtl = offer.utilities;
    const offDin = offer.dining * fm;
    const offNet = offer.internet;
    const offSch = kids > 0 ? (schoolAllowUSD > 0 ? 0 : (offer.schoolPerYear * kids / 12)) : 0;
    const offHlt = formData.insuranceCovered ? 0 : offer.healthInsurance;
    const offFlight = (flights * 500) / 12;
    const offSchoolSaved = (schoolAllowUSD > 0 && kids > 0) ? (offer.schoolPerYear * kids / 12) : 0;
    const offExp = offRent + offGrc + offTrn + offUtl + offDin + offNet + offSch + offHlt;

    const curSavings = curNetMo - curExp;
    const offSavings = offNetMo - offExp + offFlight + offSchoolSaved;

    const pctDiff = curSavings !== 0
      ? ((offSavings - curSavings) / Math.abs(curSavings)) * 100
      : offSavings > 0 ? 100 : -100;

    const g3 = offer.country === "UAE" ? calcGratuity(offerBasicUSD, 3) : 0;
    const g5 = offer.country === "UAE" ? calcGratuity(offerBasicUSD, 5) : 0;

    const cityLabel = formData.useCustomOrigin ? (formData.customOrigin.name || "Your Current City") : formData.currentCity;

    setResults({
      currentCity: cityLabel, offerCity: formData.offerCity,
      curNetMo, offNetMo,
      curTaxPct: (current.taxRate + current.socialContrib) * 100,
      offTaxPct: (offer.taxRate + offer.socialContrib) * 100,
      curExp: { rent: curRent, groceries: curGrc, transport: curTrn, utilities: curUtl, dining: curDin, internet: curNet, school: curSch, health: curHlt, total: curExp },
      offExp: { rent: offRent, groceries: offGrc, transport: offTrn, utilities: offUtl, dining: offDin, internet: offNet, school: offSch, health: offHlt, total: offExp },
      curSavings, offSavings, pctDiff, g3, g5,
      housingUSD, transportUSD, schoolAllowUSD, flights,
      insuranceCovered: formData.insuranceCovered,
      familySize: formData.familySize, kids,
      offerCountry: offer.country, offerBasicUSD,
      offerEmoji: offer.emoji, currentEmoji: current.emoji,
    });
    setStep(2);
    setTimeout(() => resultsRef.current?.scrollIntoView({ behavior: 'smooth' }), 100);
  }

  const selectedOrigin = formData.currentCity ? CITIES[formData.currentCity] : null;
  const selectedDest = CITIES[formData.offerCity];
  const isCustom = formData.useCustomOrigin;
  const canCalc = formData.offerBasic && formData.currentSalary && (isCustom ? formData.customOrigin.rent : formData.currentCity);

  // ── Styles ──
  const inp = {
    width: "100%", padding: "14px 16px",
    background: "var(--input-bg)", border: "1px solid var(--border)",
    borderRadius: 12, color: "var(--text)", fontSize: 15,
    fontFamily: "'DM Sans', sans-serif",
    transition: "border-color 0.2s, box-shadow 0.2s",
    outline: "none",
  };
  const lbl = { display: "block", fontSize: 13, fontWeight: 500, color: "var(--text-secondary)", marginBottom: 6 };
  const sec = {
    background: "var(--card)", border: "1px solid var(--border-light)",
    borderRadius: 20, padding: "36px 32px", marginBottom: 24,
    boxShadow: "var(--shadow-sm)",
  };

  const css = `
    @keyframes scaleIn{from{opacity:0;transform:scale(0.8)}to{opacity:1;transform:scale(1)}}
    @keyframes fadeUp{from{opacity:0;transform:translateY(28px)}to{opacity:1;transform:translateY(0)}}
    @keyframes countUp{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:translateY(0)}}
    input:focus,select:focus{border-color:var(--terracotta)!important;box-shadow:0 0 0 3px rgba(196,105,74,0.1)!important}
    .bar{height:10px;border-radius:5px;transition:width 1.2s cubic-bezier(0.16,1,0.3,1)}
  `;

  // ═══ LANDING (step 0) ═══
  if (step === 0) {
    return (
      <div style={{ minHeight: "100vh", position: "relative", zIndex: 1 }}>
        <style>{css}</style>
        <Nav />
        <section style={{
          maxWidth: 800, margin: "0 auto", padding: "80px 32px",
          textAlign: "center",
          animation: "fadeUp 0.8s cubic-bezier(0.16,1,0.3,1) both",
        }}>
          <div style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: 12, letterSpacing: 3, textTransform: "uppercase",
            color: "var(--terracotta)", marginBottom: 20,
          }}>
            Free Relocation Calculator
          </div>
          <h1 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(36px, 6vw, 60px)",
            fontWeight: 700, lineHeight: 1.1, marginBottom: 24,
            color: "var(--charcoal)",
          }}>
            Design your next chapter
          </h1>
          <p style={{
            fontSize: 18, color: "var(--text-secondary)",
            maxWidth: 520, margin: "0 auto 40px", lineHeight: 1.7,
          }}>
            Compare your real purchasing power across 16+ cities. Tax, cost of living, benefits, gratuity. The full picture in 60 seconds.
          </p>
          <button onClick={() => setStep(1)} style={{
            background: "var(--charcoal)", color: "var(--cream)",
            fontWeight: 600, fontSize: 16, border: "none",
            padding: "16px 48px", borderRadius: 100, cursor: "pointer",
            fontFamily: "'DM Sans', sans-serif",
            transition: "all 0.3s cubic-bezier(0.16,1,0.3,1)",
            boxShadow: "var(--shadow-md)",
          }}>
            Start Evaluating
          </button>
          <p style={{ marginTop: 16, fontSize: 13, color: "var(--text-muted)" }}>
            No signup required. Your data never leaves your browser.
          </p>
        </section>
        <Footer />
      </div>
    );
  }

  // ═══ FORM (step 1) ═══
  if (step === 1) {
    return (
      <div style={{ minHeight: "100vh", position: "relative", zIndex: 1 }}>
        <style>{css}</style>
        <Nav />
        <div style={{
          maxWidth: 680, margin: "0 auto", padding: "48px 32px 80px",
          animation: "fadeUp 0.6s cubic-bezier(0.16,1,0.3,1) both",
        }}>
          <div style={{ marginBottom: 36 }}>
            <h1 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 32, fontWeight: 700, marginBottom: 8,
              color: "var(--charcoal)",
            }}>Evaluate Your Offer</h1>
            <p style={{ color: "var(--text-secondary)", fontSize: 15 }}>
              All values in USD. Everything runs in your browser, nothing is sent anywhere.
            </p>
          </div>

          {/* ── CURRENT SITUATION ── */}
          <div style={sec}>
            <h2 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 22, fontWeight: 600, marginBottom: 4, color: "var(--charcoal)",
            }}>Your current situation</h2>
            <p style={{ color: "var(--text-muted)", fontSize: 13, marginBottom: 24 }}>Where you live and work now</p>

            <div style={{ display: "flex", gap: 8, marginBottom: 20 }}>
              <ChoicePill selected={!isCustom} onClick={() => set("useCustomOrigin", false)} visual="\u{1F4CD}">
                Pick a City
              </ChoicePill>
              <ChoicePill selected={isCustom} onClick={() => set("useCustomOrigin", true)} visual="\u{270F}\u{FE0F}">
                My City Isn't Listed
              </ChoicePill>
            </div>

            {!isCustom ? (
              <div style={{ marginBottom: 16 }}>
                <label style={lbl}>Current City</label>
                <select value={formData.currentCity} onChange={e => set("currentCity", e.target.value)} style={inp}>
                  <option value="">Select your city...</option>
                  {originCities.map(c => <option key={c} value={c}>{CITIES[c].emoji} {c}</option>)}
                </select>
                {selectedOrigin && (
                  <div style={{
                    marginTop: 10, padding: "10px 16px",
                    background: "rgba(196,105,74,0.06)", borderRadius: 10,
                    fontSize: 13, color: "var(--terracotta)",
                    animation: "scaleIn 0.3s cubic-bezier(0.16,1,0.3,1)",
                    display: "flex", alignItems: "center", gap: 8,
                  }}>
                    <span style={{ fontSize: 20 }}>{selectedOrigin.emoji}</span>
                    <span>{selectedOrigin.vibe} &middot; {fmt(selectedOrigin.taxRate * 100 + selectedOrigin.socialContrib * 100, 0)}% effective tax</span>
                  </div>
                )}
              </div>
            ) : (
              <>
                <div style={{ marginBottom: 16 }}>
                  <label style={lbl}>City Name (for your reference)</label>
                  <input type="text" placeholder="e.g. Dhaka, Bangladesh" value={formData.customOrigin.name} onChange={e => setCustom("name", e.target.value)} style={inp} />
                </div>
                <div style={{ marginBottom: 16 }}>
                  <label style={lbl}>Total Income Tax + Social Contributions (%)</label>
                  <input type="number" placeholder="e.g. 25" value={formData.customOrigin.taxRate} onChange={e => setCustom("taxRate", e.target.value)} style={inp} />
                </div>
                <div style={{ padding: "20px", background: "var(--input-bg)", borderRadius: 14, marginBottom: 16 }}>
                  <p style={{ fontSize: 13, fontWeight: 600, color: "var(--terracotta)", marginBottom: 14 }}>Monthly Living Costs (USD)</p>
                  <p style={{ fontSize: 12, color: "var(--text-muted)", marginBottom: 16 }}>
                    Not sure? Use <a href="https://www.numbeo.com/cost-of-living/" target="_blank" rel="noopener noreferrer" style={{ color: "var(--terracotta)" }}>Numbeo</a> to look up your city.
                  </p>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                    {[
                      { key: "rent", label: "Rent (1BR)", ph: "e.g. 800" },
                      { key: "groceries", label: "Groceries", ph: "e.g. 300" },
                      { key: "transport", label: "Transport", ph: "e.g. 100" },
                      { key: "utilities", label: "Utilities", ph: "e.g. 80" },
                      { key: "dining", label: "Dining Out", ph: "e.g. 150" },
                      { key: "internet", label: "Internet & Phone", ph: "e.g. 40" },
                      { key: "school", label: "School (per child/mo)", ph: "0 if none" },
                      { key: "health", label: "Health Insurance", ph: "0 if free" },
                    ].map(f => (
                      <div key={f.key}>
                        <label style={{ ...lbl, fontSize: 11 }}>{f.label}</label>
                        <input type="number" placeholder={f.ph} value={formData.customOrigin[f.key]} onChange={e => setCustom(f.key, e.target.value)} style={{ ...inp, padding: "10px 12px", fontSize: 14 }} />
                      </div>
                    ))}
                  </div>
                </div>
              </>
            )}

            <div style={{ marginBottom: 16 }}>
              <label style={lbl}>Monthly Gross Salary (USD)</label>
              <input type="number" placeholder="e.g. 5000" value={formData.currentSalary} onChange={e => set("currentSalary", e.target.value)} style={inp} />
              {!isCustom && <p style={{ fontSize: 11, color: "var(--text-muted)", marginTop: 4 }}>Convert your local salary to USD. Google "[amount] [currency] to USD".</p>}
            </div>

            <div style={{ marginBottom: 16 }}>
              <label style={lbl}>Family Size</label>
              <div style={{ display: "flex", gap: 8 }}>
                {["single", "couple", "family"].map(opt => (
                  <ChoicePill key={opt} selected={formData.familySize === opt} onClick={() => set("familySize", opt)}
                    visual={FAMILY_VISUALS[opt].emoji}
                  >
                    {formData.familySize === opt ? FAMILY_VISUALS[opt].label : opt.charAt(0).toUpperCase() + opt.slice(1)}
                  </ChoicePill>
                ))}
              </div>
            </div>

            {formData.familySize === "family" && (
              <div style={{ animation: "scaleIn 0.3s cubic-bezier(0.16,1,0.3,1)" }}>
                <label style={lbl}>Number of School-Age Children</label>
                <select value={formData.kids} onChange={e => set("kids", e.target.value)} style={inp}>
                  {[0, 1, 2, 3, 4].map(n => <option key={n} value={n}>{n}</option>)}
                </select>
              </div>
            )}
          </div>

          {/* ── THE OFFER ── */}
          <div style={sec}>
            <h2 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 22, fontWeight: 600, marginBottom: 4, color: "var(--charcoal)",
            }}>The job offer</h2>
            <p style={{ color: "var(--text-muted)", fontSize: 13, marginBottom: 24 }}>Enter the package details from your offer letter (all in USD)</p>

            <div style={{ marginBottom: 16 }}>
              <label style={lbl}>Destination City</label>
              <select value={formData.offerCity} onChange={e => set("offerCity", e.target.value)} style={inp}>
                {destCities.map(c => <option key={c} value={c}>{CITIES[c].emoji} {c}</option>)}
              </select>
              {selectedDest && (
                <div style={{
                  marginTop: 10, padding: "10px 16px",
                  background: "rgba(107,127,107,0.08)", borderRadius: 10,
                  fontSize: 13, color: "var(--sage)",
                  animation: "scaleIn 0.3s cubic-bezier(0.16,1,0.3,1)",
                  display: "flex", alignItems: "center", gap: 8,
                }}>
                  <span style={{ fontSize: 20 }}>{selectedDest.emoji}</span>
                  <span>{selectedDest.vibe} &middot; {fmt(selectedDest.taxRate * 100 + selectedDest.socialContrib * 100, 0)}% tax</span>
                </div>
              )}
            </div>
            <div style={{ marginBottom: 16 }}>
              <label style={lbl}>Monthly Basic Salary (USD)</label>
              <input type="number" placeholder="e.g. 4000" value={formData.offerBasic} onChange={e => set("offerBasic", e.target.value)} style={inp} />
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 16 }}>
              <div>
                <label style={lbl}>Housing Allowance (USD/mo)</label>
                <input type="number" placeholder="0 if none" value={formData.housingAllowance} onChange={e => set("housingAllowance", e.target.value)} style={inp} />
              </div>
              <div>
                <label style={lbl}>Transport Allowance (USD/mo)</label>
                <input type="number" placeholder="0 if none" value={formData.transportAllowance} onChange={e => set("transportAllowance", e.target.value)} style={inp} />
              </div>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 16 }}>
              <div>
                <label style={lbl}>Annual Flight Tickets</label>
                <select value={formData.flightsPerYear} onChange={e => set("flightsPerYear", e.target.value)} style={inp}>
                  {[0, 1, 2, 3, 4, 5, 6].map(n => <option key={n} value={n}>{n} ticket{n !== 1 ? 's' : ''}</option>)}
                </select>
              </div>
              <div>
                <label style={lbl}>School Allowance (USD/yr)</label>
                <input type="number" placeholder="0 if none" value={formData.schoolAllowance} onChange={e => set("schoolAllowance", e.target.value)} style={inp} />
              </div>
            </div>
            <div>
              <label style={lbl}>Health Insurance</label>
              <div style={{ display: "flex", gap: 8 }}>
                <ChoicePill selected={formData.insuranceCovered} onClick={() => set("insuranceCovered", true)} visual="\u{2705}">
                  Covered by employer
                </ChoicePill>
                <ChoicePill selected={!formData.insuranceCovered} onClick={() => set("insuranceCovered", false)} visual="\u{1F4B8}">
                  I pay myself
                </ChoicePill>
              </div>
            </div>
          </div>

          <button onClick={calculate} disabled={!canCalc} style={{
            width: "100%",
            background: canCalc ? "var(--charcoal)" : "var(--border)",
            color: canCalc ? "var(--cream)" : "var(--text-muted)",
            fontWeight: 600, fontSize: 16, border: "none",
            padding: "18px", borderRadius: 100, cursor: canCalc ? "pointer" : "not-allowed",
            fontFamily: "'DM Sans', sans-serif",
            transition: "all 0.3s ease",
            boxShadow: canCalc ? "var(--shadow-md)" : "none",
          }}>
            See My Verdict
          </button>
        </div>
        <Footer />
      </div>
    );
  }

  // ═══ RESULTS (step 2) ═══
  if (step === 2 && results) {
    const r = results;
    const pos = r.pctDiff > 0;
    const vc = pos ? "var(--sage)" : "var(--terracotta)";

    const expenseItems = [
      { label: "Rent", cur: r.curExp.rent, off: r.offExp.rent },
      { label: "Groceries", cur: r.curExp.groceries, off: r.offExp.groceries },
      { label: "Transport", cur: r.curExp.transport, off: r.offExp.transport },
      { label: "Utilities", cur: r.curExp.utilities, off: r.offExp.utilities },
      { label: "Dining", cur: r.curExp.dining, off: r.offExp.dining },
      { label: "Internet", cur: r.curExp.internet, off: r.offExp.internet },
      { label: "School", cur: r.curExp.school, off: r.offExp.school },
      { label: "Health", cur: r.curExp.health, off: r.offExp.health },
    ].filter(e => e.cur > 0 || e.off > 0);

    const maxExp = Math.max(...expenseItems.map(e => Math.max(e.cur, e.off)), 1);

    return (
      <div ref={resultsRef} style={{ minHeight: "100vh", position: "relative", zIndex: 1 }}>
        <style>{css}</style>
        <Nav />
        <div style={{ maxWidth: 720, margin: "0 auto", padding: "48px 32px 80px" }}>

          {/* VERDICT HERO */}
          <div style={{
            ...sec, textAlign: "center",
            animation: "fadeUp 0.6s cubic-bezier(0.16,1,0.3,1) both",
            background: pos ? "rgba(107,127,107,0.06)" : "rgba(196,105,74,0.06)",
            borderColor: pos ? "rgba(107,127,107,0.2)" : "rgba(196,105,74,0.2)",
          }}>
            <div style={{ fontSize: 48, marginBottom: 12, animation: "scaleIn 0.5s cubic-bezier(0.16,1,0.3,1) 0.2s both" }}>
              {pos ? "\u{2705}" : "\u{26A0}\u{FE0F}"}
            </div>
            <h1 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(28px, 5vw, 44px)", fontWeight: 700,
              color: "var(--charcoal)", marginBottom: 12,
              animation: "countUp 0.6s ease-out 0.3s both",
            }}>
              {pos ? "You'd be" : "You'd be"}{" "}
              <span style={{ color: vc }}>{fmt(Math.abs(r.pctDiff), 0)}% {pos ? "better" : "worse"} off</span>
            </h1>
            <p style={{ color: "var(--text-secondary)", fontSize: 16, lineHeight: 1.6 }}>
              Moving from {r.currentCity} to {r.offerCity}
            </p>
          </div>

          {/* TAKE-HOME */}
          <div style={{ ...sec, animation: "fadeUp 0.6s ease-out 0.1s both" }}>
            <h3 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 18, fontWeight: 600, marginBottom: 20, color: "var(--charcoal)",
            }}>Monthly Take-Home (USD)</h3>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
              <div style={{ background: "var(--input-bg)", borderRadius: 14, padding: 24, textAlign: "center" }}>
                <div style={{ fontSize: 12, color: "var(--text-muted)", marginBottom: 8 }}>{r.currentCity}</div>
                <div style={{ fontSize: 32, fontWeight: 700, color: "var(--charcoal)" }}>${fmt(r.curNetMo)}</div>
                <div style={{ fontSize: 12, color: "var(--text-muted)", marginTop: 4 }}>{fmt(r.curTaxPct, 0)}% tax rate</div>
              </div>
              <div style={{ background: "var(--input-bg)", borderRadius: 14, padding: 24, textAlign: "center", border: `2px solid ${vc}33` }}>
                <div style={{ fontSize: 12, color: "var(--text-muted)", marginBottom: 8 }}>{r.offerCity}</div>
                <div style={{ fontSize: 32, fontWeight: 700, color: vc }}>${fmt(r.offNetMo)}</div>
                <div style={{ fontSize: 12, color: "var(--text-muted)", marginTop: 4 }}>{fmt(r.offTaxPct, 0)}% tax rate</div>
              </div>
            </div>
          </div>

          {/* EXPENSES */}
          <div style={{ ...sec, animation: "fadeUp 0.6s ease-out 0.15s both" }}>
            <h3 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 18, fontWeight: 600, marginBottom: 20, color: "var(--charcoal)",
            }}>Cost of Living Comparison</h3>
            <div style={{ display: "grid", gap: 16 }}>
              {expenseItems.map((item, idx) => {
                const cv = item.cur; const ov = item.off;
                const mx = maxExp;
                return (
                  <div key={idx}>
                    <div style={{ display: "flex", justifyContent: "space-between", fontSize: 13, marginBottom: 4 }}>
                      <span style={{ fontWeight: 500, color: "var(--text-secondary)" }}>{item.label}</span>
                      <span>
                        <span style={{ color: "var(--text-muted)" }}>${fmt(cv)}</span>
                        <span style={{ margin: "0 6px", color: "var(--border)" }}>/</span>
                        <span style={{ color: ov <= cv ? "var(--sage)" : "var(--terracotta)", fontWeight: 600 }}>${fmt(ov)}</span>
                      </span>
                    </div>
                    <div style={{ display: "flex", gap: 4 }}>
                      <div className="bar" style={{ width: `${(cv / mx) * 100}%`, background: "var(--border)" }} />
                    </div>
                    <div style={{ display: "flex", gap: 4, marginTop: 3 }}>
                      <div className="bar" style={{ width: `${(ov / mx) * 100}%`, background: ov <= cv ? "var(--sage)" : "var(--terracotta)" }} />
                    </div>
                  </div>
                );
              })}
            </div>
            <div style={{ borderTop: "1px solid var(--border-light)", marginTop: 20, paddingTop: 16, display: "flex", justifyContent: "space-between" }}>
              <span style={{ fontWeight: 600, color: "var(--charcoal)" }}>Total Monthly Expenses</span>
              <span>
                <span style={{ color: "var(--text-muted)" }}>${fmt(r.curExp.total)}</span>
                <span style={{ margin: "0 8px", color: "var(--border)" }}>/</span>
                <span style={{ color: r.offExp.total <= r.curExp.total ? "var(--sage)" : "var(--terracotta)", fontWeight: 700 }}>${fmt(r.offExp.total)}</span>
              </span>
            </div>
          </div>

          {/* SAVINGS */}
          <div style={{ ...sec, animation: "fadeUp 0.6s ease-out 0.2s both" }}>
            <h3 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 18, fontWeight: 600, marginBottom: 20, color: "var(--charcoal)",
            }}>Monthly Savings (USD)</h3>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
              <div style={{ background: "var(--input-bg)", borderRadius: 14, padding: 24, textAlign: "center" }}>
                <div style={{ fontSize: 12, color: "var(--text-muted)", marginBottom: 8 }}>{r.currentCity}</div>
                <div style={{ fontSize: 32, fontWeight: 700, color: r.curSavings >= 0 ? "var(--charcoal)" : "var(--terracotta)" }}>${fmt(r.curSavings)}</div>
                <div style={{ fontSize: 12, color: "var(--text-muted)", marginTop: 4 }}>${fmt(r.curSavings * 12)}/year</div>
              </div>
              <div style={{ background: "var(--input-bg)", borderRadius: 14, padding: 24, textAlign: "center", border: `2px solid ${vc}33` }}>
                <div style={{ fontSize: 12, color: "var(--text-muted)", marginBottom: 8 }}>{r.offerCity}</div>
                <div style={{ fontSize: 32, fontWeight: 700, color: r.offSavings >= 0 ? "var(--sage)" : "var(--terracotta)" }}>${fmt(r.offSavings)}</div>
                <div style={{ fontSize: 12, color: "var(--text-muted)", marginTop: 4 }}>${fmt(r.offSavings * 12)}/year</div>
              </div>
            </div>
            {/* Projection */}
            <div style={{ marginTop: 20, padding: "20px", background: "var(--input-bg)", borderRadius: 14 }}>
              <div style={{ fontSize: 13, color: "var(--text-muted)", marginBottom: 14 }}>Savings Projection</div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 12, textAlign: "center" }}>
                {[1, 3, 5].map(yr => (
                  <div key={yr}>
                    <div style={{ fontSize: 12, color: "var(--text-muted)" }}>{yr} Year{yr > 1 ? 's' : ''}</div>
                    <div style={{ fontSize: 20, fontWeight: 700, color: "var(--terracotta)", marginTop: 4 }}>
                      ${fmt(r.offSavings * 12 * yr + (r.offerCountry === "UAE" ? calcGratuity(r.offerBasicUSD, yr) : 0))}
                    </div>
                    {r.offerCountry === "UAE" && <div style={{ fontSize: 11, color: "var(--text-muted)", marginTop: 2 }}>incl. gratuity</div>}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* GRATUITY */}
          {r.offerCountry === "UAE" && (
            <div style={{ ...sec, animation: "fadeUp 0.6s ease-out 0.25s both" }}>
              <h3 style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 18, fontWeight: 600, marginBottom: 8, color: "var(--charcoal)",
              }}>End of Service Gratuity (UAE)</h3>
              <p style={{ fontSize: 13, color: "var(--text-muted)", marginBottom: 16 }}>Under UAE law, you receive a lump sum when you leave based on your basic salary and years of service.</p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                <div style={{ background: "var(--input-bg)", borderRadius: 14, padding: 20, textAlign: "center" }}>
                  <div style={{ fontSize: 12, color: "var(--text-muted)" }}>After 3 Years</div>
                  <div style={{ fontSize: 24, fontWeight: 700, color: "var(--gold)", marginTop: 6 }}>${fmt(r.g3)}</div>
                </div>
                <div style={{ background: "var(--input-bg)", borderRadius: 14, padding: 20, textAlign: "center" }}>
                  <div style={{ fontSize: 12, color: "var(--text-muted)" }}>After 5 Years</div>
                  <div style={{ fontSize: 24, fontWeight: 700, color: "var(--gold)", marginTop: 6 }}>${fmt(r.g5)}</div>
                </div>
              </div>
            </div>
          )}

          {/* BENEFITS */}
          <div style={{ ...sec, animation: "fadeUp 0.6s ease-out 0.3s both" }}>
            <h3 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 18, fontWeight: 600, marginBottom: 16, color: "var(--charcoal)",
            }}>Package Benefits</h3>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
              {[
                { l: "Housing", v: r.housingUSD > 0, d: r.housingUSD > 0 ? `$${fmt(r.housingUSD)}/mo` : "Not included" },
                { l: "Transport", v: r.transportUSD > 0, d: r.transportUSD > 0 ? `$${fmt(r.transportUSD)}/mo` : "Not included" },
                { l: "Health Insurance", v: r.insuranceCovered, d: r.insuranceCovered ? "Covered" : "Self-paid" },
                { l: "Annual Flights", v: r.flights > 0, d: r.flights > 0 ? `${r.flights} ticket${r.flights > 1 ? 's' : ''}` : "Not included" },
                { l: "School Allowance", v: r.schoolAllowUSD > 0, d: r.schoolAllowUSD > 0 ? `$${fmt(r.schoolAllowUSD)}/yr` : "Not included" },
                { l: "Income Tax", v: true, d: `${fmt(r.offTaxPct, 1)}%` },
              ].map((item, i) => (
                <div key={i} style={{
                  display: "flex", alignItems: "center", gap: 10,
                  padding: "12px 16px", background: "var(--input-bg)", borderRadius: 12,
                }}>
                  <span style={{ fontSize: 16 }}>{item.v ? "\u2705" : "\u274C"}</span>
                  <div>
                    <div style={{ fontSize: 13, fontWeight: 500, color: "var(--charcoal)" }}>{item.l}</div>
                    <div style={{ fontSize: 11, color: "var(--text-muted)" }}>{item.d}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* AFFILIATE */}
          {pos && (
            <div style={{ ...sec, animation: "fadeUp 0.6s ease-out 0.35s both", borderColor: "rgba(107,127,107,0.2)" }}>
              <h3 style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 18, fontWeight: 600, marginBottom: 6, color: "var(--charcoal)",
              }}>Ready to make the move?</h3>
              <p style={{ fontSize: 13, color: "var(--text-muted)", marginBottom: 20 }}>Tools that expats actually use when relocating. We may earn a referral fee at no cost to you.</p>
              <div style={{ display: "grid", gap: 12 }}>
                {[
                  { name: "Wise", desc: "Transfer money internationally at the real exchange rate. Save up to 8x vs banks.", tag: "Money Transfer", url: "https://wise.com" },
                  { name: "Remitly", desc: "Fast, secure international money transfers with great exchange rates.", tag: "Money Transfer", url: "https://remitly.com" },
                  { name: "SafetyWing", desc: "Health insurance designed for remote workers and expats. Starts at $42/month.", tag: "Insurance", url: "https://safetywing.com" },
                ].map((a, i) => (
                  <div key={i} onClick={() => window.open(a.url, '_blank')} style={{
                    background: "var(--card)", border: "1px solid var(--border-light)",
                    borderRadius: 14, padding: 20, cursor: "pointer",
                    transition: "all 0.25s ease",
                  }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = "var(--sage)"; e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "var(--shadow-md)"; }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--border-light)"; e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}
                  >
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <div>
                        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
                          <span style={{ fontSize: 16, fontWeight: 600, color: "var(--charcoal)" }}>{a.name}</span>
                          <span style={{ fontSize: 10, padding: "3px 10px", borderRadius: 100, background: "rgba(107,127,107,0.1)", color: "var(--sage)", fontWeight: 600 }}>{a.tag}</span>
                        </div>
                        <div style={{ fontSize: 13, color: "var(--text-muted)" }}>{a.desc}</div>
                      </div>
                      <span style={{ fontSize: 18, color: "var(--text-muted)" }}>&rarr;</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ACTIONS */}
          <div style={{ display: "flex", gap: 12, marginTop: 20 }}>
            <button onClick={() => setStep(1)} style={{
              flex: 1, background: "transparent", border: "1px solid var(--border)",
              color: "var(--text-secondary)", padding: "14px 28px", borderRadius: 100,
              cursor: "pointer", fontSize: 14, fontFamily: "'DM Sans', sans-serif",
              transition: "all 0.2s ease",
            }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = "var(--terracotta)"; e.currentTarget.style.color = "var(--terracotta)"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.color = "var(--text-secondary)"; }}
            >
              Change Inputs
            </button>
            <button onClick={() => {
              setFormData({
                currentCity: "", useCustomOrigin: false,
                customOrigin: { name: "", taxRate: "", rent: "", groceries: "", transport: "", utilities: "", dining: "", internet: "", school: "", health: "" },
                currentSalary: "",
                offerCity: "Dubai, UAE",
                offerBasic: "",
                housingAllowance: "", transportAllowance: "",
                flightsPerYear: "0", schoolAllowance: "",
                insuranceCovered: true,
                familySize: "single", kids: "0",
              });
              setResults(null);
              setStep(0);
            }} style={{
              flex: 1, background: "transparent", border: "1px solid var(--border)",
              color: "var(--text-secondary)", padding: "14px 28px", borderRadius: 100,
              cursor: "pointer", fontSize: 14, fontFamily: "'DM Sans', sans-serif",
              transition: "all 0.2s ease",
            }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = "var(--terracotta)"; e.currentTarget.style.color = "var(--terracotta)"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.color = "var(--text-secondary)"; }}
            >
              Start Over
            </button>
          </div>

          <div style={{ marginTop: 40, padding: 24, background: "var(--card)", borderRadius: 14, border: "1px solid var(--border-light)" }}>
            <p style={{ fontSize: 11, color: "var(--text-muted)", lineHeight: 1.7 }}>
              <strong>Disclaimer:</strong> This tool provides approximate estimates for informational purposes only. Cost of living data is based on publicly available sources (Numbeo, DMCC, PropertyFinder) and may not reflect your specific situation. Tax calculations are simplified. This is not financial, tax, or legal advice. Always consult a qualified professional before making relocation decisions.
            </p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
  return null;
}

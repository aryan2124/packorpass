import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import MagazineStack from "@/components/MagazineStack";
import HomeClient from "@/components/HomeClient";

const BLOG_POSTS = [
  {
    slug: "is-20000-aed-good-salary-dubai",
    title: "Is AED 20,000 a Good Salary in Dubai?",
    desc: "The real math behind what 20K AED gets you monthly. Rent, groceries, savings, and whether it's enough for your situation.",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80",
    color: "#C4694A",
  },
  {
    slug: "dubai-vs-london-salary-comparison",
    title: "Dubai vs London: Real Salary Comparison 2026",
    desc: "Side-by-side breakdown of take-home pay, cost of living, and quality of life in both cities.",
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&q=80",
    color: "#6B7F6B",
  },
  {
    slug: "dubai-vs-mumbai-salary-comparison",
    title: "Dubai vs Mumbai: Should You Take That Offer?",
    desc: "What a Dubai salary package actually means compared to your Mumbai income after tax and living costs.",
    image: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=800&q=80",
    color: "#B8954A",
  },
  {
    slug: "cheapest-way-transfer-money-dubai",
    title: "Cheapest Way to Transfer Money to Dubai",
    desc: "We compared bank wires, Wise, Remitly, and Western Union. Here is what actually saves you the most.",
    image: "https://images.unsplash.com/photo-1580519542036-c47de6196ba5?w=800&q=80",
    color: "#7A6B8A",
  },
  {
    slug: "hidden-costs-moving-dubai",
    title: "The Hidden Costs of Moving to Dubai Nobody Tells You",
    desc: "Security deposits, DEWA, Emirates ID, medical tests. The expenses that catch every new expat off guard.",
    image: "https://images.unsplash.com/photo-1582672060674-bc2bd808a8b5?w=800&q=80",
    color: "#C4694A",
  },
];

export default function Home() {
  return (
    <div style={{ minHeight: "100vh", position: "relative", zIndex: 1 }}>
      <Nav />
      <HomeClient posts={BLOG_POSTS} />
      <Footer />
    </div>
  );
}

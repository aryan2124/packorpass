import Calculator from "@/components/Calculator";

export const metadata = {
  title: "Free Salary & Relocation Offer Calculator",
  description: "Compare your real take-home pay across 16+ cities. Enter your current salary and job offer to see a full breakdown of taxes, cost of living, savings, and benefits.",
  openGraph: {
    title: "Free Salary & Relocation Offer Calculator | Pack or Pass",
    description: "Compare your real take-home pay across 16+ cities. The full picture in 60 seconds.",
  },
};

export default function CalculatorPage() {
  return <Calculator startAtForm={true} />;
}

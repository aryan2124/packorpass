import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://packorpass.com"),
  title: {
    default: "Pack or Pass \u2014 Is That Job Offer Actually Worth It?",
    template: "%s | Pack or Pass",
  },
  description: "Free relocation offer evaluator. Compare your real purchasing power across 16+ cities. Tax savings, cost of living, benefits, gratuity \u2014 the full picture in 60 seconds.",
  keywords: ["salary calculator", "relocation offer", "cost of living comparison", "dubai salary", "expat calculator", "should I move abroad", "job offer evaluator"],
  openGraph: {
    title: "Pack or Pass \u2014 Is That Job Offer Actually Worth It?",
    description: "Free relocation offer evaluator. Compare your real purchasing power across 16+ cities.",
    url: "https://packorpass.com",
    siteName: "Pack or Pass",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pack or Pass \u2014 Is That Job Offer Actually Worth It?",
    description: "Free relocation offer evaluator. Compare your real purchasing power across 16+ cities.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,500&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,600;9..40,700&family=Space+Mono:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  );
}

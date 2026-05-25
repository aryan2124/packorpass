export default function sitemap() {
  const base = "https://packorpass.com";
  const posts = [
    "is-20000-aed-good-salary-dubai",
    "dubai-vs-london-salary-comparison",
    "dubai-vs-mumbai-salary-comparison",
    "cheapest-way-transfer-money-dubai",
    "hidden-costs-moving-dubai",
  ];

  return [
    { url: base, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${base}/calculator`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/blog`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    ...posts.map(slug => ({
      url: `${base}/blog/${slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    })),
  ];
}

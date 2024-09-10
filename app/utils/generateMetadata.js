import { fetchData } from "@/app/utils/fetchData"

export const generateMetadata = async (slug) => {
  const fetchMetadata = await fetchData();
  const metadataRow = fetchMetadata.find((row) => row.slug === slug);

  const { page, meta_description } = metadataRow || {}

  return {
    title: page || "Symphonie Sophie | Aroma Massage & Beratung Berlin",
    description: meta_description || "Studio Symphonie Sophie bietet Aroma Massagen & Beratung an, sowie Beratung zum Einsatz von ätherischen Ölen in Berlin-Neukölln.",
    openGraph: {
      title: page || "Symphonie Sophie | Aroma Massage & Beratung Berlin",
      description: meta_description || "Studio Symphonie Sophie bietet Aroma Massagen & Beratung an, sowie Beratung zum Einsatz von ätherischen Ölen in Berlin-Neukölln.",
      url: `https://symphonie-sophie.com${slug}`,
      images: [
        {
          url: "/images/symphonie-sophie-logo-lg_peach.png",
          width: 800,
          height: 600,
          alt: "Symphonie Sophie Logo",
        },
      ],
    },
  }
}

import { fetchData } from "@/app/utils/fetchData"

const generateMetadata = async (param) => {
  const fetchMetadata = await fetchData();
  const getMetadataRow = fetchMetadata.find((row) => row.slug === param);

  const { page, meta_description } = getMetadataRow || {};

  return {
    title: page || "Symphonie Sophie | Aroma Massage & Beratung Berlin",
    description: meta_description || "Studio Symphonie Sophie bietet Aroma Massagen & Beratung an, sowie Beratung zum Einsatz von ätherischen Ölen in Berlin-Neukölln.",
    openGraph: {
      title: page || "Symphonie Sophie | Aroma Massage & Beratung Berlin",
      description: meta_description || "Studio Symphonie Sophie bietet Aroma Massagen & Beratung an, sowie Beratung zum Einsatz von ätherischen Ölen in Berlin-Neukölln.",
      url: `https://symphonie-sophie.de${param}`,
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

export { generateMetadata }

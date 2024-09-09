import { fetchData } from "@/app/utils/fetchData";
import { generateMetadata } from "@/app/utils/generateMetadata"
import BackgroundImage from "../components/BackgroundImage";


export const metadata = async (context) => {
  const slug = context?.params?.slug || "/aetherische-oele"
  return generateMetadata(slug)
}

const AetherischeOele = async (context) => {
  const fetchContent = await fetchData();
  const slug = context?.params?.slug || "/aetherische-oele";
  const content = fetchContent.find((row) => row.slug === slug);
  const { header_img } = content || {};
  return (
    <>
      <BackgroundImage imgUrl={header_img} />
      <h1>BG Image</h1>
    </>
  )
};

export default AetherischeOele;

import { fetchData } from "@/app/utils/fetchData";
import { generateMetadata } from "@/app/utils/generateMetadata"
import BackgroundImage from "../components/BackgroundImage"


export const metadata = async (context) => {
  const slug = context?.params?.slug || "/massagen-und-behandlungen"
  return generateMetadata(slug)
}

const Massagen = async (context) => {
  const fetchContent = await fetchData();
  const slug = context?.params?.slug || "/massagen-und-behandlungen";
  const content = fetchContent.find((row) => row.slug === slug);
  const { header_img } = content || {};

  return (
  <>
    <BackgroundImage bgImgUrl={header_img} />
      <h1>BG Image</h1>
    </>
  )
};

export default Massagen;

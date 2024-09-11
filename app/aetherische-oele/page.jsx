import { fetchData } from "@/app/utils/fetchData";
import { generateMetadata } from "@/app/utils/generateMetadata"
import BackgroundImgWithText from "../components/BackgroundImages/BackgroundImgWithText";


export const metadata = async ({ params }) => {
  const slug = params?.slug || "/aetherische-oele"
  return generateMetadata(slug)
}

const AetherischeOele = async ({ params }) => {
  const fetchContent = await fetchData();
  const slug = params?.slug || "/aetherische-oele";
  const content = fetchContent.find((row) => row.slug === slug);

  const {
    header_img,
    header_title,
  } = content || {};

  return (
    <header>
      <BackgroundImgWithText
        bgImgUrl={header_img}
        bgHeight="h-[300px]"
        wrapperClassNames="absolute top-1/2 left-1/2 transform -translate-x-2/4 -translate-y-1/2 mt-4"
      >
        <div className="flex justify-center items-center">
          <h1 className="text-ss-h1 text-white">{header_title}</h1>
        </div>
      </BackgroundImgWithText>
    </header>
  )
};

export default AetherischeOele;

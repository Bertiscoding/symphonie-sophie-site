import { fetchData } from "@/app/utils/fetchData";
import { generateMetadata } from "@/app/utils/generateMetadata"
import BackgroundImgWithText from "../components/BackgroundImages/BackgroundImgWithText";
import HighlightSection from "../components/HighlightSection";
import BlogSection from "../components/BlogSection";

export const metadata = async ({ params }) => {
  const slug = params?.slug || "/balance-im-alltag"
  return generateMetadata(slug)
}

const BalanceImAlltag = async ({ params }) => {
  const fetchContent = await fetchData();
  const slug = params?.slug || "/balance-im-alltag";
  const content = fetchContent.find((row) => row.slug === slug);

  const {
    header_img,
    header_title,
    top_section_title,
    top_section_body,
    top_section_img,
    top_section_btnlink,
    blogsection_text
  } = content || {};

  return (
    <>
      <header>
        <BackgroundImgWithText
          bgImgUrl={header_img}
          bgHeight="h-[300px]"
          wrapperClassNames="absolute top-1/2 left-1/2 transform -translate-x-2/4 -translate-y-1/2 mt-4"
        >
          <div className="flex justify-center items-center">
            <h1 className="text-ss-h1 text-white text-center">{header_title}</h1>
          </div>
        </BackgroundImgWithText>
      </header>
      <main>
        { top_section_body && (
          <HighlightSection
            title={top_section_title}
            text={top_section_body}
            img={top_section_img}
            btnLink={top_section_btnlink}
          />
        )}
        { blogsection_text && (
          <BlogSection pageSlug={"/balance-im-alltag"} />
        )}
      </main>
    </>
  )
};

export default BalanceImAlltag;

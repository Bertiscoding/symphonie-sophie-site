import { fetchData } from "@/app/utils/fetchData";
import { generateMetadata } from "@/app/utils/generateMetadata"
import BackgroundImgWithText from "../components/BackgroundImages/BackgroundImgWithText";
import HighlightSection from "../components/HighlightSection";
import ProductCardCollection from "../components/ProductCards/ProductCardCollection";
import PriceCardCollection from "../components/Pricecards/PriceCardCollection";
import BlogSection from "../components/BlogSection";

export const metadata = async ({ params }) => {
  const slug = params?.slug || "/gutscheine"
  return generateMetadata(slug)
}

const Gutscheine = async ({ params }) => {
  const fetchContent = await fetchData();
  const slug = params?.slug || "/gutscheine";
  const content = fetchContent.find((row) => row.slug === slug);

  const {
    header_img,
    header_title,
    top_section_title,
    top_section_body,
    top_section_img,
    top_section_btnlink,
    productcard_count,
    pricecard_count,
    blogsection_text
  } = content || {};

  return (
    <>
      <header>
        <BackgroundImgWithText
          bgImgUrl={header_img}
          bgHeight="h-[300px]"
          wrapperClassNames="absolute top-1/2 left-1/2 transform -translate-x-2/4 -translate-y-1/2 mt-4 w-[inherit] p-4"
        >
          <div className="flex justify-center items-center">
            <h1 className="text-ss-h1-md lg:text-ss-h1 text-white text-center">{header_title}</h1>
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

        { productcard_count && (
          <ProductCardCollection pageSlug={"/gutscheine"} context={content} />
        )}  
        { pricecard_count && (
          <PriceCardCollection pageSlug={"/gutscheine"} context={content} />
        )}  
        { blogsection_text && (
          <BlogSection pageSlug={"/gutscheine"} />
        )}
      </main>
    </>
  )
};

export default Gutscheine;

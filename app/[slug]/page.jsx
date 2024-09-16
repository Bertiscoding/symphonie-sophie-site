import { fetchData } from "@/app/utils/fetchData";
import BackgroundImgWithText from "../components/BackgroundImages/BackgroundImgWithText";
import HighlightSection from "../components/HighlightSection";
import ProductCardCollection from "../components/ProductCards/ProductCardCollection";
import PriceCardCollection from "../components/Pricecards/PriceCardCollection";
import BlogSection from "../components/BlogSection";
import { notFound } from "next/navigation";

export const generateStaticParams = async () => {
  const data = await fetchData();
  const slugs = data.slice(11).map(row => row.slug)
  
  return slugs.map(slug => ({
    slug: slug
  }))
}


const SlugBasedPage = async ({ params }) => {
  const { slug } = params
  const fetchContent = await fetchData();
  const pageData = fetchContent.find(item => (item.slug === `/${slug}`))

  if (!pageData) return notFound()

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
  } = pageData

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
        { (blogsection_text && blogsection_position === "TOP") && (
          <BlogSection pageSlug={slug} />
        )}
        { productcard_count && (
          <ProductCardCollection pageSlug={slug} context={content} />
        )}  
        { pricecard_count && (
          <PriceCardCollection pageSlug={slug} context={content} />
        )}  
        { (blogsection_text && blogsection_position === "BOTTOM") && (
          <BlogSection pageSlug={slug} />
        )}
      </main>
    </>
  )
}

export default SlugBasedPage

import { fetchData } from "@/app/utils/fetchData";
import { generateMetadata } from "@/app/utils/generateMetadata"
import BackgroundImgWithText from "../components/BackgroundImages/BackgroundImgWithText";
import HighlightSection from "../components/HighlightSection";
import Accordion from "../components/Accordion";


export const metadata = async ({ params }) => {
  const slug = params?.slug || "/haeufige-fragen"
  return generateMetadata(slug)
}

const Faq = async ({ params }) => {
  const fetchContent = await fetchData();
  const slug = params?.slug || "/haeufige-fragen";
  const content = fetchContent.find((row) => row.slug === slug);

  const {
    header_img,
    header_title,
    top_section_title,
    top_section_body,
    top_section_img,
    top_section_btnlink,
    pricecard_count,
  } = content || {};

  const faqItems = [];

  for (let i = 1; i <= pricecard_count; i++) {
    faqItems.push({
      title: content[`pricecard_title_${i}`],
      body: content[`pricecard_body_${i}`],
    });
  }

  return (
    <>
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
      <main>
        { top_section_body && (
          <HighlightSection
            title={top_section_title}
            text={top_section_body}
            img={top_section_img}
            btnLink={top_section_btnlink}
          />
        )}
        <div className="w-full md:w-3/4 mx-auto">
          { faqItems.map((faq, index) => {
            <Accordion key={index} id={index} title={faq.title} body={faq.body} />
          })}
        </div>
      </main>
    </>
  )
};

export default Faq;

import { fetchData } from "@/app/utils/fetchData";
import BackgroundImgWithText from "./components/BackgroundImgWithText";
import Image from "next/image.js";
import Button from "./components/Button";
import HighlightSection from "./components/HighlightSection";
import ProductCard from "./components/ProductCard";

const Homepage = async (context) => {
  const fetchContent = await fetchData();
  const slug = context?.params?.slug || "/";
  const content = fetchContent.find((row) => row.slug === slug);
  
  const {
    header_img,
    header_title,
    top_section_title,
    top_section_body,
    top_section_img,
    top_section_btnlink,
    productcard_count,
  } = content || {};

  const productCards = [];

  for (let i = 1; i <= productcard_count; i++) {
    productCards.push({
      title: content[`productcard_title_${i}`],
      body: content[`productcard_body_${i}`],
      btnlink: content[`productcard_btnlink_${i}`],
      img: content[`productcard_img_${i}`],
    });
  }

  return (
    <>
      <header>
        <BackgroundImgWithText
          bgImgUrl={header_img}
          bgHeight="h-[339px]"
          wrapperClassNames="absolute top-1/2 left-1/2 transform -translate-x-2/4 -translate-y-1/2"
        >
          <Image
            src="/images/symphonie-sophie-logo-lg_white.svg"
            alt="Symphonie Sophie Logo"
            width={0}
            height={0}
            className="w-[250px] h-auto"
          />
          <h1 className="text-ss-h1 text-white my-10">{header_title}</h1>
          <Button
            btnLink="/massagen-und-behandlungen"
            btnClassNames=""
            btnText="Alle Behandlungen"
          />
        </BackgroundImgWithText>
      </header>
      <main>
        {top_section_body && (
          <HighlightSection
            title={top_section_title}
            text={top_section_body}
            img={top_section_img}
            btnLink={top_section_btnlink}
          />
        )}
        <div className="bg-ss-seashell p-10">
          <div className="md:container">
          {productcard_count && (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {productCards.map((card, index) => {
                return (
                  <div key={index}>
                  <ProductCard
                    bgImgUrl={card.img}
                    title={card.title}
                    text={card.body}
                    link={card.btnlink}
                  />
                </div>
                )
              })}
            </div>
          )}
          </div>
        </div>
      </main>
    </>
  );
};

export default Homepage;

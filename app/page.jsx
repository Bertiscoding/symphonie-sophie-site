import { fetchData } from "@/app/utils/fetchData";
import BackgroundImgWithText from "./components/BackgroundImages/BackgroundImgWithText";
import Image from "next/image.js";
import Button from "./components/Button";
import HighlightSection from "./components/HighlightSection";
import ProductCardCollection from "./components/ProductCards/ProductCardCollection";

const Homepage = async ({ content }) => {
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

  return (
    <>
      <header>
        <BackgroundImgWithText
          bgImgUrl={header_img}
          bgHeight="h-[400px]"
          wrapperClassNames="absolute top-1/2 left-1/2 transform -translate-x-2/4 -translate-y-1/2 mt-4"
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

        {productcard_count && (
          <ProductCardCollection pageSlug={"/"} context={content} />
        )}
      </main>
    </>
  );
};

export default Homepage;

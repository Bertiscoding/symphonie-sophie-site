import { fetchData } from "./utils/fetchData";
import BackgroundImgWithText from "./components/BackgroundImgWithText";
import Image from "next/image.js";
// import logo from "@/app/assets/images/symphonie-sophie-logo-lg_white.svg"

const Homepage = async (context) => {
  const fetchContent = await fetchData();
  const slug = context?.params?.slug || "/";
  const content = fetchContent.find((row) => row.slug === slug);

  const { header_img, header_title } = content || {};

  return (
    <>
      <BackgroundImgWithText bgImgUrl={header_img}>
        <Image
          src="/images/symphonie-sophie-logo-lg_white.svg"
          alt="Symphonie Sophie Logo"
          width={0}
          height={0}
          className="w-[250px] h-auto"
        />
        <h1 className="text-ss-h1 text-white">{header_title}</h1>
      </BackgroundImgWithText>
    </>
  );
};

export default Homepage;

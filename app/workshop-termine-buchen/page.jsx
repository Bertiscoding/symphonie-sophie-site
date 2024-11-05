import { fetchData } from "@/app/utils/fetchData";
import { generateMetadata } from "@/app/utils/generateMetadata"
import BackgroundImgWithText from "../components/BackgroundImages/BackgroundImgWithText";
import HighlightSection from "../components/HighlightSection";
import AppointmentForm from "../components/Forms/AppointmentForm";


export const metadata = async ({ params }) => {
  
  const slug = params?.slug || "/workshop-termine-buchen"
  return generateMetadata(slug)
}

const TermineWorkshops = async ({ params }) => {
  const fetchContent = await fetchData();
  const slug = params?.slug || "/workshop-termine-buchen";
  const content = fetchContent.find((row) => row.slug === slug);

  const servicesSlug = params?.slug || "/workshops"
  const getServices = fetchContent.find((row) => row.slug === servicesSlug);
  
  const {
    header_img,
    header_title,
    top_section_title,
    top_section_body,
    top_section_img,
    top_section_btnlink,
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
        <div className="bg-ss-seashell">
          <div className="max-w-[800px] px-4 lg:px-10 py-8 lg:py-20 mx-auto">
            <AppointmentForm services={getServices} /> 
          </div>
        </div>
      </main>
    </>
  )
};

export default TermineWorkshops;

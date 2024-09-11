import { fetchData } from "@/app/utils/fetchData";
import { generateMetadata } from "@/app/utils/generateMetadata"
import BackgroundImgWithText from "../components/BackgroundImages/BackgroundImgWithText";
import AppointmentForm from "../components/Forms/AppointmentForm";


export const metadata = async ({ params }) => {
  const slug = params?.slug || "/termine"
  return generateMetadata(slug)
}

const Termine = async ({ params }) => {
  const fetchContent = await fetchData();
  const slug = params?.slug || "/termine";
  const content = fetchContent.find((row) => row.slug === slug);
  
  const {
    header_img,
    header_title,
    top_section_title,
    top_section_body,
    top_section_img,
    top_section_btnlink,
  } = content || {};

  const servicesSlug = params?.slug || "/massagen-und-behandlungen"
  const services = fetchContent.find((row) => row.slug === servicesSlug);

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
        <div className="bg-ss-seashell">
          <div className="max-w-[800px] px-10 py-20 mx-auto">
            <AppointmentForm services={services}/> 
          </div>
        </div>
      </main>
    </>
  )
};

export default Termine;

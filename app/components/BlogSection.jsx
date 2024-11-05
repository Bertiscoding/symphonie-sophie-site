import { fetchData } from "@/app/utils/fetchData";
import BackgroundImgWithText from "./BackgroundImages/BackgroundImgWithText";
import { formatText } from "../utils/formatText";
import Button from "./Button";
import BackgroundImage from "./BackgroundImages/BackgroundImage";

const BlogSection = async (props) => {
  const { pageSlug, context } = props;
  const fetchContent = await fetchData();
  const slug = context?.params?.slug || pageSlug;
  const content = fetchContent.find((row) => row.slug === slug);

  const {
    blogsection_title,
    blogsection_headerImg,
    blogsection_teaser,
    blogsection_text,
    blogsection_btnlink,
    blogsection_bottomImg,
  } = content || {}

  return (
    <>
    { blogsection_headerImg ? (
      <header>
      <BackgroundImgWithText
        bgImgUrl={blogsection_headerImg}
        bgHeight="h-[300px]"
        wrapperClassNames="absolute top-1/2 left-1/2 transform -translate-x-2/4 -translate-y-1/2 mt-4"
      >
        <div className="flex justify-center items-center">
          <h1 className="text-ss-h1 text-white">{blogsection_title}</h1>
        </div>
      </BackgroundImgWithText>
    </header>
    ) : (
      <>
        { blogsection_title && (
          <div className="pt-10">
            <h1 className="text-ss-h1 text-ss-bordeaux text-center">
              {blogsection_title}
            </h1>
          </div>
        )}
      </>
    )}
    <section className="p-4 lg:p-0">
      <div className="w-full md:w-1/2 mx-auto">
        <h4 className="text-ss-p-smbold italic leading-7 my-4 lg:my-10">
          {formatText(blogsection_teaser)}
        </h4>
      </div>
      <div className="md:w-3/5 mx-auto">
        <p className="text-ss-p-reg">{formatText(blogsection_text)}</p>
        <div className="flex justify-center my-10">
          <Button btnLink={blogsection_btnlink} btnText="Mehr erfahren" />
        </div>
      </div>
    </section>
    {blogsection_bottomImg && (
      <div className="py-8 lg:py-20 px-4 lg:px-0 w-screen bg-ss-seashell">
        <div className="md:w-1/2 mx-auto h-[270px] lg:h-[430px]">
          <BackgroundImage bgImgUrl={blogsection_bottomImg} bgClassNames="rounded-lg" />
        </div>
      </div>
    )}
    </>
  )
}
export default BlogSection
